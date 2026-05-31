const samples = require('../samples/MigrationsApi');
const PaymentResponse = require('../models/PaymentResponse');
const ResponseStatus = require('../models/ResponseStatus');
const utils = require('../utils/utils');

module.exports = {
    apiV2GlobalSystemMigratePost: {
        key: 'apiV2GlobalSystemMigratePost',
        noun: 'Migrations',
        display: {
            label: '',
            description: '',
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
                ...PaymentResponse.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/Global/System/Migrate'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'apiV2GlobalSystemMigratePost', response.json);
                    return results;
                })
            },
            sample: samples['PaymentResponseSample']
        }
    },
}
