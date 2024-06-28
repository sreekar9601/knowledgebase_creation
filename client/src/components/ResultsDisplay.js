import React from 'react';

function ResultsDisplay({ results }) {
  return (
    <div>
      <h2>Results:</h2>
      <p>CID: {results.cid}</p>
      <p>Index CID: {results.indexCid}</p>
    </div>
  );
}

export default ResultsDisplay;