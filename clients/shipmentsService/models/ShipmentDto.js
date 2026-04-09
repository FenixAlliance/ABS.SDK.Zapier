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
                key: `${keyPrefix}trackingCode`,
                label: `[${labelPrefix}trackingCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isInternational`,
                label: `[${labelPrefix}isInternational]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}shipmentTimestamp`,
                label: `[${labelPrefix}shipmentTimestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}deliveryTimestamp`,
                label: `[${labelPrefix}deliveryTimestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expectedShippingDate`,
                label: `[${labelPrefix}expectedShippingDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expectedDeliveryDate`,
                label: `[${labelPrefix}expectedDeliveryDate]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'trackingCode': bundle.inputData?.[`${keyPrefix}trackingCode`],
            'isInternational': bundle.inputData?.[`${keyPrefix}isInternational`],
            'shipmentTimestamp': bundle.inputData?.[`${keyPrefix}shipmentTimestamp`],
            'deliveryTimestamp': bundle.inputData?.[`${keyPrefix}deliveryTimestamp`],
            'expectedShippingDate': bundle.inputData?.[`${keyPrefix}expectedShippingDate`],
            'expectedDeliveryDate': bundle.inputData?.[`${keyPrefix}expectedDeliveryDate`],
        }
    },
}
