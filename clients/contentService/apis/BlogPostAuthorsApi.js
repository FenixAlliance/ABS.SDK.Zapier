const samples = require('../samples/BlogPostAuthorsApi');
const BlogAuthorDtoEnvelope = require('../models/BlogAuthorDtoEnvelope');
const BlogAuthorDtoListEnvelope = require('../models/BlogAuthorDtoListEnvelope');
const BlogPostDtoListEnvelope = require('../models/BlogPostDtoListEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const utils = require('../utils/utils');

module.exports = {
    countBlogPostsByAuthorAsync: {
        key: 'countBlogPostsByAuthorAsync',
        noun: 'BlogPostAuthors',
        display: {
            label: 'Count blog posts by author',
            description: 'Returns the count of blog posts written by a specific author.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'authorId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ContentService/BlogPostAuthors/{authorId}/BlogPosts/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countBlogPostsByAuthorAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getBlogAuthorByIdAsync: {
        key: 'getBlogAuthorByIdAsync',
        noun: 'BlogPostAuthors',
        display: {
            label: 'Get blog author by ID',
            description: 'Retrieves a specific blog author by their identifier.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'authorId',
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
                ...BlogAuthorDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ContentService/BlogPostAuthors/{authorId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getBlogAuthorByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['BlogAuthorDtoEnvelopeSample']
        }
    },
    getBlogAuthorsAsync: {
        key: 'getBlogAuthorsAsync',
        noun: 'BlogPostAuthors',
        display: {
            label: 'Get blog authors',
            description: 'Retrieves all blog authors, optionally filtered by tenant.',
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
                ...BlogAuthorDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ContentService/BlogPostAuthors'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getBlogAuthorsAsync', response.json);
                    return results;
                })
            },
            sample: samples['BlogAuthorDtoListEnvelopeSample']
        }
    },
    getBlogPostsByAuthorAsync: {
        key: 'getBlogPostsByAuthorAsync',
        noun: 'BlogPostAuthors',
        display: {
            label: 'Get blog posts by author',
            description: 'Retrieves all blog posts written by a specific author.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'authorId',
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
                ...BlogPostDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ContentService/BlogPostAuthors/{authorId}/BlogPosts'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getBlogPostsByAuthorAsync', response.json);
                    return results;
                })
            },
            sample: samples['BlogPostDtoListEnvelopeSample']
        }
    },
}
