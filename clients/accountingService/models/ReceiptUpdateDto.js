const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}paymentId`,
                label: `[${labelPrefix}paymentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}forexRate`,
                label: `[${labelPrefix}forexRate]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}totalAmount`,
                label: `[${labelPrefix}totalAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}totalAmountInUsd`,
                label: `[${labelPrefix}totalAmountInUsd]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}closed`,
                label: `[${labelPrefix}closed]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderId`,
                label: `[${labelPrefix}orderId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoiceId`,
                label: `[${labelPrefix}invoiceId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'paymentId': bundle.inputData?.[`${keyPrefix}paymentId`],
            'forexRate': bundle.inputData?.[`${keyPrefix}forexRate`],
            'totalAmount': bundle.inputData?.[`${keyPrefix}totalAmount`],
            'totalAmountInUsd': bundle.inputData?.[`${keyPrefix}totalAmountInUsd`],
            'closed': bundle.inputData?.[`${keyPrefix}closed`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'orderId': bundle.inputData?.[`${keyPrefix}orderId`],
            'invoiceId': bundle.inputData?.[`${keyPrefix}invoiceId`],
        }
    },
}
