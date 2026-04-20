const samples = require('../samples/SocialProfilesApi');
const BooleanEnvelope = require('../models/BooleanEnvelope');
const ConversationCreateDto = require('../models/ConversationCreateDto');
const ConversationDtoListEnvelope = require('../models/ConversationDtoListEnvelope');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const FollowRecordDtoListEnvelope = require('../models/FollowRecordDtoListEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const NotificationDtoListEnvelope = require('../models/NotificationDtoListEnvelope');
const PrivateMessageCreateDto = require('../models/PrivateMessageCreateDto');
const PrivateMessageDtoListEnvelope = require('../models/PrivateMessageDtoListEnvelope');
const PrivateMessageUpdateDto = require('../models/PrivateMessageUpdateDto');
const SocialProfileDtoEnvelope = require('../models/SocialProfileDtoEnvelope');
const SocialProfileDtoListEnvelope = require('../models/SocialProfileDtoListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    countConversationsAsync: {
        key: 'countConversationsAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Count Conversations',
            description: 'Count conversations for a social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}/Conversations/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countConversationsAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    countFollowedProfilesAsync: {
        key: 'countFollowedProfilesAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Count Followed Profiles',
            description: 'Count followed profiles for a social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/Profiles/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countFollowedProfilesAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    countFollowerProfilesAsync: {
        key: 'countFollowerProfilesAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Count Follower Profiles',
            description: 'Count follower profiles for a social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}/Followers/Profiles/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countFollowerProfilesAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    countFollowersAsync: {
        key: 'countFollowersAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Count Followers',
            description: 'Count followers for a social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}/Followers/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countFollowersAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    countFollowsAsync: {
        key: 'countFollowsAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Count Follows',
            description: 'Count follows for a social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countFollowsAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    countMessagesAsync: {
        key: 'countMessagesAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Count Messages',
            description: 'Count messages for a conversation.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'conversationId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{conversationId}/Messages/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countMessagesAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    countNotificationsAsync: {
        key: 'countNotificationsAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Count Notifications',
            description: 'Count notifications for a social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countNotificationsAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    countSocialProfilesAsync: {
        key: 'countSocialProfilesAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Count Social Profiles',
            description: 'Count social profiles.',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countSocialProfilesAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    createConversationAsync: {
        key: 'createConversationAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Create Conversation',
            description: 'Create a new conversation.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
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
                ...ConversationCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}/Conversations'),
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
                        ...ConversationCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createConversationAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createMessageAsync: {
        key: 'createMessageAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Create Message',
            description: 'Create a new message.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'conversationId',
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
                ...PrivateMessageCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{conversationId}/Messages'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'socialProfileId': bundle.inputData?.['socialProfileId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...PrivateMessageCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createMessageAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteMessageAsync: {
        key: 'deleteMessageAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Delete Message',
            description: 'Delete a message.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'conversationId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'messageId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{conversationId}/Messages/{messageId}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'socialProfileId': bundle.inputData?.['socialProfileId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteMessageAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    followAsync: {
        key: 'followAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Follow',
            description: 'Follow a social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'followedSocialProfileId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/{followedSocialProfileId}'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'followAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    followExistsAsync: {
        key: 'followExistsAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Check if Follow Exists',
            description: 'Check if a follow record exists between two social profiles.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'followedSocialProfileId',
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
                ...BooleanEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/{followedSocialProfileId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'followExistsAsync', response.json);
                    return results;
                })
            },
            sample: samples['BooleanEnvelopeSample']
        }
    },
    getConversationsAsync: {
        key: 'getConversationsAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Get Conversations',
            description: 'Get a list of conversations for a social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
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
                ...ConversationDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}/Conversations'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getConversationsAsync', response.json);
                    return results;
                })
            },
            sample: samples['ConversationDtoListEnvelopeSample']
        }
    },
    getFollowedProfilesAsync: {
        key: 'getFollowedProfilesAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Get Followed Profiles',
            description: 'Get a list of followed profiles for a social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
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
                ...SocialProfileDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/Profiles'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFollowedProfilesAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialProfileDtoListEnvelopeSample']
        }
    },
    getFollowerProfilesAsync: {
        key: 'getFollowerProfilesAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Get Follower Profiles',
            description: 'Get a list of follower profiles for a social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
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
                ...SocialProfileDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}/Followers/Profiles'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFollowerProfilesAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialProfileDtoListEnvelopeSample']
        }
    },
    getFollowersAsync: {
        key: 'getFollowersAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Get Followers',
            description: 'Get a list of followers for a social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
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
                ...FollowRecordDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}/Followers'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFollowersAsync', response.json);
                    return results;
                })
            },
            sample: samples['FollowRecordDtoListEnvelopeSample']
        }
    },
    getFollowsAsync: {
        key: 'getFollowsAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Get Follows',
            description: 'Get a list of follows for a social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
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
                ...FollowRecordDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFollowsAsync', response.json);
                    return results;
                })
            },
            sample: samples['FollowRecordDtoListEnvelopeSample']
        }
    },
    getMessagesAsync: {
        key: 'getMessagesAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Get Messages',
            description: 'Get a list of messages for a conversation.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'conversationId',
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
                ...PrivateMessageDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{conversationId}/Messages'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMessagesAsync', response.json);
                    return results;
                })
            },
            sample: samples['PrivateMessageDtoListEnvelopeSample']
        }
    },
    getNotificationsAsync: {
        key: 'getNotificationsAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Get Notifications',
            description: 'Get a list of notifications for a social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
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
                ...NotificationDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}/Notifications'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getNotificationsAsync', response.json);
                    return results;
                })
            },
            sample: samples['NotificationDtoListEnvelopeSample']
        }
    },
    getSocialProfileAsync: {
        key: 'getSocialProfileAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Get Social Profile',
            description: 'Get a social profile by ID.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
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
                ...SocialProfileDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSocialProfileAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialProfileDtoEnvelopeSample']
        }
    },
    getSocialProfilesAsync: {
        key: 'getSocialProfilesAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Get Social Profiles',
            description: 'Get a list of social profiles.',
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
                ...SocialProfileDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSocialProfilesAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialProfileDtoListEnvelopeSample']
        }
    },
    unfollowAsync: {
        key: 'unfollowAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Unfollow',
            description: 'Unfollow a social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'followedSocialProfileId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{socialProfileId}/Follows/{followedSocialProfileId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'unfollowAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateMessageAsync: {
        key: 'updateMessageAsync',
        noun: 'SocialProfiles',
        display: {
            label: 'Update Message',
            description: 'Update a message.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'conversationId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'messageId',
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
                ...PrivateMessageUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/SocialProfiles/{conversationId}/Messages/{messageId}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'socialProfileId': bundle.inputData?.['socialProfileId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...PrivateMessageUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateMessageAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
