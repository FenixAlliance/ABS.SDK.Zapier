const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}group`,
                label: `[${labelPrefix}group]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}frozen`,
                label: `[${labelPrefix}frozen]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}path`,
                label: `[${labelPrefix}path]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}prefix`,
                label: `[${labelPrefix}prefix]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}accountTypeId`,
                label: `[${labelPrefix}accountTypeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentAccountId`,
                label: `[${labelPrefix}parentAccountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accountCategory`,
                label: `[${labelPrefix}accountCategory]`,
                type: 'string',
                choices: [
                    'Assets',
                    'Equity',
                    'Revenue',
                    'Expense',
                    'Liabilities',
                ],
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
                key: `${keyPrefix}qualifiedName`,
                label: `[${labelPrefix}qualifiedName]`,
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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'group': bundle.inputData?.[`${keyPrefix}group`],
            'frozen': bundle.inputData?.[`${keyPrefix}frozen`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'path': bundle.inputData?.[`${keyPrefix}path`],
            'prefix': bundle.inputData?.[`${keyPrefix}prefix`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'accountTypeId': bundle.inputData?.[`${keyPrefix}accountTypeId`],
            'parentAccountId': bundle.inputData?.[`${keyPrefix}parentAccountId`],
            'accountCategory': bundle.inputData?.[`${keyPrefix}accountCategory`],
            'iban': bundle.inputData?.[`${keyPrefix}iban`],
            'swift': bundle.inputData?.[`${keyPrefix}swift`],
            'branchCode': bundle.inputData?.[`${keyPrefix}branchCode`],
            'bankAccountNumber': bundle.inputData?.[`${keyPrefix}bankAccountNumber`],
            'qualifiedName': bundle.inputData?.[`${keyPrefix}qualifiedName`],
            'bankId': bundle.inputData?.[`${keyPrefix}bankId`],
            'bankProfileId': bundle.inputData?.[`${keyPrefix}bankProfileId`],
        }
    },
}
