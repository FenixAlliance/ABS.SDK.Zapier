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
                key: `${keyPrefix}itemId`,
                label: `[${labelPrefix}itemId]`,
                type: 'string',
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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'price': bundle.inputData?.[`${keyPrefix}price`],
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
            'unitId': bundle.inputData?.[`${keyPrefix}unitId`],
            'percent': bundle.inputData?.[`${keyPrefix}percent`],
            'unitGroupId': bundle.inputData?.[`${keyPrefix}unitGroupId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'discountListId': bundle.inputData?.[`${keyPrefix}discountListId`],
            'roundingPolicyId': bundle.inputData?.[`${keyPrefix}roundingPolicyId`],
        }
    },
}
