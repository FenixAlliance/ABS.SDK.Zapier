const samples = require('../samples/InventoryApi');
const utils = require('../utils/utils');

module.exports = {
    getInventoryDetailsAsync: {
        key: 'getInventoryDetailsAsync',
        noun: 'Inventory',
        display: {
            label: 'Get inventory details for a stock item',
            description: 'Retrieves the inventory details for a specific stock item by its ID.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'stockItemId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InventoryService/Inventory/{stockItemId}/Details'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInventoryDetailsAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
