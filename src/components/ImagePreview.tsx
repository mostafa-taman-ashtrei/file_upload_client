import React from 'react';
import {
    Box, Text, Wrap, WrapItem, Image,
} from '@chakra-ui/react';

interface ImagePreviewProps {
    filePaths: string[];
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ filePaths }: ImagePreviewProps) => {
    return (
        <Box textAlign="center">
            <Text fontSize="xl" mb="5">
                You Uploaded
                {' '}
                {filePaths.length}
                {' '}
                images
            </Text>
            <Wrap px="1rem" spacing={4} justify="center">
                {filePaths.map((f) => (
                    <WrapItem
                        key={f}
                        boxShadow="base"
                        rounded="20px"
                        overflow="hidden"
                        lineHeight="0"
                        _hover={{ boxShadow: 'dark-lg' }}
                    >
                        <Image
                            src={`http://localhost:8080/static/${f}`}
                            boxSize="300px"
                            borderRadius="full"
                            alt=";kdsfj"
                        />
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    );
};

export default ImagePreview;
