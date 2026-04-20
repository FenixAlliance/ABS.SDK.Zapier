const samples = require('../samples/ItemWarrantyPoliciesApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const ItemWarrantyPolicyDtoEnvelope = require('../models/ItemWarrantyPolicyDtoEnvelope');
const ItemWarrantyPolicyDtoListEnvelope = require('../models/ItemWarrantyPolicyDtoListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    countItemWarrantyPoliciesAsync: {
        key: 'countItemWarrantyPoliciesAsync',
        noun: 'ItemWarrantyPolicies',
        display: {
            label: 'Count item warranty policies',
            description: 'Counts all warranty policies for a specific item.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'itemId',
                    label: '',
                    type: 'string',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CatalogService/ItemWarrantyPolicies/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'itemId': bundle.inputData?.['itemId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countItemWarrantyPoliciesAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getItemWarrantyPoliciesAsync: {
        key: 'getItemWarrantyPoliciesAsync',
        noun: 'ItemWarrantyPolicies',
        display: {
            label: 'Get item warranty policies',
            description: 'Retrieves all warranty policies for a specific item.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'itemId',
                    label: '',
                    type: 'string',
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
                ...ItemWarrantyPolicyDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CatalogService/ItemWarrantyPolicies'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'itemId': bundle.inputData?.['itemId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getItemWarrantyPoliciesAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemWarrantyPolicyDtoListEnvelopeSample']
        }
    },
    getItemWarrantyPolicyByIdAsync: {
        key: 'getItemWarrantyPolicyByIdAsync',
        noun: 'ItemWarrantyPolicies',
        display: {
            label: 'Get item warranty policy by ID',
            description: 'Retrieves a specific warranty policy for an item.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'itemWarrantyPolicyId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'itemId',
                    label: '',
                    type: 'string',
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
                ...ItemWarrantyPolicyDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CatalogService/ItemWarrantyPolicies/{itemWarrantyPolicyId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'itemId': bundle.inputData?.['itemId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getItemWarrantyPolicyByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemWarrantyPolicyDtoEnvelopeSample']
        }
    },
    relateItemToWarrantyPolicyAsync: {
        key: 'relateItemToWarrantyPolicyAsync',
        noun: 'ItemWarrantyPolicies',
        display: {
            label: 'Relate item to warranty policy',
            description: 'Relates an item to an existing warranty policy.',
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
                    key: 'itemId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'warrantyPolicyId',
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
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CatalogService/ItemWarrantyPolicies'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'itemId': bundle.inputData?.['itemId'],
                        'warrantyPolicyId': bundle.inputData?.['warrantyPolicyId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'relateItemToWarrantyPolicyAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    removeWarrantyPolicyFromItemAsync: {
        key: 'removeWarrantyPolicyFromItemAsync',
        noun: 'ItemWarrantyPolicies',
        display: {
            label: 'Remove warranty policy from item',
            description: 'Removes a warranty policy from an item.',
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
                    key: 'itemId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'itemWarrantyPolicyId',
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
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CatalogService/ItemWarrantyPolicies/{itemWarrantyPolicyId}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'itemId': bundle.inputData?.['itemId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'removeWarrantyPolicyFromItemAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
