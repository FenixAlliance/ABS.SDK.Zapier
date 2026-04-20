const samples = require('../samples/TaskCategoriesApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const TaskCategoryCreateDto = require('../models/TaskCategoryCreateDto');
const TaskCategoryDto = require('../models/TaskCategoryDto');
const TaskCategoryDtoListEnvelope = require('../models/TaskCategoryDtoListEnvelope');
const TaskCategoryUpdateDto = require('../models/TaskCategoryUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    countTenantTaskCategoriesAsync: {
        key: 'countTenantTaskCategoriesAsync',
        noun: 'TaskCategories',
        display: {
            label: 'Counts task categories',
            description: 'Gets the count of task categories for the current tenant.',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/TaskCategories/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countTenantTaskCategoriesAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    createTaskCategoryAsync: {
        key: 'createTaskCategoryAsync',
        noun: 'TaskCategories',
        display: {
            label: 'Creates a new task category',
            description: 'Creates a new task category for the current tenant.',
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
                ...TaskCategoryCreateDto.fields(),
            ],
            outputFields: [
                ...TaskCategoryDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/TaskCategories'),
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
                        ...TaskCategoryCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createTaskCategoryAsync', response.json);
                    return results;
                })
            },
            sample: samples['TaskCategoryDtoSample']
        }
    },
    deleteTaskCategoryAsync: {
        key: 'deleteTaskCategoryAsync',
        noun: 'TaskCategories',
        display: {
            label: 'Deletes a task category',
            description: 'Deletes the specified task category.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'taskCategoryId',
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
                ...TaskCategoryDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/TaskCategories/{taskCategoryId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteTaskCategoryAsync', response.json);
                    return results;
                })
            },
            sample: samples['TaskCategoryDtoSample']
        }
    },
    getTaskCategoryByIdAsync: {
        key: 'getTaskCategoryByIdAsync',
        noun: 'TaskCategories',
        display: {
            label: 'Gets a task category by ID',
            description: 'Retrieves the details of a task category using its unique identifier.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'taskCategoryId',
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
                ...TaskCategoryDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/TaskCategories/{taskCategoryId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTaskCategoryByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['TaskCategoryDtoSample']
        }
    },
    getTaskCategoryTaskTypesAsync: {
        key: 'getTaskCategoryTaskTypesAsync',
        noun: 'TaskCategories',
        display: {
            label: 'Retrieves task types for a category',
            description: 'Gets all task types belonging to the specified task category.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'taskCategoryId',
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
                ...TaskCategoryDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/TaskCategories/{taskCategoryId}/Types'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTaskCategoryTaskTypesAsync', response.json);
                    return results;
                })
            },
            sample: samples['TaskCategoryDtoSample']
        }
    },
    getTenantTaskCategoriesAsync: {
        key: 'getTenantTaskCategoriesAsync',
        noun: 'TaskCategories',
        display: {
            label: 'Retrieves all task categories',
            description: 'Gets all task categories for the current tenant with OData support.',
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
                ...TaskCategoryDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/TaskCategories'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTenantTaskCategoriesAsync', response.json);
                    return results;
                })
            },
            sample: samples['TaskCategoryDtoListEnvelopeSample']
        }
    },
    updateTaskCategoryAsync: {
        key: 'updateTaskCategoryAsync',
        noun: 'TaskCategories',
        display: {
            label: 'Updates a task category',
            description: 'Updates the specified task category.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'taskCategoryId',
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
                ...TaskCategoryUpdateDto.fields(),
            ],
            outputFields: [
                ...TaskCategoryDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/TaskCategories/{taskCategoryId}'),
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
                        ...TaskCategoryUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateTaskCategoryAsync', response.json);
                    return results;
                })
            },
            sample: samples['TaskCategoryDtoSample']
        }
    },
}
