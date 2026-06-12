const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}iban`,
                label: `[${labelPrefix}iban]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}swift`,
                label: `[${labelPrefix}swift]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}branchCode`,
                label: `[${labelPrefix}branchCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bankAccountNumber`,
                label: `[${labelPrefix}bankAccountNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bankId`,
                label: `[${labelPrefix}bankId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bankProfileId`,
                label: `[${labelPrefix}bankProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}walletId`,
                label: `[${labelPrefix}walletId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'iban': bundle.inputData?.[`${keyPrefix}iban`],
            'swift': bundle.inputData?.[`${keyPrefix}swift`],
            'branchCode': bundle.inputData?.[`${keyPrefix}branchCode`],
            'bankAccountNumber': bundle.inputData?.[`${keyPrefix}bankAccountNumber`],
            'bankId': bundle.inputData?.[`${keyPrefix}bankId`],
            'bankProfileId': bundle.inputData?.[`${keyPrefix}bankProfileId`],
            'walletId': bundle.inputData?.[`${keyPrefix}walletId`],
        }
    },
}
