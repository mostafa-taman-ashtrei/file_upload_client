import React, { useState } from 'react';
import {
    Box, Button, Input,
} from '@chakra-ui/react';
import axios from 'axios';

interface UploadFormProps {
    setFilePaths: React.Dispatch<React.SetStateAction<[] | string[]>>
}

const UploadForm: React.FC<UploadFormProps> = ({ setFilePaths }: UploadFormProps) => {
    const [selectedFile, setselectedFile] = useState<string>('');

    const handleSubmitMultiple = async (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();

        const data = new FormData();

        if (selectedFile.length === 0) return alert('No files to upload ....');

        Object.values(selectedFile).map((f) => {
            return data.append('files', f);
        });

        data.append('files', selectedFile);

        const res = await axios.post('http://localhost:8080/upload/multiple', data);
        console.log(res.data);

        const newFiles = res.data.files.map((f: any) => f.filename);
        setFilePaths((prev) => [...prev, ...newFiles]);
        return alert('ok');
    };

    return (
        <>
            <Box textAlign="center">
                <form>
                    <Input
                        width="lg"
                        name="file"
                        size="lg"
                        multiple
                        type="file"
                        onChange={(e: React.SyntheticEvent<EventTarget>) => setselectedFile(
                            (e.target as HTMLFormElement).files,
                        )}
                    />
                    <Button type="submit" onClick={handleSubmitMultiple}>Upload</Button>
                </form>
            </Box>
            <br />
        </>
    );
};

export default UploadForm;
