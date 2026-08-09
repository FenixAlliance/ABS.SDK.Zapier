const samples = require('../samples/PointOfSalesApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const PatchOperation = require('../models/PatchOperation');
const PointOfSaleCreateDto = require('../models/PointOfSaleCreateDto');
const PointOfSaleDtoCollectionQueryParameters = require('../models/PointOfSaleDtoCollectionQueryParameters');
const PointOfSaleDtoEnvelope = require('../models/PointOfSaleDtoEnvelope');
const PointOfSaleDtoListEnvelope = require('../models/PointOfSaleDtoListEnvelope');
const PointOfSaleUpdateDto = require('../models/PointOfSaleUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    countPointOfSalesAsync: {
        key: 'countPointOfSalesAsync',
        noun: 'PointOfSales',
        display: {
            label: 'Get point of sales count',
            description: 'Returns the total count of point of sales for the specified tenant with OData filter support.',
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
                ...PointOfSaleDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SalesService/PointOfSales/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...PointOfSaleDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countPointOfSalesAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    createPointOfSaleAsync: {
        key: 'createPointOfSaleAsync',
        noun: 'PointOfSales',
        display: {
            label: 'Create a point of sale',
            description: 'Creates a new point of sale for the specified tenant.',
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
                ...PointOfSaleCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SalesService/PointOfSales'),
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
                        ...PointOfSaleCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createPointOfSaleAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deletePointOfSaleAsync: {
        key: 'deletePointOfSaleAsync',
        noun: 'PointOfSales',
        display: {
            label: 'Delete a point of sale',
            description: 'Deletes an existing point of sale by its unique identifier.',
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
                    key: 'pointOfSaleId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SalesService/PointOfSales/{pointOfSaleId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deletePointOfSaleAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getPointOfSaleAsync: {
        key: 'getPointOfSaleAsync',
        noun: 'PointOfSales',
        display: {
            label: 'Get point of sale by ID',
            description: 'Retrieves a single point of sale by its unique identifier.',
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
                    key: 'pointOfSaleId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...PointOfSaleDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SalesService/PointOfSales/{pointOfSaleId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPointOfSaleAsync', response.json);
                    return results;
                })
            },
            sample: samples['PointOfSaleDtoEnvelopeSample']
        }
    },
    getPointOfSalesAsync: {
        key: 'getPointOfSalesAsync',
        noun: 'PointOfSales',
        display: {
            label: 'Get point of sales',
            description: 'Retrieves a list of point of sales for the specified tenant with OData query support.',
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
                ...PointOfSaleDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...PointOfSaleDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SalesService/PointOfSales'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...PointOfSaleDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPointOfSalesAsync', response.json);
                    return results;
                })
            },
            sample: samples['PointOfSaleDtoListEnvelopeSample']
        }
    },
    patchPointOfSaleAsync: {
        key: 'patchPointOfSaleAsync',
        noun: 'PointOfSales',
        display: {
            label: 'Patch a point of sale',
            description: 'Partially updates an existing point of sale using a JSON Patch document.',
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
                    key: 'pointOfSaleId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'PatchOperation',
                    label: '',
                    type: 'string',
                }
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SalesService/PointOfSales/{pointOfSaleId}'),
                    method: 'PATCH',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...PatchOperation.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchPointOfSaleAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updatePointOfSaleAsync: {
        key: 'updatePointOfSaleAsync',
        noun: 'PointOfSales',
        display: {
            label: 'Update a point of sale',
            description: 'Updates an existing point of sale by its unique identifier.',
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
                    key: 'pointOfSaleId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...PointOfSaleUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SalesService/PointOfSales/{pointOfSaleId}'),
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
                        ...PointOfSaleUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updatePointOfSaleAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
