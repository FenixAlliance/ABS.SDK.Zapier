const samples = require('../samples/ReceiptsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const ReceiptCreateDto = require('../models/ReceiptCreateDto');
const ReceiptDtoEnvelope = require('../models/ReceiptDtoEnvelope');
const ReceiptDtoIReadOnlyListEnvelope = require('../models/ReceiptDtoIReadOnlyListEnvelope');
const ReceiptUpdateDto = require('../models/ReceiptUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    createReceiptAsync: {
        key: 'createReceiptAsync',
        noun: 'Receipts',
        display: {
            label: 'Creates a new receipt',
            description: 'Adds a new receipt record under the specified tenant.',
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
                ...ReceiptCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AccountingService/Receipts'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...ReceiptCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createReceiptAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteReceiptAsync: {
        key: 'deleteReceiptAsync',
        noun: 'Receipts',
        display: {
            label: 'Deletes a receipt',
            description: 'Removes an existing receipt from the tenant’s records.',
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
                    key: 'receiptId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AccountingService/Receipts/{receiptId}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteReceiptAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getReceiptDetailsAsync: {
        key: 'getReceiptDetailsAsync',
        noun: 'Receipts',
        display: {
            label: 'Gets details of a receipt',
            description: 'Retrieves a specific receipt by its ID for the given tenant.',
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
                    key: 'receiptId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...ReceiptDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AccountingService/Receipts/{receiptId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getReceiptDetailsAsync', response.json);
                    return results;
                })
            },
            sample: samples['ReceiptDtoEnvelopeSample']
        }
    },
    getReceiptsAsync: {
        key: 'getReceiptsAsync',
        noun: 'Receipts',
        display: {
            label: 'Retrieves tenant receipts',
            description: 'Fetches all receipts for a given tenant with OData support.',
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
            ],
            outputFields: [
                ...ReceiptDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AccountingService/Receipts'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getReceiptsAsync', response.json);
                    return results;
                })
            },
            sample: samples['ReceiptDtoIReadOnlyListEnvelopeSample']
        }
    },
    getReceiptsCountAsync: {
        key: 'getReceiptsCountAsync',
        noun: 'Receipts',
        display: {
            label: 'Gets count of tenant receipts',
            description: 'Returns total number of receipts for the tenant with OData filter support.',
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
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AccountingService/Receipts/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getReceiptsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    updateReceiptAsync: {
        key: 'updateReceiptAsync',
        noun: 'Receipts',
        display: {
            label: 'Updates a receipt',
            description: 'Modifies the data of an existing receipt for the given tenant.',
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
                    key: 'receiptId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...ReceiptUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AccountingService/Receipts/{receiptId}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...ReceiptUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateReceiptAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
