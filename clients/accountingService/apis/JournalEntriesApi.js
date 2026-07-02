const samples = require('../samples/JournalEntriesApi');
const DecimalEnvelope = require('../models/DecimalEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const utils = require('../utils/utils');

module.exports = {
    getExpensesSumAsync: {
        key: 'getExpensesSumAsync',
        noun: 'JournalEntries',
        display: {
            label: 'Sum tenant expenses',
            description: 'Returns SUM(JournalEntry.Debit) for Debit-direction journal entries in the tenant, filtered by the supplied OData date range.',
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
                ...DecimalEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AccountingService/JournalEntries/Expenses/Sum'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getExpensesSumAsync', response.json);
                    return results;
                })
            },
            sample: samples['DecimalEnvelopeSample']
        }
    },
    getIncomesSumAsync: {
        key: 'getIncomesSumAsync',
        noun: 'JournalEntries',
        display: {
            label: 'Sum tenant incomes',
            description: 'Returns SUM(JournalEntry.Credit) for Credit-direction journal entries in the tenant, filtered by the supplied OData date range.',
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
                ...DecimalEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AccountingService/JournalEntries/Incomes/Sum'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getIncomesSumAsync', response.json);
                    return results;
                })
            },
            sample: samples['DecimalEnvelopeSample']
        }
    },
}
