const samples = require('../samples/DealUnitFlowsApi');
const DealUnitFlowCreateDto = require('../models/DealUnitFlowCreateDto');
const DealUnitFlowDtoEnvelope = require('../models/DealUnitFlowDtoEnvelope');
const DealUnitFlowDtoListEnvelope = require('../models/DealUnitFlowDtoListEnvelope');
const DealUnitFlowStageCreateDto = require('../models/DealUnitFlowStageCreateDto');
const DealUnitFlowStageDtoEnvelope = require('../models/DealUnitFlowStageDtoEnvelope');
const DealUnitFlowStageDtoListEnvelope = require('../models/DealUnitFlowStageDtoListEnvelope');
const DealUnitFlowStageUpdateDto = require('../models/DealUnitFlowStageUpdateDto');
const DealUnitFlowUpdateDto = require('../models/DealUnitFlowUpdateDto');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const utils = require('../utils/utils');

module.exports = {
    createDealUnitFlowAsync: {
        key: 'createDealUnitFlowAsync',
        noun: 'DealUnitFlows',
        display: {
            label: 'Create a deal unit flow',
            description: 'Creates a new deal unit flow for the specified tenant.',
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
                ...DealUnitFlowCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnitFlows'),
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
                        ...DealUnitFlowCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createDealUnitFlowAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createDealUnitFlowStageAsync: {
        key: 'createDealUnitFlowStageAsync',
        noun: 'DealUnitFlows',
        display: {
            label: 'Create a deal unit flow stage',
            description: 'Creates a new stage within a specific deal unit flow.',
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
                    key: 'dealUnitFlowId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...DealUnitFlowStageCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages'),
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
                        ...DealUnitFlowStageCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createDealUnitFlowStageAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteDealUnitFlowAsync: {
        key: 'deleteDealUnitFlowAsync',
        noun: 'DealUnitFlows',
        display: {
            label: 'Delete a deal unit flow',
            description: 'Deletes an existing deal unit flow by its unique identifier.',
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
                    key: 'dealUnitFlowId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteDealUnitFlowAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteDealUnitFlowStageAsync: {
        key: 'deleteDealUnitFlowStageAsync',
        noun: 'DealUnitFlows',
        display: {
            label: 'Delete a deal unit flow stage',
            description: 'Deletes an existing stage from a specific deal unit flow.',
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
                    key: 'dealUnitFlowId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'dealUnitFlowStageId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteDealUnitFlowStageAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getDealUnitFlowAsync: {
        key: 'getDealUnitFlowAsync',
        noun: 'DealUnitFlows',
        display: {
            label: 'Get deal unit flow by ID',
            description: 'Retrieves a single deal unit flow by its unique identifier.',
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
                    key: 'dealUnitFlowId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...DealUnitFlowDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDealUnitFlowAsync', response.json);
                    return results;
                })
            },
            sample: samples['DealUnitFlowDtoEnvelopeSample']
        }
    },
    getDealUnitFlowStageAsync: {
        key: 'getDealUnitFlowStageAsync',
        noun: 'DealUnitFlows',
        display: {
            label: 'Get a deal unit flow stage by ID',
            description: 'Retrieves a single stage for a specific deal unit flow by its unique identifier.',
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
                    key: 'dealUnitFlowId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'dealUnitFlowStageId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...DealUnitFlowStageDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDealUnitFlowStageAsync', response.json);
                    return results;
                })
            },
            sample: samples['DealUnitFlowStageDtoEnvelopeSample']
        }
    },
    getDealUnitFlowStagesAsync: {
        key: 'getDealUnitFlowStagesAsync',
        noun: 'DealUnitFlows',
        display: {
            label: 'Get stages for a deal unit flow',
            description: 'Retrieves a list of stages for a specific deal unit flow with OData query support.',
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
                    key: 'dealUnitFlowId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...DealUnitFlowStageDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDealUnitFlowStagesAsync', response.json);
                    return results;
                })
            },
            sample: samples['DealUnitFlowStageDtoListEnvelopeSample']
        }
    },
    getDealUnitFlowStagesCountAsync: {
        key: 'getDealUnitFlowStagesCountAsync',
        noun: 'DealUnitFlows',
        display: {
            label: 'Get stages count for a deal unit flow',
            description: 'Returns the total count of stages for a specific deal unit flow with OData filter support.',
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
                    key: 'dealUnitFlowId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDealUnitFlowStagesCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getDealUnitFlowsAsync: {
        key: 'getDealUnitFlowsAsync',
        noun: 'DealUnitFlows',
        display: {
            label: 'Get deal unit flows',
            description: 'Retrieves a list of deal unit flows for the specified tenant with OData query support.',
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
                ...DealUnitFlowDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnitFlows'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDealUnitFlowsAsync', response.json);
                    return results;
                })
            },
            sample: samples['DealUnitFlowDtoListEnvelopeSample']
        }
    },
    getDealUnitFlowsCountAsync: {
        key: 'getDealUnitFlowsCountAsync',
        noun: 'DealUnitFlows',
        display: {
            label: 'Get deal unit flows count',
            description: 'Returns the total count of deal unit flows for the specified tenant with OData filter support.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnitFlows/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDealUnitFlowsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    updateDealUnitFlowAsync: {
        key: 'updateDealUnitFlowAsync',
        noun: 'DealUnitFlows',
        display: {
            label: 'Update a deal unit flow',
            description: 'Updates an existing deal unit flow by its unique identifier.',
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
                    key: 'dealUnitFlowId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...DealUnitFlowUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}'),
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
                        ...DealUnitFlowUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateDealUnitFlowAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateDealUnitFlowStageAsync: {
        key: 'updateDealUnitFlowStageAsync',
        noun: 'DealUnitFlows',
        display: {
            label: 'Update a deal unit flow stage',
            description: 'Updates an existing stage within a specific deal unit flow.',
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
                    key: 'dealUnitFlowId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'dealUnitFlowStageId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...DealUnitFlowStageUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnitFlows/{dealUnitFlowId}/Stages/{dealUnitFlowStageId}'),
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
                        ...DealUnitFlowStageUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateDealUnitFlowStageAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
