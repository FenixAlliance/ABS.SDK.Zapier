const samples = require('../samples/CapabilitiesApi');
const CapabilityDtoEnvelope = require('../models/CapabilityDtoEnvelope');
const CapabilityDtoListEnvelope = require('../models/CapabilityDtoListEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const utils = require('../utils/utils');

module.exports = {
    getCapabilitiesAsync: {
        key: 'getCapabilitiesAsync',
        noun: 'Capabilities',
        display: {
            label: 'Get the annotated capability catalog',
            description: 'Retrieves the full governed-capability catalog for the specified tenant, optionally narrowed to a single execution surface. Every capability is returned with an Available flag (and a DeniedReason when not available) so callers render disabled-with-reason instead of hiding; entitlement is computed server-side.',
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
                    key: 'surface',
                    label: '',
                    type: 'string',
                    choices: [
                        'None',
                        'Workflow',
                        'AI',
                        'Mcp',
                        'Job',
                        'Integration',
                        'Webhook',
                        'Admin',
                    ],
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
                ...CapabilityDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/IntelligenceService/Capabilities'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'surface': bundle.inputData?.['surface'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCapabilitiesAsync', response.json);
                    return results;
                })
            },
            sample: samples['CapabilityDtoListEnvelopeSample']
        }
    },
    getCapabilitiesCountAsync: {
        key: 'getCapabilitiesCountAsync',
        noun: 'Capabilities',
        display: {
            label: 'Get the capability catalog count',
            description: 'Returns the number of governed capabilities in the catalog for the specified tenant — the surface-matching total that mirrors the list route&#39;s returned-set size (entitled or not), honouring the same optional surface narrowing.',
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
                    key: 'surface',
                    label: '',
                    type: 'string',
                    choices: [
                        'None',
                        'Workflow',
                        'AI',
                        'Mcp',
                        'Job',
                        'Integration',
                        'Webhook',
                        'Admin',
                    ],
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/IntelligenceService/Capabilities/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'surface': bundle.inputData?.['surface'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCapabilitiesCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getCapabilityByKeyAsync: {
        key: 'getCapabilityByKeyAsync',
        noun: 'Capabilities',
        display: {
            label: 'Get a capability by key',
            description: 'Retrieves a single governed capability by its stable, dotted key, stamped with the Available / DeniedReason entitlement flag. Returns 404 only when the capability does not exist; an existing capability the actor is not entitled to run is returned annotated as unavailable, not hidden.',
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
                    key: 'key',
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
                ...CapabilityDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/IntelligenceService/Capabilities/{key}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCapabilityByKeyAsync', response.json);
                    return results;
                })
            },
            sample: samples['CapabilityDtoEnvelopeSample']
        }
    },
}
