import Path from 'path';
import uploadFileToBlob, { isStorageConfigured } from './azure-storage-blob';
import React, { Component, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { CardGroup, Card, Form, Accordion, Image } from "react-bootstrap";
import review_video from "./images/practice-video1.png";
import connected_data1 from "./images/connected-sun-data1.png";
import connected_data2 from "./images/connected-sun-image2.png";
import foundation_pavel from "./images/foundation-pavel.png";

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
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload a new session for review!</Form.Label>
              <Form.Control type="file" />
        </Form.Group>
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

  function CardDisplay() {
    return (
      <CardGroup>
        <Card>
        <Card.Img variant="top" src={review_video} />
        <Card.Body>
          <Card.Title>Session 1 </Card.Title>
        </Card.Body>
        <Card.Footer>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Find Out More</Accordion.Header>
            <Accordion.Body>
              <ul>
              <li> Session Date: 20th Oct, 2021</li>
              <li> Session Duration: 15 mins</li>
              <li> Session Health Benefits: Spine extender, deltoid, Glute muscles, Quadricepts, triceps.</li>
              <Image src={connected_data1} rounded fluid/>
                <Image src={connected_data2} rounded fluid/>
             </ul>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={foundation_pavel} />
        <Card.Body>
          <Card.Title>Session 2</Card.Title>
        </Card.Body>
        <Card.Footer>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Find Out More</Accordion.Header>
            <Accordion.Body>
            <ul>
              <li> Session Date: 10th Oct, 2021</li>
              <li> Session Duration: 10 mins</li>
              <li> Session Health Benefits: Spine extender, deltoid, Glute muscles, Quadricepts, triceps.</li>
             </ul>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
        </Card.Footer>
      </Card>
      </CardGroup>
    );
  }


    return (
    
      <div >
        <h2>Review My Sessions</h2>
        {storageConfigured && !uploading && DisplayForm()}
        {storageConfigured && uploading && <div>Uploading</div>}
        {storageConfigured && blobList.length > 0 && DisplayImagesFromContainer()}
        {!storageConfigured && <div> <p>Storage is not configured. </p></div>}
        <h3> Here are your past sessions </h3>
        <CardDisplay />
      </div>
    );
  }

  export default Review;