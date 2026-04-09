const utils = require('../utils/utils');
const Money = require('../models/Money');

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
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}forexRate`,
                label: `[${labelPrefix}forexRate]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}accountId`,
                label: `[${labelPrefix}accountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}date`,
                label: `[${labelPrefix}date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
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
                key: `${keyPrefix}debitAccountName`,
                label: `[${labelPrefix}debitAccountName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}creditAccountName`,
                label: `[${labelPrefix}creditAccountName]`,
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
            ...Money.fields(`${keyPrefix}debitAmount`, isInput),
            ...Money.fields(`${keyPrefix}creditAmount`, isInput),
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
            'debit': bundle.inputData?.[`${keyPrefix}debit`],
            'credit': bundle.inputData?.[`${keyPrefix}credit`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'forexRate': bundle.inputData?.[`${keyPrefix}forexRate`],
            'accountId': bundle.inputData?.[`${keyPrefix}accountId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'debitAccountId': bundle.inputData?.[`${keyPrefix}debitAccountId`],
            'creditAccountId': bundle.inputData?.[`${keyPrefix}creditAccountId`],
            'journalEntryId': bundle.inputData?.[`${keyPrefix}journalEntryId`],
            'debitAccountName': bundle.inputData?.[`${keyPrefix}debitAccountName`],
            'creditAccountName': bundle.inputData?.[`${keyPrefix}creditAccountName`],
            'accountingEntryType': bundle.inputData?.[`${keyPrefix}accountingEntryType`],
            'debitAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}debitAmount`)),
            'creditAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}creditAmount`)),
            'budgetId': bundle.inputData?.[`${keyPrefix}budgetId`],
        }
    },
}
