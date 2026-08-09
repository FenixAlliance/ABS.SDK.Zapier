const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}tokenType`,
                label: `[${labelPrefix}tokenType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accessToken`,
                label: `[${labelPrefix}accessToken]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}expiresIn`,
                label: `[${labelPrefix}expiresIn]`,
                required: true,
                type: 'number',
            },
            {
                key: `${keyPrefix}refreshToken`,
                label: `[${labelPrefix}refreshToken]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'tokenType': bundle.inputData?.[`${keyPrefix}tokenType`],
            'accessToken': bundle.inputData?.[`${keyPrefix}accessToken`],
            'expiresIn': bundle.inputData?.[`${keyPrefix}expiresIn`],
            'refreshToken': bundle.inputData?.[`${keyPrefix}refreshToken`],
        }
    },
}
