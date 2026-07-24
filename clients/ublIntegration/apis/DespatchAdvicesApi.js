const samples = require('../samples/DespatchAdvicesApi');
const utils = require('../utils/utils');

module.exports = {
    apiV2UblServiceDespatchAdvicesShipmentIdGet: {
        key: 'apiV2UblServiceDespatchAdvicesShipmentIdGet',
        noun: 'DespatchAdvices',
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
                    key: 'shipmentId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/UblService/DespatchAdvices/{shipmentId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'apiV2UblServiceDespatchAdvicesShipmentIdGet', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
