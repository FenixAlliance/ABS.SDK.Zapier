const samples = require('../samples/CourseAssignmentComponentsApi');
const CourseAssignmentComponentCreateDto = require('../models/CourseAssignmentComponentCreateDto');
const CourseAssignmentComponentDto = require('../models/CourseAssignmentComponentDto');
const CourseAssignmentComponentUpdateDto = require('../models/CourseAssignmentComponentUpdateDto');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const utils = require('../utils/utils');

module.exports = {
    createCourseAssignmentComponentAsync: {
        key: 'createCourseAssignmentComponentAsync',
        noun: 'CourseAssignmentComponents',
        display: {
            label: 'Create a course assignment component',
            description: 'Creates a new course assignment component for the specified tenant.',
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
                ...CourseAssignmentComponentCreateDto.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/CourseAssignmentComponents'),
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
                        ...CourseAssignmentComponentCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createCourseAssignmentComponentAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    deleteCourseAssignmentComponentAsync: {
        key: 'deleteCourseAssignmentComponentAsync',
        noun: 'CourseAssignmentComponents',
        display: {
            label: 'Delete a course assignment component',
            description: 'Deletes a course assignment component by its ID.',
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
                    key: 'componentId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/CourseAssignmentComponents/{componentId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteCourseAssignmentComponentAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getCourseAssignmentComponentByIdAsync: {
        key: 'getCourseAssignmentComponentByIdAsync',
        noun: 'CourseAssignmentComponents',
        display: {
            label: 'Get course assignment component by ID',
            description: 'Retrieves a specific course assignment component by its ID.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'componentId',
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
                ...CourseAssignmentComponentDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/CourseAssignmentComponents/{componentId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseAssignmentComponentByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseAssignmentComponentDtoSample']
        }
    },
    getCourseAssignmentComponentsAsync: {
        key: 'getCourseAssignmentComponentsAsync',
        noun: 'CourseAssignmentComponents',
        display: {
            label: 'Get all course assignment components',
            description: 'Retrieves all course assignment components for the specified tenant.',
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
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/CourseAssignmentComponents'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseAssignmentComponentsAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseAssignmentComponentDtoSample']
        }
    },
    getCourseAssignmentComponentsCountAsync: {
        key: 'getCourseAssignmentComponentsCountAsync',
        noun: 'CourseAssignmentComponents',
        display: {
            label: 'Get course assignment components count',
            description: 'Returns the count of course assignment components for the specified tenant.',
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
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/CourseAssignmentComponents/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseAssignmentComponentsCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    updateCourseAssignmentComponentAsync: {
        key: 'updateCourseAssignmentComponentAsync',
        noun: 'CourseAssignmentComponents',
        display: {
            label: 'Update a course assignment component',
            description: 'Updates an existing course assignment component.',
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
                    key: 'componentId',
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
                ...CourseAssignmentComponentUpdateDto.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/CourseAssignmentComponents/{componentId}'),
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
                        ...CourseAssignmentComponentUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateCourseAssignmentComponentAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
