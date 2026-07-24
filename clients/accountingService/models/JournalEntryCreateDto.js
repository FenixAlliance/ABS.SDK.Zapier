const utils = require('../utils/utils');
const AccountingEntryCreateDto = require('../models/AccountingEntryCreateDto');

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
                key: `${keyPrefix}journalId`,
                label: `[${labelPrefix}journalId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}fiscalPeriodId`,
                label: `[${labelPrefix}fiscalPeriodId]`,
                required: true,
                type: 'string',
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
                key: `${keyPrefix}isOpeningBalance`,
                label: `[${labelPrefix}isOpeningBalance]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}accountingEntries`,
                label: `[${labelPrefix}accountingEntries]`,
                children: AccountingEntryCreateDto.fields(`${keyPrefix}accountingEntries${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'journalId': bundle.inputData?.[`${keyPrefix}journalId`],
            'fiscalPeriodId': bundle.inputData?.[`${keyPrefix}fiscalPeriodId`],
            'transactionCurrencyId': bundle.inputData?.[`${keyPrefix}transactionCurrencyId`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'sourceDocumentType': bundle.inputData?.[`${keyPrefix}sourceDocumentType`],
            'sourceDocumentId': bundle.inputData?.[`${keyPrefix}sourceDocumentId`],
            'idempotencyKey': bundle.inputData?.[`${keyPrefix}idempotencyKey`],
            'isOpeningBalance': bundle.inputData?.[`${keyPrefix}isOpeningBalance`],
            'accountingEntries': utils.childMapping(bundle.inputData?.[`${keyPrefix}accountingEntries`], `${keyPrefix}accountingEntries`, AccountingEntryCreateDto),
        }
    },
}
