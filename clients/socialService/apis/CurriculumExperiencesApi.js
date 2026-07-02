const samples = require('../samples/CurriculumExperiencesApi');
const CurriculumExperienceCreateDto = require('../models/CurriculumExperienceCreateDto');
const CurriculumExperienceDtoEnvelope = require('../models/CurriculumExperienceDtoEnvelope');
const CurriculumExperienceDtoListEnvelope = require('../models/CurriculumExperienceDtoListEnvelope');
const CurriculumExperienceUpdateDto = require('../models/CurriculumExperienceUpdateDto');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const Operation = require('../models/Operation');
const utils = require('../utils/utils');

module.exports = {
    createCurriculumExperienceAsync: {
        key: 'createCurriculumExperienceAsync',
        noun: 'CurriculumExperiences',
        display: {
            label: 'Create a curriculum experience',
            description: 'Adds a work-experience record to a curriculum authored on the specified social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'curriculumId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'socialProfileId',
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
                ...CurriculumExperienceCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/Curriculums/{curriculumId}/Experiences'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'socialProfileId': bundle.inputData?.['socialProfileId'],
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...CurriculumExperienceCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createCurriculumExperienceAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteCurriculumExperienceAsync: {
        key: 'deleteCurriculumExperienceAsync',
        noun: 'CurriculumExperiences',
        display: {
            label: 'Delete a curriculum experience',
            description: 'Removes a work-experience record from a curriculum.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'curriculumId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'experienceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'socialProfileId',
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/Curriculums/{curriculumId}/Experiences/{experienceId}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'socialProfileId': bundle.inputData?.['socialProfileId'],
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteCurriculumExperienceAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getCurriculumExperienceAsync: {
        key: 'getCurriculumExperienceAsync',
        noun: 'CurriculumExperiences',
        display: {
            label: 'Get curriculum experience by ID',
            description: 'Retrieves a specific work-experience record of a curriculum.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'curriculumId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'experienceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'socialProfileId',
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
                ...CurriculumExperienceDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/Curriculums/{curriculumId}/Experiences/{experienceId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'socialProfileId': bundle.inputData?.['socialProfileId'],
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurriculumExperienceAsync', response.json);
                    return results;
                })
            },
            sample: samples['CurriculumExperienceDtoEnvelopeSample']
        }
    },
    getCurriculumExperiencesAsync: {
        key: 'getCurriculumExperiencesAsync',
        noun: 'CurriculumExperiences',
        display: {
            label: 'Get curriculum experiences',
            description: 'Retrieves the work-experience records of a curriculum authored on the specified social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'curriculumId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'socialProfileId',
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
                ...CurriculumExperienceDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/Curriculums/{curriculumId}/Experiences'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'socialProfileId': bundle.inputData?.['socialProfileId'],
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurriculumExperiencesAsync', response.json);
                    return results;
                })
            },
            sample: samples['CurriculumExperienceDtoListEnvelopeSample']
        }
    },
    getCurriculumExperiencesCountAsync: {
        key: 'getCurriculumExperiencesCountAsync',
        noun: 'CurriculumExperiences',
        display: {
            label: 'Count curriculum experiences',
            description: 'Returns the count of work-experience records of a curriculum.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'curriculumId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'socialProfileId',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/Curriculums/{curriculumId}/Experiences/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'socialProfileId': bundle.inputData?.['socialProfileId'],
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurriculumExperiencesCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    patchCurriculumExperienceAsync: {
        key: 'patchCurriculumExperienceAsync',
        noun: 'CurriculumExperiences',
        display: {
            label: 'Patch a curriculum experience',
            description: 'Partially updates an existing work-experience record of a curriculum.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'curriculumId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'experienceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'socialProfileId',
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
                {
                    key: 'Operation',
                    label: '',
                    type: 'string',
                }
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/Curriculums/{curriculumId}/Experiences/{experienceId}'),
                    method: 'PATCH',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'socialProfileId': bundle.inputData?.['socialProfileId'],
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...Operation.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchCurriculumExperienceAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateCurriculumExperienceAsync: {
        key: 'updateCurriculumExperienceAsync',
        noun: 'CurriculumExperiences',
        display: {
            label: 'Update a curriculum experience',
            description: 'Updates an existing work-experience record of a curriculum.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'curriculumId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'experienceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'socialProfileId',
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
                ...CurriculumExperienceUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/Curriculums/{curriculumId}/Experiences/{experienceId}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'socialProfileId': bundle.inputData?.['socialProfileId'],
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...CurriculumExperienceUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateCurriculumExperienceAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
