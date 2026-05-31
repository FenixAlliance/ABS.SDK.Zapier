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
                type: 'string',
            },
            {
                key: `${keyPrefix}date`,
                label: `[${labelPrefix}date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}forexRatesSnapshot`,
                label: `[${labelPrefix}forexRatesSnapshot]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}forexRate`,
                label: `[${labelPrefix}forexRate]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}credit`,
                label: `[${labelPrefix}credit]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}debit`,
                label: `[${labelPrefix}debit]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}creditInUsd`,
                label: `[${labelPrefix}creditInUsd]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}debitInUsd`,
                label: `[${labelPrefix}debitInUsd]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
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
                key: `${keyPrefix}journalId`,
                label: `[${labelPrefix}journalId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}journalName`,
                label: `[${labelPrefix}journalName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}journalCode`,
                label: `[${labelPrefix}journalCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}creditAccountId`,
                label: `[${labelPrefix}creditAccountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}creditAccountName`,
                label: `[${labelPrefix}creditAccountName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}debitAccountId`,
                label: `[${labelPrefix}debitAccountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}debitAccountName`,
                label: `[${labelPrefix}debitAccountName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoiceCode`,
                label: `[${labelPrefix}invoiceCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentJournalEntryId`,
                label: `[${labelPrefix}parentJournalEntryId]`,
                type: 'string',
            },
            ...Money.fields(`${keyPrefix}creditAmount`, isInput),
            ...Money.fields(`${keyPrefix}debitAmount`, isInput),
            ...Money.fields(`${keyPrefix}creditAmountInUsd`, isInput),
            ...Money.fields(`${keyPrefix}debitAmountInUsd`, isInput),
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
            'forexRatesSnapshot': bundle.inputData?.[`${keyPrefix}forexRatesSnapshot`],
            'forexRate': bundle.inputData?.[`${keyPrefix}forexRate`],
            'credit': bundle.inputData?.[`${keyPrefix}credit`],
            'debit': bundle.inputData?.[`${keyPrefix}debit`],
            'creditInUsd': bundle.inputData?.[`${keyPrefix}creditInUsd`],
            'debitInUsd': bundle.inputData?.[`${keyPrefix}debitInUsd`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'journalId': bundle.inputData?.[`${keyPrefix}journalId`],
            'journalName': bundle.inputData?.[`${keyPrefix}journalName`],
            'journalCode': bundle.inputData?.[`${keyPrefix}journalCode`],
            'creditAccountId': bundle.inputData?.[`${keyPrefix}creditAccountId`],
            'creditAccountName': bundle.inputData?.[`${keyPrefix}creditAccountName`],
            'debitAccountId': bundle.inputData?.[`${keyPrefix}debitAccountId`],
            'debitAccountName': bundle.inputData?.[`${keyPrefix}debitAccountName`],
            'invoiceCode': bundle.inputData?.[`${keyPrefix}invoiceCode`],
            'parentJournalEntryId': bundle.inputData?.[`${keyPrefix}parentJournalEntryId`],
            'creditAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}creditAmount`)),
            'debitAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}debitAmount`)),
            'creditAmountInUsd': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}creditAmountInUsd`)),
            'debitAmountInUsd': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}debitAmountInUsd`)),
        }
    },
}
