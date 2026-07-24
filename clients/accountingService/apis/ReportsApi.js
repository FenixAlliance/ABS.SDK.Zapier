const samples = require('../samples/ReportsApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const TrialBalanceDtoEnvelope = require('../models/TrialBalanceDtoEnvelope');
const utils = require('../utils/utils');

module.exports = {
    getTrialBalanceAsync: {
        key: 'getTrialBalanceAsync',
        noun: 'Reports',
        display: {
            label: 'Trial balance for a fiscal period',
            description: 'Returns the per-account posted debit/credit totals for the given fiscal period (optionally scoped to a single financial book), plus grand totals and the Σdebits &#x3D;&#x3D; Σcredits balanced flag. Amounts are normalized to the target currency (default USD) from the stored USD reporting amounts.',
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
                    key: 'financialBookId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'currencyId',
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
                ...TrialBalanceDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AccountingService/Reports/TrialBalance'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'fiscalPeriodId': bundle.inputData?.['fiscalPeriodId'],
                        'financialBookId': bundle.inputData?.['financialBookId'],
                        'currencyId': bundle.inputData?.['currencyId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTrialBalanceAsync', response.json);
                    return results;
                })
            },
            sample: samples['TrialBalanceDtoEnvelopeSample']
        }
    },
}
