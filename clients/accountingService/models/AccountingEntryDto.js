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
                key: `${keyPrefix}accountName`,
                label: `[${labelPrefix}accountName]`,
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
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
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
                key: `${keyPrefix}functionalAmount`,
                label: `[${labelPrefix}functionalAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}functionalCurrencyId`,
                label: `[${labelPrefix}functionalCurrencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accountAmount`,
                label: `[${labelPrefix}accountAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}accountCurrencyId`,
                label: `[${labelPrefix}accountCurrencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}reportingAmountInUsd`,
                label: `[${labelPrefix}reportingAmountInUsd]`,
                type: 'number',
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
                key: `${keyPrefix}costCentreId`,
                label: `[${labelPrefix}costCentreId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectId`,
                label: `[${labelPrefix}projectId]`,
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
            ...Money.fields(`${keyPrefix}amount`, isInput),
            ...Money.fields(`${keyPrefix}amountInUsd`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'journalEntryId': bundle.inputData?.[`${keyPrefix}journalEntryId`],
            'accountId': bundle.inputData?.[`${keyPrefix}accountId`],
            'accountName': bundle.inputData?.[`${keyPrefix}accountName`],
            'direction': bundle.inputData?.[`${keyPrefix}direction`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'transactionAmount': bundle.inputData?.[`${keyPrefix}transactionAmount`],
            'transactionCurrencyId': bundle.inputData?.[`${keyPrefix}transactionCurrencyId`],
            'functionalAmount': bundle.inputData?.[`${keyPrefix}functionalAmount`],
            'functionalCurrencyId': bundle.inputData?.[`${keyPrefix}functionalCurrencyId`],
            'accountAmount': bundle.inputData?.[`${keyPrefix}accountAmount`],
            'accountCurrencyId': bundle.inputData?.[`${keyPrefix}accountCurrencyId`],
            'reportingAmountInUsd': bundle.inputData?.[`${keyPrefix}reportingAmountInUsd`],
            'forexRate': bundle.inputData?.[`${keyPrefix}forexRate`],
            'forexRatesSnapshot': bundle.inputData?.[`${keyPrefix}forexRatesSnapshot`],
            'costCentreId': bundle.inputData?.[`${keyPrefix}costCentreId`],
            'projectId': bundle.inputData?.[`${keyPrefix}projectId`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'debit': bundle.inputData?.[`${keyPrefix}debit`],
            'credit': bundle.inputData?.[`${keyPrefix}credit`],
            'amount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}amount`)),
            'amountInUsd': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}amountInUsd`)),
        }
    },
}
