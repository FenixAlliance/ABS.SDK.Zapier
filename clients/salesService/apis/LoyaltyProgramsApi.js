const samples = require('../samples/LoyaltyProgramsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const LoyaltyProgramCreateDto = require('../models/LoyaltyProgramCreateDto');
const LoyaltyProgramDtoEnvelope = require('../models/LoyaltyProgramDtoEnvelope');
const LoyaltyProgramDtoListEnvelope = require('../models/LoyaltyProgramDtoListEnvelope');
const LoyaltyProgramUpdateDto = require('../models/LoyaltyProgramUpdateDto');
const Operation = require('../models/Operation');
const utils = require('../utils/utils');

module.exports = {
    countLoyaltyProgramsAsync: {
        key: 'countLoyaltyProgramsAsync',
        noun: 'LoyaltyPrograms',
        display: {
            label: 'Get loyalty programs count',
            description: 'Returns the total count of loyalty programs for the specified tenant with OData filter support.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SalesService/LoyaltyPrograms/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countLoyaltyProgramsAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    createLoyaltyProgramAsync: {
        key: 'createLoyaltyProgramAsync',
        noun: 'LoyaltyPrograms',
        display: {
            label: 'Create a loyalty program',
            description: 'Creates a new loyalty program for the specified tenant.',
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
                ...LoyaltyProgramCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SalesService/LoyaltyPrograms'),
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
                        ...LoyaltyProgramCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createLoyaltyProgramAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteLoyaltyProgramAsync: {
        key: 'deleteLoyaltyProgramAsync',
        noun: 'LoyaltyPrograms',
        display: {
            label: 'Delete a loyalty program',
            description: 'Deletes an existing loyalty program by its unique identifier.',
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
                    key: 'loyaltyProgramId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SalesService/LoyaltyPrograms/{loyaltyProgramId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteLoyaltyProgramAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getLoyaltyProgramAsync: {
        key: 'getLoyaltyProgramAsync',
        noun: 'LoyaltyPrograms',
        display: {
            label: 'Get loyalty program by ID',
            description: 'Retrieves a single loyalty program by its unique identifier.',
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
                    key: 'loyaltyProgramId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...LoyaltyProgramDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SalesService/LoyaltyPrograms/{loyaltyProgramId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getLoyaltyProgramAsync', response.json);
                    return results;
                })
            },
            sample: samples['LoyaltyProgramDtoEnvelopeSample']
        }
    },
    getLoyaltyProgramsAsync: {
        key: 'getLoyaltyProgramsAsync',
        noun: 'LoyaltyPrograms',
        display: {
            label: 'Get loyalty programs',
            description: 'Retrieves a list of loyalty programs for the specified tenant with OData query support.',
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
                ...LoyaltyProgramDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SalesService/LoyaltyPrograms'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getLoyaltyProgramsAsync', response.json);
                    return results;
                })
            },
            sample: samples['LoyaltyProgramDtoListEnvelopeSample']
        }
    },
    patchLoyaltyProgramAsync: {
        key: 'patchLoyaltyProgramAsync',
        noun: 'LoyaltyPrograms',
        display: {
            label: 'Patch a loyalty program',
            description: 'Partially updates an existing loyalty program using a JSON Patch document.',
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
                    key: 'loyaltyProgramId',
                    label: '',
                    type: 'string',
                    required: true,
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
                    url: utils.replacePathParameters('http://localhost/api/v2/SalesService/LoyaltyPrograms/{loyaltyProgramId}'),
                    method: 'PATCH',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...Operation.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchLoyaltyProgramAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateLoyaltyProgramAsync: {
        key: 'updateLoyaltyProgramAsync',
        noun: 'LoyaltyPrograms',
        display: {
            label: 'Update a loyalty program',
            description: 'Updates an existing loyalty program by its unique identifier.',
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
                    key: 'loyaltyProgramId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...LoyaltyProgramUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SalesService/LoyaltyPrograms/{loyaltyProgramId}'),
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
                        ...LoyaltyProgramUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateLoyaltyProgramAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
