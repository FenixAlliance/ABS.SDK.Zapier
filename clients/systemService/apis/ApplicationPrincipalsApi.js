const samples = require('../samples/ApplicationPrincipalsApi');
const ApplicationPrincipalDetailDtoEnvelope = require('../models/ApplicationPrincipalDetailDtoEnvelope');
const ApplicationPrincipalDtoCollectionQueryParameters = require('../models/ApplicationPrincipalDtoCollectionQueryParameters');
const ApplicationPrincipalDtoIReadOnlyListEnvelope = require('../models/ApplicationPrincipalDtoIReadOnlyListEnvelope');
const ApplicationPrincipalPermissionRequestDto = require('../models/ApplicationPrincipalPermissionRequestDto');
const ApplicationPrincipalProvisionRequestDto = require('../models/ApplicationPrincipalProvisionRequestDto');
const ApplicationPrincipalProvisioningResultDtoEnvelope = require('../models/ApplicationPrincipalProvisioningResultDtoEnvelope');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const utils = require('../utils/utils');

module.exports = {
    disableGlobalApplicationPrincipal: {
        key: 'disableGlobalApplicationPrincipal',
        noun: 'ApplicationPrincipals',
        display: {
            label: 'Disable an application principal (global)',
            description: 'Disables the application principal; dependent unattended execution fails closed (applies to system-locked principals here). tenantId scopes the action to a tenant the principal is enrolled in (required). Global-administrator only.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'principalId',
                    label: '',
                    type: 'string',
                    required: true,
                },
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/ApplicationPrincipals/{principalId}/Disable'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'disableGlobalApplicationPrincipal', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    enableGlobalApplicationPrincipal: {
        key: 'enableGlobalApplicationPrincipal',
        noun: 'ApplicationPrincipals',
        display: {
            label: 'Enable an application principal (global)',
            description: 'Reinstates the application principal to the Active lifecycle state (applies to system-locked principals here). tenantId scopes the action to a tenant the principal is enrolled in (required). Global-administrator only.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'principalId',
                    label: '',
                    type: 'string',
                    required: true,
                },
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/ApplicationPrincipals/{principalId}/Enable'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'enableGlobalApplicationPrincipal', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getGlobalApplicationPrincipal: {
        key: 'getGlobalApplicationPrincipal',
        noun: 'ApplicationPrincipals',
        display: {
            label: 'Get one application principal (any tenant)',
            description: 'Returns one application principal&#39;s detail by id: owning application, an enrollment, the system-locked flag, lifecycle status, and that enrollment&#39;s explicit least-privilege grants. Pass tenantId to select the enrollment for a multi-tenant principal; when omitted the principal&#39;s first enrollment is used. Global-administrator only.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'principalId',
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
                ...ApplicationPrincipalDetailDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/ApplicationPrincipals/{principalId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getGlobalApplicationPrincipal', response.json);
                    return results;
                })
            },
            sample: samples['ApplicationPrincipalDetailDtoEnvelopeSample']
        }
    },
    getGlobalApplicationPrincipals: {
        key: 'getGlobalApplicationPrincipals',
        noun: 'ApplicationPrincipals',
        display: {
            label: 'List application principals across all tenants',
            description: 'Lists every non-human application principal enrollment across ALL tenants (payload-safe fields only), including the platform-managed (system-locked) connectors. Use OData to scope — e.g. $filter&#x3D;SystemLocked eq true for the platform connectors or TenantId eq &#39;{guid}&#39; for one tenant — and to page/order. Global-administrator only.',
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
                ...ApplicationPrincipalDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...ApplicationPrincipalDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/ApplicationPrincipals'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...ApplicationPrincipalDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getGlobalApplicationPrincipals', response.json);
                    return results;
                })
            },
            sample: samples['ApplicationPrincipalDtoIReadOnlyListEnvelopeSample']
        }
    },
    getGlobalApplicationPrincipalsCount: {
        key: 'getGlobalApplicationPrincipalsCount',
        noun: 'ApplicationPrincipals',
        display: {
            label: 'Count application principals across all tenants',
            description: 'Returns the count of application principal enrollments across ALL tenants under the same OData shaping as the list read (e.g. $filter&#x3D;SystemLocked eq true). Global-administrator only.',
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
                ...ApplicationPrincipalDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/ApplicationPrincipals/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...ApplicationPrincipalDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getGlobalApplicationPrincipalsCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    grantGlobalApplicationPrincipalPermission: {
        key: 'grantGlobalApplicationPrincipalPermission',
        noun: 'ApplicationPrincipals',
        display: {
            label: 'Grant a permission to an application principal (any tenant)',
            description: 'Grants a single least-privilege permission to the application principal&#39;s enrollment in the tenantId tenant (grants are per-tenant, so tenantId is required). Owner/admin/wildcard/*_manage permissions are rejected even for a global admin (least-privilege by construction). Global-administrator only.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'principalId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...ApplicationPrincipalPermissionRequestDto.fields(),
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/ApplicationPrincipals/{principalId}/Permissions'),
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
                        ...ApplicationPrincipalPermissionRequestDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'grantGlobalApplicationPrincipalPermission', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    provisionGlobalApplicationPrincipal: {
        key: 'provisionGlobalApplicationPrincipal',
        noun: 'ApplicationPrincipals',
        display: {
            label: 'Provision an application principal (any tenant, incl. system-locked)',
            description: 'Idempotently provisions the application principal (and its own least-privilege enrollment) for a governed business application. tenantId selects the target tenant (defaults to the platform/root tenant). Unlike the per-tenant lane, a system-locked platform application is provisionable here. Global-administrator only.',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...ApplicationPrincipalProvisionRequestDto.fields(),
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
                ...ApplicationPrincipalProvisioningResultDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/ApplicationPrincipals/Provision'),
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
                        ...ApplicationPrincipalProvisionRequestDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'provisionGlobalApplicationPrincipal', response.json);
                    return results;
                })
            },
            sample: samples['ApplicationPrincipalProvisioningResultDtoEnvelopeSample']
        }
    },
    provisionPaymentsConnector: {
        key: 'provisionPaymentsConnector',
        noun: 'ApplicationPrincipals',
        display: {
            label: 'Provision the platform payments-connector identity',
            description: 'Idempotently stands up the platform payments-connector identity — its well-known business application, its application principal, and its own least-privilege enrollment (payments_create/payments_update/journals_post). tenantId selects the target tenant (defaults to the platform/root tenant). The provisioned connector then appears in this global list and (for its tenant) the per-tenant list. Global-administrator only.',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                ...ApplicationPrincipalProvisioningResultDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/ApplicationPrincipals/PaymentsConnector'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'provisionPaymentsConnector', response.json);
                    return results;
                })
            },
            sample: samples['ApplicationPrincipalProvisioningResultDtoEnvelopeSample']
        }
    },
    revokeGlobalApplicationPrincipalPermission: {
        key: 'revokeGlobalApplicationPrincipalPermission',
        noun: 'ApplicationPrincipals',
        display: {
            label: 'Revoke a permission from an application principal (any tenant)',
            description: 'Revokes a direct permission grant from the application principal&#39;s enrollment in the tenantId tenant (required). Idempotent. Global-administrator only.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'principalId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'permission',
                    label: '',
                    type: 'string',
                    required: true,
                },
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/ApplicationPrincipals/{principalId}/Permissions/{permission}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'revokeGlobalApplicationPrincipalPermission', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    suspendGlobalApplicationPrincipal: {
        key: 'suspendGlobalApplicationPrincipal',
        noun: 'ApplicationPrincipals',
        display: {
            label: 'Suspend an application principal (global)',
            description: 'Temporarily suspends the application principal; its identity is retained but it cannot act until reinstated (applies to system-locked principals here). tenantId scopes the action to a tenant the principal is enrolled in (required). Global-administrator only.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'principalId',
                    label: '',
                    type: 'string',
                    required: true,
                },
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/ApplicationPrincipals/{principalId}/Suspend'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'suspendGlobalApplicationPrincipal', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
