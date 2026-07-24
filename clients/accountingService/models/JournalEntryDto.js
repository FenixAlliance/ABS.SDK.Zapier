const utils = require('../utils/utils');
const AccountingEntryDto = require('../models/AccountingEntryDto');
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
                key: `${keyPrefix}fiscalPeriodId`,
                label: `[${labelPrefix}fiscalPeriodId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}financialBookId`,
                label: `[${labelPrefix}financialBookId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}entryType`,
                label: `[${labelPrefix}entryType]`,
                type: 'string',
                choices: [
                    'Simple',
                    'Compound',
                    'Adjusting',
                    'Reversing',
                ],
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
                choices: [
                    'Draft',
                    'Posted',
                    'Reversed',
                    'Voided',
                ],
            },
            {
                key: `${keyPrefix}postingDate`,
                label: `[${labelPrefix}postingDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isOpeningBalance`,
                label: `[${labelPrefix}isOpeningBalance]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}transactionCurrencyId`,
                label: `[${labelPrefix}transactionCurrencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceDocumentType`,
                label: `[${labelPrefix}sourceDocumentType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceDocumentId`,
                label: `[${labelPrefix}sourceDocumentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}idempotencyKey`,
                label: `[${labelPrefix}idempotencyKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}reversalOfJournalEntryId`,
                label: `[${labelPrefix}reversalOfJournalEntryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}postedBy`,
                label: `[${labelPrefix}postedBy]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}forexRate`,
                label: `[${labelPrefix}forexRate]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}forexRatesSnapshot`,
                label: `[${labelPrefix}forexRatesSnapshot]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}debitInUsd`,
                label: `[${labelPrefix}debitInUsd]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}creditInUsd`,
                label: `[${labelPrefix}creditInUsd]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}accountingEntries`,
                label: `[${labelPrefix}accountingEntries]`,
                children: AccountingEntryDto.fields(`${keyPrefix}accountingEntries${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}totalDebit`,
                label: `[${labelPrefix}totalDebit]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}totalCredit`,
                label: `[${labelPrefix}totalCredit]`,
                type: 'number',
            },
            ...Money.fields(`${keyPrefix}totalDebitAmount`, isInput),
            ...Money.fields(`${keyPrefix}totalCreditAmount`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'journalId': bundle.inputData?.[`${keyPrefix}journalId`],
            'journalName': bundle.inputData?.[`${keyPrefix}journalName`],
            'journalCode': bundle.inputData?.[`${keyPrefix}journalCode`],
            'fiscalPeriodId': bundle.inputData?.[`${keyPrefix}fiscalPeriodId`],
            'financialBookId': bundle.inputData?.[`${keyPrefix}financialBookId`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'entryType': bundle.inputData?.[`${keyPrefix}entryType`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'postingDate': bundle.inputData?.[`${keyPrefix}postingDate`],
            'isOpeningBalance': bundle.inputData?.[`${keyPrefix}isOpeningBalance`],
            'transactionCurrencyId': bundle.inputData?.[`${keyPrefix}transactionCurrencyId`],
            'sourceDocumentType': bundle.inputData?.[`${keyPrefix}sourceDocumentType`],
            'sourceDocumentId': bundle.inputData?.[`${keyPrefix}sourceDocumentId`],
            'idempotencyKey': bundle.inputData?.[`${keyPrefix}idempotencyKey`],
            'reversalOfJournalEntryId': bundle.inputData?.[`${keyPrefix}reversalOfJournalEntryId`],
            'postedBy': bundle.inputData?.[`${keyPrefix}postedBy`],
            'forexRate': bundle.inputData?.[`${keyPrefix}forexRate`],
            'forexRatesSnapshot': bundle.inputData?.[`${keyPrefix}forexRatesSnapshot`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'debitInUsd': bundle.inputData?.[`${keyPrefix}debitInUsd`],
            'creditInUsd': bundle.inputData?.[`${keyPrefix}creditInUsd`],
            'accountingEntries': utils.childMapping(bundle.inputData?.[`${keyPrefix}accountingEntries`], `${keyPrefix}accountingEntries`, AccountingEntryDto),
            'totalDebit': bundle.inputData?.[`${keyPrefix}totalDebit`],
            'totalCredit': bundle.inputData?.[`${keyPrefix}totalCredit`],
            'totalDebitAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}totalDebitAmount`)),
            'totalCreditAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}totalCreditAmount`)),
        }
    },
}
