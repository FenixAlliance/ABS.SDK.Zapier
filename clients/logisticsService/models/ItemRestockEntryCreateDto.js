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
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}warehouseId`,
                label: `[${labelPrefix}warehouseId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemRestockId`,
                label: `[${labelPrefix}itemRestockId]`,
                required: true,
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
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
            'warehouseId': bundle.inputData?.[`${keyPrefix}warehouseId`],
            'itemRestockId': bundle.inputData?.[`${keyPrefix}itemRestockId`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'orderItemRecordId': bundle.inputData?.[`${keyPrefix}orderItemRecordId`],
        }
    },
}
