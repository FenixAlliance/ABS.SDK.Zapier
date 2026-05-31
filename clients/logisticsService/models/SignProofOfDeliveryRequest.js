const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}signedBy`,
                label: `[${labelPrefix}signedBy]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signerId`,
                label: `[${labelPrefix}signerId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'signedBy': bundle.inputData?.[`${keyPrefix}signedBy`],
            'signerId': bundle.inputData?.[`${keyPrefix}signerId`],
        }
    },
}
