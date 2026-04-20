const samples = require('../samples/OptionsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const OptionCreateDto = require('../models/OptionCreateDto');
const OptionDtoEnvelope = require('../models/OptionDtoEnvelope');
const OptionDtoListEnvelope = require('../models/OptionDtoListEnvelope');
const OptionUpdateDto = require('../models/OptionUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    createUserOption: {
        key: 'createUserOption',
        noun: 'Options',
        display: {
            label: 'Create a new user option',
            description: 'Create a new option for the current user',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'key',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'portalId',
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
                ...OptionCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Options'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'key': bundle.inputData?.['key'],
                        'portalId': bundle.inputData?.['portalId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...OptionCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createUserOption', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteUserOption: {
        key: 'deleteUserOption',
        noun: 'Options',
        display: {
            label: 'Delete a user option',
            description: 'Delete a user option',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'optionId',
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Options/{optionId}'),
                    method: 'DELETE',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteUserOption', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getUserOptionById: {
        key: 'getUserOptionById',
        noun: 'Options',
        display: {
            label: 'Retrieve a single user option by its ID',
            description: 'Retrieve a single user option by its ID',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'optionId',
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
                ...OptionDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Options/{optionId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getUserOptionById', response.json);
                    return results;
                })
            },
            sample: samples['OptionDtoEnvelopeSample']
        }
    },
    getUserOptionByKey: {
        key: 'getUserOptionByKey',
        noun: 'Options',
        display: {
            label: 'Retrieve a single user option by its key',
            description: 'Retrieve a single user option by its key',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'key',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'portalId',
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
                ...OptionDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Options/Key/{key}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'portalId': bundle.inputData?.['portalId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getUserOptionByKey', response.json);
                    return results;
                })
            },
            sample: samples['OptionDtoEnvelopeSample']
        }
    },
    getUserOptions: {
        key: 'getUserOptions',
        noun: 'Options',
        display: {
            label: 'Retrieve a list of user options',
            description: 'Retrieve a list of options for the current user',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'portalId',
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
                ...OptionDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Options'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'portalId': bundle.inputData?.['portalId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getUserOptions', response.json);
                    return results;
                })
            },
            sample: samples['OptionDtoListEnvelopeSample']
        }
    },
    getUserOptionsCount: {
        key: 'getUserOptionsCount',
        noun: 'Options',
        display: {
            label: 'Get the count of user options',
            description: 'Get the count of options for the current user',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'portalId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Options/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'portalId': bundle.inputData?.['portalId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getUserOptionsCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    updateUserOption: {
        key: 'updateUserOption',
        noun: 'Options',
        display: {
            label: 'Update a user option',
            description: 'Update a user option',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'optionId',
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
                ...OptionUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Options/{optionId}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...OptionUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateUserOption', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    upsertUserOption: {
        key: 'upsertUserOption',
        noun: 'Options',
        display: {
            label: 'Create or update a user option by key',
            description: 'Create or update a user option by key',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'key',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'portalId',
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
                ...OptionUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/Me/Options/Upsert/{key}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'portalId': bundle.inputData?.['portalId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...OptionUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'upsertUserOption', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
