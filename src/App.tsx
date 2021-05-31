import React from 'react';
import { Box } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import UploadPage from './pages/uploadPage';

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <Box textAlign="center">
                <h1>Upload Something!</h1>
            </Box>
            <UploadPage />
        </>
    );
};

export default App;
