const samples = require('../samples/OverviewApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const SystemOverviewDtoEnvelope = require('../models/SystemOverviewDtoEnvelope');
const utils = require('../utils/utils');

module.exports = {
    getSystemOverview: {
        key: 'getSystemOverview',
        noun: 'Overview',
        display: {
            label: 'Get system overview information',
            description: 'Returns runtime, memory, and entity count information for the system',
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
                ...SystemOverviewDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/Overview'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSystemOverview', response.json);
                    return results;
                })
            },
            sample: samples['SystemOverviewDtoEnvelopeSample']
        }
    },
}
