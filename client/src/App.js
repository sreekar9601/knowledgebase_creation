import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ProgressIndicator from './components/ProgressIndicator';
import ResultsDisplay from './components/ResultsDisplay';

function App() {
  const [uploadStatus, setUploadStatus] = useState('idle');
  const [results, setResults] = useState(null);

  const handleFileUpload = async (files) => {
    setUploadStatus('uploading');
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setUploadStatus('complete');
      setResults(data);
    } catch (error) {
      setUploadStatus('error');
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div className="App">
      <h1>Galadriel RAG File Uploader</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      <ProgressIndicator status={uploadStatus} />
      {results && <ResultsDisplay results={results} />}
    </div>
  );
}

export default App;