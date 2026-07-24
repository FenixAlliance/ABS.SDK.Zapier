const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}journalEntryId`,
                label: `[${labelPrefix}journalEntryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accountId`,
                label: `[${labelPrefix}accountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}direction`,
                label: `[${labelPrefix}direction]`,
                type: 'string',
                choices: [
                    'Debit',
                    'Credit',
                ],
            },
            {
                key: `${keyPrefix}transactionAmount`,
                label: `[${labelPrefix}transactionAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}transactionCurrencyId`,
                label: `[${labelPrefix}transactionCurrencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'journalEntryId': bundle.inputData?.[`${keyPrefix}journalEntryId`],
            'accountId': bundle.inputData?.[`${keyPrefix}accountId`],
            'direction': bundle.inputData?.[`${keyPrefix}direction`],
            'transactionAmount': bundle.inputData?.[`${keyPrefix}transactionAmount`],
            'transactionCurrencyId': bundle.inputData?.[`${keyPrefix}transactionCurrencyId`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
        }
    },
}
