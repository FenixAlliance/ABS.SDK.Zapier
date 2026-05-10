const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
                key: `${keyPrefix}shipped`,
                label: `[${labelPrefix}shipped]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}delivered`,
                label: `[${labelPrefix}delivered]`,
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
            {
                key: `${keyPrefix}shippingTerms`,
                label: `[${labelPrefix}shippingTerms]`,
                type: 'string',
                choices: [
                    'NC',
                    'EXW',
                    'FCA',
                    'FOB',
                    'FAS',
                    'CFR',
                    'CIF',
                    'CPT',
                    'CIP',
                    'DDP',
                    'DAP',
                    'DPU',
                ],
            },
            {
                key: `${keyPrefix}orderID`,
                label: `[${labelPrefix}orderID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'trackingCode': bundle.inputData?.[`${keyPrefix}trackingCode`],
            'isInternational': bundle.inputData?.[`${keyPrefix}isInternational`],
            'shipped': bundle.inputData?.[`${keyPrefix}shipped`],
            'delivered': bundle.inputData?.[`${keyPrefix}delivered`],
            'shipmentTimestamp': bundle.inputData?.[`${keyPrefix}shipmentTimestamp`],
            'deliveryTimestamp': bundle.inputData?.[`${keyPrefix}deliveryTimestamp`],
            'expectedShippingDate': bundle.inputData?.[`${keyPrefix}expectedShippingDate`],
            'expectedDeliveryDate': bundle.inputData?.[`${keyPrefix}expectedDeliveryDate`],
            'shippingTerms': bundle.inputData?.[`${keyPrefix}shippingTerms`],
            'orderID': bundle.inputData?.[`${keyPrefix}orderID`],
        }
    },
}
