const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}amount`,
                label: `[${labelPrefix}amount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}date`,
                label: `[${labelPrefix}date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'amount': bundle.inputData?.[`${keyPrefix}amount`],
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'debitAccountId': bundle.inputData?.[`${keyPrefix}debitAccountId`],
            'creditAccountId': bundle.inputData?.[`${keyPrefix}creditAccountId`],
            'journalEntryId': bundle.inputData?.[`${keyPrefix}journalEntryId`],
            'accountingEntryType': bundle.inputData?.[`${keyPrefix}accountingEntryType`],
        }
    },
}
