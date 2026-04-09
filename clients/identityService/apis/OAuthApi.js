const samples = require('../samples/OAuthApi');
const AuthorizationResultEnvelope = require('../models/AuthorizationResultEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const JsonWebKeySetEnvelope = require('../models/JsonWebKeySetEnvelope');
const JsonWebTokenEnvelope = require('../models/JsonWebTokenEnvelope');
const OAuthTokenRequest = require('../models/OAuthTokenRequest');
const OpenIdConfigurationEnvelope = require('../models/OpenIdConfigurationEnvelope');
const SigninModel = require('../models/SigninModel');
const StringListEnvelope = require('../models/StringListEnvelope');
const UserCreateDtoEnvelope = require('../models/UserCreateDtoEnvelope');
const utils = require('../utils/utils');

module.exports = {
    checkPasswordSignInAsync: {
        key: 'checkPasswordSignInAsync',
        noun: 'OAuth',
        display: {
            label: 'Check password sign-in',
            description: 'Verifies sign-in credentials and returns user details without creating a session.',
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
                ...UserCreateDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/OAuth/SignIn'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'checkPasswordSignInAsync', response.json);
                    return results;
                })
            },
            sample: samples['UserCreateDtoEnvelopeSample']
        }
    },
    get: {
        key: 'get',
        noun: 'OAuth',
        display: {
            label: 'Get current user identity',
            description: 'Returns the authorization result for the authenticated user, including identity and tenant context.',
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
                ...AuthorizationResultEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/OAuth/WhoAmI'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'get', response.json);
                    return results;
                })
            },
            sample: samples['AuthorizationResultEnvelopeSample']
        }
    },
    getJwKs: {
        key: 'getJwKs',
        noun: 'OAuth',
        display: {
            label: 'Get JSON Web Key Set',
            description: 'Retrieves the signing keys (JWKS) for a specific application.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'applicationId',
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
                ...JsonWebKeySetEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/OAuth/{applicationId}/Keys'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getJwKs', response.json);
                    return results;
                })
            },
            sample: samples['JsonWebKeySetEnvelopeSample']
        }
    },
    getOpenIdConfiguration: {
        key: 'getOpenIdConfiguration',
        noun: 'OAuth',
        display: {
            label: 'Get OpenID configuration',
            description: 'Retrieves the OpenID Connect discovery document for a specific application within a tenant.',
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
                    key: 'applicationId',
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
                ...OpenIdConfigurationEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/OAuth/{tenantId}/{applicationId}/.Well-Known/OpenId-Configuration'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getOpenIdConfiguration', response.json);
                    return results;
                })
            },
            sample: samples['OpenIdConfigurationEnvelopeSample']
        }
    },
    getPermissions: {
        key: 'getPermissions',
        noun: 'OAuth',
        display: {
            label: 'Get user permissions',
            description: 'Retrieves the list of permission identifiers for a specific user within a tenant context.',
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
                    key: 'userId',
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
                ...StringListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/OAuth/Permissions'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'userId': bundle.inputData?.['userId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPermissions', response.json);
                    return results;
                })
            },
            sample: samples['StringListEnvelopeSample']
        }
    },
    passwordSignInAsync: {
        key: 'passwordSignInAsync',
        noun: 'OAuth',
        display: {
            label: 'Sign in with password',
            description: 'Authenticates a user using email and password credentials.',
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
                ...SigninModel.fields(),
            ],
            outputFields: [
                ...JsonWebTokenEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/OAuth/SignIn'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...SigninModel.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'passwordSignInAsync', response.json);
                    return results;
                })
            },
            sample: samples['JsonWebTokenEnvelopeSample']
        }
    },
    token: {
        key: 'token',
        noun: 'OAuth',
        display: {
            label: 'Get OAuth token',
            description: 'Generates an OAuth token based on the provided credentials or grant type.',
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
                ...OAuthTokenRequest.fields(),
            ],
            outputFields: [
                ...JsonWebTokenEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/OAuth/Token'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...OAuthTokenRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'token', response.json);
                    return results;
                })
            },
            sample: samples['JsonWebTokenEnvelopeSample']
        }
    },
}
