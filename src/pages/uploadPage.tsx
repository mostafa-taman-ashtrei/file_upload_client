import React, { useState } from 'react';
import ImagePreview from '../components/ImagePreview';
import UploadForm from '../components/UploadForm';

const UploadPage: React.FC = () => {
    const [filePaths, setFilePaths] = useState<string[]>([]);

    return (
        <>
            <UploadForm setFilePaths={setFilePaths} />
            { filePaths.length > 0
                ? <ImagePreview filePaths={filePaths} />
                : null}
        </>
    );
};

export default UploadPage;
