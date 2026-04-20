const samples = require('../samples/InvoiceEnumerationRangesApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const InvoiceEnumerationRangeCreateDto = require('../models/InvoiceEnumerationRangeCreateDto');
const InvoiceEnumerationRangeDtoEnvelope = require('../models/InvoiceEnumerationRangeDtoEnvelope');
const InvoiceEnumerationRangeDtoListEnvelope = require('../models/InvoiceEnumerationRangeDtoListEnvelope');
const InvoiceEnumerationRangeUpdateDto = require('../models/InvoiceEnumerationRangeUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    createInvoiceEnumerationRangeAsync: {
        key: 'createInvoiceEnumerationRangeAsync',
        noun: 'InvoiceEnumerationRanges',
        display: {
            label: 'Create a new invoice enumeration range',
            description: 'Creates a new invoice enumeration range for the tenant.',
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
                ...InvoiceEnumerationRangeCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AccountingService/InvoiceEnumerationRanges'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...InvoiceEnumerationRangeCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createInvoiceEnumerationRangeAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteInvoiceEnumerationRangeAsync: {
        key: 'deleteInvoiceEnumerationRangeAsync',
        noun: 'InvoiceEnumerationRanges',
        display: {
            label: 'Delete an invoice enumeration range',
            description: 'Deletes an invoice enumeration range by its identifier.',
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
                    key: 'rangeId',
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AccountingService/InvoiceEnumerationRanges/{rangeId}'),
                    method: 'DELETE',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteInvoiceEnumerationRangeAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getInvoiceEnumerationRangeDetailsAsync: {
        key: 'getInvoiceEnumerationRangeDetailsAsync',
        noun: 'InvoiceEnumerationRanges',
        display: {
            label: 'Get invoice enumeration range by ID',
            description: 'Retrieves the details of a specific invoice enumeration range.',
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
                    key: 'rangeId',
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
                ...InvoiceEnumerationRangeDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AccountingService/InvoiceEnumerationRanges/{rangeId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoiceEnumerationRangeDetailsAsync', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceEnumerationRangeDtoEnvelopeSample']
        }
    },
    getInvoiceEnumerationRangesAsync: {
        key: 'getInvoiceEnumerationRangesAsync',
        noun: 'InvoiceEnumerationRanges',
        display: {
            label: 'Get all invoice enumeration ranges',
            description: 'Retrieves all invoice enumeration ranges for the specified tenant.',
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
                ...InvoiceEnumerationRangeDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AccountingService/InvoiceEnumerationRanges'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoiceEnumerationRangesAsync', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceEnumerationRangeDtoListEnvelopeSample']
        }
    },
    updateInvoiceEnumerationRangeAsync: {
        key: 'updateInvoiceEnumerationRangeAsync',
        noun: 'InvoiceEnumerationRanges',
        display: {
            label: 'Update an invoice enumeration range',
            description: 'Updates an existing invoice enumeration range with the provided data.',
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
                    key: 'rangeId',
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
                ...InvoiceEnumerationRangeUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AccountingService/InvoiceEnumerationRanges/{rangeId}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...InvoiceEnumerationRangeUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateInvoiceEnumerationRangeAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
