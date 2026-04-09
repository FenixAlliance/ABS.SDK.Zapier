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
                key: `${keyPrefix}password`,
                label: `[${labelPrefix}password]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}twoFactorCode`,
                label: `[${labelPrefix}twoFactorCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}twoFactorRecoveryCode`,
                label: `[${labelPrefix}twoFactorRecoveryCode]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'password': bundle.inputData?.[`${keyPrefix}password`],
            'twoFactorCode': bundle.inputData?.[`${keyPrefix}twoFactorCode`],
            'twoFactorRecoveryCode': bundle.inputData?.[`${keyPrefix}twoFactorRecoveryCode`],
        }
    },
}
