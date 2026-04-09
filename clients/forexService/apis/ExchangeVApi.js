const samples = require('../samples/ExchangeVApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ExchangeRateEnvelope = require('../models/ExchangeRateEnvelope');
const utils = require('../utils/utils');

module.exports = {
    exchangeAmountHistoricalV3Async: {
        key: 'exchangeAmountHistoricalV3Async',
        noun: 'ExchangeV',
        display: {
            label: 'Exchange currency at historical rates (v3)',
            description: 'Exchange an amount of money from one currency to another using exchange rates from a specific historical date. Returns the full ExchangeRate details.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'amount',
                    label: '',
                    type: 'number',
                    required: true,
                },
                {
                    key: 'sourceCurrencyId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'targetCurrencyId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'date',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...ExchangeRateEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v3/ForexService/Exchange/History'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'amount': bundle.inputData?.['amount'],
                        'sourceCurrencyId': bundle.inputData?.['sourceCurrencyId'],
                        'targetCurrencyId': bundle.inputData?.['targetCurrencyId'],
                        'date': bundle.inputData?.['date'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'exchangeAmountHistoricalV3Async', response.json);
                    return results;
                })
            },
            sample: samples['ExchangeRateEnvelopeSample']
        }
    },
    exchangeAmountV3Async: {
        key: 'exchangeAmountV3Async',
        noun: 'ExchangeV',
        display: {
            label: 'Exchange currency at latest rates (v3)',
            description: 'Exchange an amount of money from one currency to another using the latest available exchange rates. Returns the full ExchangeRate details.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'amount',
                    label: '',
                    type: 'number',
                    required: true,
                },
                {
                    key: 'sourceCurrencyId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'targetCurrencyId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...ExchangeRateEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v3/ForexService/Exchange/Latest'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'amount': bundle.inputData?.['amount'],
                        'sourceCurrencyId': bundle.inputData?.['sourceCurrencyId'],
                        'targetCurrencyId': bundle.inputData?.['targetCurrencyId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'exchangeAmountV3Async', response.json);
                    return results;
                })
            },
            sample: samples['ExchangeRateEnvelopeSample']
        }
    },
}
