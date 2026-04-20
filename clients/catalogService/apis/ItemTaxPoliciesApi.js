const samples = require('../samples/ItemTaxPoliciesApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const ItemTaxPolicyDtoEnvelope = require('../models/ItemTaxPolicyDtoEnvelope');
const ItemTaxPolicyDtoListEnvelope = require('../models/ItemTaxPolicyDtoListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    countItemTaxPoliciesAsync: {
        key: 'countItemTaxPoliciesAsync',
        noun: 'ItemTaxPolicies',
        display: {
            label: 'Count item tax policies',
            description: 'Counts all tax policies for a specific item.',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CatalogService/ItemTaxPolicies/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countItemTaxPoliciesAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getItemTaxPoliciesAsync: {
        key: 'getItemTaxPoliciesAsync',
        noun: 'ItemTaxPolicies',
        display: {
            label: 'Get item tax policies',
            description: 'Retrieves all tax policies for a specific item.',
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
                ...ItemTaxPolicyDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CatalogService/ItemTaxPolicies'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getItemTaxPoliciesAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemTaxPolicyDtoListEnvelopeSample']
        }
    },
    getItemTaxPolicyByIdAsync: {
        key: 'getItemTaxPolicyByIdAsync',
        noun: 'ItemTaxPolicies',
        display: {
            label: 'Get item tax policy by ID',
            description: 'Retrieves a specific tax policy for an item.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'itemTaxPolicyId',
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
                ...ItemTaxPolicyDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CatalogService/ItemTaxPolicies/{itemTaxPolicyId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getItemTaxPolicyByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemTaxPolicyDtoEnvelopeSample']
        }
    },
    relateItemToTaxPolicyAsync: {
        key: 'relateItemToTaxPolicyAsync',
        noun: 'ItemTaxPolicies',
        display: {
            label: 'Relate item to tax policy',
            description: 'Relates an item to an existing tax policy.',
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
                    key: 'taxPolicyId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CatalogService/ItemTaxPolicies'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'itemId': bundle.inputData?.['itemId'],
                        'taxPolicyId': bundle.inputData?.['taxPolicyId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'relateItemToTaxPolicyAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    removeTaxPolicyFromItemAsync: {
        key: 'removeTaxPolicyFromItemAsync',
        noun: 'ItemTaxPolicies',
        display: {
            label: 'Remove tax policy from item',
            description: 'Removes a tax policy from an item.',
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
                    key: 'itemTaxPolicyId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CatalogService/ItemTaxPolicies/{itemTaxPolicyId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'removeTaxPolicyFromItemAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
