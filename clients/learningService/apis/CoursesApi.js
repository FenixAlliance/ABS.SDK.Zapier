const samples = require('../samples/CoursesApi');
const CourseArticleDto = require('../models/CourseArticleDto');
const CourseAssignmentDto = require('../models/CourseAssignmentDto');
const CourseCategoryDto = require('../models/CourseCategoryDto');
const CourseCohortDto = require('../models/CourseCohortDto');
const CourseCreateDto = require('../models/CourseCreateDto');
const CourseDto = require('../models/CourseDto');
const CourseEnrollmentDto = require('../models/CourseEnrollmentDto');
const CourseFileDto = require('../models/CourseFileDto');
const CourseForumDto = require('../models/CourseForumDto');
const CourseHandoutDto = require('../models/CourseHandoutDto');
const CourseLibraryDto = require('../models/CourseLibraryDto');
const CourseNewsDto = require('../models/CourseNewsDto');
const CoursePageDto = require('../models/CoursePageDto');
const CourseProblemSetDto = require('../models/CourseProblemSetDto');
const CourseSectionDto = require('../models/CourseSectionDto');
const CourseUnitComponentDto = require('../models/CourseUnitComponentDto');
const CourseUnitDto = require('../models/CourseUnitDto');
const CourseUpdateDto = require('../models/CourseUpdateDto');
const CourseWikiDto = require('../models/CourseWikiDto');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const InstructorProfileDto = require('../models/InstructorProfileDto');
const StudentProfileDto = require('../models/StudentProfileDto');
const utils = require('../utils/utils');

module.exports = {
    createCourseAsync: {
        key: 'createCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Create a new course',
            description: 'Creates a new course for the specified tenant.',
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
                ...CourseCreateDto.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses'),
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
                        ...CourseCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createCourseAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    deleteCourseAsync: {
        key: 'deleteCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Delete a course',
            description: 'Deletes a course for the specified tenant.',
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
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteCourseAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getCourseArticlesByCourseWikiAsync: {
        key: 'getCourseArticlesByCourseWikiAsync',
        noun: 'Courses',
        display: {
            label: 'Get course articles by course wiki',
            description: 'Retrieves all course articles for a specific course wiki.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'wikiId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Articles/{wikiId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseArticlesByCourseWikiAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseArticleDtoSample']
        }
    },
    getCourseArticlesByCourseWikiCountAsync: {
        key: 'getCourseArticlesByCourseWikiCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get course articles by course wiki count',
            description: 'Returns the count of course articles for a specific course wiki.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'wikiId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Articles/{wikiId}/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseArticlesByCourseWikiCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getCourseAssignmentsByCourseAsync: {
        key: 'getCourseAssignmentsByCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Get course assignments by course',
            description: 'Retrieves all course assignments for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Assignments'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseAssignmentsByCourseAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseAssignmentDtoSample']
        }
    },
    getCourseAssignmentsByCourseCountAsync: {
        key: 'getCourseAssignmentsByCourseCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get course assignments by course count',
            description: 'Returns the count of course assignments for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Assignments/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseAssignmentsByCourseCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getCourseByIdAsync: {
        key: 'getCourseByIdAsync',
        noun: 'Courses',
        display: {
            label: 'Get course by ID',
            description: 'Retrieves a specific course by its ID.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
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
                ...CourseDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseDtoSample']
        }
    },
    getCourseCategoriesByCourseAsync: {
        key: 'getCourseCategoriesByCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Get course categories by course',
            description: 'Retrieves all course categories for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Categories'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseCategoriesByCourseAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseCategoryDtoSample']
        }
    },
    getCourseCategoriesByCourseCountAsync: {
        key: 'getCourseCategoriesByCourseCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get course categories by course count',
            description: 'Returns the count of course categories for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Categories/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseCategoriesByCourseCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getCourseCohortsByCourseAsync: {
        key: 'getCourseCohortsByCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Get course cohorts by course',
            description: 'Retrieves all course cohorts for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Cohorts'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseCohortsByCourseAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseCohortDtoSample']
        }
    },
    getCourseCohortsByCourseCountAsync: {
        key: 'getCourseCohortsByCourseCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get course cohorts by course count',
            description: 'Returns the count of course cohorts for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Cohorts/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseCohortsByCourseCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getCourseEnrollmentsByCourseAsync: {
        key: 'getCourseEnrollmentsByCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Get enrollments by course',
            description: 'Retrieves all enrollments for a specific course.',
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
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Enrollments'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseEnrollmentsByCourseAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseEnrollmentDtoSample']
        }
    },
    getCourseFilesByCourseAsync: {
        key: 'getCourseFilesByCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Get course files by course',
            description: 'Retrieves all course files for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Files'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseFilesByCourseAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseFileDtoSample']
        }
    },
    getCourseFilesByCourseCountAsync: {
        key: 'getCourseFilesByCourseCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get course files by course count',
            description: 'Returns the count of course files for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Files/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseFilesByCourseCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getCourseForumsByCourseAsync: {
        key: 'getCourseForumsByCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Get course forums by course',
            description: 'Retrieves all course forums for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Forums'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseForumsByCourseAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseForumDtoSample']
        }
    },
    getCourseForumsByCourseCountAsync: {
        key: 'getCourseForumsByCourseCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get course forums by course count',
            description: 'Returns the count of course forums for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Forums/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseForumsByCourseCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getCourseHandoutsByCourseAsync: {
        key: 'getCourseHandoutsByCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Get course handouts by course',
            description: 'Retrieves all course handouts for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Handouts'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseHandoutsByCourseAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseHandoutDtoSample']
        }
    },
    getCourseHandoutsByCourseCountAsync: {
        key: 'getCourseHandoutsByCourseCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get course handouts by course count',
            description: 'Returns the count of course handouts for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Handouts/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseHandoutsByCourseCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getCourseLibrariesByCourseAsync: {
        key: 'getCourseLibrariesByCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Get course libraries by course',
            description: 'Retrieves all course libraries for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Libraries'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseLibrariesByCourseAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseLibraryDtoSample']
        }
    },
    getCourseLibrariesByCourseCountAsync: {
        key: 'getCourseLibrariesByCourseCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get course libraries by course count',
            description: 'Returns the count of course libraries for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Libraries/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseLibrariesByCourseCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getCoursePagesByCourseAsync: {
        key: 'getCoursePagesByCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Get course pages by course',
            description: 'Retrieves all course pages for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Pages'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCoursePagesByCourseAsync', response.json);
                    return results;
                })
            },
            sample: samples['CoursePageDtoSample']
        }
    },
    getCoursePagesByCourseCountAsync: {
        key: 'getCoursePagesByCourseCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get course pages by course count',
            description: 'Returns the count of course pages for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Pages/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCoursePagesByCourseCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getCourseProblemSetsByCourseAsync: {
        key: 'getCourseProblemSetsByCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Get course problem sets by course',
            description: 'Retrieves all course problem sets for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/ProblemSets'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseProblemSetsByCourseAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseProblemSetDtoSample']
        }
    },
    getCourseProblemSetsByCourseCountAsync: {
        key: 'getCourseProblemSetsByCourseCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get course problem sets by course count',
            description: 'Returns the count of course problem sets for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/ProblemSets/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseProblemSetsByCourseCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getCourseSectionsByCourseAsync: {
        key: 'getCourseSectionsByCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Get course sections by course',
            description: 'Retrieves all course sections for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Sections'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseSectionsByCourseAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseSectionDtoSample']
        }
    },
    getCourseSectionsByCourseCountAsync: {
        key: 'getCourseSectionsByCourseCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get course sections by course count',
            description: 'Returns the count of course sections for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Sections/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseSectionsByCourseCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getCourseUnitComponentsByCourseAsync: {
        key: 'getCourseUnitComponentsByCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Get course unit components by course',
            description: 'Retrieves all course unit components for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/UnitComponents'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseUnitComponentsByCourseAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseUnitComponentDtoSample']
        }
    },
    getCourseUnitComponentsByCourseCountAsync: {
        key: 'getCourseUnitComponentsByCourseCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get course unit components by course count',
            description: 'Returns the count of course unit components for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/UnitComponents/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseUnitComponentsByCourseCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getCourseUnitsBySectionAsync: {
        key: 'getCourseUnitsBySectionAsync',
        noun: 'Courses',
        display: {
            label: 'Get course units by section',
            description: 'Retrieves all course units for a specific course section.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'sectionId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Units/{sectionId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseUnitsBySectionAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseUnitDtoSample']
        }
    },
    getCourseUnitsBySectionCountAsync: {
        key: 'getCourseUnitsBySectionCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get course units by section count',
            description: 'Returns the count of course units for a specific course section.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'sectionId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Units/{sectionId}/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseUnitsBySectionCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getCourseUpdatesByCourseAsync: {
        key: 'getCourseUpdatesByCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Get course updates by course',
            description: 'Retrieves all course updates for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Updates'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseUpdatesByCourseAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseNewsDtoSample']
        }
    },
    getCourseUpdatesByCourseCountAsync: {
        key: 'getCourseUpdatesByCourseCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get course updates by course count',
            description: 'Returns the count of course updates for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Updates/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseUpdatesByCourseCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getCourseWikisByCourseAsync: {
        key: 'getCourseWikisByCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Get course wikis by course',
            description: 'Retrieves all course wikis for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Wikis'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseWikisByCourseAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseWikiDtoSample']
        }
    },
    getCourseWikisByCourseCountAsync: {
        key: 'getCourseWikisByCourseCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get course wikis by course count',
            description: 'Returns the count of course wikis for a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Wikis/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCourseWikisByCourseCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getCoursesAsync: {
        key: 'getCoursesAsync',
        noun: 'Courses',
        display: {
            label: 'Get courses',
            description: 'Retrieves courses. When tenantId is provided, returns tenant-scoped courses; otherwise returns all courses.',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCoursesAsync', response.json);
                    return results;
                })
            },
            sample: samples['CourseDtoSample']
        }
    },
    getCoursesCountAsync: {
        key: 'getCoursesCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get courses count',
            description: 'Returns the count of courses. When tenantId is provided, returns tenant-scoped count; otherwise returns global count.',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCoursesCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getInstructorProfilesByCourseAsync: {
        key: 'getInstructorProfilesByCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Get instructor profiles by course',
            description: 'Retrieves all instructor profiles teaching a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Instructors'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInstructorProfilesByCourseAsync', response.json);
                    return results;
                })
            },
            sample: samples['InstructorProfileDtoSample']
        }
    },
    getInstructorProfilesByCourseCountAsync: {
        key: 'getInstructorProfilesByCourseCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get instructor profiles by course count',
            description: 'Returns the count of instructor profiles teaching a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Instructors/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInstructorProfilesByCourseCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getStudentProfilesByCourseAsync: {
        key: 'getStudentProfilesByCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Get student profiles by course',
            description: 'Retrieves all student profiles enrolled in a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Students'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getStudentProfilesByCourseAsync', response.json);
                    return results;
                })
            },
            sample: samples['StudentProfileDtoSample']
        }
    },
    getStudentProfilesByCourseCountAsync: {
        key: 'getStudentProfilesByCourseCountAsync',
        noun: 'Courses',
        display: {
            label: 'Get student profiles by course count',
            description: 'Returns the count of student profiles enrolled in a specific course.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'courseId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}/Students/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getStudentProfilesByCourseCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    updateCourseAsync: {
        key: 'updateCourseAsync',
        noun: 'Courses',
        display: {
            label: 'Update a course',
            description: 'Updates an existing course for the specified tenant.',
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
                    key: 'courseId',
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
                ...CourseUpdateDto.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LearningService/Courses/{courseId}'),
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
                        ...CourseUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateCourseAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
