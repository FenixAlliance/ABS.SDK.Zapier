const samples = require('../samples/FiscalPeriodsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const FiscalPeriodCreateDto = require('../models/FiscalPeriodCreateDto');
const FiscalPeriodDtoEnvelope = require('../models/FiscalPeriodDtoEnvelope');
const FiscalPeriodDtoListEnvelope = require('../models/FiscalPeriodDtoListEnvelope');
const FiscalPeriodUpdateDto = require('../models/FiscalPeriodUpdateDto');
const Int32Envelope = require('../models/Int32Envelope');
const Operation = require('../models/Operation');
const utils = require('../utils/utils');

module.exports = {
    createFiscalPeriod: {
        key: 'createFiscalPeriod',
        noun: 'FiscalPeriods',
        display: {
            label: 'Create a fiscal period',
            description: 'Creates a new fiscal period associated with a fiscal year.',
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
                ...FiscalPeriodCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/AccountingService/Fiscals/Authorities/FiscalPeriods'),
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
                        ...FiscalPeriodCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createFiscalPeriod', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteFiscalPeriod: {
        key: 'deleteFiscalPeriod',
        noun: 'FiscalPeriods',
        display: {
            label: 'Delete a fiscal period',
            description: 'Deletes a fiscal period identified by its unique identifier.',
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
                    key: 'fiscalPeriodId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/AccountingService/Fiscals/Authorities/FiscalPeriods/{fiscalPeriodId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteFiscalPeriod', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getFiscalPeriod: {
        key: 'getFiscalPeriod',
        noun: 'FiscalPeriods',
        display: {
            label: 'Get fiscal period by ID',
            description: 'Retrieves a specific fiscal period by its unique identifier within a fiscal year.',
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
                    key: 'fiscalYearId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'fiscalPeriodId',
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
                ...FiscalPeriodDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalYears/{fiscalYearId}/FiscalPeriods/{fiscalPeriodId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFiscalPeriod', response.json);
                    return results;
                })
            },
            sample: samples['FiscalPeriodDtoEnvelopeSample']
        }
    },
    getFiscalPeriods: {
        key: 'getFiscalPeriods',
        noun: 'FiscalPeriods',
        display: {
            label: 'Get fiscal periods for a fiscal year',
            description: 'Retrieves all fiscal periods for the specified fiscal year within a fiscal authority.',
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
                    key: 'fiscalYearId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'authorityId',
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
                ...FiscalPeriodDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/AccountingService/Fiscals/Authorities/{authorityId}/FiscalYears/{fiscalYearId}/FiscalPeriods'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'fiscalAuthorityId': bundle.inputData?.['fiscalAuthorityId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFiscalPeriods', response.json);
                    return results;
                })
            },
            sample: samples['FiscalPeriodDtoListEnvelopeSample']
        }
    },
    getFiscalPeriodsCount: {
        key: 'getFiscalPeriodsCount',
        noun: 'FiscalPeriods',
        display: {
            label: 'Get fiscal periods count',
            description: 'Returns the total count of fiscal periods for the specified fiscal year.',
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
                    key: 'fiscalYearId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/AccountingService/Fiscals/Authorities/{fiscalAuthorityId}/FiscalYears/{fiscalYearId}/FiscalPeriods/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFiscalPeriodsCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    patchFiscalPeriodAsync: {
        key: 'patchFiscalPeriodAsync',
        noun: 'FiscalPeriods',
        display: {
            label: 'Patch a fiscal period',
            description: 'Partially updates a fiscal period.',
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
                    key: 'fiscalPeriodId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/AccountingService/Fiscals/Authorities/FiscalPeriods/{fiscalPeriodId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchFiscalPeriodAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateFiscalPeriod: {
        key: 'updateFiscalPeriod',
        noun: 'FiscalPeriods',
        display: {
            label: 'Update a fiscal period',
            description: 'Updates an existing fiscal period identified by its unique identifier.',
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
                    key: 'fiscalPeriodId',
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
                ...FiscalPeriodUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/AccountingService/Fiscals/Authorities/FiscalPeriods/{fiscalPeriodId}'),
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
                        ...FiscalPeriodUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateFiscalPeriod', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
