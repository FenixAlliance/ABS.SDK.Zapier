const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}data`,
                label: `[${labelPrefix}data]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}nonce`,
                label: `[${labelPrefix}nonce]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'data': bundle.inputData?.[`${keyPrefix}data`],
            'nonce': bundle.inputData?.[`${keyPrefix}nonce`],
        }
    },
}
