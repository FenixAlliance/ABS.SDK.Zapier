const samples = require('../samples/ItemReturnPoliciesApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const ItemReturnPolicyDtoEnvelope = require('../models/ItemReturnPolicyDtoEnvelope');
const ItemReturnPolicyDtoListEnvelope = require('../models/ItemReturnPolicyDtoListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    countItemReturnPoliciesAsync: {
        key: 'countItemReturnPoliciesAsync',
        noun: 'ItemReturnPolicies',
        display: {
            label: 'Count item return policies',
            description: 'Counts all return policies for a specific item.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/CatalogService/ItemReturnPolicies/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countItemReturnPoliciesAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getItemReturnPoliciesAsync: {
        key: 'getItemReturnPoliciesAsync',
        noun: 'ItemReturnPolicies',
        display: {
            label: 'Get item return policies',
            description: 'Retrieves all return policies for a specific item.',
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
                ...ItemReturnPolicyDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CatalogService/ItemReturnPolicies'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getItemReturnPoliciesAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemReturnPolicyDtoListEnvelopeSample']
        }
    },
    getItemReturnPolicyByIdAsync: {
        key: 'getItemReturnPolicyByIdAsync',
        noun: 'ItemReturnPolicies',
        display: {
            label: 'Get item return policy by ID',
            description: 'Retrieves a specific return policy for an item.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'itemReturnPolicyId',
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
                ...ItemReturnPolicyDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CatalogService/ItemReturnPolicies/{itemReturnPolicyId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getItemReturnPolicyByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemReturnPolicyDtoEnvelopeSample']
        }
    },
    relateItemToReturnPolicyAsync: {
        key: 'relateItemToReturnPolicyAsync',
        noun: 'ItemReturnPolicies',
        display: {
            label: 'Relate item to return policy',
            description: 'Relates an item to an existing return policy.',
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
                    key: 'returnPolicyId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/CatalogService/ItemReturnPolicies'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'itemId': bundle.inputData?.['itemId'],
                        'returnPolicyId': bundle.inputData?.['returnPolicyId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'relateItemToReturnPolicyAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    removeReturnPolicyFromItemAsync: {
        key: 'removeReturnPolicyFromItemAsync',
        noun: 'ItemReturnPolicies',
        display: {
            label: 'Remove return policy from item',
            description: 'Removes a return policy from an item.',
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
                    key: 'itemReturnPolicyId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/CatalogService/ItemReturnPolicies/{itemReturnPolicyId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'removeReturnPolicyFromItemAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
