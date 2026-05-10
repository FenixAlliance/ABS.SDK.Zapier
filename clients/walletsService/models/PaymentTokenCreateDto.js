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
                key: `${keyPrefix}mask`,
                label: `[${labelPrefix}mask]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}tokenType`,
                label: `[${labelPrefix}tokenType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cardFranchise`,
                label: `[${labelPrefix}cardFranchise]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cardExpirationMonth`,
                label: `[${labelPrefix}cardExpirationMonth]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}cardExpirationYear`,
                label: `[${labelPrefix}cardExpirationYear]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}validUntil`,
                label: `[${labelPrefix}validUntil]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}paymentGatewayId`,
                label: `[${labelPrefix}paymentGatewayId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'mask': bundle.inputData?.[`${keyPrefix}mask`],
            'tokenType': bundle.inputData?.[`${keyPrefix}tokenType`],
            'cardFranchise': bundle.inputData?.[`${keyPrefix}cardFranchise`],
            'cardExpirationMonth': bundle.inputData?.[`${keyPrefix}cardExpirationMonth`],
            'cardExpirationYear': bundle.inputData?.[`${keyPrefix}cardExpirationYear`],
            'validUntil': bundle.inputData?.[`${keyPrefix}validUntil`],
            'paymentGatewayId': bundle.inputData?.[`${keyPrefix}paymentGatewayId`],
        }
    },
}
