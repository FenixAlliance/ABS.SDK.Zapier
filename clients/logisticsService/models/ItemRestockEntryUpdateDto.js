const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}itemId`,
                label: `[${labelPrefix}itemId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}warehouseId`,
                label: `[${labelPrefix}warehouseId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}orderItemRecordId`,
                label: `[${labelPrefix}orderItemRecordId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
            'warehouseId': bundle.inputData?.[`${keyPrefix}warehouseId`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'orderItemRecordId': bundle.inputData?.[`${keyPrefix}orderItemRecordId`],
        }
    },
}
