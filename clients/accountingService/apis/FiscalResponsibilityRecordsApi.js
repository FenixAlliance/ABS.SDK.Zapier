const samples = require('../samples/FiscalResponsibilityRecordsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const FiscalResponsibilityRecordCreateDto = require('../models/FiscalResponsibilityRecordCreateDto');
const FiscalResponsibilityRecordDtoEnvelope = require('../models/FiscalResponsibilityRecordDtoEnvelope');
const FiscalResponsibilityRecordDtoListEnvelope = require('../models/FiscalResponsibilityRecordDtoListEnvelope');
const FiscalResponsibilityRecordUpdateDto = require('../models/FiscalResponsibilityRecordUpdateDto');
const Int32Envelope = require('../models/Int32Envelope');
const Operation = require('../models/Operation');
const utils = require('../utils/utils');

module.exports = {
    createFiscalResponsibilityRecord: {
        key: 'createFiscalResponsibilityRecord',
        noun: 'FiscalResponsibilityRecords',
        display: {
            label: 'Create a fiscal responsibility record',
            description: 'Creates a new fiscal responsibility record for a fiscal responsibility.',
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
                ...FiscalResponsibilityRecordCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilityRecords'),
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
                        ...FiscalResponsibilityRecordCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createFiscalResponsibilityRecord', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteFiscalResponsibilityRecord: {
        key: 'deleteFiscalResponsibilityRecord',
        noun: 'FiscalResponsibilityRecords',
        display: {
            label: 'Delete a fiscal responsibility record',
            description: 'Deletes a fiscal responsibility record identified by its unique identifier.',
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
                    key: 'fiscalResponsibilityRecordId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilityRecords/{fiscalResponsibilityRecordId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteFiscalResponsibilityRecord', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getFiscalResponsibilityRecord: {
        key: 'getFiscalResponsibilityRecord',
        noun: 'FiscalResponsibilityRecords',
        display: {
            label: 'Get fiscal responsibility record by ID',
            description: 'Retrieves a specific fiscal responsibility record by its unique identifier.',
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
                    key: 'fiscalAuthorityId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'fiscalResponsibilityId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'fiscalResponsibilityRecordId',
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
                ...FiscalResponsibilityRecordDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalResponsibilities/{fiscalResponsibilityId}/FiscalResponsibilityRecords/{fiscalResponsibilityRecordId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFiscalResponsibilityRecord', response.json);
                    return results;
                })
            },
            sample: samples['FiscalResponsibilityRecordDtoEnvelopeSample']
        }
    },
    getFiscalResponsibilityRecords: {
        key: 'getFiscalResponsibilityRecords',
        noun: 'FiscalResponsibilityRecords',
        display: {
            label: 'Get fiscal responsibility records',
            description: 'Retrieves all fiscal responsibility records for the specified fiscal responsibility.',
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
                    key: 'fiscalAuthorityId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'fiscalResponsibilityId',
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
                ...FiscalResponsibilityRecordDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalResponsibilities/{fiscalResponsibilityId}/FiscalResponsibilityRecords'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFiscalResponsibilityRecords', response.json);
                    return results;
                })
            },
            sample: samples['FiscalResponsibilityRecordDtoListEnvelopeSample']
        }
    },
    getFiscalResponsibilityRecordsCount: {
        key: 'getFiscalResponsibilityRecordsCount',
        noun: 'FiscalResponsibilityRecords',
        display: {
            label: 'Get fiscal responsibility records count',
            description: 'Returns the total count of fiscal responsibility records for the specified fiscal responsibility.',
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
                    key: 'fiscalAuthorityId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'fiscalResponsibilityId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalResponsibilities/{fiscalResponsibilityId}/FiscalResponsibilityRecords/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFiscalResponsibilityRecordsCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    patchFiscalResponsibilityRecordAsync: {
        key: 'patchFiscalResponsibilityRecordAsync',
        noun: 'FiscalResponsibilityRecords',
        display: {
            label: 'Patch a fiscal responsibility record',
            description: 'Partially updates a fiscal responsibility record.',
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
                    key: 'fiscalResponsibilityRecordId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilityRecords/{fiscalResponsibilityRecordId}'),
                    method: 'PATCH',
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
                        ...Operation.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchFiscalResponsibilityRecordAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateFiscalResponsibilityRecord: {
        key: 'updateFiscalResponsibilityRecord',
        noun: 'FiscalResponsibilityRecords',
        display: {
            label: 'Update a fiscal responsibility record',
            description: 'Updates an existing fiscal responsibility record identified by its unique identifier.',
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
                    key: 'fiscalResponsibilityRecordId',
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
                ...FiscalResponsibilityRecordUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/AccountingService/Fiscals/Authorities/FiscalResponsibilityRecords/{fiscalResponsibilityRecordId}'),
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
                        ...FiscalResponsibilityRecordUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateFiscalResponsibilityRecord', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
