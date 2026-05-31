const samples = require('../samples/MeApi');
const AverageDtoEnvelope = require('../models/AverageDtoEnvelope');
const CountDtoEnvelope = require('../models/CountDtoEnvelope');
const CourseCompletionCertificateDtoIReadOnlyListEnvelope = require('../models/CourseCompletionCertificateDtoIReadOnlyListEnvelope');
const CourseDtoIReadOnlyListEnvelope = require('../models/CourseDtoIReadOnlyListEnvelope');
const CourseEnrollmentDtoIReadOnlyListEnvelope = require('../models/CourseEnrollmentDtoIReadOnlyListEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const InstructorProfileDtoIReadOnlyListEnvelope = require('../models/InstructorProfileDtoIReadOnlyListEnvelope');
const StudentProfileDtoIReadOnlyListEnvelope = require('../models/StudentProfileDtoIReadOnlyListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    getMyAverageScoreAsync: {
        key: 'getMyAverageScoreAsync',
        noun: 'Me',
        display: {
            label: 'Get current user&#39;s average score',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                ...AverageDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/Me/AverageScore'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMyAverageScoreAsync', response.json);
                    return results;
                })
            },
            sample: samples['AverageDtoEnvelopeSample']
        }
    },
    getMyCertificatesAsync: {
        key: 'getMyCertificatesAsync',
        noun: 'Me',
        display: {
            label: 'Get current user&#39;s completion certificates',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                ...CourseCompletionCertificateDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/Me/Certificates'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMyCertificatesAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseCompletionCertificateDtoIReadOnlyListEnvelopeSample']
        }
    },
    getMyCertificatesCountAsync: {
        key: 'getMyCertificatesCountAsync',
        noun: 'Me',
        display: {
            label: 'Get current user&#39;s certificates count',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/Me/Certificates/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMyCertificatesCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getMyEnrollmentsAsync: {
        key: 'getMyEnrollmentsAsync',
        noun: 'Me',
        display: {
            label: 'Get current user&#39;s course enrollments',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                ...CourseEnrollmentDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/Me/Enrollments'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMyEnrollmentsAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseEnrollmentDtoIReadOnlyListEnvelopeSample']
        }
    },
    getMyEnrollmentsCountAsync: {
        key: 'getMyEnrollmentsCountAsync',
        noun: 'Me',
        display: {
            label: 'Get current user&#39;s enrollment count',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/Me/Enrollments/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMyEnrollmentsCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getMyHoursCompletedAsync: {
        key: 'getMyHoursCompletedAsync',
        noun: 'Me',
        display: {
            label: 'Get current user&#39;s completed hours',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                ...CountDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/Me/HoursCompleted'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMyHoursCompletedAsync', response.json);
                    return results;
                })
            },
            sample: samples['CountDtoEnvelopeSample']
        }
    },
    getMyInstructorCoursesAsync: {
        key: 'getMyInstructorCoursesAsync',
        noun: 'Me',
        display: {
            label: 'Get current user&#39;s instructor courses',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                ...CourseDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/Me/InstructorCourses'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMyInstructorCoursesAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseDtoIReadOnlyListEnvelopeSample']
        }
    },
    getMyInstructorCoursesCountAsync: {
        key: 'getMyInstructorCoursesCountAsync',
        noun: 'Me',
        display: {
            label: 'Get current user&#39;s instructor courses count',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/Me/InstructorCourses/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMyInstructorCoursesCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getMyInstructorProfilesAsync: {
        key: 'getMyInstructorProfilesAsync',
        noun: 'Me',
        display: {
            label: 'Get current user&#39;s instructor profiles',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                ...InstructorProfileDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/Me/InstructorProfiles'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMyInstructorProfilesAsync', response.json);
                    return results;
                })
            },
            sample: samples['InstructorProfileDtoIReadOnlyListEnvelopeSample']
        }
    },
    getMyInstructorProfilesCountAsync: {
        key: 'getMyInstructorProfilesCountAsync',
        noun: 'Me',
        display: {
            label: 'Get current user&#39;s instructor profiles count',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/Me/InstructorProfiles/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMyInstructorProfilesCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getMyPendingTaskCountAsync: {
        key: 'getMyPendingTaskCountAsync',
        noun: 'Me',
        display: {
            label: 'Get current user&#39;s pending task count',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                ...CountDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/Me/PendingTasks'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMyPendingTaskCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['CountDtoEnvelopeSample']
        }
    },
    getMyStudentCoursesAsync: {
        key: 'getMyStudentCoursesAsync',
        noun: 'Me',
        display: {
            label: 'Get current user&#39;s enrolled courses',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                ...CourseDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/Me/Courses'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMyStudentCoursesAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseDtoIReadOnlyListEnvelopeSample']
        }
    },
    getMyStudentCoursesCountAsync: {
        key: 'getMyStudentCoursesCountAsync',
        noun: 'Me',
        display: {
            label: 'Get current user&#39;s enrolled courses count',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/Me/Courses/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMyStudentCoursesCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getMyStudentProfilesAsync: {
        key: 'getMyStudentProfilesAsync',
        noun: 'Me',
        display: {
            label: 'Get current user&#39;s student profiles',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                ...StudentProfileDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/Me/StudentProfiles'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMyStudentProfilesAsync', response.json);
                    return results;
                })
            },
            sample: samples['StudentProfileDtoIReadOnlyListEnvelopeSample']
        }
    },
    getMyStudentProfilesCountAsync: {
        key: 'getMyStudentProfilesCountAsync',
        noun: 'Me',
        display: {
            label: 'Get current user&#39;s student profiles count',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                    url: utils.replacePathParameters('http://localhost/api/v2/LearningService/Me/StudentProfiles/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMyStudentProfilesCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
}
