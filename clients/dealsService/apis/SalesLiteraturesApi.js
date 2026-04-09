const samples = require('../samples/SalesLiteraturesApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ExtendedSalesLiteratureDtoListEnvelope = require('../models/ExtendedSalesLiteratureDtoListEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const SalesLiteratureCreateDto = require('../models/SalesLiteratureCreateDto');
const SalesLiteratureDtoEnvelope = require('../models/SalesLiteratureDtoEnvelope');
const SalesLiteratureDtoListEnvelope = require('../models/SalesLiteratureDtoListEnvelope');
const SalesLiteratureUpdateDto = require('../models/SalesLiteratureUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    countSalesLiteraturesAsync: {
        key: 'countSalesLiteraturesAsync',
        noun: 'SalesLiteratures',
        display: {
            label: 'Get sales literatures count',
            description: 'Returns the total count of sales literatures for the specified tenant with OData filter support.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/SalesLiteratures/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countSalesLiteraturesAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    createSalesLiteratureAsync: {
        key: 'createSalesLiteratureAsync',
        noun: 'SalesLiteratures',
        display: {
            label: 'Create a sales literature',
            description: 'Creates a new sales literature for the specified tenant.',
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
                ...SalesLiteratureCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/SalesLiteratures'),
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
                        ...SalesLiteratureCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createSalesLiteratureAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteSalesLiteratureAsync: {
        key: 'deleteSalesLiteratureAsync',
        noun: 'SalesLiteratures',
        display: {
            label: 'Delete a sales literature',
            description: 'Deletes an existing sales literature by its unique identifier.',
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
                    key: 'salesLiteratureId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/SalesLiteratures/{salesLiteratureId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteSalesLiteratureAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getExtendedSalesLiteraturesAsync: {
        key: 'getExtendedSalesLiteraturesAsync',
        noun: 'SalesLiteratures',
        display: {
            label: 'Get extended sales literatures',
            description: 'Retrieves a list of sales literatures with extended details for the specified tenant with OData query support.',
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
                ...ExtendedSalesLiteratureDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/SalesLiteratures/Extended'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getExtendedSalesLiteraturesAsync', response.json);
                    return results;
                })
            },
            sample: samples['ExtendedSalesLiteratureDtoListEnvelopeSample']
        }
    },
    getSalesLiteratureAsync: {
        key: 'getSalesLiteratureAsync',
        noun: 'SalesLiteratures',
        display: {
            label: 'Get sales literature by ID',
            description: 'Retrieves a single sales literature by its unique identifier.',
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
                    key: 'salesLiteratureId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...SalesLiteratureDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/SalesLiteratures/{salesLiteratureId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSalesLiteratureAsync', response.json);
                    return results;
                })
            },
            sample: samples['SalesLiteratureDtoEnvelopeSample']
        }
    },
    getSalesLiteraturesAsync: {
        key: 'getSalesLiteraturesAsync',
        noun: 'SalesLiteratures',
        display: {
            label: 'Get sales literatures',
            description: 'Retrieves a list of sales literatures for the specified tenant with OData query support.',
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
                ...SalesLiteratureDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/SalesLiteratures'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSalesLiteraturesAsync', response.json);
                    return results;
                })
            },
            sample: samples['SalesLiteratureDtoListEnvelopeSample']
        }
    },
    updateSalesLiteratureAsync: {
        key: 'updateSalesLiteratureAsync',
        noun: 'SalesLiteratures',
        display: {
            label: 'Update a sales literature',
            description: 'Updates an existing sales literature by its unique identifier.',
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
                    key: 'salesLiteratureId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...SalesLiteratureUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/SalesLiteratures/{salesLiteratureId}'),
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
                        ...SalesLiteratureUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateSalesLiteratureAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
