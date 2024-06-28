# RAG File Uploader

RAG File Uploader is a web application designed to simplify the process of uploading files to Galadriel's on-chain Retrieval-Augmented Generation (RAG) system. Users can easily upload files, process them, and obtain both the CID (Content Identifier) and Index CID, streamlining the addition of knowledge bases to the Galadriel network.


## Prerequisites

- Node.js (using v18.0.0)
- Python (3.10.12)


## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/rag-file-uploader.git
    cd rag-file-uploader
    ```

2. Set up the Python virtual environment and install requirements:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use venv\Scripts\activate
    pip install -r requirements.txt
    ```

3. Install Node.js dependencies:
    ```bash
    npm install
    cd client
    npm install
    cd ..
    ```

4. Create a `.env` file in the root directory with the following content:
    ```env
    PINATA_API_KEY=your_pinata_api_key
    RPC_URL="https://devnet.galadriel.com"
    CHAIN_ID=696969
    PRIVATE_KEY=your_private_key
    ORACLE_ADDRESS=your_oracle_address
    ```
    Replace `your_pinata_api_key`, `your_private_key`, and `your_oracle_address` with your actual values.

5. Create an `uploads` folder in the root directory:
    ```bash
    mkdir uploads
    ```

## Running the Application

1. Ensure you're in the root directory and the Python virtual environment is activated.

2. Start the server:
    ```bash
    node server.js
    ```
    The server will run on port 3001.

3. In a new terminal, start the client:
    ```bash
    cd client
    npm start
    ```
    The client will run on port 3000.

4. Open your browser and navigate to `http://localhost:3000` to use the application.

## Usage

1. Drag and drop files into the designated area or click to select files.
2. The application will process the files and display the progress.
3. Once complete, the CID and Index CID will be displayed.

## Important Notes

- Ensure that your `.env` file is properly configured with the correct API keys and addresses.
- The `uploads` folder is used for temporary storage of files during processing. Ensure it exists in the root directory.
- The server must run on port 3001 for the frontend to communicate correctly.
- Always activate the Python virtual environment before running the server or installing new Python packages.

## Troubleshooting

- If you encounter any issues with Python packages, ensure you're using the correct virtual environment.
- For Node.js related issues, try deleting the `node_modules` folder and running `npm install` again in both the root and client directories.


