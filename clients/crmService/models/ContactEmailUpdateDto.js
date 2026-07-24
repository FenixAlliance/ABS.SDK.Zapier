const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}address`,
                label: `[${labelPrefix}address]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}label`,
                label: `[${labelPrefix}label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isPrimary`,
                label: `[${labelPrefix}isPrimary]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'address': bundle.inputData?.[`${keyPrefix}address`],
            'label': bundle.inputData?.[`${keyPrefix}label`],
            'isPrimary': bundle.inputData?.[`${keyPrefix}isPrimary`],
        }
    },
}
