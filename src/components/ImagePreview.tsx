import React from 'react';
import {
    Box, Text,
} from '@chakra-ui/react';

interface ImagePreviewProps {
    filePaths: string[];
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ filePaths }: ImagePreviewProps) => {
    console.log(filePaths);
    return (
        <Box textAlign="center">
            <Text>Images you Uploaded</Text>
            {filePaths.map((f) => (<img src={`http://localhost:8080/static/${f}`} alt="uploaded content" />))}

        </Box>
    );
};

export default ImagePreview;
