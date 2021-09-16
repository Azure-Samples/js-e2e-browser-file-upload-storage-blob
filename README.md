---
page_type: sample
languages:
- javascript
- typescript
- nodejs
name: "JavaScript end-to-end client file upload to Azure Storage Blobs"
description: "Locally build and deploy client application to an Azure Static Web App with a GitHub action, analyze image with Cognitive Services Computer Vision."
products:
- azure
- azure-storage
- azure-portal
- vs-code
- azure-computer-vision
- azure-app-service-static
---

# JavaScript end-to-end client file upload to Azure Storage Blobs

This sample project is a TypeScript React (create-react-app) framework client app with an HTML form to select a file for upload to Azure Storage Blobs. 

The user:
* selects an image from the file system
* uploads the image to Storage Blobs

* [Read Tutorial](https://docs.microsoft.com/azure/developer/javascript/tutorial/browser-file-upload-azure-storage-blob) - The tutorial demonstrates how to load and run the project locally with VSCode. The tutorial includes creating a Storage resource, SAS token and CORS configuration. 


## Sample application

The React (create-react-app) client app consists of the following elements:

* **React** app hosted on port 3000
* uploadToBlob.ts using **@azure/storage-blob** client library to create Blob container and upload file

## Features

This project framework provides the following features:

* Create Azure Storage resource
* Generate SAS token for Storage resource
* Set Storage resource CORS
* Select and upload file to Azure Storage Blob Container

## Getting Started

1. Clone or download repo. 
1. Create Azure Storage resource - using /scripts/newStorageService.js. This resource name is the `storageAccountName`.
1. Generate SAS Token for Storage resource - using /scripts/az-storage-generte-sas.sh. This value is the `sasToken`.
1. Configure CORS for browser - using /scripts/az-storage-cors-add.sh

    Settings for CORS:
    * Allowed origins: `*`
    * Allowed methods: `DELETE, GET, HEAD, MERGE, POST, OPTIONS, and PUT`
    * Allowed headers: `*`
    * Exposed headers: `*`
    * Max age: `86400`
1. Install dependencies: 

    ```javascript
    npm install
    ```

    To run the React app, you need the following Azure SDK client npm packages:
    * @azure/ms-rest-nodeauth
    * @azure/storage-blob

    A third Azure package, @azure/arm-storage, is listed in the `package.json` strictly for use by the `scripts/newStorageService.js` file to create a new Azure Storage resource.

1. Create a file name `.env` at the root of the project.
1. Add two required variables with their storage values:

    ```text
    REACT_APP_STORAGESASTOKEN=
    REACT_APP_STORAGERESOURCENAME=
    ```

    React builds the static files with these variables.

1. If the token begins with a question mark, remove the `?`. The code file provides the `?` for you so you don't need it in the token.

1. Start project: 

    ```javascript
    npm start
    ```

1. View project in browser, `http://localhost:3000`.

1. Select image then select `Upload!`. 

    Page displays images in container. 

## Prerequisites

- Git, if cloning 
- Node.js and NPM
- Web browser
- Azure subscription to create resource on

## Installation

1. Install the sample's dependencies:

   ```javascript
    npm install
    ```

1. Run the command to run the web app.

    ```javascript
    npm start
    ```

1. Open a web browser and use the following url to view the client app on your local computer.

    ```url
    http://localhost:3000/
    ```

## Troubleshooting

If you received an error or your file doesn't upload to the container, check the following:

* Recreate your SAS token, making sure that your token is created at the Storage resource level and not the container level. Copy the new token into the code at the correct location.
* Check that the token string you copied into the code doesn't contain the `?` (question mark) at the beginning of the string.
* Verify your CORS setting for your Storage resource.

## Additional scripts

* Create Azure Storage Blob from JavaScript file: scripts/newStorageService.js
* Set CORS for service using Azure CLI script: scripts/az-storage-cors-add.sh
* Generate SAS Token using Azure CLI script: scripts/az-storage-generate-sas.sh

## Images

The /images folder includes images for upload. 
