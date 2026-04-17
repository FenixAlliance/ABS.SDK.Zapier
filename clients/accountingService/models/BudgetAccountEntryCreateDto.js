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
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}date`,
                label: `[${labelPrefix}date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}amount`,
                label: `[${labelPrefix}amount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}debitAccountId`,
                label: `[${labelPrefix}debitAccountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}creditAccountId`,
                label: `[${labelPrefix}creditAccountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}journalEntryId`,
                label: `[${labelPrefix}journalEntryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accountingEntryType`,
                label: `[${labelPrefix}accountingEntryType]`,
                type: 'string',
                choices: [
                    'None',
                    'Debit',
                    'Credit',
                ],
            },
            {
                key: `${keyPrefix}budgetId`,
                label: `[${labelPrefix}budgetId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'amount': bundle.inputData?.[`${keyPrefix}amount`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'debitAccountId': bundle.inputData?.[`${keyPrefix}debitAccountId`],
            'creditAccountId': bundle.inputData?.[`${keyPrefix}creditAccountId`],
            'journalEntryId': bundle.inputData?.[`${keyPrefix}journalEntryId`],
            'accountingEntryType': bundle.inputData?.[`${keyPrefix}accountingEntryType`],
            'budgetId': bundle.inputData?.[`${keyPrefix}budgetId`],
        }
    },
}
