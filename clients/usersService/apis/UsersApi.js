const samples = require('../samples/UsersApi');
const AddressDtoListEnvelope = require('../models/AddressDtoListEnvelope');
const CartDtoEnvelope = require('../models/CartDtoEnvelope');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ExtendedTenantDtoListEnvelope = require('../models/ExtendedTenantDtoListEnvelope');
const ExtendedTenantEnrollmentDtoListEnvelope = require('../models/ExtendedTenantEnrollmentDtoListEnvelope');
const ExtendedUserDtoEnvelope = require('../models/ExtendedUserDtoEnvelope');
const FollowRecordDtoListEnvelope = require('../models/FollowRecordDtoListEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const NotificationDtoListEnvelope = require('../models/NotificationDtoListEnvelope');
const Operation = require('../models/Operation');
const SocialProfileDtoEnvelope = require('../models/SocialProfileDtoEnvelope');
const TenantDtoListEnvelope = require('../models/TenantDtoListEnvelope');
const TenantEnrollmentDtoEnvelope = require('../models/TenantEnrollmentDtoEnvelope');
const TenantEnrollmentDtoListEnvelope = require('../models/TenantEnrollmentDtoListEnvelope');
const TenantInvitationDtoListEnvelope = require('../models/TenantInvitationDtoListEnvelope');
const UserDtoEnvelope = require('../models/UserDtoEnvelope');
const UserSettingsDtoEnvelope = require('../models/UserSettingsDtoEnvelope');
const UserSettingsUpdateDto = require('../models/UserSettingsUpdateDto');
const UserUpdateDto = require('../models/UserUpdateDto');
const WalletDtoEnvelope = require('../models/WalletDtoEnvelope');
const utils = require('../utils/utils');
const FormData = require('form-data');

module.exports = {
    countCurrentUserFollowersAsync: {
        key: 'countCurrentUserFollowersAsync',
        noun: 'Users',
        display: {
            label: 'Count the social profiles that follow the current user',
            description: 'Count the social profiles that follow the current user',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Followers/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countCurrentUserFollowersAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    countCurrentUserFollowsAsync: {
        key: 'countCurrentUserFollowsAsync',
        noun: 'Users',
        display: {
            label: 'Count the social profiles that the current user follows',
            description: 'Count the social profiles that the current user follows',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Follows/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countCurrentUserFollowsAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    countCurrentUserNotificationsAsync: {
        key: 'countCurrentUserNotificationsAsync',
        noun: 'Users',
        display: {
            label: 'Count the notifications for the current user',
            description: 'Count the notifications for the current user',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Notifications/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countCurrentUserNotificationsAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    countCurrentUserTenantsAsync: {
        key: 'countCurrentUserTenantsAsync',
        noun: 'Users',
        display: {
            label: 'Count the tenants that the current user is enrolled in',
            description: 'Count the tenants that the current user is enrolled in',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Tenants/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countCurrentUserTenantsAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getCurrentUserAddressesAsync: {
        key: 'getCurrentUserAddressesAsync',
        noun: 'Users',
        display: {
            label: 'Get the list of addresses for the current user',
            description: 'Get the list of addresses for the current user',
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
                ...AddressDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Addresses'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurrentUserAddressesAsync', response.json);
                    return results;
                })
            },
            sample: samples['AddressDtoListEnvelopeSample']
        }
    },
    getCurrentUserAsync: {
        key: 'getCurrentUserAsync',
        noun: 'Users',
        display: {
            label: 'Gets the current user',
            description: 'Get the currently acting user.',
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
                ...UserDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurrentUserAsync', response.json);
                    return results;
                })
            },
            sample: samples['UserDtoEnvelopeSample']
        }
    },
    getCurrentUserAvatarAsync: {
        key: 'getCurrentUserAvatarAsync',
        noun: 'Users',
        display: {
            label: 'Get the current user&#39;s avatar',
            description: 'Get the current user&#39;s avatar',
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
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Avatar'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurrentUserAvatarAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getCurrentUserCartAsync: {
        key: 'getCurrentUserCartAsync',
        noun: 'Users',
        display: {
            label: 'Get the current user&#39;s cart',
            description: 'Get the current user&#39;s cart',
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
                ...CartDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Cart'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurrentUserCartAsync', response.json);
                    return results;
                })
            },
            sample: samples['CartDtoEnvelopeSample']
        }
    },
    getCurrentUserEnrollmentsAsync: {
        key: 'getCurrentUserEnrollmentsAsync',
        noun: 'Users',
        display: {
            label: 'Get the list of enrollments for the current user',
            description: 'Get the list of enrollments for the current user',
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
                ...TenantEnrollmentDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Enrollments'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurrentUserEnrollmentsAsync', response.json);
                    return results;
                })
            },
            sample: samples['TenantEnrollmentDtoListEnvelopeSample']
        }
    },
    getCurrentUserEnrollmentsExtendedAsync: {
        key: 'getCurrentUserEnrollmentsExtendedAsync',
        noun: 'Users',
        display: {
            label: 'Get the list of enrollments for the current user',
            description: 'Get the list of enrollments for the current user',
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
                ...ExtendedTenantEnrollmentDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Enrollments/Extended'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurrentUserEnrollmentsExtendedAsync', response.json);
                    return results;
                })
            },
            sample: samples['ExtendedTenantEnrollmentDtoListEnvelopeSample']
        }
    },
    getCurrentUserFollowersAsync: {
        key: 'getCurrentUserFollowersAsync',
        noun: 'Users',
        display: {
            label: 'Get the social profiles that follow the current user',
            description: 'Get the social profiles that follow the current user',
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
                ...FollowRecordDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Followers'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurrentUserFollowersAsync', response.json);
                    return results;
                })
            },
            sample: samples['FollowRecordDtoListEnvelopeSample']
        }
    },
    getCurrentUserFollowsAsync: {
        key: 'getCurrentUserFollowsAsync',
        noun: 'Users',
        display: {
            label: 'Get the social profiles that the current user follows',
            description: 'Get the social profiles that the current user follows',
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
                ...FollowRecordDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Follows'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurrentUserFollowsAsync', response.json);
                    return results;
                })
            },
            sample: samples['FollowRecordDtoListEnvelopeSample']
        }
    },
    getCurrentUserInvitationAsync: {
        key: 'getCurrentUserInvitationAsync',
        noun: 'Users',
        display: {
            label: 'Get the list of tenant enrollment invitations for the current user',
            description: 'Get the list of tenant enrollment invitations for the current user',
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
                ...TenantInvitationDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Invitations'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurrentUserInvitationAsync', response.json);
                    return results;
                })
            },
            sample: samples['TenantInvitationDtoListEnvelopeSample']
        }
    },
    getCurrentUserNotificationsAsync: {
        key: 'getCurrentUserNotificationsAsync',
        noun: 'Users',
        display: {
            label: 'Get the list of notifications for the current user',
            description: 'Get the list of notifications for the current user',
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
                ...NotificationDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Notifications'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurrentUserNotificationsAsync', response.json);
                    return results;
                })
            },
            sample: samples['NotificationDtoListEnvelopeSample']
        }
    },
    getCurrentUserSettingsAsync: {
        key: 'getCurrentUserSettingsAsync',
        noun: 'Users',
        display: {
            label: 'Get the settings for the current user',
            description: 'Get the settings for the current user',
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
                ...UserSettingsDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Settings'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurrentUserSettingsAsync', response.json);
                    return results;
                })
            },
            sample: samples['UserSettingsDtoEnvelopeSample']
        }
    },
    getCurrentUserSocialProfileAsync: {
        key: 'getCurrentUserSocialProfileAsync',
        noun: 'Users',
        display: {
            label: 'Get the current user&#39;s social profile',
            description: 'Get the current user&#39;s social profile',
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
                ...SocialProfileDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/SocialProfile'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurrentUserSocialProfileAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialProfileDtoEnvelopeSample']
        }
    },
    getCurrentUserTenantsAsync: {
        key: 'getCurrentUserTenantsAsync',
        noun: 'Users',
        display: {
            label: 'Get the tenants that the current user is enrolled in',
            description: 'Get the tenants that the current user is enrolled in',
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
                ...TenantDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Tenants'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurrentUserTenantsAsync', response.json);
                    return results;
                })
            },
            sample: samples['TenantDtoListEnvelopeSample']
        }
    },
    getCurrentUserTenantsExtendedAsync: {
        key: 'getCurrentUserTenantsExtendedAsync',
        noun: 'Users',
        display: {
            label: 'Get the tenants that the current user is enrolled in',
            description: 'Get the tenants that the current user is enrolled in',
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
                ...ExtendedTenantDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Tenants/Extended'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurrentUserTenantsExtendedAsync', response.json);
                    return results;
                })
            },
            sample: samples['ExtendedTenantDtoListEnvelopeSample']
        }
    },
    getCurrentUserWalletAsync: {
        key: 'getCurrentUserWalletAsync',
        noun: 'Users',
        display: {
            label: 'Get the current user&#39;s billing profile',
            description: 'Get the current user&#39;s billing profile',
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
                ...WalletDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Wallet'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurrentUserWalletAsync', response.json);
                    return results;
                })
            },
            sample: samples['WalletDtoEnvelopeSample']
        }
    },
    getEnrollmentAsync: {
        key: 'getEnrollmentAsync',
        noun: 'Users',
        display: {
            label: 'Get a single TenantEnrollment by its ID',
            description: 'Get a single TenantEnrollment by its ID',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'enrollmentId',
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
                ...TenantEnrollmentDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Enrollments/{enrollmentId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getEnrollmentAsync', response.json);
                    return results;
                })
            },
            sample: samples['TenantEnrollmentDtoEnvelopeSample']
        }
    },
    getExtendedCurrentUserAsync: {
        key: 'getExtendedCurrentUserAsync',
        noun: 'Users',
        display: {
            label: 'Get the current user&#39;s extended profile',
            description: 'Get the current user&#39;s extended profile',
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
                ...ExtendedUserDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Extended'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getExtendedCurrentUserAsync', response.json);
                    return results;
                })
            },
            sample: samples['ExtendedUserDtoEnvelopeSample']
        }
    },
    patchCurrentUserAsync: {
        key: 'patchCurrentUserAsync',
        noun: 'Users',
        display: {
            label: 'Partially update the current user&#39;s profile',
            description: 'Partially update the current user&#39;s profile',
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
                {
                    key: 'Operation',
                    label: '',
                    type: 'string',
                }
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me'),
                    method: 'PATCH',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml, multipart/form-data',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...Operation.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchCurrentUserAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateAvatarAsync: {
        key: 'updateAvatarAsync',
        noun: 'Users',
        display: {
            label: 'Update the current user&#39;s avatar',
            description: 'Update the current user&#39;s avatar',
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
                {
                    key: 'avatar',
                    label: '',
                    type: 'file',
                },
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['avatar'].split('/').slice(-1)[0]
                formData.append('avatar', (await (await z.request({url: bundle.inputData?.['avatar'], method: 'GET', raw: true})).buffer()), { filename: filename })
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Avatar'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: formData,
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateAvatarAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateCurrentUserAsync: {
        key: 'updateCurrentUserAsync',
        noun: 'Users',
        display: {
            label: 'Update the current user&#39;s profile',
            description: 'Update the current user&#39;s profile',
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
                ...UserUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml, multipart/form-data',
                        'Accept': 'application/json, application/xml, multipart/form-data',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateCurrentUserAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateCurrentUserSettingsAsync: {
        key: 'updateCurrentUserSettingsAsync',
        noun: 'Users',
        display: {
            label: 'Update the settings for the current user',
            description: 'Update the settings for the current user',
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
                ...UserSettingsUpdateDto.fields(),
            ],
            outputFields: [
                ...UserSettingsDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Settings'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml, multipart/form-data',
                        'Accept': 'application/json, application/xml, multipart/form-data',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...UserSettingsUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateCurrentUserSettingsAsync', response.json);
                    return results;
                })
            },
            sample: samples['UserSettingsDtoEnvelopeSample']
        }
    },
}
