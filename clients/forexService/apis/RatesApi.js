const samples = require('../samples/RatesApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ExchangeRateEnvelope = require('../models/ExchangeRateEnvelope');
const ForexRatesDtoEnvelope = require('../models/ForexRatesDtoEnvelope');
const utils = require('../utils/utils');

module.exports = {
    getHistoricalCurrencyRateAsync: {
        key: 'getHistoricalCurrencyRateAsync',
        noun: 'Rates',
        display: {
            label: 'Get historical rate for a currency',
            description: 'Retrieves the exchange rate for a specific currency as of a specific historical date.',
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
                    key: 'date',
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
                ...ExchangeRateEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ForexService/Rates/History/{currencyId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'date': bundle.inputData?.['date'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getHistoricalCurrencyRateAsync', response.json);
                    return results;
                })
            },
            sample: samples['ExchangeRateEnvelopeSample']
        }
    },
    getHistoricalCurrencyRatesAsync: {
        key: 'getHistoricalCurrencyRatesAsync',
        noun: 'Rates',
        display: {
            label: 'Get historical currency rates',
            description: 'Retrieves exchange rates for all supported currencies as of a specific historical date.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'date',
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
                ...ForexRatesDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ForexService/Rates/History'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'date': bundle.inputData?.['date'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getHistoricalCurrencyRatesAsync', response.json);
                    return results;
                })
            },
            sample: samples['ForexRatesDtoEnvelopeSample']
        }
    },
    getLatestCurrencyRateAsync: {
        key: 'getLatestCurrencyRateAsync',
        noun: 'Rates',
        display: {
            label: 'Get latest rate for a currency',
            description: 'Retrieves the latest exchange rate for a specific currency by its identifier.',
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
                ...ExchangeRateEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ForexService/Rates/Latest/{currencyId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getLatestCurrencyRateAsync', response.json);
                    return results;
                })
            },
            sample: samples['ExchangeRateEnvelopeSample']
        }
    },
    getLatestCurrencyRatesModelAsync: {
        key: 'getLatestCurrencyRatesModelAsync',
        noun: 'Rates',
        display: {
            label: 'Get latest currency rates',
            description: 'Retrieves the latest exchange rates for all supported currencies.',
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
                ...ForexRatesDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ForexService/Rates/Latest'),
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
            sample: samples['ForexRatesDtoEnvelopeSample']
        }
    },
}
