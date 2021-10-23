import Path from 'path';
import uploadFileToBlob, { isStorageConfigured } from './azure-storage-blob';
import React, { Component, useState } from 'react';
import Carousel from './Carousel.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const storageConfigured = isStorageConfigured();

function Review() {
// all blobs in container
  const [blobList, setBlobList] = useState('');

  // current file to upload into container
  const [fileSelected, setFileSelected] = useState(null);

  // UI/form management
  const [uploading, setUploading] = useState(false);
  const [inputKey, setInputKey] = useState(Math.random().toString(36));

  const onFileChange = (event) => {
    // capture file into state
    setFileSelected(event.target.files[0]);
  };

  const onFileUpload = async () => {
    // prepare UI
    setUploading(true);

    // *** UPLOAD TO AZURE STORAGE ***
    const blobsInContainer = await uploadFileToBlob(fileSelected);

    // prepare UI for results
    setBlobList(blobsInContainer);

    // reset state/form
    setFileSelected(null);
    setUploading(false);
    setInputKey(Math.random().toString(36));
  };

  // display form
  const DisplayForm = () => (
    <div>
      <input type="file" onChange={onFileChange} key={inputKey || ''} />
      <button type="submit" onClick={onFileUpload}>
        Upload!
          </button>
    </div>
  )

  // display file name and image
  const DisplayImagesFromContainer = () => (
    <div>
      <h2>Container items</h2>
      <ul>
        {blobList.map((item) => {
          return (
            <li key={item}>
              <div>
                {Path.basename(item)}
                <br />
                <img src={item} alt={item} height="200" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );


    return (
    
      <div >
        <h2> Review </h2>
        {storageConfigured && !uploading && DisplayForm()}
        {storageConfigured && uploading && <div>Uploading</div>}
        {storageConfigured && blobList.length > 0 && DisplayImagesFromContainer()}
        {!storageConfigured && <div> <p>Storage is not configured. </p></div>}
        <Carousel />
      </div>
    );
  }

  export default Review;