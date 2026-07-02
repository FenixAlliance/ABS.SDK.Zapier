const samples = require('../samples/CurriculumsApi');
const CurriculumCreateDto = require('../models/CurriculumCreateDto');
const CurriculumDtoEnvelope = require('../models/CurriculumDtoEnvelope');
const CurriculumDtoListEnvelope = require('../models/CurriculumDtoListEnvelope');
const CurriculumUpdateDto = require('../models/CurriculumUpdateDto');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const Operation = require('../models/Operation');
const utils = require('../utils/utils');

module.exports = {
    createCurriculumAsync: {
        key: 'createCurriculumAsync',
        noun: 'Curriculums',
        display: {
            label: 'Create a curriculum',
            description: 'Creates a curriculum (CV) on the specified social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                ...CurriculumCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/Curriculums'),
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
                        ...CurriculumCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createCurriculumAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteCurriculumAsync: {
        key: 'deleteCurriculumAsync',
        noun: 'Curriculums',
        display: {
            label: 'Delete a curriculum',
            description: 'Deletes a curriculum authored on the specified social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'curriculumId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/Curriculums/{curriculumId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteCurriculumAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getCurriculumAsync: {
        key: 'getCurriculumAsync',
        noun: 'Curriculums',
        display: {
            label: 'Get curriculum by ID',
            description: 'Retrieves a specific curriculum authored on the specified social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'curriculumId',
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
                ...CurriculumDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/Curriculums/{curriculumId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurriculumAsync', response.json);
                    return results;
                })
            },
            sample: samples['CurriculumDtoEnvelopeSample']
        }
    },
    getCurriculumsAsync: {
        key: 'getCurriculumsAsync',
        noun: 'Curriculums',
        display: {
            label: 'Get curricula',
            description: 'Retrieves the curricula (CVs) authored on the specified social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                ...CurriculumDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/Curriculums'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurriculumsAsync', response.json);
                    return results;
                })
            },
            sample: samples['CurriculumDtoListEnvelopeSample']
        }
    },
    getCurriculumsCountAsync: {
        key: 'getCurriculumsCountAsync',
        noun: 'Curriculums',
        display: {
            label: 'Count curricula',
            description: 'Returns the count of curricula authored on the specified social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/Curriculums/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurriculumsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    patchCurriculumAsync: {
        key: 'patchCurriculumAsync',
        noun: 'Curriculums',
        display: {
            label: 'Patch a curriculum',
            description: 'Partially updates an existing curriculum authored on the specified social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'curriculumId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/Curriculums/{curriculumId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchCurriculumAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateCurriculumAsync: {
        key: 'updateCurriculumAsync',
        noun: 'Curriculums',
        display: {
            label: 'Update a curriculum',
            description: 'Updates an existing curriculum authored on the specified social profile.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'socialProfileId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'curriculumId',
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
                ...CurriculumUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SocialService/Curriculums/{curriculumId}'),
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
                        ...CurriculumUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateCurriculumAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
