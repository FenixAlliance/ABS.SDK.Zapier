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
                key: `${keyPrefix}orderType`,
                label: `[${labelPrefix}orderType]`,
                type: 'string',
                choices: [
                    'SalesOrder',
                    'PurchaseOrder',
                ],
            },
            {
                key: `${keyPrefix}orderStatus`,
                label: `[${labelPrefix}orderStatus]`,
                type: 'string',
                choices: [
                    'New',
                    'Processing',
                    'Accepted',
                    'Declined',
                    'Shipped',
                    'Delivered',
                    'OnHold',
                    'Failed',
                    'Fulfilled',
                    'Cancelled',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'orderType': bundle.inputData?.[`${keyPrefix}orderType`],
            'orderStatus': bundle.inputData?.[`${keyPrefix}orderStatus`],
        }
    },
}
