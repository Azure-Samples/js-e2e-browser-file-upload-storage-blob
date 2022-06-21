//import DeviceCodeCredential from "@azure/identity";
//import StorageManagementClient from "@azure/arm-storage";
const { DeviceCodeCredential } = require("@azure/identity");
const { StorageManagementClient } = require("@azure/arm-storage");

// DON'T DO THIS IN PRODUCTION CODE
const subscriptionId = "REPLACE-WITH-YOUR-SUBSCRIPTION";
const existingResourceGroup = "REPLACE-WITH-YOUR-RESOURCE-GROUP";
const storageResourceName = "REPLACE-WITH-YOUR-RESOURCE-NAME";

// 24 chars - no space, dash, or uppercase
const longStorageAccountName = storageResourceName + Math.random().toString().replace(/0\./, '');
const accountName = longStorageAccountName.substring(0, 24);

const creds = new DeviceCodeCredential();

async function main() {
    const client = new StorageManagementClient(creds, subscriptionId);

    const blobServiceOptions = {
        accessTier: 'Hot',
        allowBlobPublicAccess: true,
        customDomain: {
            name: "",
            useSubDomainName: false
        },
        enableHttpsTrafficOnly: true,
        isHnsEnabled: false,
        kind: 'StorageV2',
        largeFileSharesState: 'Disabled',
        location: 'westus',
        sku: {
            name: 'Standard_RAGRS',
            tier: 'Standard'
        }

    }
    const createStorageAccountResponse = await client.storageAccounts.beginCreateAndWait(existingResourceGroup, accountName, blobServiceOptions);

    console.log(createStorageAccountResponse);

}

main().catch((err) => {
    console.log("An error occurred:");
    console.error(err);
});
