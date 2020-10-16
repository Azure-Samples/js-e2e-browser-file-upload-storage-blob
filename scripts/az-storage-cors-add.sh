# https://docs.microsoft.com/cli/azure/storage/cors?view=azure-cli-latest#az_storage_cors_add
az storage cors add --methods DELETE GET HEAD MERGE OPTIONS POST PUT \
    --origins * \
    --services b \
    --allowed-headers * \
    --exposed-headers * \
    --max-age 86400 \
    --timeout 86400 \
    --account-key  \
    --account-name YOUR-RESOURCE-NAME \
    --subscription YOUR-SUBSCRIPTION-ID \
    --sas-token "YOUR-SAS-TOKEN"