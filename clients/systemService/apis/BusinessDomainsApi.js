const samples = require('../samples/BusinessDomainsApi');
const BusinessDomainDtoEnvelope = require('../models/BusinessDomainDtoEnvelope');
const BusinessDomainDtoListEnvelope = require('../models/BusinessDomainDtoListEnvelope');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const utils = require('../utils/utils');

module.exports = {
    deleteSystemBusinessDomain: {
        key: 'deleteSystemBusinessDomain',
        noun: 'BusinessDomains',
        display: {
            label: 'Delete a business domain',
            description: 'Removes any business domain from the system, regardless of owning tenant.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'businessDomainId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/BusinessDomains/{businessDomainId}'),
                    method: 'DELETE',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteSystemBusinessDomain', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getSystemBusinessDomainById: {
        key: 'getSystemBusinessDomainById',
        noun: 'BusinessDomains',
        display: {
            label: 'Retrieve a business domain by its ID',
            description: 'Retrieve any business domain by its ID, regardless of owning tenant.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'businessDomainId',
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
                ...BusinessDomainDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/BusinessDomains/{businessDomainId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSystemBusinessDomainById', response.json);
                    return results;
                })
            },
            sample: samples['BusinessDomainDtoEnvelopeSample']
        }
    },
    getSystemBusinessDomains: {
        key: 'getSystemBusinessDomains',
        noun: 'BusinessDomains',
        display: {
            label: 'Retrieve all business domains in the system',
            description: 'Retrieve all registered business domains across every tenant (global administrators only).',
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
                ...BusinessDomainDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/BusinessDomains'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSystemBusinessDomains', response.json);
                    return results;
                })
            },
            sample: samples['BusinessDomainDtoListEnvelopeSample']
        }
    },
    getSystemBusinessDomainsCount: {
        key: 'getSystemBusinessDomainsCount',
        noun: 'BusinessDomains',
        display: {
            label: 'Get the count of all business domains in the system',
            description: 'Get the count of all registered business domains across every tenant.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/BusinessDomains/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSystemBusinessDomainsCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    verifySystemBusinessDomain: {
        key: 'verifySystemBusinessDomain',
        noun: 'BusinessDomains',
        display: {
            label: 'Verify a business domain',
            description: 'Checks the domain&#39;s DNS TXT records for the verification token and marks it verified.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'businessDomainId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/BusinessDomains/{businessDomainId}/Verify'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'verifySystemBusinessDomain', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
