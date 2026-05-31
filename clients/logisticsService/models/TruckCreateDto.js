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
                key: `${keyPrefix}plateNumber`,
                label: `[${labelPrefix}plateNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}truckType`,
                label: `[${labelPrefix}truckType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}maxPayloadKg`,
                label: `[${labelPrefix}maxPayloadKg]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}teuCapacity`,
                label: `[${labelPrefix}teuCapacity]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}driverName`,
                label: `[${labelPrefix}driverName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}driverPhone`,
                label: `[${labelPrefix}driverPhone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}driverLicenseNumber`,
                label: `[${labelPrefix}driverLicenseNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isActive`,
                label: `[${labelPrefix}isActive]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isRefrigerated`,
                label: `[${labelPrefix}isRefrigerated]`,
                type: 'boolean',
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
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'plateNumber': bundle.inputData?.[`${keyPrefix}plateNumber`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'truckType': bundle.inputData?.[`${keyPrefix}truckType`],
            'maxPayloadKg': bundle.inputData?.[`${keyPrefix}maxPayloadKg`],
            'teuCapacity': bundle.inputData?.[`${keyPrefix}teuCapacity`],
            'driverName': bundle.inputData?.[`${keyPrefix}driverName`],
            'driverPhone': bundle.inputData?.[`${keyPrefix}driverPhone`],
            'driverLicenseNumber': bundle.inputData?.[`${keyPrefix}driverLicenseNumber`],
            'isActive': bundle.inputData?.[`${keyPrefix}isActive`],
            'isRefrigerated': bundle.inputData?.[`${keyPrefix}isRefrigerated`],
            'shippingCourierId': bundle.inputData?.[`${keyPrefix}shippingCourierId`],
        }
    },
}
