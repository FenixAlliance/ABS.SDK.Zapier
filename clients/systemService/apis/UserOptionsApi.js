const samples = require('../samples/UserOptionsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const Operation = require('../models/Operation');
const OptionCreateDto = require('../models/OptionCreateDto');
const OptionDtoEnvelope = require('../models/OptionDtoEnvelope');
const OptionDtoListEnvelope = require('../models/OptionDtoListEnvelope');
const OptionUpdateDto = require('../models/OptionUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    createSystemUserOption: {
        key: 'createSystemUserOption',
        noun: 'UserOptions',
        display: {
            label: 'Create a new user option (admin)',
            description: 'Admin endpoint to create an option for any user',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'userId',
                    label: '',
                    type: 'string',
                    required: true,
                },
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/Users/{userId}/Options'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createSystemUserOption', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteSystemUserOption: {
        key: 'deleteSystemUserOption',
        noun: 'UserOptions',
        display: {
            label: 'Delete a user option (admin)',
            description: 'Admin endpoint to delete an option for any user',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'userId',
                    label: '',
                    type: 'string',
                    required: true,
                },
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/Users/{userId}/Options/{optionId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteSystemUserOption', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getSystemUserOptionById: {
        key: 'getSystemUserOptionById',
        noun: 'UserOptions',
        display: {
            label: 'Retrieve a single user option by its ID (admin)',
            description: 'Admin endpoint to retrieve a single option for any user',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'userId',
                    label: '',
                    type: 'string',
                    required: true,
                },
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/Users/{userId}/Options/{optionId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSystemUserOptionById', response.json);
                    return results;
                })
            },
            sample: samples['OptionDtoEnvelopeSample']
        }
    },
    getSystemUserOptions: {
        key: 'getSystemUserOptions',
        noun: 'UserOptions',
        display: {
            label: 'Retrieve a list of user options (admin)',
            description: 'Admin endpoint to retrieve options for any user',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'userId',
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
                ...OptionDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/Users/{userId}/Options'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSystemUserOptions', response.json);
                    return results;
                })
            },
            sample: samples['OptionDtoListEnvelopeSample']
        }
    },
    getSystemUserOptionsCount: {
        key: 'getSystemUserOptionsCount',
        noun: 'UserOptions',
        display: {
            label: 'Get the count of user options (admin)',
            description: 'Admin endpoint to get the count of options for any user',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'userId',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/Users/{userId}/Options/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSystemUserOptionsCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    patchSystemUserOption: {
        key: 'patchSystemUserOption',
        noun: 'UserOptions',
        display: {
            label: 'Partially update a user option (admin)',
            description: 'Admin endpoint to partially update an option for any user using a JSON Patch document',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'userId',
                    label: '',
                    type: 'string',
                    required: true,
                },
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/Users/{userId}/Options/{optionId}'),
                    method: 'PATCH',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...Operation.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchSystemUserOption', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateSystemUserOption: {
        key: 'updateSystemUserOption',
        noun: 'UserOptions',
        display: {
            label: 'Update a user option (admin)',
            description: 'Admin endpoint to update an option for any user',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'userId',
                    label: '',
                    type: 'string',
                    required: true,
                },
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/Users/{userId}/Options/{optionId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateSystemUserOption', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
