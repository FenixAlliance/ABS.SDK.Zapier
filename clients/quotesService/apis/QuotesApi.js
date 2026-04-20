const samples = require('../samples/QuotesApi');
const BooleanEnvelope = require('../models/BooleanEnvelope');
const EmailDispatchRequest = require('../models/EmailDispatchRequest');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ExtendedQuoteDtoListEnvelope = require('../models/ExtendedQuoteDtoListEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const QuoteCreateDto = require('../models/QuoteCreateDto');
const QuoteDtoEnvelope = require('../models/QuoteDtoEnvelope');
const QuoteDtoListEnvelope = require('../models/QuoteDtoListEnvelope');
const QuoteLineCreateDto = require('../models/QuoteLineCreateDto');
const QuoteLineDtoEnvelope = require('../models/QuoteLineDtoEnvelope');
const QuoteLineDtoListEnvelope = require('../models/QuoteLineDtoListEnvelope');
const QuoteLineUpdateDto = require('../models/QuoteLineUpdateDto');
const QuoteLineUpsertDto = require('../models/QuoteLineUpsertDto');
const QuoteUpdateDto = require('../models/QuoteUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    calculateQuote: {
        key: 'calculateQuote',
        noun: 'Quotes',
        display: {
            label: 'Calculate a quote.',
            description: 'Performs calculation logic for the specified quote.',
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
                    key: 'quoteId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}/Calculate'),
                    method: 'PUT',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'calculateQuote', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    calculateQuoteLine: {
        key: 'calculateQuoteLine',
        noun: 'Quotes',
        display: {
            label: 'Calculate a quote line.',
            description: 'Performs calculation logic for the specified quote line.',
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
                    key: 'quoteId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'quoteLineId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}/Calculate'),
                    method: 'PUT',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'calculateQuoteLine', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    closeQuote: {
        key: 'closeQuote',
        noun: 'Quotes',
        display: {
            label: 'Close a quote.',
            description: 'Closes the specified quote for the tenant.',
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
                    key: 'quoteId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}/Close'),
                    method: 'PUT',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'closeQuote', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createOrderFromQuote: {
        key: 'createOrderFromQuote',
        noun: 'Quotes',
        display: {
            label: 'Create an order from a quote.',
            description: 'Creates an order based on the specified quote for the tenant.',
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
                    key: 'quoteId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}/Orders'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createOrderFromQuote', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createQuote: {
        key: 'createQuote',
        noun: 'Quotes',
        display: {
            label: 'Create a new quote.',
            description: 'Creates a new quote for the specified tenant.',
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
                ...QuoteCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes'),
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
                        ...QuoteCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createQuote', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createQuoteLine: {
        key: 'createQuoteLine',
        noun: 'Quotes',
        display: {
            label: 'Create a new quote line.',
            description: 'Creates a new quote line for the specified quote and tenant.',
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
                    key: 'quoteId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...QuoteLineCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}/Lines'),
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
                        ...QuoteLineCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createQuoteLine', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteQuote: {
        key: 'deleteQuote',
        noun: 'Quotes',
        display: {
            label: 'Delete a quote.',
            description: 'Deletes the specified quote for the tenant.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'quoteId',
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
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteQuote', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteQuoteLine: {
        key: 'deleteQuoteLine',
        noun: 'Quotes',
        display: {
            label: 'Delete a quote line.',
            description: 'Deletes the specified quote line for the quote and tenant.',
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
                    key: 'quoteId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'quoteLineId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteQuoteLine', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getExtendedQuotes: {
        key: 'getExtendedQuotes',
        noun: 'Quotes',
        display: {
            label: 'Get a list of extended quotes.',
            description: 'Retrieves a list of extended quotes for the specified tenant, supporting OData query options.',
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
            ],
            outputFields: [
                ...ExtendedQuoteDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/Extended'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getExtendedQuotes', response.json);
                    return results;
                })
            },
            sample: samples['ExtendedQuoteDtoListEnvelopeSample']
        }
    },
    getQuote: {
        key: 'getQuote',
        noun: 'Quotes',
        display: {
            label: 'Get a quote by ID.',
            description: 'Retrieves a single quote by its unique identifier for the specified tenant.',
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
                    key: 'quoteId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...QuoteDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getQuote', response.json);
                    return results;
                })
            },
            sample: samples['QuoteDtoEnvelopeSample']
        }
    },
    getQuoteLine: {
        key: 'getQuoteLine',
        noun: 'Quotes',
        display: {
            label: 'Get a quote line by ID.',
            description: 'Retrieves a single quote line by its unique identifier for the specified quote and tenant.',
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
                    key: 'quoteId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'quoteLineId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...QuoteLineDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getQuoteLine', response.json);
                    return results;
                })
            },
            sample: samples['QuoteLineDtoEnvelopeSample']
        }
    },
    getQuoteLines: {
        key: 'getQuoteLines',
        noun: 'Quotes',
        display: {
            label: 'Get quote lines for a quote.',
            description: 'Retrieves all quote lines for the specified quote and tenant.',
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
                    key: 'quoteId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'itemId',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...QuoteLineDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}/Lines'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'itemId': bundle.inputData?.['itemId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getQuoteLines', response.json);
                    return results;
                })
            },
            sample: samples['QuoteLineDtoListEnvelopeSample']
        }
    },
    getQuoteLinesCount: {
        key: 'getQuoteLinesCount',
        noun: 'Quotes',
        display: {
            label: 'Get the count of quote lines.',
            description: 'Retrieves the total count of quote lines for the specified quote and tenant.',
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
                    key: 'quoteId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}/Lines/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getQuoteLinesCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getQuotes: {
        key: 'getQuotes',
        noun: 'Quotes',
        display: {
            label: 'Get a list of quotes.',
            description: 'Retrieves a list of quotes for the specified tenant, supporting OData query options.',
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
            ],
            outputFields: [
                ...QuoteDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getQuotes', response.json);
                    return results;
                })
            },
            sample: samples['QuoteDtoListEnvelopeSample']
        }
    },
    getQuotesCount: {
        key: 'getQuotesCount',
        noun: 'Quotes',
        display: {
            label: 'Get the count of quotes.',
            description: 'Retrieves the total count of quotes for the specified tenant, supporting OData query options.',
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
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getQuotesCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    previewQuoteEmailTemplate: {
        key: 'previewQuoteEmailTemplate',
        noun: 'Quotes',
        display: {
            label: 'Preview the rendered email for an invoice.',
            description: 'This action is only available for users with the &#39;send_email&#39; permission.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'quoteId',
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
                ...EmailDispatchRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}/Emails/Preview'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': '',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...EmailDispatchRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'previewQuoteEmailTemplate', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    quoteLineExists: {
        key: 'quoteLineExists',
        noun: 'Quotes',
        display: {
            label: 'Check if a quote line exists.',
            description: 'Checks if a quote line exists for the specified quote and tenant, by quote line ID or item ID.',
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
                    key: 'quoteId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'quoteLineId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'itemId',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...BooleanEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}/Lines/Exists'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'quoteLineId': bundle.inputData?.['quoteLineId'],
                        'itemId': bundle.inputData?.['itemId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'quoteLineExists', response.json);
                    return results;
                })
            },
            sample: samples['BooleanEnvelopeSample']
        }
    },
    reopenQuote: {
        key: 'reopenQuote',
        noun: 'Quotes',
        display: {
            label: 'Reopen a closed quote.',
            description: 'Reopens a previously closed quote for the tenant.',
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
                    key: 'quoteId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}/Reopen'),
                    method: 'PUT',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'reopenQuote', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    sendQuoteEmail: {
        key: 'sendQuoteEmail',
        noun: 'Quotes',
        display: {
            label: 'Send a quote transactional email to recipients.',
            description: 'This action is only available for users with the &#39;send_email&#39; permission.',
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
                    key: 'quoteId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...EmailDispatchRequest.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}/Emails/Send'),
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
                        ...EmailDispatchRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'sendQuoteEmail', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateQuote: {
        key: 'updateQuote',
        noun: 'Quotes',
        display: {
            label: 'Update an existing quote.',
            description: 'Updates an existing quote for the specified tenant and quote ID.',
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
                    key: 'quoteId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...QuoteUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}'),
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
                        ...QuoteUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateQuote', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateQuoteLine: {
        key: 'updateQuoteLine',
        noun: 'Quotes',
        display: {
            label: 'Update a quote line.',
            description: 'Updates an existing quote line for the specified quote and tenant.',
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
                    key: 'quoteId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'quoteLineId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...QuoteLineUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}'),
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
                        ...QuoteLineUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateQuoteLine', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    upsertQuoteLine: {
        key: 'upsertQuoteLine',
        noun: 'Quotes',
        display: {
            label: 'Upsert a quote line.',
            description: 'Creates or updates a quote line for the specified quote and tenant.',
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
                    key: 'quoteId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'quoteLineId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...QuoteLineUpsertDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/QuotesService/Quotes/{quoteId}/Lines/{quoteLineId}/Upsert'),
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
                        ...QuoteLineUpsertDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'upsertQuoteLine', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
