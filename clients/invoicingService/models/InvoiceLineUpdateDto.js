const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}price`,
                label: `[${labelPrefix}price]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}unitId`,
                label: `[${labelPrefix}unitId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}percent`,
                label: `[${labelPrefix}percent]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}unitGroupId`,
                label: `[${labelPrefix}unitGroupId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}discountListId`,
                label: `[${labelPrefix}discountListId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}roundingPolicyId`,
                label: `[${labelPrefix}roundingPolicyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}itemId`,
                label: `[${labelPrefix}itemId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemPriceId`,
                label: `[${labelPrefix}itemPriceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoiceLineId`,
                label: `[${labelPrefix}invoiceLineId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxAmountInUsd`,
                label: `[${labelPrefix}taxAmountInUsd]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}taxBaseAmountInUsd`,
                label: `[${labelPrefix}taxBaseAmountInUsd]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'price': bundle.inputData?.[`${keyPrefix}price`],
            'unitId': bundle.inputData?.[`${keyPrefix}unitId`],
            'percent': bundle.inputData?.[`${keyPrefix}percent`],
            'unitGroupId': bundle.inputData?.[`${keyPrefix}unitGroupId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'discountListId': bundle.inputData?.[`${keyPrefix}discountListId`],
            'roundingPolicyId': bundle.inputData?.[`${keyPrefix}roundingPolicyId`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
            'itemPriceId': bundle.inputData?.[`${keyPrefix}itemPriceId`],
            'invoiceLineId': bundle.inputData?.[`${keyPrefix}invoiceLineId`],
            'taxAmountInUsd': bundle.inputData?.[`${keyPrefix}taxAmountInUsd`],
            'taxBaseAmountInUsd': bundle.inputData?.[`${keyPrefix}taxBaseAmountInUsd`],
        }
    },
}
