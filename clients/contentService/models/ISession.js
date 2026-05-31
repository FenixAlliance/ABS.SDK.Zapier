const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}isAvailable`,
                label: `[${labelPrefix}isAvailable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}keys`,
                label: `[${labelPrefix}keys]`,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'isAvailable': bundle.inputData?.[`${keyPrefix}isAvailable`],
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'keys': bundle.inputData?.[`${keyPrefix}keys`],
        }
    },
}
