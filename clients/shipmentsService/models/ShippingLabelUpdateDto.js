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
                key: `${keyPrefix}expectedDelivery`,
                label: `[${labelPrefix}expectedDelivery]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}locationId`,
                label: `[${labelPrefix}locationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shipmentId`,
                label: `[${labelPrefix}shipmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shippingCourierId`,
                label: `[${labelPrefix}shippingCourierId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'trackingCode': bundle.inputData?.[`${keyPrefix}trackingCode`],
            'expectedDelivery': bundle.inputData?.[`${keyPrefix}expectedDelivery`],
            'locationId': bundle.inputData?.[`${keyPrefix}locationId`],
            'shipmentId': bundle.inputData?.[`${keyPrefix}shipmentId`],
            'shippingCourierId': bundle.inputData?.[`${keyPrefix}shippingCourierId`],
        }
    },
}
