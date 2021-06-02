import React, { useState } from 'react';
import {
    Button, Input, Flex, Text, useToast,
} from '@chakra-ui/react';
import axios from 'axios';

interface UploadFormProps {
    setFilePaths: React.Dispatch<React.SetStateAction<[] | string[]>>
}

const UploadForm: React.FC<UploadFormProps> = ({ setFilePaths }: UploadFormProps) => {
    const [selectedFile, setselectedFile] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const toast = useToast();

    const handleSubmitMultiple = async (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        setLoading(true);

        const data = new FormData();

        if (selectedFile.length === 0) {
            setLoading(false);
            return (
                toast({
                    title: 'Upload Failed.',
                    description: 'Please Select at least one image',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    position: 'top-left',
                })
            );
        }

        Object.values(selectedFile).map((f) => {
            return data.append('files', f);
        });

        data.append('files', selectedFile);

        const res = await axios.post('http://localhost:8080/upload/multiple', data);

        const newFiles = res.data.files.map((f: any) => f.filename);
        setFilePaths((prev) => [...prev, ...newFiles]);

        return setLoading(false);
    };

    return (

        <Flex
            px="10"
            py="10"
            justify="space-around"
        >
            <Text
                as="div"
                fontSize="lg"
                fontWeight="bold"
            >
                <span
                    role="img"
                >
                    🔥
                </span>
                Upload away
            </Text>

            <form>
                <Input
                    name="file"
                    size="lg"
                    multiple
                    type="file"
                    onChange={(e: React.SyntheticEvent<EventTarget>) => setselectedFile(
                        (e.target as HTMLFormElement).files,
                    )}
                />
            </form>

            <Flex align="end">
                <Button
                    type="submit"
                    m="2"
                    isLoading={loading}
                    loadingText="Uploading..."
                    variant="outline"
                    onClick={handleSubmitMultiple}
                >
                    Upload ...
                </Button>
            </Flex>
        </Flex>

    );
};

export default UploadForm;
