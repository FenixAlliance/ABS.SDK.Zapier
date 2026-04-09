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
                key: `${keyPrefix}group`,
                label: `[${labelPrefix}group]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}opening`,
                label: `[${labelPrefix}opening]`,
                type: 'boolean',
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
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}debit`,
                label: `[${labelPrefix}debit]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}credit`,
                label: `[${labelPrefix}credit]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}journalId`,
                label: `[${labelPrefix}journalId]`,
                required: true,
                type: 'string',
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
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}creditAccountId`,
                label: `[${labelPrefix}creditAccountId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentJournalEntryId`,
                label: `[${labelPrefix}parentJournalEntryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoiceCode`,
                label: `[${labelPrefix}invoiceCode]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'group': bundle.inputData?.[`${keyPrefix}group`],
            'opening': bundle.inputData?.[`${keyPrefix}opening`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'debit': bundle.inputData?.[`${keyPrefix}debit`],
            'credit': bundle.inputData?.[`${keyPrefix}credit`],
            'journalId': bundle.inputData?.[`${keyPrefix}journalId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'debitAccountId': bundle.inputData?.[`${keyPrefix}debitAccountId`],
            'creditAccountId': bundle.inputData?.[`${keyPrefix}creditAccountId`],
            'parentJournalEntryId': bundle.inputData?.[`${keyPrefix}parentJournalEntryId`],
            'invoiceCode': bundle.inputData?.[`${keyPrefix}invoiceCode`],
        }
    },
}
