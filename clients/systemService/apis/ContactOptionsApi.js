const samples = require('../samples/ContactOptionsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const OptionCreateDto = require('../models/OptionCreateDto');
const OptionDtoEnvelope = require('../models/OptionDtoEnvelope');
const OptionDtoListEnvelope = require('../models/OptionDtoListEnvelope');
const OptionUpdateDto = require('../models/OptionUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    createSystemContactOption: {
        key: 'createSystemContactOption',
        noun: 'ContactOptions',
        display: {
            label: 'Create a new contact option (admin)',
            description: 'Admin endpoint to create an option for any contact',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/Contacts/{contactId}/Options'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createSystemContactOption', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteSystemContactOption: {
        key: 'deleteSystemContactOption',
        noun: 'ContactOptions',
        display: {
            label: 'Delete a contact option (admin)',
            description: 'Admin endpoint to delete an option for any contact',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/Contacts/{contactId}/Options/{optionId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteSystemContactOption', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getSystemContactOptionById: {
        key: 'getSystemContactOptionById',
        noun: 'ContactOptions',
        display: {
            label: 'Retrieve a single contact option by its ID (admin)',
            description: 'Admin endpoint to retrieve a single option for any contact',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/Contacts/{contactId}/Options/{optionId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSystemContactOptionById', response.json);
                    return results;
                })
            },
            sample: samples['OptionDtoEnvelopeSample']
        }
    },
    getSystemContactOptions: {
        key: 'getSystemContactOptions',
        noun: 'ContactOptions',
        display: {
            label: 'Retrieve a list of contact options (admin)',
            description: 'Admin endpoint to retrieve options for any contact',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/Contacts/{contactId}/Options'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSystemContactOptions', response.json);
                    return results;
                })
            },
            sample: samples['OptionDtoListEnvelopeSample']
        }
    },
    getSystemContactOptionsCount: {
        key: 'getSystemContactOptionsCount',
        noun: 'ContactOptions',
        display: {
            label: 'Get the count of contact options (admin)',
            description: 'Admin endpoint to get the count of options for any contact',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/Contacts/{contactId}/Options/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSystemContactOptionsCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    updateSystemContactOption: {
        key: 'updateSystemContactOption',
        noun: 'ContactOptions',
        display: {
            label: 'Update a contact option (admin)',
            description: 'Admin endpoint to update an option for any contact',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/Contacts/{contactId}/Options/{optionId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateSystemContactOption', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
