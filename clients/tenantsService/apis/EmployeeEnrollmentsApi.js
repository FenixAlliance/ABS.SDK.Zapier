const samples = require('../samples/EmployeeEnrollmentsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const TenantTeamEmployeeEnrollmentCreateDto = require('../models/TenantTeamEmployeeEnrollmentCreateDto');
const TenantTeamEmployeeEnrollmentDtoEnvelope = require('../models/TenantTeamEmployeeEnrollmentDtoEnvelope');
const TenantTeamEmployeeEnrollmentDtoListEnvelope = require('../models/TenantTeamEmployeeEnrollmentDtoListEnvelope');
const TenantTeamEmployeeEnrollmentUpdateDto = require('../models/TenantTeamEmployeeEnrollmentUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    createTenantEmployeeEnrollment: {
        key: 'createTenantEmployeeEnrollment',
        noun: 'EmployeeEnrollments',
        display: {
            label: 'Create a new tenant employee enrollment',
            description: 'Create a new tenant employee enrollment',
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
                ...TenantTeamEmployeeEnrollmentCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/TenantsService/EmployeeEnrollments'),
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
                        ...TenantTeamEmployeeEnrollmentCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createTenantEmployeeEnrollment', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteTenantEmployeeEnrollment: {
        key: 'deleteTenantEmployeeEnrollment',
        noun: 'EmployeeEnrollments',
        display: {
            label: 'Delete a tenant employee enrollment',
            description: 'Delete a tenant employee enrollment',
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
                    key: 'tenantEmployeeEnrollmentId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/TenantsService/EmployeeEnrollments/{tenantEmployeeEnrollmentId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteTenantEmployeeEnrollment', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getTenantEmployeeEnrollmentById: {
        key: 'getTenantEmployeeEnrollmentById',
        noun: 'EmployeeEnrollments',
        display: {
            label: 'Retrieve a single tenant employee enrollment by its ID',
            description: 'Retrieve a single tenant employee enrollment by its ID',
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
                    key: 'tenantEmployeeEnrollmentId',
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
                ...TenantTeamEmployeeEnrollmentDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/TenantsService/EmployeeEnrollments/{tenantEmployeeEnrollmentId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTenantEmployeeEnrollmentById', response.json);
                    return results;
                })
            },
            sample: samples['TenantTeamEmployeeEnrollmentDtoEnvelopeSample']
        }
    },
    getTenantEmployeeEnrollments: {
        key: 'getTenantEmployeeEnrollments',
        noun: 'EmployeeEnrollments',
        display: {
            label: 'Retrieve a list of tenant employee enrollments',
            description: 'Retrieve a list of tenant employee enrollments',
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
                ...TenantTeamEmployeeEnrollmentDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/TenantsService/EmployeeEnrollments'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTenantEmployeeEnrollments', response.json);
                    return results;
                })
            },
            sample: samples['TenantTeamEmployeeEnrollmentDtoListEnvelopeSample']
        }
    },
    getTenantEmployeeEnrollmentsCount: {
        key: 'getTenantEmployeeEnrollmentsCount',
        noun: 'EmployeeEnrollments',
        display: {
            label: 'Get the count of tenant employee enrollments',
            description: 'Get the count of tenant employee enrollments',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/TenantsService/EmployeeEnrollments/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTenantEmployeeEnrollmentsCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    updateTenantEmployeeEnrollment: {
        key: 'updateTenantEmployeeEnrollment',
        noun: 'EmployeeEnrollments',
        display: {
            label: 'Update a tenant employee enrollment',
            description: 'Update a tenant employee enrollment',
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
                    key: 'tenantEmployeeEnrollmentId',
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
                ...TenantTeamEmployeeEnrollmentUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/TenantsService/EmployeeEnrollments/{tenantEmployeeEnrollmentId}'),
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
                        ...TenantTeamEmployeeEnrollmentUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateTenantEmployeeEnrollment', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
