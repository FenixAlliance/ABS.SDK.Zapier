const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}sharedKey`,
                label: `[${labelPrefix}sharedKey]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}recoveryCodesLeft`,
                label: `[${labelPrefix}recoveryCodesLeft]`,
                required: true,
                type: 'integer',
            },
            {
                key: `${keyPrefix}recoveryCodes`,
                label: `[${labelPrefix}recoveryCodes]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}isTwoFactorEnabled`,
                label: `[${labelPrefix}isTwoFactorEnabled]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isMachineRemembered`,
                label: `[${labelPrefix}isMachineRemembered]`,
                required: true,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'sharedKey': bundle.inputData?.[`${keyPrefix}sharedKey`],
            'recoveryCodesLeft': bundle.inputData?.[`${keyPrefix}recoveryCodesLeft`],
            'recoveryCodes': bundle.inputData?.[`${keyPrefix}recoveryCodes`],
            'isTwoFactorEnabled': bundle.inputData?.[`${keyPrefix}isTwoFactorEnabled`],
            'isMachineRemembered': bundle.inputData?.[`${keyPrefix}isMachineRemembered`],
        }
    },
}
