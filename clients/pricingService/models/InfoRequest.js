const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}newEmail`,
                label: `[${labelPrefix}newEmail]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}newPassword`,
                label: `[${labelPrefix}newPassword]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}oldPassword`,
                label: `[${labelPrefix}oldPassword]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'newEmail': bundle.inputData?.[`${keyPrefix}newEmail`],
            'newPassword': bundle.inputData?.[`${keyPrefix}newPassword`],
            'oldPassword': bundle.inputData?.[`${keyPrefix}oldPassword`],
        }
    },
}
