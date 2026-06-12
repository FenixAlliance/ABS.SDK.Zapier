const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}isClosed`,
                label: `[${labelPrefix}isClosed]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isInvalid`,
                label: `[${labelPrefix}isInvalid]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'isClosed': bundle.inputData?.[`${keyPrefix}isClosed`],
            'isInvalid': bundle.inputData?.[`${keyPrefix}isInvalid`],
        }
    },
}
