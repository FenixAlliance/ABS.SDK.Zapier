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
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
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
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'accountTypeId': bundle.inputData?.[`${keyPrefix}accountTypeId`],
            'parentAccountId': bundle.inputData?.[`${keyPrefix}parentAccountId`],
            'accountCategory': bundle.inputData?.[`${keyPrefix}accountCategory`],
        }
    },
}
