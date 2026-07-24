const samples = require('../samples/SigningEngineApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const TrustSigningProviderDescriptorDtoListEnvelope = require('../models/TrustSigningProviderDescriptorDtoListEnvelope');
const TrustSigningReadinessDtoEnvelope = require('../models/TrustSigningReadinessDtoEnvelope');
const TrustSigningRequestDto = require('../models/TrustSigningRequestDto');
const utils = require('../utils/utils');

module.exports = {
    getProvidersAsync: {
        key: 'getProvidersAsync',
        noun: 'SigningEngine',
        display: {
            label: 'List signing providers',
            description: 'Returns the registered alpha signing providers (Noop / Manual / External). OData-queryable.',
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
                ...TrustSigningProviderDescriptorDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SigningEngine/Providers'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProvidersAsync', response.json);
                    return results;
                })
            },
            sample: samples['TrustSigningProviderDescriptorDtoListEnvelopeSample']
        }
    },
    getProvidersCountAsync: {
        key: 'getProvidersCountAsync',
        noun: 'SigningEngine',
        display: {
            label: 'Count signing providers',
            description: 'Returns the count of registered alpha signing providers. OData-queryable.',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SigningEngine/Providers/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProvidersCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    previewAsync: {
        key: 'previewAsync',
        noun: 'SigningEngine',
        display: {
            label: 'Preview signing readiness',
            description: 'Side-effect-free: validates a signing request and reports whether it can proceed and with what policy.',
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
                ...TrustSigningRequestDto.fields(),
            ],
            outputFields: [
                ...TrustSigningReadinessDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SigningEngine/Preview'),
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
                        ...TrustSigningRequestDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'previewAsync', response.json);
                    return results;
                })
            },
            sample: samples['TrustSigningReadinessDtoEnvelopeSample']
        }
    },
}
