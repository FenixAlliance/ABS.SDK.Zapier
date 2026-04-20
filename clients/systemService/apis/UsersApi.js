const samples = require('../samples/UsersApi');
const EmailDispatchRequest = require('../models/EmailDispatchRequest');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ExtendedUserDtoEnvelope = require('../models/ExtendedUserDtoEnvelope');
const ExtendedUserDtoListEnvelope = require('../models/ExtendedUserDtoListEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const UserCreateDto = require('../models/UserCreateDto');
const UserDtoEnvelope = require('../models/UserDtoEnvelope');
const UserDtoListEnvelope = require('../models/UserDtoListEnvelope');
const UserUpdateDto = require('../models/UserUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    adminPreviewUserEmailTemplate: {
        key: 'adminPreviewUserEmailTemplate',
        noun: 'Users',
        display: {
            label: 'Preview the rendered email for a user.',
            description: 'This action is only available for users with the &#39;business_owner&#39; role (global administrators).',
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
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
                ...EmailDispatchRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/Users/{userId}/Emails/Preview'),
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
                        ...EmailDispatchRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'adminPreviewUserEmailTemplate', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    adminSendUserEmail: {
        key: 'adminSendUserEmail',
        noun: 'Users',
        display: {
            label: 'Send an email to a user.',
            description: 'This action is only available for users with the &#39;business_owner&#39; role (global administrators).',
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
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
                ...EmailDispatchRequest.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/Users/{userId}/Emails/Send'),
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
                        ...EmailDispatchRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'adminSendUserEmail', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createAccountHolderAsync: {
        key: 'createAccountHolderAsync',
        noun: 'Users',
        display: {
            label: 'Create a new user',
            description: 'This action is only available for users with the &#39;business_owner&#39; role (global administrators).',
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
                ...UserCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/Users'),
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
                        ...UserCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createAccountHolderAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteAccountHolderAsync: {
        key: 'deleteAccountHolderAsync',
        noun: 'Users',
        display: {
            label: 'Delete a user',
            description: 'This action is only available for users with the &#39;business_owner&#39; role (global administrators).',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/Users/{userId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteAccountHolderAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getExtendedAccountHolderAsync: {
        key: 'getExtendedAccountHolderAsync',
        noun: 'Users',
        display: {
            label: 'Retrieve an extended user by ID',
            description: 'This action is only available for users with the &#39;business_owner&#39; role (global administrators).',
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
                ...ExtendedUserDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/Users/{userId}/Extended'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getExtendedAccountHolderAsync', response.json);
                    return results;
                })
            },
            sample: samples['ExtendedUserDtoEnvelopeSample']
        }
    },
    getExtendedUsersAsync: {
        key: 'getExtendedUsersAsync',
        noun: 'Users',
        display: {
            label: 'Retrieve a list of extended users',
            description: 'This action is only available for users with the &#39;business_owner&#39; role (global administrators).',
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
                ...ExtendedUserDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/Users/Extended'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getExtendedUsersAsync', response.json);
                    return results;
                })
            },
            sample: samples['ExtendedUserDtoListEnvelopeSample']
        }
    },
    getExtendedUsersCountAsync: {
        key: 'getExtendedUsersCountAsync',
        noun: 'Users',
        display: {
            label: 'Get the count of extended users',
            description: 'This action is only available for users with the &#39;business_owner&#39; role (global administrators).',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/Users/Extended/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getExtendedUsersCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getUserAsync: {
        key: 'getUserAsync',
        noun: 'Users',
        display: {
            label: 'Retrieve a user by ID',
            description: 'This action is only available for users with the &#39;business_owner&#39; role (global administrators).',
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
                ...UserDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/Users/{userId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getUserAsync', response.json);
                    return results;
                })
            },
            sample: samples['UserDtoEnvelopeSample']
        }
    },
    getUsersAsync: {
        key: 'getUsersAsync',
        noun: 'Users',
        display: {
            label: 'Retrieve a list of users',
            description: 'This action is only available for users with the &#39;business_owner&#39; role (global administrators).',
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
                ...UserDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/Users'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getUsersAsync', response.json);
                    return results;
                })
            },
            sample: samples['UserDtoListEnvelopeSample']
        }
    },
    getUsersCountAsync: {
        key: 'getUsersCountAsync',
        noun: 'Users',
        display: {
            label: 'Get the count of users',
            description: 'This action is only available for users with the &#39;business_owner&#39; role (global administrators).',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/Users/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getUsersCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    updateAccountHolderAsync: {
        key: 'updateAccountHolderAsync',
        noun: 'Users',
        display: {
            label: 'Update a user',
            description: 'This action is only available for users with the &#39;business_owner&#39; role (global administrators).',
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
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
                ...UserUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/Users/{userId}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...UserUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateAccountHolderAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
