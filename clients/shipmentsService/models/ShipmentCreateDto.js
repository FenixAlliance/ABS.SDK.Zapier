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
                key: `${keyPrefix}orderId`,
                label: `[${labelPrefix}orderId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'trackingCode': bundle.inputData?.[`${keyPrefix}trackingCode`],
            'isInternational': bundle.inputData?.[`${keyPrefix}isInternational`],
            'expectedShippingDate': bundle.inputData?.[`${keyPrefix}expectedShippingDate`],
            'expectedDeliveryDate': bundle.inputData?.[`${keyPrefix}expectedDeliveryDate`],
            'shippingTerms': bundle.inputData?.[`${keyPrefix}shippingTerms`],
            'orderId': bundle.inputData?.[`${keyPrefix}orderId`],
        }
    },
}
