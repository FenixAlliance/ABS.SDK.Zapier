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
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}value`,
                label: `[${labelPrefix}value]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}percent`,
                label: `[${labelPrefix}percent]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}itemId`,
                label: `[${labelPrefix}itemId]`,
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
                key: `${keyPrefix}discountListId`,
                label: `[${labelPrefix}discountListId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}endQuantity`,
                label: `[${labelPrefix}endQuantity]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}beginQuantity`,
                label: `[${labelPrefix}beginQuantity]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'value': bundle.inputData?.[`${keyPrefix}value`],
            'percent': bundle.inputData?.[`${keyPrefix}percent`],
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'discountListId': bundle.inputData?.[`${keyPrefix}discountListId`],
            'endQuantity': bundle.inputData?.[`${keyPrefix}endQuantity`],
            'beginQuantity': bundle.inputData?.[`${keyPrefix}beginQuantity`],
        }
    },
}
