const express = require('express');
const multer = require('multer');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const app = express();
const upload = multer({ dest: 'uploads/' });



app.post('/api/upload', upload.array('files'), (req, res) => {
  const uploadDir = path.join(__dirname, 'uploads', Date.now().toString());
  fs.mkdirSync(uploadDir, { recursive: true });

  req.files.forEach(file => {
    fs.renameSync(file.path, path.join(uploadDir, file.originalname));
  });

  const pythonProcess = spawn('./venv/bin/python', ['add_knowledge_base.py', '-d', uploadDir]);

  let output = '';
  pythonProcess.stdout.on('data', (data) => {
    output += data.toString();
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Error: ${data}`);
  });

  pythonProcess.on('close', (code) => {
    console.log(`Python script exited with code ${code}`);
    const results = parseOutput(output);
    res.json(results);
  });
});

function parseOutput(output) {
  const cidMatch = output.match(/Use CID `([^`]+)` in your contract/);
  const indexCidMatch = output.match(/index CID `([^`]+)`/);
  
  return {
    cid: cidMatch ? cidMatch[1] : null,
    indexCid: indexCidMatch ? indexCidMatch[1] : null,
  };
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});