const samples = require('../samples/PricesApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ItemPriceCalculationEnvelope = require('../models/ItemPriceCalculationEnvelope');
const MoneyEnvelope = require('../models/MoneyEnvelope');
const utils = require('../utils/utils');

module.exports = {
    getFinalPrice: {
        key: 'getFinalPrice',
        noun: 'Prices',
        display: {
            label: 'Gets the final price for an item',
            description: 'Gets the final price for an item after all discounts and taxes in the specified currency.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'itemId',
                    label: '',
                    type: 'string',
                    required: true,
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
                ...MoneyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/PricingService/Prices/{itemId}/FinalPrice'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'currencyId': bundle.inputData?.['currencyId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFinalPrice', response.json);
                    return results;
                })
            },
            sample: samples['MoneyEnvelopeSample']
        }
    },
    getPrice: {
        key: 'getPrice',
        noun: 'Prices',
        display: {
            label: 'Gets the calculated price for an item',
            description: 'Calculates the price for an item considering price list, discount list, quantity, and currency.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'itemId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'priceListId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'discountsListId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'quantity',
                    label: '',
                    type: 'number',
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
                ...ItemPriceCalculationEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/PricingService/Prices/{itemId}/Price'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'priceListId': bundle.inputData?.['priceListId'],
                        'discountsListId': bundle.inputData?.['discountsListId'],
                        'quantity': bundle.inputData?.['quantity'],
                        'currencyId': bundle.inputData?.['currencyId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPrice', response.json);
                    return results;
                })
            },
            sample: samples['ItemPriceCalculationEnvelopeSample']
        }
    },
    getTotalSavingsInUsd: {
        key: 'getTotalSavingsInUsd',
        noun: 'Prices',
        display: {
            label: 'Gets total savings for an item',
            description: 'Gets the total savings amount for an item in the specified currency.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'itemId',
                    label: '',
                    type: 'string',
                    required: true,
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
                ...MoneyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/PricingService/Prices/{itemId}/TotalSavings'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'currencyId': bundle.inputData?.['currencyId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTotalSavingsInUsd', response.json);
                    return results;
                })
            },
            sample: samples['MoneyEnvelopeSample']
        }
    },
    getTotalTaxesInUsd: {
        key: 'getTotalTaxesInUsd',
        noun: 'Prices',
        display: {
            label: 'Gets total taxes for an item',
            description: 'Gets the total tax amount for an item in the specified currency.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'itemId',
                    label: '',
                    type: 'string',
                    required: true,
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
                ...MoneyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/PricingService/Prices/{itemId}/TotalTaxes'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'currencyId': bundle.inputData?.['currencyId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTotalTaxesInUsd', response.json);
                    return results;
                })
            },
            sample: samples['MoneyEnvelopeSample']
        }
    },
}
