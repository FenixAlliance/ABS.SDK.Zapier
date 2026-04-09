const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}resetCode`,
                label: `[${labelPrefix}resetCode]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}newPassword`,
                label: `[${labelPrefix}newPassword]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'resetCode': bundle.inputData?.[`${keyPrefix}resetCode`],
            'newPassword': bundle.inputData?.[`${keyPrefix}newPassword`],
        }
    },
}
