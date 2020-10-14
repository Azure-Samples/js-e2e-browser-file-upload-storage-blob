# https://docs.microsoft.com/cli/azure/storage/cors?view=azure-cli-latest#az_storage_cors_add
az storage cors add --methods {DELETE, GET, HEAD, MERGE, OPTIONS, POST, PUT}
                    --origins
                    --services
                    [--account-key]
                    [--account-name]
                    [--allowed-headers]
                    [--connection-string]
                    [--exposed-headers]
                    [--max-age]
                    [--sas-token]
                    [--subscription]
                    [--timeout]