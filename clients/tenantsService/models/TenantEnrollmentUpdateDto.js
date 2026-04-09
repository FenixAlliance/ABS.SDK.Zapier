const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}isAdmin`,
                label: `[${labelPrefix}isAdmin]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isDisabled`,
                label: `[${labelPrefix}isDisabled]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'isAdmin': bundle.inputData?.[`${keyPrefix}isAdmin`],
            'isDisabled': bundle.inputData?.[`${keyPrefix}isDisabled`],
        }
    },
}
