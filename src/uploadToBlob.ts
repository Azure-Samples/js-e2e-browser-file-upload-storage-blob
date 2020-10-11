import { BlobServiceClient, BlockBlobClient } from "@azure/storage-blob";

// DON'T DO THIS IN PRODUCTION CODE
const containerName = "container" + new Date().getTime();
const storageAccountName = "";
const sasToken = "";

// Change file name to be unique for duplicates
// file name format in Azure`{{GUID}}-originalfilename`
const getBlobName = originalName => {
    const identifier = Math.random().toString().replace(/0\./, ''); // remove "0." from start of string
    return `${identifier}-${originalName}`;
};

// return list of blobs in container to display
const getBlobsInContainer = async (containerClient) => {

    let returnedBlobUrls: string[] = [];

    // get list of blobs in container
    for await (const blob of containerClient.listBlobsFlat()) {

        // create block blob client
        const blockBlobClient = new BlockBlobClient(`BlobEndpoint=https://${storageAccountName}.blob.core.windows.net/;QueueEndpoint=https://${storageAccountName}.queue.core.windows.net/;FileEndpoint=https://${storageAccountName}.file.core.windows.net/;TableEndpoint=https://${storageAccountName}.table.core.windows.net/;SharedAccessSignature=https://${storageAccountName}.blob.core.windows.net/${sasToken}`, containerName, blob.name);

        // if image is public, just construct URL
        returnedBlobUrls.push(`https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`)
    }
    return returnedBlobUrls
}
const createBlobInContainer = async (containerClient, file) => {

    // create blobClient for container
    const blobClient = containerClient.getBlockBlobClient(file.name);

    // set mimetype as determined from browser with file upload control
    const options = { blobHTTPHeaders: { blobContentType: file.type } };

    // upload file
    await blobClient.uploadBrowserData(file, options);
}
const uploadFileToBlob = async (file) => {

    // get BlobService
    const blobService = new BlobServiceClient(`https://${storageAccountName}.blob.core.windows.net/${sasToken}`);
    
    // get Container - full public read access
    const containerClient = blobService.getContainerClient(containerName);
    const createContainerResponse = await containerClient.createIfNotExists({ access: "container" });

    // upload file
    await createBlobInContainer(containerClient, file);
    
    // get list of blobs in container
    return getBlobsInContainer(containerClient);
    
};

export default uploadFileToBlob;