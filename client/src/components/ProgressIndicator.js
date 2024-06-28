import React from 'react';

function ProgressIndicator({ status }) {
  return (
    <div>
      {status === 'uploading' && <p>Uploading and processing files...</p>}
      {status === 'complete' && <p>Processing complete!</p>}
      {status === 'error' && <p>An error occurred. Please try again.</p>}
    </div>
  );
}

export default ProgressIndicator;