# https://docs.microsoft.com/cli/azure/storage/account?view=azure-cli-latest#az_storage_account_delete
# If you used the Azure Storage extension for Visual Studio Code to create your resource, the resource name
# and resource group name are the same.
az storage account delete --name YOUR-RESOURCE-NAME
                          --resource-group YOUR-RESOURCE-NAME
                          --subscription YOUR-SUBSCRIPTION-ID
                          --yes