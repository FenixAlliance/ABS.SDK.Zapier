const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}reviewScore`,
                label: `[${labelPrefix}reviewScore]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}reviewMessage`,
                label: `[${labelPrefix}reviewMessage]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'reviewScore': bundle.inputData?.[`${keyPrefix}reviewScore`],
            'reviewMessage': bundle.inputData?.[`${keyPrefix}reviewMessage`],
        }
    },
}
