const samples = require('../samples/TaskTypesApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const TaskTypeCreateDto = require('../models/TaskTypeCreateDto');
const TaskTypeDto = require('../models/TaskTypeDto');
const TaskTypeUpdateDto = require('../models/TaskTypeUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    createTaskTypeAsync: {
        key: 'createTaskTypeAsync',
        noun: 'TaskTypes',
        display: {
            label: 'Creates a new task type',
            description: 'Creates a new task type for the current tenant.',
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
                ...TaskTypeCreateDto.fields(),
            ],
            outputFields: [
                ...TaskTypeDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/TaskTypes'),
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
                        ...TaskTypeCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createTaskTypeAsync', response.json);
                    return results;
                })
            },
            sample: samples['TaskTypeDtoSample']
        }
    },
    deleteTaskTypeAsync: {
        key: 'deleteTaskTypeAsync',
        noun: 'TaskTypes',
        display: {
            label: 'Deletes a task type',
            description: 'Deletes the specified task type.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'taskTypeId',
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
                ...TaskTypeDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/TaskTypes/{taskTypeId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteTaskTypeAsync', response.json);
                    return results;
                })
            },
            sample: samples['TaskTypeDtoSample']
        }
    },
    getTaskTypeByIdAsync: {
        key: 'getTaskTypeByIdAsync',
        noun: 'TaskTypes',
        display: {
            label: 'Gets a task type by ID',
            description: 'Retrieves the details of a task type using its unique identifier.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'taskTypeId',
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
                ...TaskTypeDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/TaskTypes/{taskTypeId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTaskTypeByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['TaskTypeDtoSample']
        }
    },
    updateTaskTypeAsync: {
        key: 'updateTaskTypeAsync',
        noun: 'TaskTypes',
        display: {
            label: 'Updates a task type',
            description: 'Updates the specified task type.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'taskTypeId',
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
                ...TaskTypeUpdateDto.fields(),
            ],
            outputFields: [
                ...TaskTypeDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/TaskTypes/{taskTypeId}'),
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
                        ...TaskTypeUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateTaskTypeAsync', response.json);
                    return results;
                })
            },
            sample: samples['TaskTypeDtoSample']
        }
    },
}
