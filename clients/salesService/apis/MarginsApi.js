const samples = require('../samples/MarginsApi');
const utils = require('../utils/utils');

module.exports = {
    getQuoteAsync: {
        key: 'getQuoteAsync',
        noun: 'Margins',
        display: {
            label: 'Get margin details by ID',
            description: 'Retrieves the details of a specific sales margin by its ID.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'marginId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SalesService/Margins/{marginId}/Details'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getQuoteAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
