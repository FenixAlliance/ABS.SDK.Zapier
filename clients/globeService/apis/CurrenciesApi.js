const samples = require('../samples/CurrenciesApi');
const CurrencyDtoEnvelope = require('../models/CurrencyDtoEnvelope');
const CurrencyDtoListEnvelope = require('../models/CurrencyDtoListEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const utils = require('../utils/utils');

module.exports = {
    countCurrenciesAsync: {
        key: 'countCurrenciesAsync',
        noun: 'Currencies',
        display: {
            label: 'Count currencies',
            description: 'Returns the total number of enabled currencies, with optional OData filtering.',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/GlobeService/Currencies/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countCurrenciesAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getCurrencyByIdAsync: {
        key: 'getCurrencyByIdAsync',
        noun: 'Currencies',
        display: {
            label: 'Get currency by ID',
            description: 'Retrieves a single currency by its unique identifier.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'currencyId',
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
                ...CurrencyDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/GlobeService/Currencies/{currencyId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCurrencyByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['CurrencyDtoEnvelopeSample']
        }
    },
    getEnabledCurrenciesAsync: {
        key: 'getEnabledCurrenciesAsync',
        noun: 'Currencies',
        display: {
            label: 'Get all currencies',
            description: 'Retrieves the list of all enabled currencies with optional OData pagination and filtering.',
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
                ...CurrencyDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/GlobeService/Currencies'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getEnabledCurrenciesAsync', response.json);
                    return results;
                })
            },
            sample: samples['CurrencyDtoListEnvelopeSample']
        }
    },
}
