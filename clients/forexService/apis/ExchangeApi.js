const samples = require('../samples/ExchangeApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const MoneyEnvelope = require('../models/MoneyEnvelope');
const utils = require('../utils/utils');

module.exports = {
    exchangeAmountAsync: {
        key: 'exchangeAmountAsync',
        noun: 'Exchange',
        display: {
            label: 'Exchange currency at latest rates',
            description: 'Exchange an amount of money from one currency to another using the latest available exchange rates.',
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
                ...MoneyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ForexService/Exchange/Latest'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'exchangeAmountAsync', response.json);
                    return results;
                })
            },
            sample: samples['MoneyEnvelopeSample']
        }
    },
    exchangeAmountHistoricalAsync: {
        key: 'exchangeAmountHistoricalAsync',
        noun: 'Exchange',
        display: {
            label: 'Exchange currency at historical rates',
            description: 'Exchange an amount of money from one currency to another using exchange rates from a specific historical date.',
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
                ...MoneyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/ForexService/Exchange/History'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'exchangeAmountHistoricalAsync', response.json);
                    return results;
                })
            },
            sample: samples['MoneyEnvelopeSample']
        }
    },
}
