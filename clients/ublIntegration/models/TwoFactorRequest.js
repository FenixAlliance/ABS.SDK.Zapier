const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}twoFactorCode`,
                label: `[${labelPrefix}twoFactorCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}resetSharedKey`,
                label: `[${labelPrefix}resetSharedKey]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}resetRecoveryCodes`,
                label: `[${labelPrefix}resetRecoveryCodes]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}forgetMachine`,
                label: `[${labelPrefix}forgetMachine]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'twoFactorCode': bundle.inputData?.[`${keyPrefix}twoFactorCode`],
            'resetSharedKey': bundle.inputData?.[`${keyPrefix}resetSharedKey`],
            'resetRecoveryCodes': bundle.inputData?.[`${keyPrefix}resetRecoveryCodes`],
            'forgetMachine': bundle.inputData?.[`${keyPrefix}forgetMachine`],
        }
    },
}
