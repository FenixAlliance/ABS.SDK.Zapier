const samples = require('../samples/ReceiptAdvicesApi');
const utils = require('../utils/utils');

module.exports = {
    apiV2UblServiceReceiptAdvicesItemRestockIdGet: {
        key: 'apiV2UblServiceReceiptAdvicesItemRestockIdGet',
        noun: 'ReceiptAdvices',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'itemRestockId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'profile',
                    label: '',
                    type: 'string',
                    choices: [
                        'Generic',
                        'Dian',
                    ],
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/UblService/ReceiptAdvices/{itemRestockId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'profile': bundle.inputData?.['profile'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'apiV2UblServiceReceiptAdvicesItemRestockIdGet', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    apiV2UblServiceReceiptAdvicesItemRestockIdPartitionsGet: {
        key: 'apiV2UblServiceReceiptAdvicesItemRestockIdPartitionsGet',
        noun: 'ReceiptAdvices',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'itemRestockId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'profile',
                    label: '',
                    type: 'string',
                    choices: [
                        'Generic',
                        'Dian',
                    ],
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/UblService/ReceiptAdvices/{itemRestockId}/partitions'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'profile': bundle.inputData?.['profile'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'apiV2UblServiceReceiptAdvicesItemRestockIdPartitionsGet', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
