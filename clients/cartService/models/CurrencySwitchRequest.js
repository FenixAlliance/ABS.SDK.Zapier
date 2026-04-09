const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}cartID`,
                label: `[${labelPrefix}cartID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyID`,
                label: `[${labelPrefix}currencyID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'cartID': bundle.inputData?.[`${keyPrefix}cartID`],
            'currencyID': bundle.inputData?.[`${keyPrefix}currencyID`],
        }
    },
}
