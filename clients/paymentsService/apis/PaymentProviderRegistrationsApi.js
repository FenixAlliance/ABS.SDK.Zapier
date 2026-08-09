const samples = require('../samples/PaymentProviderRegistrationsApi');
const CreateProviderWebhookRegistrationRequest = require('../models/CreateProviderWebhookRegistrationRequest');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const PaymentProviderRegistrationDtoCollectionQueryParameters = require('../models/PaymentProviderRegistrationDtoCollectionQueryParameters');
const PaymentProviderRegistrationDtoListEnvelope = require('../models/PaymentProviderRegistrationDtoListEnvelope');
const ProviderWebhookRegistrationCreatedDtoEnvelope = require('../models/ProviderWebhookRegistrationCreatedDtoEnvelope');
const utils = require('../utils/utils');

module.exports = {
    createAsync: {
        key: 'createAsync',
        noun: 'PaymentProviderRegistrations',
        display: {
            label: 'Provisions a provider webhook registration',
            description: 'Stores the BYO signing secret in the tenant options store, creates + activates the registration, and reveals the one-time plaintext webhook key plus its fully-composed inbound URL.',
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
                ...CreateProviderWebhookRegistrationRequest.fields(),
            ],
            outputFields: [
                ...ProviderWebhookRegistrationCreatedDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PaymentsService/PaymentProviderRegistrations'),
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
                        ...CreateProviderWebhookRegistrationRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createAsync', response.json);
                    return results;
                })
            },
            sample: samples['ProviderWebhookRegistrationCreatedDtoEnvelopeSample']
        }
    },
    getAsync: {
        key: 'getAsync',
        noun: 'PaymentProviderRegistrations',
        display: {
            label: 'Lists the tenant&#39;s provider registrations',
            description: 'Gets all provider registrations for the current tenant with OData support (no secret is ever returned).',
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
                ...PaymentProviderRegistrationDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...PaymentProviderRegistrationDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PaymentsService/PaymentProviderRegistrations'),
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
                        ...PaymentProviderRegistrationDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAsync', response.json);
                    return results;
                })
            },
            sample: samples['PaymentProviderRegistrationDtoListEnvelopeSample']
        }
    },
    getCountAsync: {
        key: 'getCountAsync',
        noun: 'PaymentProviderRegistrations',
        display: {
            label: 'Counts the tenant&#39;s provider registrations',
            description: 'Gets the count of provider registrations for the current tenant (OData sibling of the list).',
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
                ...PaymentProviderRegistrationDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PaymentsService/PaymentProviderRegistrations/Count'),
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
                        ...PaymentProviderRegistrationDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    rotateKeyAsync: {
        key: 'rotateKeyAsync',
        noun: 'PaymentProviderRegistrations',
        display: {
            label: 'Rotates a registration&#39;s webhook key',
            description: 'Mints a fresh webhook key (invalidating the previous one) and reveals it once, plus its composed URL.',
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
                    key: 'registrationId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...ProviderWebhookRegistrationCreatedDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PaymentsService/PaymentProviderRegistrations/{registrationId}/RotateKey'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'rotateKeyAsync', response.json);
                    return results;
                })
            },
            sample: samples['ProviderWebhookRegistrationCreatedDtoEnvelopeSample']
        }
    },
}
