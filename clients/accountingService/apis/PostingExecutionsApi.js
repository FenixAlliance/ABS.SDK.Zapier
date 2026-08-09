const samples = require('../samples/PostingExecutionsApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const PostingExecutionDtoCollectionQueryParameters = require('../models/PostingExecutionDtoCollectionQueryParameters');
const PostingExecutionDtoIReadOnlyListEnvelope = require('../models/PostingExecutionDtoIReadOnlyListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    countPostingExecutionsAsync: {
        key: 'countPostingExecutionsAsync',
        noun: 'PostingExecutions',
        display: {
            label: 'Count posting executions',
            description: 'Returns the count of the tenant&#39;s posting-inbox executions under the same OData shaping as the list read (e.g. $filter&#x3D;Status eq &#39;Rejected&#39; to count rejected intents). Requires journals_read.',
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
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
                ...PostingExecutionDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AccountingService/PostingExecutions/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...PostingExecutionDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countPostingExecutionsAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getPostingExecutionsAsync: {
        key: 'getPostingExecutionsAsync',
        noun: 'PostingExecutions',
        display: {
            label: 'List posting executions',
            description: 'Lists the tenant&#39;s posting-inbox executions (the durable evidence of every posting intent). Use OData to scope to a state — e.g. $filter&#x3D;Status eq &#39;Rejected&#39; for rejected intents, or Status eq &#39;PendingMapping&#39;/&#39;PendingPeriod&#39;/&#39;PendingRate&#39; for the retryable pending set — and to page/order. Requires journals_read.',
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
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
                ...PostingExecutionDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...PostingExecutionDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AccountingService/PostingExecutions'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...PostingExecutionDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPostingExecutionsAsync', response.json);
                    return results;
                })
            },
            sample: samples['PostingExecutionDtoIReadOnlyListEnvelopeSample']
        }
    },
}
