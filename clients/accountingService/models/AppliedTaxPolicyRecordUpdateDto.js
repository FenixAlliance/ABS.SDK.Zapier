const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxPolicyId`,
                label: `[${labelPrefix}taxPolicyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoiceId`,
                label: `[${labelPrefix}invoiceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemId`,
                label: `[${labelPrefix}itemId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxAmountInUSD`,
                label: `[${labelPrefix}taxAmountInUSD]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}taxBaseAmountInUSD`,
                label: `[${labelPrefix}taxBaseAmountInUSD]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'taxPolicyId': bundle.inputData?.[`${keyPrefix}taxPolicyId`],
            'invoiceId': bundle.inputData?.[`${keyPrefix}invoiceId`],
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
            'taxAmountInUSD': bundle.inputData?.[`${keyPrefix}taxAmountInUSD`],
            'taxBaseAmountInUSD': bundle.inputData?.[`${keyPrefix}taxBaseAmountInUSD`],
        }
    },
}
