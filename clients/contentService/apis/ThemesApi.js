const samples = require('../samples/ThemesApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const utils = require('../utils/utils');

module.exports = {
    getLatestCurrencyRatesModelAsync: {
        key: 'getLatestCurrencyRatesModelAsync',
        noun: 'Themes',
        display: {
            label: 'Update base web content themes',
            description: 'Triggers an update of the base web content themes.',
            hidden: false,
        },
        operation: {
            inputFields: [
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
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ContentService/Themes/Update'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getLatestCurrencyRatesModelAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
