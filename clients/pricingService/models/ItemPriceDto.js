const utils = require('../utils/utils');

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
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}discountId`,
                label: `[${labelPrefix}discountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}unitGroupId`,
                label: `[${labelPrefix}unitGroupId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}priceListId`,
                label: `[${labelPrefix}priceListId]`,
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
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}price`,
                label: `[${labelPrefix}price]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}percent`,
                label: `[${labelPrefix}percent]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
            'unitId': bundle.inputData?.[`${keyPrefix}unitId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'discountId': bundle.inputData?.[`${keyPrefix}discountId`],
            'unitGroupId': bundle.inputData?.[`${keyPrefix}unitGroupId`],
            'priceListId': bundle.inputData?.[`${keyPrefix}priceListId`],
            'discountListId': bundle.inputData?.[`${keyPrefix}discountListId`],
            'roundingPolicyId': bundle.inputData?.[`${keyPrefix}roundingPolicyId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'price': bundle.inputData?.[`${keyPrefix}price`],
            'percent': bundle.inputData?.[`${keyPrefix}percent`],
        }
    },
}
