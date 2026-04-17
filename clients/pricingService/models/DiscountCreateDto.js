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
                key: `${keyPrefix}beginQuantity`,
                label: `[${labelPrefix}beginQuantity]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}endQuantity`,
                label: `[${labelPrefix}endQuantity]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}percent`,
                label: `[${labelPrefix}percent]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}value`,
                label: `[${labelPrefix}value]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}discountListId`,
                label: `[${labelPrefix}discountListId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'beginQuantity': bundle.inputData?.[`${keyPrefix}beginQuantity`],
            'endQuantity': bundle.inputData?.[`${keyPrefix}endQuantity`],
            'percent': bundle.inputData?.[`${keyPrefix}percent`],
            'value': bundle.inputData?.[`${keyPrefix}value`],
            'discountListId': bundle.inputData?.[`${keyPrefix}discountListId`],
        }
    },
}
