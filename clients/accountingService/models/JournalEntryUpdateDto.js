const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
                key: `${keyPrefix}isOpeningBalance`,
                label: `[${labelPrefix}isOpeningBalance]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'fiscalPeriodId': bundle.inputData?.[`${keyPrefix}fiscalPeriodId`],
            'transactionCurrencyId': bundle.inputData?.[`${keyPrefix}transactionCurrencyId`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'sourceDocumentType': bundle.inputData?.[`${keyPrefix}sourceDocumentType`],
            'sourceDocumentId': bundle.inputData?.[`${keyPrefix}sourceDocumentId`],
            'isOpeningBalance': bundle.inputData?.[`${keyPrefix}isOpeningBalance`],
        }
    },
}
