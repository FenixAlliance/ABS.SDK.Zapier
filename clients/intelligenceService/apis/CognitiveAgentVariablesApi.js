const samples = require('../samples/CognitiveAgentVariablesApi');
const CognitiveAgentVariableCreateDto = require('../models/CognitiveAgentVariableCreateDto');
const CognitiveAgentVariableDtoCollectionQueryParameters = require('../models/CognitiveAgentVariableDtoCollectionQueryParameters');
const CognitiveAgentVariableDtoEnvelope = require('../models/CognitiveAgentVariableDtoEnvelope');
const CognitiveAgentVariableDtoListEnvelope = require('../models/CognitiveAgentVariableDtoListEnvelope');
const CognitiveAgentVariableUpdateDto = require('../models/CognitiveAgentVariableUpdateDto');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const utils = require('../utils/utils');

module.exports = {
    createCognitiveAgentVariableAsync: {
        key: 'createCognitiveAgentVariableAsync',
        noun: 'CognitiveAgentVariables',
        display: {
            label: 'Add a variable to a cognitive agent',
            description: 'Adds a key/value variable to the specified cognitive agent and tenant.',
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
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
                ...CognitiveAgentVariableCreateDto.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables'),
                    method: 'POST',
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
                        ...CognitiveAgentVariableCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createCognitiveAgentVariableAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    deleteCognitiveAgentVariableAsync: {
        key: 'deleteCognitiveAgentVariableAsync',
        noun: 'CognitiveAgentVariables',
        display: {
            label: 'Remove a variable from a cognitive agent',
            description: 'Removes a variable from the specified cognitive agent and tenant.',
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
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables/{id}'),
                    method: 'DELETE',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteCognitiveAgentVariableAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getCognitiveAgentVariableByIdAsync: {
        key: 'getCognitiveAgentVariableByIdAsync',
        noun: 'CognitiveAgentVariables',
        display: {
            label: 'Get a cognitive agent variable by ID',
            description: 'Retrieves a specific variable of a cognitive agent by its identifier.',
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
                ...CognitiveAgentVariableDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables/{id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCognitiveAgentVariableByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['CognitiveAgentVariableDtoEnvelopeSample']
        }
    },
    getCognitiveAgentVariablesAsync: {
        key: 'getCognitiveAgentVariablesAsync',
        noun: 'CognitiveAgentVariables',
        display: {
            label: 'Get all variables for a cognitive agent',
            description: 'Retrieves all key/value variables for the specified cognitive agent and tenant.',
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
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
                ...CognitiveAgentVariableDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...CognitiveAgentVariableDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables'),
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
                        ...CognitiveAgentVariableDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCognitiveAgentVariablesAsync', response.json);
                    return results;
                })
            },
            sample: samples['CognitiveAgentVariableDtoListEnvelopeSample']
        }
    },
    getCognitiveAgentVariablesCountAsync: {
        key: 'getCognitiveAgentVariablesCountAsync',
        noun: 'CognitiveAgentVariables',
        display: {
            label: 'Get variable count for a cognitive agent',
            description: 'Returns the count of variables for the specified cognitive agent and tenant.',
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
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
                ...CognitiveAgentVariableDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables/Count'),
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
                        ...CognitiveAgentVariableDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCognitiveAgentVariablesCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    updateCognitiveAgentVariableAsync: {
        key: 'updateCognitiveAgentVariableAsync',
        noun: 'CognitiveAgentVariables',
        display: {
            label: 'Update a cognitive agent variable',
            description: 'Updates the value of a variable for the specified agent and tenant.',
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
                ...CognitiveAgentVariableUpdateDto.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Variables/{id}'),
                    method: 'PUT',
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
                        ...CognitiveAgentVariableUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateCognitiveAgentVariableAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
