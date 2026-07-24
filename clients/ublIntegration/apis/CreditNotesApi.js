const samples = require('../samples/CreditNotesApi');
const utils = require('../utils/utils');

module.exports = {
    apiV2UblServiceCreditNotesInvoiceIdGet: {
        key: 'apiV2UblServiceCreditNotesInvoiceIdGet',
        noun: 'CreditNotes',
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
                    key: 'invoiceId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/UblService/CreditNotes/{invoiceId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'apiV2UblServiceCreditNotesInvoiceIdGet', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
