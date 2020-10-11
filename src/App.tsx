import React, { useState }  from 'react';
import uploadFileToBlob from './uploadToBlob';
import Path from 'path';

function App() {

  // all blobs in container
  const [blobList, setBlobList] = useState<string[]>([]);
  
  // current file to upload into container
  const [fileSelected, setFileSelected] = useState(null);
  
  // UI/form management
  const [uploading, setUploading] = useState(false);
  const [inputKey, setInputKey] = useState(Math.random().toString(36));
 
  const onFileChange = event => {

    // capture file into state
    setFileSelected(event.target.files[0]);
  }

  const onFileUpload = async (e) => {
    
    // prepare UI
    setUploading(true);
    
    // *** UPLOAD TO AZURE STORAGE ***
    const blobsInContainer: string[] = await uploadFileToBlob(fileSelected);
    
    // prepare UI for results
    setBlobList(blobsInContainer);
    
    // reset state/form
    setFileSelected(null);
    setUploading(false);
    setInputKey(Math.random().toString(36));
  };
  
  // display file name and image
  const DisplayImagesFromContainer = () => (
    <div>
      <h2>Container items</h2>
      <ul>
        {blobList.map(function (item) {
          return (
            <li key={item}>
              <div>{Path.basename(item)}<br />
                <img src={item} height="200"></img>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
  
  return (
    <div>
      <h1>Upload file to Azure Blob Storage</h1>
      {!uploading && 
        <div>
          <input type="file" onChange={onFileChange} key={inputKey || ''}/>
          <button onClick={onFileUpload}>Upload!</button>
        </div>
      }
      {uploading && <div>Uploading</div>}
      <hr />
      {blobList.length > 0 && DisplayImagesFromContainer()} 
    </div>
  );
}

export default App;