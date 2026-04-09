const samples = require('../samples/ServiceLevelAgreementsApi');
const Envelope = require('../models/Envelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const ServiceLevelAgreementCreateDto = require('../models/ServiceLevelAgreementCreateDto');
const ServiceLevelAgreementDtoEnvelope = require('../models/ServiceLevelAgreementDtoEnvelope');
const ServiceLevelAgreementDtoIReadOnlyListEnvelope = require('../models/ServiceLevelAgreementDtoIReadOnlyListEnvelope');
const ServiceLevelAgreementUpdateDto = require('../models/ServiceLevelAgreementUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    createServiceLevelAgreementAsync: {
        key: 'createServiceLevelAgreementAsync',
        noun: 'ServiceLevelAgreements',
        display: {
            label: 'Create a service level agreement',
            description: 'Creates a new service level agreement for the specified tenant.',
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
                ...ServiceLevelAgreementCreateDto.fields(),
            ],
            outputFields: [
                ...Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ServicesService/ServiceLevelAgreements'),
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
                        ...ServiceLevelAgreementCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createServiceLevelAgreementAsync', response.json);
                    return results;
                })
            },
            sample: samples['EnvelopeSample']
        }
    },
    deleteServiceLevelAgreementAsync: {
        key: 'deleteServiceLevelAgreementAsync',
        noun: 'ServiceLevelAgreements',
        display: {
            label: 'Delete a service level agreement',
            description: 'Deletes a service level agreement by its identifier.',
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
                    key: 'serviceLevelAgreementId',
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
                ...Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ServicesService/ServiceLevelAgreements/{serviceLevelAgreementId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteServiceLevelAgreementAsync', response.json);
                    return results;
                })
            },
            sample: samples['EnvelopeSample']
        }
    },
    getServiceLevelAgreementByIdAsync: {
        key: 'getServiceLevelAgreementByIdAsync',
        noun: 'ServiceLevelAgreements',
        display: {
            label: 'Get a service level agreement by ID',
            description: 'Retrieves a service level agreement by its identifier.',
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
                    key: 'serviceLevelAgreementId',
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
                ...ServiceLevelAgreementDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ServicesService/ServiceLevelAgreements/{serviceLevelAgreementId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getServiceLevelAgreementByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['ServiceLevelAgreementDtoEnvelopeSample']
        }
    },
    getServiceLevelAgreementsAsync: {
        key: 'getServiceLevelAgreementsAsync',
        noun: 'ServiceLevelAgreements',
        display: {
            label: 'Get all service level agreements',
            description: 'Retrieves all service level agreements for the specified tenant.',
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
                ...ServiceLevelAgreementDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ServicesService/ServiceLevelAgreements'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getServiceLevelAgreementsAsync', response.json);
                    return results;
                })
            },
            sample: samples['ServiceLevelAgreementDtoIReadOnlyListEnvelopeSample']
        }
    },
    getServiceLevelAgreementsCountAsync: {
        key: 'getServiceLevelAgreementsCountAsync',
        noun: 'ServiceLevelAgreements',
        display: {
            label: 'Get service level agreements count',
            description: 'Returns the count of service level agreements for the specified tenant.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/ServicesService/ServiceLevelAgreements/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getServiceLevelAgreementsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    updateServiceLevelAgreementAsync: {
        key: 'updateServiceLevelAgreementAsync',
        noun: 'ServiceLevelAgreements',
        display: {
            label: 'Update a service level agreement',
            description: 'Updates an existing service level agreement.',
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
                    key: 'serviceLevelAgreementId',
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
                ...ServiceLevelAgreementUpdateDto.fields(),
            ],
            outputFields: [
                ...Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ServicesService/ServiceLevelAgreements/{serviceLevelAgreementId}'),
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
                        ...ServiceLevelAgreementUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateServiceLevelAgreementAsync', response.json);
                    return results;
                })
            },
            sample: samples['EnvelopeSample']
        }
    },
}
