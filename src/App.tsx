import React from 'react';

import Navbar from './components/Navbar';
import UploadPage from './pages/uploadPage';

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <UploadPage />
        </>
    );
};

export default App;
