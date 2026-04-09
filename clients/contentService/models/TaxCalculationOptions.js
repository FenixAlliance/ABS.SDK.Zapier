const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enableTaxes`,
                label: `[${labelPrefix}enableTaxes]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}roundTaxesAtSubtotalLevel`,
                label: `[${labelPrefix}roundTaxesAtSubtotalLevel]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}displayPriceSuffix`,
                label: `[${labelPrefix}displayPriceSuffix]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}displayPricePrefix`,
                label: `[${labelPrefix}displayPricePrefix]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}standardRates`,
                label: `[${labelPrefix}standardRates]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}zeroRateRates`,
                label: `[${labelPrefix}zeroRateRates]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}reducedRateRates`,
                label: `[${labelPrefix}reducedRateRates]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}additionalTaxClasses`,
                label: `[${labelPrefix}additionalTaxClasses]`,
                type: 'object',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enableTaxes': bundle.inputData?.[`${keyPrefix}enableTaxes`],
            'roundTaxesAtSubtotalLevel': bundle.inputData?.[`${keyPrefix}roundTaxesAtSubtotalLevel`],
            'displayPriceSuffix': bundle.inputData?.[`${keyPrefix}displayPriceSuffix`],
            'displayPricePrefix': bundle.inputData?.[`${keyPrefix}displayPricePrefix`],
            'standardRates': bundle.inputData?.[`${keyPrefix}standardRates`],
            'zeroRateRates': bundle.inputData?.[`${keyPrefix}zeroRateRates`],
            'reducedRateRates': bundle.inputData?.[`${keyPrefix}reducedRateRates`],
            'additionalTaxClasses': bundle.inputData?.[`${keyPrefix}additionalTaxClasses`],
        }
    },
}
