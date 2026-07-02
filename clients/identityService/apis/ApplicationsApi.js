const samples = require('../samples/ApplicationsApi');
const utils = require('../utils/utils');

module.exports = {
    getApplication: {
        key: 'getApplication',
        noun: 'Applications',
        display: {
            label: 'Get application by ID',
            description: 'Retrieves an application by its unique identifier.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'appId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Applications/{appId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getApplication', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getGrantedEnrollmentPermissions: {
        key: 'getGrantedEnrollmentPermissions',
        noun: 'Applications',
        display: {
            label: 'Get granted permissions for an application role',
            description: 'Retrieves the list of permissions granted through a specific security role for the specified application.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'appId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'securityRoleId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'enrollmentId',
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
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Applications/{appId}/GrantedRoles/{securityRoleId}/GrantedPermissions'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                        'enrollmentId': bundle.inputData?.['enrollmentId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getGrantedEnrollmentPermissions', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getGrantedTenantPermissions: {
        key: 'getGrantedTenantPermissions',
        noun: 'Applications',
        display: {
            label: 'Get granted tenant permissions for an application',
            description: 'Retrieves the list of permissions granted to the specified application within a tenant context.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'appId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'tenantId',
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
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Applications/{appId}/GrantedPermissions'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getGrantedTenantPermissions', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getGrantedTenantRoles: {
        key: 'getGrantedTenantRoles',
        noun: 'Applications',
        display: {
            label: 'Get granted tenant roles for an application',
            description: 'Retrieves the list of security roles granted to the specified application within a tenant context.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'appId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'tenantId',
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
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Applications/{appId}/GrantedRoles'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getGrantedTenantRoles', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getRequiredPermissions: {
        key: 'getRequiredPermissions',
        noun: 'Applications',
        display: {
            label: 'Get required permissions for an application',
            description: 'Retrieves the list of permissions required by the specified application.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'appId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Applications/{appId}/RequiredPermissions'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getRequiredPermissions', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
