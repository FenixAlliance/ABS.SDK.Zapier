const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}instructions`,
                label: `[${labelPrefix}instructions]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}deliveryNoteId`,
                label: `[${labelPrefix}deliveryNoteId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderId`,
                label: `[${labelPrefix}orderId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'instructions': bundle.inputData?.[`${keyPrefix}instructions`],
            'deliveryNoteId': bundle.inputData?.[`${keyPrefix}deliveryNoteId`],
            'orderId': bundle.inputData?.[`${keyPrefix}orderId`],
        }
    },
}
