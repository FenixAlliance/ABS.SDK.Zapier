const samples = require('../samples/FenixAllianceABPWebApi');
const AccessTokenResponse = require('../models/AccessTokenResponse');
const ForgotPasswordRequest = require('../models/ForgotPasswordRequest');
const HttpValidationProblemDetails = require('../models/HttpValidationProblemDetails');
const InfoRequest = require('../models/InfoRequest');
const InfoResponse = require('../models/InfoResponse');
const LoginRequest = require('../models/LoginRequest');
const RefreshRequest = require('../models/RefreshRequest');
const RegisterRequest = require('../models/RegisterRequest');
const ResendConfirmationEmailRequest = require('../models/ResendConfirmationEmailRequest');
const ResetPasswordRequest = require('../models/ResetPasswordRequest');
const TwoFactorRequest = require('../models/TwoFactorRequest');
const TwoFactorResponse = require('../models/TwoFactorResponse');
const utils = require('../utils/utils');

module.exports = {
    forgotPasswordPost: {
        key: 'forgotPasswordPost',
        noun: 'FenixAlliance.ABP.Web',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...ForgotPasswordRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/forgotPassword'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/problem+json',
                    },
                    params: {
                    },
                    body: {
                        ...ForgotPasswordRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'forgotPasswordPost', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    healthGet: {
        key: 'healthGet',
        noun: 'FenixAlliance.ABP.Web',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/health'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'healthGet', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    helloGet: {
        key: 'helloGet',
        noun: 'FenixAlliance.ABP.Web',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/hello'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'helloGet', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    loginPost: {
        key: 'loginPost',
        noun: 'FenixAlliance.ABP.Web',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...LoginRequest.fields(),
                {
                    key: 'useCookies',
                    label: '',
                    type: 'boolean',
                },
                {
                    key: 'useSessionCookies',
                    label: '',
                    type: 'boolean',
                },
            ],
            outputFields: [
                ...AccessTokenResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/login'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        'useCookies': bundle.inputData?.['useCookies'],
                        'useSessionCookies': bundle.inputData?.['useSessionCookies'],
                    },
                    body: {
                        ...LoginRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'loginPost', response.json);
                    return results;
                })
            },
            sample: samples['AccessTokenResponseSample']
        }
    },
    manage2faPost: {
        key: 'manage2faPost',
        noun: 'FenixAlliance.ABP.Web',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...TwoFactorRequest.fields(),
            ],
            outputFields: [
                ...TwoFactorResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/manage/2fa'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json, application/problem+json',
                    },
                    params: {
                    },
                    body: {
                        ...TwoFactorRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'manage2faPost', response.json);
                    return results;
                })
            },
            sample: samples['TwoFactorResponseSample']
        }
    },
    manageInfoGet: {
        key: 'manageInfoGet',
        noun: 'FenixAlliance.ABP.Web',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
                ...InfoResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/manage/info'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/problem+json',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'manageInfoGet', response.json);
                    return results;
                })
            },
            sample: samples['InfoResponseSample']
        }
    },
    manageInfoPost: {
        key: 'manageInfoPost',
        noun: 'FenixAlliance.ABP.Web',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...InfoRequest.fields(),
            ],
            outputFields: [
                ...InfoResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/manage/info'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json, application/problem+json',
                    },
                    params: {
                    },
                    body: {
                        ...InfoRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'manageInfoPost', response.json);
                    return results;
                })
            },
            sample: samples['InfoResponseSample']
        }
    },
    mapIdentityApi/confirmEmail: {
        key: 'mapIdentityApi/confirmEmail',
        noun: 'FenixAlliance.ABP.Web',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'userId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'code',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'changedEmail',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/confirmEmail'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                        'userId': bundle.inputData?.['userId'],
                        'code': bundle.inputData?.['code'],
                        'changedEmail': bundle.inputData?.['changedEmail'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'mapIdentityApi/confirmEmail', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    refreshPost: {
        key: 'refreshPost',
        noun: 'FenixAlliance.ABP.Web',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...RefreshRequest.fields(),
            ],
            outputFields: [
                ...AccessTokenResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/refresh'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                    },
                    body: {
                        ...RefreshRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'refreshPost', response.json);
                    return results;
                })
            },
            sample: samples['AccessTokenResponseSample']
        }
    },
    registerPost: {
        key: 'registerPost',
        noun: 'FenixAlliance.ABP.Web',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...RegisterRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/register'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/problem+json',
                    },
                    params: {
                    },
                    body: {
                        ...RegisterRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'registerPost', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    resendConfirmationEmailPost: {
        key: 'resendConfirmationEmailPost',
        noun: 'FenixAlliance.ABP.Web',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...ResendConfirmationEmailRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/resendConfirmationEmail'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                        ...ResendConfirmationEmailRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'resendConfirmationEmailPost', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    resetPasswordPost: {
        key: 'resetPasswordPost',
        noun: 'FenixAlliance.ABP.Web',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                ...ResetPasswordRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/resetPassword'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/problem+json',
                    },
                    params: {
                    },
                    body: {
                        ...ResetPasswordRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'resetPasswordPost', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    versionGet: {
        key: 'versionGet',
        noun: 'FenixAlliance.ABP.Web',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/version'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'versionGet', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
