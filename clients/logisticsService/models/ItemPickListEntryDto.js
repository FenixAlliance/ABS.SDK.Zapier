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
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                type: 'number',
            },
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
                key: `${keyPrefix}itemPickListId`,
                label: `[${labelPrefix}itemPickListId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderItemRecordId`,
                label: `[${labelPrefix}orderItemRecordId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
            'warehouseId': bundle.inputData?.[`${keyPrefix}warehouseId`],
            'itemPickListId': bundle.inputData?.[`${keyPrefix}itemPickListId`],
            'orderItemRecordId': bundle.inputData?.[`${keyPrefix}orderItemRecordId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
        }
    },
}
