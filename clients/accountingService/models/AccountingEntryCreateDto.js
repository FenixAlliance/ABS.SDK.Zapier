const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}journalEntryId`,
                label: `[${labelPrefix}journalEntryId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}accountId`,
                label: `[${labelPrefix}accountId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}direction`,
                label: `[${labelPrefix}direction]`,
                required: true,
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
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'journalEntryId': bundle.inputData?.[`${keyPrefix}journalEntryId`],
            'accountId': bundle.inputData?.[`${keyPrefix}accountId`],
            'direction': bundle.inputData?.[`${keyPrefix}direction`],
            'transactionAmount': bundle.inputData?.[`${keyPrefix}transactionAmount`],
            'transactionCurrencyId': bundle.inputData?.[`${keyPrefix}transactionCurrencyId`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
        }
    },
}
