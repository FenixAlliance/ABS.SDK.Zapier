const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}value`,
                label: `[${labelPrefix}value]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}hasValue`,
                label: `[${labelPrefix}hasValue]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'value': bundle.inputData?.[`${keyPrefix}value`],
            'hasValue': bundle.inputData?.[`${keyPrefix}hasValue`],
        }
    },
}
