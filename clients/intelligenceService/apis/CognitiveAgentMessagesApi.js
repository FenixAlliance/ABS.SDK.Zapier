const samples = require('../samples/CognitiveAgentMessagesApi');
const CognitiveAgentMessageDtoCollectionQueryParameters = require('../models/CognitiveAgentMessageDtoCollectionQueryParameters');
const CognitiveAgentMessageDtoEnvelope = require('../models/CognitiveAgentMessageDtoEnvelope');
const CognitiveAgentMessageDtoListEnvelope = require('../models/CognitiveAgentMessageDtoListEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const utils = require('../utils/utils');

module.exports = {
    getCognitiveAgentMessageByIdAsync: {
        key: 'getCognitiveAgentMessageByIdAsync',
        noun: 'CognitiveAgentMessages',
        display: {
            label: 'Get a cognitive agent conversation message by ID',
            description: 'Retrieves a specific durable message of a conversation by its identifier.',
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
                    key: 'agentId',
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
                    key: 'id',
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
                ...CognitiveAgentMessageDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{conversationId}/Messages/{id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCognitiveAgentMessageByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['CognitiveAgentMessageDtoEnvelopeSample']
        }
    },
    getCognitiveAgentMessagesAsync: {
        key: 'getCognitiveAgentMessagesAsync',
        noun: 'CognitiveAgentMessages',
        display: {
            label: 'Get all messages for a cognitive agent conversation',
            description: 'Retrieves all durable messages for the specified conversation, agent and tenant.',
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
                    key: 'agentId',
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
                ...CognitiveAgentMessageDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...CognitiveAgentMessageDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{conversationId}/Messages'),
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
                        ...CognitiveAgentMessageDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCognitiveAgentMessagesAsync', response.json);
                    return results;
                })
            },
            sample: samples['CognitiveAgentMessageDtoListEnvelopeSample']
        }
    },
    getCognitiveAgentMessagesCountAsync: {
        key: 'getCognitiveAgentMessagesCountAsync',
        noun: 'CognitiveAgentMessages',
        display: {
            label: 'Get message count for a cognitive agent conversation',
            description: 'Returns the count of durable messages for the specified conversation, agent and tenant.',
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
                    key: 'agentId',
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
                ...CognitiveAgentMessageDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{conversationId}/Messages/Count'),
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
                        ...CognitiveAgentMessageDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCognitiveAgentMessagesCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
}
