const samples = require('../samples/SocialFeedsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const Operation = require('../models/Operation');
const SocialFeedDtoEnvelope = require('../models/SocialFeedDtoEnvelope');
const SocialFeedDtoListEnvelope = require('../models/SocialFeedDtoListEnvelope');
const SocialFeedPostCreateDto = require('../models/SocialFeedPostCreateDto');
const SocialFeedPostDtoEnvelope = require('../models/SocialFeedPostDtoEnvelope');
const SocialFeedPostDtoListEnvelope = require('../models/SocialFeedPostDtoListEnvelope');
const SocialFeedPostUpdateDto = require('../models/SocialFeedPostUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    createFeedPostAsync: {
        key: 'createFeedPostAsync',
        noun: 'SocialFeeds',
        display: {
            label: 'Create a social feed post',
            description: 'Creates a new post in a specific social feed.',
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
                    key: 'socialFeedId',
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
                ...SocialFeedPostCreateDto.fields(),
            ],
            outputFields: [
                ...SocialFeedPostDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts'),
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
                        ...SocialFeedPostCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createFeedPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialFeedPostDtoEnvelopeSample']
        }
    },
    deleteFeedPostAsync: {
        key: 'deleteFeedPostAsync',
        noun: 'SocialFeeds',
        display: {
            label: 'Delete a social feed post',
            description: 'Deletes a post from a specific social feed.',
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
                    key: 'socialFeedId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'feedPostId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/{feedPostId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteFeedPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getFeedNotifications: {
        key: 'getFeedNotifications',
        noun: 'SocialFeeds',
        display: {
            label: 'Get social feeds',
            description: 'Retrieves a list of social feeds for the specified social profile.',
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
                ...SocialFeedDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialFeeds'),
                    method: 'GET',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFeedNotifications', response.json);
                    return results;
                })
            },
            sample: samples['SocialFeedDtoListEnvelopeSample']
        }
    },
    getFeedPostAsync: {
        key: 'getFeedPostAsync',
        noun: 'SocialFeeds',
        display: {
            label: 'Get social feed post by ID',
            description: 'Retrieves a specific post from a social feed by its ID.',
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
                    key: 'socialFeedId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'feedPostId',
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
                ...SocialFeedPostDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/{feedPostId}'),
                    method: 'GET',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFeedPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialFeedPostDtoEnvelopeSample']
        }
    },
    getFeedPostsAsync: {
        key: 'getFeedPostsAsync',
        noun: 'SocialFeeds',
        display: {
            label: 'Get social feed posts',
            description: 'Retrieves a list of posts for a specific social feed.',
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
                    key: 'socialFeedId',
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
                ...SocialFeedPostDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts'),
                    method: 'GET',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFeedPostsAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialFeedPostDtoListEnvelopeSample']
        }
    },
    getFeedPostsCountAsync: {
        key: 'getFeedPostsCountAsync',
        noun: 'SocialFeeds',
        display: {
            label: 'Count social feed posts',
            description: 'Returns the count of posts for a specific social feed.',
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
                    key: 'socialFeedId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/Count'),
                    method: 'GET',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFeedPostsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getNotificationAsync: {
        key: 'getNotificationAsync',
        noun: 'SocialFeeds',
        display: {
            label: 'Get social feed by ID',
            description: 'Retrieves a specific social feed by its ID.',
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
                    key: 'socialFeedId',
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
                ...SocialFeedDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialFeeds/{socialFeedId}'),
                    method: 'GET',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getNotificationAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialFeedDtoEnvelopeSample']
        }
    },
    getNotificationsCountAsync: {
        key: 'getNotificationsCountAsync',
        noun: 'SocialFeeds',
        display: {
            label: 'Count social feeds',
            description: 'Returns the count of social feeds for the specified social profile.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialFeeds/Count'),
                    method: 'GET',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getNotificationsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    patchFeedPostAsync: {
        key: 'patchFeedPostAsync',
        noun: 'SocialFeeds',
        display: {
            label: 'Patch a social feed post',
            description: 'Partially updates an existing post in a specific social feed using a JSON Patch document.',
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
                    key: 'socialFeedId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'feedPostId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/{feedPostId}'),
                    method: 'PATCH',
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
                        ...Operation.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchFeedPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateFeedPostAsync: {
        key: 'updateFeedPostAsync',
        noun: 'SocialFeeds',
        display: {
            label: 'Update a social feed post',
            description: 'Updates an existing post in a specific social feed.',
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
                    key: 'socialFeedId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'feedPostId',
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
                ...SocialFeedPostUpdateDto.fields(),
            ],
            outputFields: [
                ...SocialFeedPostDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialFeeds/{socialFeedId}/Posts/{feedPostId}'),
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
                        ...SocialFeedPostUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateFeedPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialFeedPostDtoEnvelopeSample']
        }
    },
}
