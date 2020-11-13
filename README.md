# JavaScript end-to-end client file upload to Azure Storage Blobs

For a complete tutorial, please use the [Microsoft Documentation tutorial found here](https://docs.microsoft.com/azure/developer/javascript/tutorial/browser-file-upload). 

The sample code is a TypeScript React (create-react-app) framework client with an HTML form for file upload to Azure Storage Blobs. The user selects an image from the file system, then uploads the image to Storage Blobs. 

The programming work is done for you, this tutorial focuses on using the local and remote Azure environments successfully.

The tutorial demonstrates how to load and run the project locally with VSCode. The tutorial includes creating a Storage resource, SAS token and CORS configuration. 

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

1. Set Storage information found at the top of /src/uploadToBlob.ts:

    ```javascript
    const storageAccountName = "";
    const sasToken = "";
    ```

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

## Additional scripts

* Create Azure Storage Blob from JavaScript file: scripts/newStorageService.js
* Set CORS for service using Azure CLI script: scripts/az-storage-cors-add.sh
* Generate SAS Token using Azure CLI script: scripts/az-storage-generate-sas.sh

## Images

The /images folder includes images for upload. 
