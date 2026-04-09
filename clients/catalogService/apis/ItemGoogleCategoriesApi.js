const samples = require('../samples/ItemGoogleCategoriesApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const ItemGoogleCategoryDtoEnvelope = require('../models/ItemGoogleCategoryDtoEnvelope');
const ItemGoogleCategoryDtoListEnvelope = require('../models/ItemGoogleCategoryDtoListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    getAllItemGoogleCategoriesAsync: {
        key: 'getAllItemGoogleCategoriesAsync',
        noun: 'ItemGoogleCategories',
        display: {
            label: 'Get all Google item categories (all)',
            description: 'Retrieves all Google item categories (all) without OData query options.',
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
                ...ItemGoogleCategoryDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CatalogService/ItemGoogleCategories/All'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAllItemGoogleCategoriesAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemGoogleCategoryDtoListEnvelopeSample']
        }
    },
    getChildrenItemGoogleCategoriesByIdAsync: {
        key: 'getChildrenItemGoogleCategoriesByIdAsync',
        noun: 'ItemGoogleCategories',
        display: {
            label: 'Get children Google item categories by ID',
            description: 'Retrieves children Google item categories for a given ID.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'itemCategoryId',
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
                ...ItemGoogleCategoryDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CatalogService/ItemGoogleCategories/{itemCategoryId}/Children'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getChildrenItemGoogleCategoriesByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemGoogleCategoryDtoListEnvelopeSample']
        }
    },
    getItemGoogleCategoriesAsync: {
        key: 'getItemGoogleCategoriesAsync',
        noun: 'ItemGoogleCategories',
        display: {
            label: 'Get all Google item categories',
            description: 'Retrieves all Google item categories using OData query options.',
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
                ...ItemGoogleCategoryDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CatalogService/ItemGoogleCategories'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getItemGoogleCategoriesAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemGoogleCategoryDtoListEnvelopeSample']
        }
    },
    getItemGoogleCategoriesCountAsync: {
        key: 'getItemGoogleCategoriesCountAsync',
        noun: 'ItemGoogleCategories',
        display: {
            label: 'Get Google item categories count',
            description: 'Retrieves the count of Google item categories using OData query options.',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CatalogService/ItemGoogleCategories/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getItemGoogleCategoriesCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getItemGoogleCategoriesTreeAsync: {
        key: 'getItemGoogleCategoriesTreeAsync',
        noun: 'ItemGoogleCategories',
        display: {
            label: 'Get Google item categories tree',
            description: 'Retrieves the Google item categories tree.',
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
                ...ItemGoogleCategoryDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CatalogService/ItemGoogleCategories/tree'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getItemGoogleCategoriesTreeAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemGoogleCategoryDtoListEnvelopeSample']
        }
    },
    getItemGoogleCategoryByIdAsync: {
        key: 'getItemGoogleCategoryByIdAsync',
        noun: 'ItemGoogleCategories',
        display: {
            label: 'Get Google item category by ID',
            description: 'Retrieves a specific Google item category by its ID.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'itemCategoryId',
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
                ...ItemGoogleCategoryDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CatalogService/ItemGoogleCategories/{itemCategoryId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getItemGoogleCategoryByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemGoogleCategoryDtoEnvelopeSample']
        }
    },
    getRootItemGoogleCategoriesAsync: {
        key: 'getRootItemGoogleCategoriesAsync',
        noun: 'ItemGoogleCategories',
        display: {
            label: 'Get root Google item categories',
            description: 'Retrieves root Google item categories.',
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
                ...ItemGoogleCategoryDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CatalogService/ItemGoogleCategories/Primary'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getRootItemGoogleCategoriesAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemGoogleCategoryDtoListEnvelopeSample']
        }
    },
    mapItemGoogleCategoriesTreeAsync: {
        key: 'mapItemGoogleCategoriesTreeAsync',
        noun: 'ItemGoogleCategories',
        display: {
            label: 'Map Google item categories tree',
            description: 'Maps the Google item categories tree.',
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
                ...ItemGoogleCategoryDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CatalogService/ItemGoogleCategories/tree'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'mapItemGoogleCategoriesTreeAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemGoogleCategoryDtoListEnvelopeSample']
        }
    },
}
