const samples = require('../samples/ItemAttachmentsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ItemAttachmentCreateDto = require('../models/ItemAttachmentCreateDto');
const ItemAttachmentDtoEnvelope = require('../models/ItemAttachmentDtoEnvelope');
const ItemAttachmentDtoListEnvelope = require('../models/ItemAttachmentDtoListEnvelope');
const ItemAttachmentUpdateDto = require('../models/ItemAttachmentUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    createItemAttachmentAsync: {
        key: 'createItemAttachmentAsync',
        noun: 'ItemAttachments',
        display: {
            label: 'Create a new item attachment',
            description: 'Creates a new item attachment for the specified tenant.',
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
                ...ItemAttachmentCreateDto.fields(),
            ],
            outputFields: [
                ...ItemAttachmentDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CatalogService/ItemAttachments'),
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
                        ...ItemAttachmentCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createItemAttachmentAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemAttachmentDtoEnvelopeSample']
        }
    },
    deleteItemAttachmentAsync: {
        key: 'deleteItemAttachmentAsync',
        noun: 'ItemAttachments',
        display: {
            label: 'Delete an item attachment',
            description: 'Deletes an item attachment for the specified tenant.',
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
                    key: 'itemAttachmentId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteItemAttachmentAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getItemAttachmentByIdAsync: {
        key: 'getItemAttachmentByIdAsync',
        noun: 'ItemAttachments',
        display: {
            label: 'Get item attachment by ID',
            description: 'Retrieves a specific item attachment by its ID.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'itemAttachmentId',
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
                ...ItemAttachmentDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getItemAttachmentByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemAttachmentDtoEnvelopeSample']
        }
    },
    getItemAttachmentsAsync: {
        key: 'getItemAttachmentsAsync',
        noun: 'ItemAttachments',
        display: {
            label: 'Get all item attachments',
            description: 'Retrieves all item attachments for the specified tenant using OData query options.',
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
                ...ItemAttachmentDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CatalogService/ItemAttachments'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getItemAttachmentsAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemAttachmentDtoListEnvelopeSample']
        }
    },
    updateItemAttachmentAsync: {
        key: 'updateItemAttachmentAsync',
        noun: 'ItemAttachments',
        display: {
            label: 'Update an item attachment',
            description: 'Updates an existing item attachment for the specified tenant.',
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
                    key: 'itemAttachmentId',
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
                ...ItemAttachmentUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CatalogService/ItemAttachments/{itemAttachmentId}'),
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
                        ...ItemAttachmentUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateItemAttachmentAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
