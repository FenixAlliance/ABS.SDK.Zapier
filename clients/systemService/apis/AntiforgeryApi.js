const samples = require('../samples/AntiforgeryApi');
const utils = require('../utils/utils');

module.exports = {
    getAndStoreTokens: {
        key: 'getAndStoreTokens',
        noun: 'Antiforgery',
        display: {
            label: 'Get and store antiforgery tokens',
            description: 'Generates antiforgery tokens and stores them in the current HTTP context.',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/Antiforgery/GetAndStoreTokens'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAndStoreTokens', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    isRequestValidAsync: {
        key: 'isRequestValidAsync',
        noun: 'Antiforgery',
        display: {
            label: 'Validate antiforgery request',
            description: 'Validates whether the current HTTP request contains a valid antiforgery token.',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/Antiforgery/IsRequestValid'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'isRequestValidAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
