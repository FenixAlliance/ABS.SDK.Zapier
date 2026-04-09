const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}defaultWeightUnit`,
                label: `[${labelPrefix}defaultWeightUnit]`,
                type: 'string',
                choices: [
                    'Kg',
                    'g',
                    'lbs',
                    'oz',
                ],
            },
            {
                key: `${keyPrefix}defaultDimensionUInit`,
                label: `[${labelPrefix}defaultDimensionUInit]`,
                type: 'string',
                choices: [
                    'cms',
                    'm',
                    'mm',
                    'inc',
                    'yr',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'defaultWeightUnit': bundle.inputData?.[`${keyPrefix}defaultWeightUnit`],
            'defaultDimensionUInit': bundle.inputData?.[`${keyPrefix}defaultDimensionUInit`],
        }
    },
}
