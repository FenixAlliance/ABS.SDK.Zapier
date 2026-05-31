const samples = require('../samples/SocialPostsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const SocialPostAttachmentCreateDto = require('../models/SocialPostAttachmentCreateDto');
const SocialPostAttachmentDtoEnvelope = require('../models/SocialPostAttachmentDtoEnvelope');
const SocialPostAttachmentDtoListEnvelope = require('../models/SocialPostAttachmentDtoListEnvelope');
const SocialPostAttachmentUpdateDto = require('../models/SocialPostAttachmentUpdateDto');
const SocialPostCommentCreateDto = require('../models/SocialPostCommentCreateDto');
const SocialPostCommentDtoEnvelope = require('../models/SocialPostCommentDtoEnvelope');
const SocialPostCommentDtoListEnvelope = require('../models/SocialPostCommentDtoListEnvelope');
const SocialPostCommentUpdateDto = require('../models/SocialPostCommentUpdateDto');
const SocialPostCreateDto = require('../models/SocialPostCreateDto');
const SocialPostDtoEnvelope = require('../models/SocialPostDtoEnvelope');
const SocialPostDtoListEnvelope = require('../models/SocialPostDtoListEnvelope');
const SocialPostUpdateDto = require('../models/SocialPostUpdateDto');
const SocialReactionCreateDto = require('../models/SocialReactionCreateDto');
const SocialReactionDtoEnvelope = require('../models/SocialReactionDtoEnvelope');
const SocialReactionDtoListEnvelope = require('../models/SocialReactionDtoListEnvelope');
const SocialReactionUpdateDto = require('../models/SocialReactionUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    createSocialPostAsync: {
        key: 'createSocialPostAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Create a social post',
            description: 'Creates a new social post for the specified social profile.',
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
                ...SocialPostCreateDto.fields(),
            ],
            outputFields: [
                ...SocialPostDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts'),
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
                        ...SocialPostCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createSocialPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialPostDtoEnvelopeSample']
        }
    },
    createSocialPostAttachmentAsync: {
        key: 'createSocialPostAttachmentAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Create a social post attachment',
            description: 'Creates a new attachment for a specific social post.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
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
                ...SocialPostAttachmentCreateDto.fields(),
            ],
            outputFields: [
                ...SocialPostAttachmentDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments'),
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
                        ...SocialPostAttachmentCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createSocialPostAttachmentAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialPostAttachmentDtoEnvelopeSample']
        }
    },
    createSocialPostCommentAsync: {
        key: 'createSocialPostCommentAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Create a social post comment',
            description: 'Creates a new comment on a specific social post.',
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
                    key: 'socialPostId',
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
                ...SocialPostCommentCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Comments'),
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
                        ...SocialPostCommentCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createSocialPostCommentAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createSocialPostReactionAsync: {
        key: 'createSocialPostReactionAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Create a social post reaction',
            description: 'Creates a new reaction on a specific social post.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
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
                ...SocialReactionCreateDto.fields(),
            ],
            outputFields: [
                ...SocialReactionDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions'),
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
                        ...SocialReactionCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createSocialPostReactionAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialReactionDtoEnvelopeSample']
        }
    },
    deleteSocialPostAsync: {
        key: 'deleteSocialPostAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Delete a social post',
            description: 'Deletes a social post by its ID.',
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
                    key: 'socialPostId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteSocialPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteSocialPostAttachmentAsync: {
        key: 'deleteSocialPostAttachmentAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Delete a social post attachment',
            description: 'Deletes an attachment from a specific social post.',
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
                    key: 'socialPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'attachmentId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/{attachmentId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteSocialPostAttachmentAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteSocialPostCommentAsync: {
        key: 'deleteSocialPostCommentAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Delete a social post comment',
            description: 'Deletes a comment from a specific social post.',
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
                    key: 'socialPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'commentId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteSocialPostCommentAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteSocialPostReactionAsync: {
        key: 'deleteSocialPostReactionAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Delete a social post reaction',
            description: 'Deletes a reaction from a specific social post.',
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
                    key: 'socialPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'reactionId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions/{reactionId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteSocialPostReactionAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getSocialPostAsync: {
        key: 'getSocialPostAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Get social post by ID',
            description: 'Retrieves a specific social post by its ID.',
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
                    key: 'socialPostId',
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
                ...SocialPostDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSocialPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialPostDtoEnvelopeSample']
        }
    },
    getSocialPostAttachmentAsync: {
        key: 'getSocialPostAttachmentAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Get social post attachment by ID',
            description: 'Retrieves a specific attachment from a social post by its ID.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'attachmentId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/{attachmentId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSocialPostAttachmentAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getSocialPostAttachmentsAsync: {
        key: 'getSocialPostAttachmentsAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Get social post attachments',
            description: 'Retrieves a list of attachments for a specific social post.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialPostId',
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
                ...SocialPostAttachmentDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSocialPostAttachmentsAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialPostAttachmentDtoListEnvelopeSample']
        }
    },
    getSocialPostAttachmentsCountAsync: {
        key: 'getSocialPostAttachmentsCountAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Count social post attachments',
            description: 'Returns the count of attachments for a specific social post.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialPostId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSocialPostAttachmentsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getSocialPostCommentAsync: {
        key: 'getSocialPostCommentAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Get social post comment by ID',
            description: 'Retrieves a specific comment from a social post by its ID.',
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
                    key: 'socialPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'commentId',
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
                ...SocialPostCommentDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSocialPostCommentAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialPostCommentDtoEnvelopeSample']
        }
    },
    getSocialPostCommentsAsync: {
        key: 'getSocialPostCommentsAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Get social post comments',
            description: 'Retrieves a list of comments for a specific social post.',
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
                    key: 'socialPostId',
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
                ...SocialPostCommentDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Comments'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSocialPostCommentsAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialPostCommentDtoListEnvelopeSample']
        }
    },
    getSocialPostCommentsCountAsync: {
        key: 'getSocialPostCommentsCountAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Count social post comments',
            description: 'Returns the count of comments for a specific social post.',
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
                    key: 'socialPostId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSocialPostCommentsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getSocialPostReactionAsync: {
        key: 'getSocialPostReactionAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Get social post reaction by ID',
            description: 'Retrieves a specific reaction from a social post by its ID.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'reactionId',
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
                ...SocialReactionDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions/{reactionId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSocialPostReactionAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialReactionDtoEnvelopeSample']
        }
    },
    getSocialPostReactionsAsync: {
        key: 'getSocialPostReactionsAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Get social post reactions',
            description: 'Retrieves a list of reactions for a specific social post.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
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
                ...SocialReactionDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSocialPostReactionsAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialReactionDtoListEnvelopeSample']
        }
    },
    getSocialPostReactionsCountAsync: {
        key: 'getSocialPostReactionsCountAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Count social post reactions',
            description: 'Returns the count of reactions for a specific social post.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSocialPostReactionsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getSocialPostsAsync: {
        key: 'getSocialPostsAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Get social posts',
            description: 'Retrieves a list of social posts for the specified social profile.',
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
                ...SocialPostDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSocialPostsAsync', response.json);
                    return results;
                })
            },
            sample: samples['SocialPostDtoListEnvelopeSample']
        }
    },
    getSocialPostsCountAsync: {
        key: 'getSocialPostsCountAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Count social posts',
            description: 'Returns the count of social posts for the specified social profile.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSocialPostsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    updateSocialPostAsync: {
        key: 'updateSocialPostAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Update a social post',
            description: 'Updates an existing social post by its ID.',
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
                    key: 'socialPostId',
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
                ...SocialPostUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}'),
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
                        ...SocialPostUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateSocialPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateSocialPostAttachmentAsync: {
        key: 'updateSocialPostAttachmentAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Update a social post attachment',
            description: 'Updates an existing attachment on a specific social post.',
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
                    key: 'socialPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'attachmentId',
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
                ...SocialPostAttachmentUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Attachments/{attachmentId}'),
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
                        ...SocialPostAttachmentUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateSocialPostAttachmentAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateSocialPostCommentAsync: {
        key: 'updateSocialPostCommentAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Update a social post comment',
            description: 'Updates an existing comment on a specific social post.',
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
                    key: 'socialPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'commentId',
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
                ...SocialPostCommentUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Comments/{commentId}'),
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
                        ...SocialPostCommentUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateSocialPostCommentAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateSocialPostReactionAsync: {
        key: 'updateSocialPostReactionAsync',
        noun: 'SocialPosts',
        display: {
            label: 'Update a social post reaction',
            description: 'Updates an existing reaction on a specific social post.',
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
                    key: 'socialPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'reactionId',
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
                ...SocialReactionUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SocialService/SocialPosts/{socialPostId}/Reactions/{reactionId}'),
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
                        ...SocialReactionUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateSocialPostReactionAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
