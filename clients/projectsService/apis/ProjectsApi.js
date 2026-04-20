const samples = require('../samples/ProjectsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const ProjectCreateDto = require('../models/ProjectCreateDto');
const ProjectDtoEnvelope = require('../models/ProjectDtoEnvelope');
const ProjectDtoListEnvelope = require('../models/ProjectDtoListEnvelope');
const ProjectPeriodCreateDto = require('../models/ProjectPeriodCreateDto');
const ProjectPeriodDtoListEnvelope = require('../models/ProjectPeriodDtoListEnvelope');
const ProjectPeriodUpdateDto = require('../models/ProjectPeriodUpdateDto');
const ProjectTaskCreateDto = require('../models/ProjectTaskCreateDto');
const ProjectTaskDtoListEnvelope = require('../models/ProjectTaskDtoListEnvelope');
const ProjectTaskUpdateDto = require('../models/ProjectTaskUpdateDto');
const ProjectTimeLogDtoListEnvelope = require('../models/ProjectTimeLogDtoListEnvelope');
const ProjectUpdateDto = require('../models/ProjectUpdateDto');
const TaskCategoryDtoListEnvelope = require('../models/TaskCategoryDtoListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    createProjectAsync: {
        key: 'createProjectAsync',
        noun: 'Projects',
        display: {
            label: 'Creates a new project',
            description: 'Creates a new project for the current tenant.',
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
                ...ProjectCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects'),
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
                        ...ProjectCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createProjectAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createProjectPeriodAsync: {
        key: 'createProjectPeriodAsync',
        noun: 'Projects',
        display: {
            label: 'Creates a project period',
            description: 'Creates a new period for the specified project.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'projectId',
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
                ...ProjectPeriodCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/{projectId}/Periods'),
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
                        ...ProjectPeriodCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createProjectPeriodAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createProjectTaskAsync: {
        key: 'createProjectTaskAsync',
        noun: 'Projects',
        display: {
            label: 'Creates a project task',
            description: 'Creates a new task for the specified project.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'projectId',
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
                ...ProjectTaskCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/{projectId}/Tasks'),
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
                        ...ProjectTaskCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createProjectTaskAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteProjectAsync: {
        key: 'deleteProjectAsync',
        noun: 'Projects',
        display: {
            label: 'Deletes a project',
            description: 'Deletes the specified project.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'projectId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/{projectId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteProjectAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteProjectPeriodAsync: {
        key: 'deleteProjectPeriodAsync',
        noun: 'Projects',
        display: {
            label: 'Deletes a project period',
            description: 'Deletes the specified period from a project.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'projectId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'projectPeriodId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/{projectId}/Periods/{projectPeriodId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteProjectPeriodAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteProjectTaskAsync: {
        key: 'deleteProjectTaskAsync',
        noun: 'Projects',
        display: {
            label: 'Deletes a project task',
            description: 'Deletes the specified task from a project.',
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
                    key: 'projectId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'projectTaskId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/{projectId}/Tasks/{projectTaskId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteProjectTaskAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getProjectByIdAsync: {
        key: 'getProjectByIdAsync',
        noun: 'Projects',
        display: {
            label: 'Gets a project by ID',
            description: 'Retrieves the details of a project using its unique identifier.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'projectId',
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
                ...ProjectDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/{projectId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProjectByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['ProjectDtoEnvelopeSample']
        }
    },
    getProjectPeriodsAsync: {
        key: 'getProjectPeriodsAsync',
        noun: 'Projects',
        display: {
            label: 'Retrieves project periods',
            description: 'Gets all periods for a specific project.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'projectId',
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
                ...ProjectPeriodDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/{projectId}/Periods'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProjectPeriodsAsync', response.json);
                    return results;
                })
            },
            sample: samples['ProjectPeriodDtoListEnvelopeSample']
        }
    },
    getProjectTaskCategoriesAsync: {
        key: 'getProjectTaskCategoriesAsync',
        noun: 'Projects',
        display: {
            label: 'Retrieves project task categories',
            description: 'Gets all task categories for a specific project with OData support.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'projectId',
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
                ...TaskCategoryDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/{projectId}/TaskCategories'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProjectTaskCategoriesAsync', response.json);
                    return results;
                })
            },
            sample: samples['TaskCategoryDtoListEnvelopeSample']
        }
    },
    getProjectTaskCategoriesCountAsync: {
        key: 'getProjectTaskCategoriesCountAsync',
        noun: 'Projects',
        display: {
            label: 'Counts project task categories',
            description: 'Gets the count of task categories for a specific project.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'projectId',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/{projectId}/TaskCategories/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProjectTaskCategoriesCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getProjectTasksAsync: {
        key: 'getProjectTasksAsync',
        noun: 'Projects',
        display: {
            label: 'Retrieves project tasks',
            description: 'Gets all tasks for a specific project with OData support.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'projectId',
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
                ...ProjectTaskDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/{projectId}/Tasks'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProjectTasksAsync', response.json);
                    return results;
                })
            },
            sample: samples['ProjectTaskDtoListEnvelopeSample']
        }
    },
    getProjectTasksCountAsync: {
        key: 'getProjectTasksCountAsync',
        noun: 'Projects',
        display: {
            label: 'Counts project tasks',
            description: 'Gets the count of tasks for a specific project.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'projectId',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/{projectId}/Tasks/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProjectTasksCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getProjectTimeLogsAsync: {
        key: 'getProjectTimeLogsAsync',
        noun: 'Projects',
        display: {
            label: 'Retrieves project time logs',
            description: 'Gets all time log entries for a specific project with OData support.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'projectId',
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
                ...ProjectTimeLogDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/{projectId}/TimeLogs'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProjectTimeLogsAsync', response.json);
                    return results;
                })
            },
            sample: samples['ProjectTimeLogDtoListEnvelopeSample']
        }
    },
    getProjectTimeLogsCountAsync: {
        key: 'getProjectTimeLogsCountAsync',
        noun: 'Projects',
        display: {
            label: 'Counts project time logs',
            description: 'Gets the count of time log entries for a specific project.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'projectId',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/{projectId}/TimeLogs/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProjectTimeLogsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getProjectsByTenantIdAsync: {
        key: 'getProjectsByTenantIdAsync',
        noun: 'Projects',
        display: {
            label: 'Retrieves all projects',
            description: 'Gets all projects for the current tenant with OData support.',
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
                ...ProjectDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProjectsByTenantIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['ProjectDtoListEnvelopeSample']
        }
    },
    getProjectsCountByTenantIdAsync: {
        key: 'getProjectsCountByTenantIdAsync',
        noun: 'Projects',
        display: {
            label: 'Counts projects',
            description: 'Gets the count of projects for the current tenant.',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProjectsCountByTenantIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    updateProjectAsync: {
        key: 'updateProjectAsync',
        noun: 'Projects',
        display: {
            label: 'Updates a project',
            description: 'Updates the specified project.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'projectId',
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
                ...ProjectUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/{projectId}'),
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
                        ...ProjectUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateProjectAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateProjectPeriodAsync: {
        key: 'updateProjectPeriodAsync',
        noun: 'Projects',
        display: {
            label: 'Updates a project period',
            description: 'Updates the specified period for a project.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'projectId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'projectPeriodId',
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
                ...ProjectPeriodUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/{projectId}/Periods/{projectPeriodId}'),
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
                        ...ProjectPeriodUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateProjectPeriodAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateProjectTaskAsync: {
        key: 'updateProjectTaskAsync',
        noun: 'Projects',
        display: {
            label: 'Updates a project task',
            description: 'Updates the specified task in a project.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'projectId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'projectTaskId',
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
                ...ProjectTaskUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ProjectsService/Projects/{projectId}/Tasks/{projectTaskId}'),
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
                        ...ProjectTaskUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateProjectTaskAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
