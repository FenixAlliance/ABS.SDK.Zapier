const samples = require('../samples/ProjectTimeLogsApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const ProjectTimeLogCreateDto = require('../models/ProjectTimeLogCreateDto');
const ProjectTimeLogDtoEnvelope = require('../models/ProjectTimeLogDtoEnvelope');
const ProjectTimeLogDtoListEnvelope = require('../models/ProjectTimeLogDtoListEnvelope');
const ProjectTimeLogUpdateDto = require('../models/ProjectTimeLogUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    countProjectPeriodTimeLogsAsync: {
        key: 'countProjectPeriodTimeLogsAsync',
        noun: 'ProjectTimeLogs',
        display: {
            label: 'Get the count of project period time logs',
            description: 'Returns the total count of time logs for a specific project period with OData query support.',
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
                    key: 'projectPeriodId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/TimeTrackerService/ProjectTimeLogs/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'projectPeriodId': bundle.inputData?.['projectPeriodId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countProjectPeriodTimeLogsAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    createProjectTimeLogAsync: {
        key: 'createProjectTimeLogAsync',
        noun: 'ProjectTimeLogs',
        display: {
            label: 'Create a new project time log',
            description: 'Creates a new project time log entry.',
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
                ...ProjectTimeLogCreateDto.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/TimeTrackerService/ProjectTimeLogs'),
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
                        ...ProjectTimeLogCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createProjectTimeLogAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    deleteProjectTimeLogAsync: {
        key: 'deleteProjectTimeLogAsync',
        noun: 'ProjectTimeLogs',
        display: {
            label: 'Delete a project time log',
            description: 'Deletes a project time log entry.',
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
                    key: 'timeLogId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/TimeTrackerService/ProjectTimeLogs/{timeLogId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteProjectTimeLogAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getProjectPeriodTimeLogsAsync: {
        key: 'getProjectPeriodTimeLogsAsync',
        noun: 'ProjectTimeLogs',
        display: {
            label: 'Retrieve project period time logs',
            description: 'Retrieves a list of time logs for a specific project period with OData query support.',
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
                    key: 'projectPeriodId',
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
                ...ProjectTimeLogDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/TimeTrackerService/ProjectTimeLogs'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'projectPeriodId': bundle.inputData?.['projectPeriodId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProjectPeriodTimeLogsAsync', response.json);
                    return results;
                })
            },
            sample: samples['ProjectTimeLogDtoListEnvelopeSample']
        }
    },
    getProjectTimeLogByIdAsync: {
        key: 'getProjectTimeLogByIdAsync',
        noun: 'ProjectTimeLogs',
        display: {
            label: 'Retrieve a project time log by ID',
            description: 'Retrieves a single project time log by its unique identifier.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'timeLogId',
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
                ...ProjectTimeLogDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/TimeTrackerService/ProjectTimeLogs/{timeLogId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProjectTimeLogByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['ProjectTimeLogDtoEnvelopeSample']
        }
    },
    getProjectTimeLogsAsync: {
        key: 'getProjectTimeLogsAsync',
        noun: 'ProjectTimeLogs',
        display: {
            label: 'Retrieve time logs for a project',
            description: 'Retrieves all time logs associated with the specified project.',
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
                ...ProjectTimeLogDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/TimeTrackerService/ProjectTimeLogs/ForProject/{projectId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProjectTimeLogsAsync', response.json);
                    return results;
                })
            },
            sample: samples['ProjectTimeLogDtoListEnvelopeSample']
        }
    },
    getProjectTimeLogsByResponsibleContactAsync: {
        key: 'getProjectTimeLogsByResponsibleContactAsync',
        noun: 'ProjectTimeLogs',
        display: {
            label: 'Retrieve time logs by responsible contact',
            description: 'Retrieves time logs where the specified contact is the responsible party.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'contactId',
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
                ...ProjectTimeLogDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/TimeTrackerService/ProjectTimeLogs/ByResponsibleContact'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'contactId': bundle.inputData?.['contactId'],
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProjectTimeLogsByResponsibleContactAsync', response.json);
                    return results;
                })
            },
            sample: samples['ProjectTimeLogDtoListEnvelopeSample']
        }
    },
    getProjectTimeLogsCreatedByContactAsync: {
        key: 'getProjectTimeLogsCreatedByContactAsync',
        noun: 'ProjectTimeLogs',
        display: {
            label: 'Retrieve time logs created by a contact',
            description: 'Retrieves time logs that were created by the specified contact.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'contactId',
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
                ...ProjectTimeLogDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/TimeTrackerService/ProjectTimeLogs/CreatedByContact'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'contactId': bundle.inputData?.['contactId'],
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getProjectTimeLogsCreatedByContactAsync', response.json);
                    return results;
                })
            },
            sample: samples['ProjectTimeLogDtoListEnvelopeSample']
        }
    },
    updateProjectTimeLogAsync: {
        key: 'updateProjectTimeLogAsync',
        noun: 'ProjectTimeLogs',
        display: {
            label: 'Update a project time log',
            description: 'Updates an existing project time log entry.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'timeLogId',
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
                ...ProjectTimeLogUpdateDto.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/TimeTrackerService/ProjectTimeLogs/{timeLogId}'),
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
                        ...ProjectTimeLogUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateProjectTimeLogAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
