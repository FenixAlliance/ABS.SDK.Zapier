const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}toolKey`,
                label: `[${labelPrefix}toolKey]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}configJson`,
                label: `[${labelPrefix}configJson]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enabled`,
                label: `[${labelPrefix}enabled]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'toolKey': bundle.inputData?.[`${keyPrefix}toolKey`],
            'configJson': bundle.inputData?.[`${keyPrefix}configJson`],
            'enabled': bundle.inputData?.[`${keyPrefix}enabled`],
        }
    },
}
