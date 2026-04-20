const samples = require('../samples/MigrationsApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const StringListEnvelope = require('../models/StringListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    migrate: {
        key: 'migrate',
        noun: 'Migrations',
        display: {
            label: 'Apply pending database migrations',
            description: 'Applies all pending database migrations and returns the list of migrations that were applied.',
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
                ...StringListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/Migrations/Migrate'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'migrate', response.json);
                    return results;
                })
            },
            sample: samples['StringListEnvelopeSample']
        }
    },
    migrations: {
        key: 'migrations',
        noun: 'Migrations',
        display: {
            label: 'Retrieve database migrations',
            description: 'Retrieves the list of applied or pending database migrations.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'pending',
                    label: '',
                    type: 'boolean',
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
                ...StringListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/SystemService/Migrations'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'pending': bundle.inputData?.['pending'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'migrations', response.json);
                    return results;
                })
            },
            sample: samples['StringListEnvelopeSample']
        }
    },
}
