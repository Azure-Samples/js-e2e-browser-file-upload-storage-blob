// WARNING - THIS IS SAMPLE CODE - NOT MEANT FOR PRODUCTION USE
import { BlobServiceClient /* , BlockBlobClient */ } from '@azure/storage-blob';

// DON'T DO THIS IN PRODUCTION CODE
const containerName = `container${new Date().getTime()}`;
const storageAccountName = '';
const sasToken = '';

export const isStorageConfigured = () => {
  return (!storageAccountName || !sasToken) ? false : true;
}

// return list of blobs in container to display
const getBlobsInContainer = async (containerClient) => {
  const returnedBlobUrls: string[] = [];

  // get list of blobs in container
  // eslint-disable-next-line
  for await (const blob of containerClient.listBlobsFlat()) {
    // if image is public, just construct URL
    returnedBlobUrls.push(
      `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
    );
  }

  return returnedBlobUrls;
};
const createBlobInContainer = async (containerClient, file) => {
  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(file.name);

  // set mimetype as determined from browser with file upload control
  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  // upload file
  await blobClient.uploadBrowserData(file, options);
};
const uploadFileToBlob = async (file: File | null): Promise<string[]> => {
  if (!file) return [];

  // get BlobService
  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/${sasToken}`
  );

  // get Container - full public read access
  const containerClient = blobService.getContainerClient(containerName);
  await containerClient.createIfNotExists({
    access: 'container',
  });

  // upload file
  await createBlobInContainer(containerClient, file);

  // get list of blobs in container
  return getBlobsInContainer(containerClient);
};

export default uploadFileToBlob;
