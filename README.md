# Project Name

The sample code is a TypeScript React (create-react-app) framework client with an HTML form for file upload to Azure Storage Blobs. The user selects an image, then uploads the image to Storage Blobs. The tutorial demonstrates how to load and run the project locally with VSCode was well as how to run the code remotely on an App service. The tutorial includes creating a Storage resource, SAS token and CORS configuration. 

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

1. Set Storage information found at the top of /src/uploadToBlob.ts:

    ```javascript
    const containerName = "container" + new Date().getTime();
    const storageAccountName = "";
    const sasToken = "";
    ```

1. Start project: 

    ```javascript
    npm start
    ```

1. View project in browser, `http://localhost:3000`.

1. Select image from `images` then select `Upload!`. 

    Page displays images in container. 

### Prerequisites

- Git, if cloning 
- Node.js and NPM
- Web browser
- Azure subscription to create resource on

### Installation

- `git clone https://github.com/Azure-Samples/js-e2e-browser-file-upload-storage-blob && cd js-e2e-browser-file-upload-storage-blob`
- `npm install` 

### Quickstart
(Add steps to get up and running quickly)

1. git clone [repository clone url]
2. cd [respository name]
3. ...


## Demo

A demo app is included to show how to use the project.

To run the demo, follow these steps:

(Add steps to start up the demo)

1.
2.
3.

## Resources

(Any additional resources or related projects)

- Link to supporting information
- Link to similar sample
- ...
