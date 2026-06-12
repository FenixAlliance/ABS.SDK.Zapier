const samples = require('../samples/BlogPostsApi');
const BlogPostCategoryCreateDto = require('../models/BlogPostCategoryCreateDto');
const BlogPostCategoryDtoListEnvelope = require('../models/BlogPostCategoryDtoListEnvelope');
const BlogPostCommentCreateDto = require('../models/BlogPostCommentCreateDto');
const BlogPostCommentDtoListEnvelope = require('../models/BlogPostCommentDtoListEnvelope');
const BlogPostCreateDto = require('../models/BlogPostCreateDto');
const BlogPostDtoEnvelope = require('../models/BlogPostDtoEnvelope');
const BlogPostDtoListEnvelope = require('../models/BlogPostDtoListEnvelope');
const BlogPostTagCreateDto = require('../models/BlogPostTagCreateDto');
const BlogPostTagDtoListEnvelope = require('../models/BlogPostTagDtoListEnvelope');
const BlogPostUpdateDto = require('../models/BlogPostUpdateDto');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const Operation = require('../models/Operation');
const utils = require('../utils/utils');

module.exports = {
    createBlogPostAsync: {
        key: 'createBlogPostAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Create a new blog post',
            description: 'Creates a new blog post for the specified tenant.',
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
                ...BlogPostCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...BlogPostCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createBlogPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createCategoryForBlogPostAsync: {
        key: 'createCategoryForBlogPostAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Create a category for a blog post',
            description: 'Creates a new category and relates it to a specific blog post.',
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
                    key: 'blogPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...BlogPostCategoryCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}/Categories'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...BlogPostCategoryCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createCategoryForBlogPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createCommentForBlogPostAsync: {
        key: 'createCommentForBlogPostAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Create a comment for a blog post',
            description: 'Creates a new comment on a specific blog post.',
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
                    key: 'blogPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...BlogPostCommentCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}/Comments'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...BlogPostCommentCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createCommentForBlogPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createTagForBlogPostAsync: {
        key: 'createTagForBlogPostAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Create a tag for a blog post',
            description: 'Creates a new tag and relates it to a specific blog post.',
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
                    key: 'blogPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...BlogPostTagCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}/Tags'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...BlogPostTagCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createTagForBlogPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteBlogPostAsync: {
        key: 'deleteBlogPostAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Delete a blog post',
            description: 'Deletes a blog post for the specified tenant.',
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
                    key: 'blogPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteBlogPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteCommentFromBlogPostAsync: {
        key: 'deleteCommentFromBlogPostAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Delete a blog post comment',
            description: 'Deletes a comment from a specific blog post.',
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
                    key: 'blogPostId',
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
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}/Comments/{commentId}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteCommentFromBlogPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getBlogPostByIdAsync: {
        key: 'getBlogPostByIdAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Get a blog post by ID',
            description: 'Retrieves a single blog post by its unique identifier.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'blogPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...BlogPostDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getBlogPostByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['BlogPostDtoEnvelopeSample']
        }
    },
    getBlogPostsAsync: {
        key: 'getBlogPostsAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Retrieve a list of blog posts',
            description: 'Retrieves all blog posts, optionally filtered by tenant using OData query options.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...BlogPostDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getBlogPostsAsync', response.json);
                    return results;
                })
            },
            sample: samples['BlogPostDtoListEnvelopeSample']
        }
    },
    getBlogPostsCountAsync: {
        key: 'getBlogPostsCountAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Get the count of blog posts',
            description: 'Returns the total count of blog posts, optionally filtered by tenant using OData query options.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getBlogPostsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getCategoriesForBlogPostAsync: {
        key: 'getCategoriesForBlogPostAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Get categories for a blog post',
            description: 'Retrieves all categories related to a specific blog post.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'blogPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...BlogPostCategoryDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}/Categories'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCategoriesForBlogPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['BlogPostCategoryDtoListEnvelopeSample']
        }
    },
    getCommentsForBlogPostAsync: {
        key: 'getCommentsForBlogPostAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Get comments for a blog post',
            description: 'Retrieves all comments for a specific blog post.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'blogPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...BlogPostCommentDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}/Comments'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCommentsForBlogPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['BlogPostCommentDtoListEnvelopeSample']
        }
    },
    getRepliesForCommentAsync: {
        key: 'getRepliesForCommentAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Get replies for a comment',
            description: 'Retrieves all replies for a specific blog post comment.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'commentId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'blogPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...BlogPostCommentDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}/Comments/{commentId}/Replies'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getRepliesForCommentAsync', response.json);
                    return results;
                })
            },
            sample: samples['BlogPostCommentDtoListEnvelopeSample']
        }
    },
    getTagsForBlogPostAsync: {
        key: 'getTagsForBlogPostAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Get tags for a blog post',
            description: 'Retrieves all tags related to a specific blog post.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'blogPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...BlogPostTagDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}/Tags'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTagsForBlogPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['BlogPostTagDtoListEnvelopeSample']
        }
    },
    patchBlogPostAsync: {
        key: 'patchBlogPostAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Patch a blog post',
            description: 'Partially updates an existing blog post for the specified tenant.',
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
                    key: 'blogPostId',
                    label: '',
                    type: 'string',
                    required: true,
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
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}'),
                    method: 'PATCH',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...Operation.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchBlogPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    relateCategoryToBlogPostAsync: {
        key: 'relateCategoryToBlogPostAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Relate an existing category to a blog post',
            description: 'Creates a relationship between an existing category and a blog post.',
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
                    key: 'blogPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'categoryId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}/Categories/{categoryId}'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'relateCategoryToBlogPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    relateTagToBlogPostAsync: {
        key: 'relateTagToBlogPostAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Relate an existing tag to a blog post',
            description: 'Creates a relationship between an existing tag and a blog post.',
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
                    key: 'blogPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'tagId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}/Tags/{tagId}'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'relateTagToBlogPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    replyToCommentAsync: {
        key: 'replyToCommentAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Reply to a blog post comment',
            description: 'Creates a reply to an existing comment on a blog post.',
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
                    key: 'blogPostId',
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
                ...BlogPostCommentCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}/Comments/{commentId}/Reply'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...BlogPostCommentCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'replyToCommentAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    unrelateCategoryFromBlogPostAsync: {
        key: 'unrelateCategoryFromBlogPostAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Remove a category from a blog post',
            description: 'Removes the relationship between a category and a blog post.',
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
                    key: 'blogPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'categoryId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}/Categories/{categoryId}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'unrelateCategoryFromBlogPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    unrelateTagFromBlogPostAsync: {
        key: 'unrelateTagFromBlogPostAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Remove a tag from a blog post',
            description: 'Removes the relationship between a tag and a blog post.',
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
                    key: 'blogPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'tagId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}/Tags/{tagId}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'unrelateTagFromBlogPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateBlogPostAsync: {
        key: 'updateBlogPostAsync',
        noun: 'BlogPosts',
        display: {
            label: 'Update a blog post',
            description: 'Updates an existing blog post for the specified tenant.',
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
                    key: 'blogPostId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...BlogPostUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ContentService/BlogPosts/{blogPostId}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...BlogPostUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateBlogPostAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
