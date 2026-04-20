const samples = require('../samples/StockApi');
const ContactDtoListEnvelope = require('../models/ContactDtoListEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const utils = require('../utils/utils');

module.exports = {
    getContactsAsync: {
        key: 'getContactsAsync',
        noun: 'Stock',
        display: {
            label: 'Get all stock-related contacts',
            description: 'Retrieves all business-owned contacts related to stock and logistics for the specified tenant.',
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
                ...ContactDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LogisticsService/Stock'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getContactsAsync', response.json);
                    return results;
                })
            },
            sample: samples['ContactDtoListEnvelopeSample']
        }
    },
}
