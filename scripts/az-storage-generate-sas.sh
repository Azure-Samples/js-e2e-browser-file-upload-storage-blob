# https://docs.microsoft.com/cli/azure/storage/account?view=azure-cli-latest#az_storage_account_generate_sas
az storage account generate-sas --expiry 2021-12-30T12:00Z \
    --permissions cdlruwap \
    --resource-types sco \
    --services b \
    --account-key YOUR-RESOURCE-PRIMARY-KEY \
    --account-name YOUR-RESOURCE-NAME \
    --subscription YOUR-SUBSCRIPTION-ID

# Save the result - this is your SAS Token