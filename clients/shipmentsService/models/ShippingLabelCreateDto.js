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
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}expectedDelivery`,
                label: `[${labelPrefix}expectedDelivery]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}locationID`,
                label: `[${labelPrefix}locationID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shipmentID`,
                label: `[${labelPrefix}shipmentID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shippingCourierID`,
                label: `[${labelPrefix}shippingCourierID]`,
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
            'expectedDelivery': bundle.inputData?.[`${keyPrefix}expectedDelivery`],
            'locationID': bundle.inputData?.[`${keyPrefix}locationID`],
            'shipmentID': bundle.inputData?.[`${keyPrefix}shipmentID`],
            'shippingCourierID': bundle.inputData?.[`${keyPrefix}shippingCourierID`],
        }
    },
}
