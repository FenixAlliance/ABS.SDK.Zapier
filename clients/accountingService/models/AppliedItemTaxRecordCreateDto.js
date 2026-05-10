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
            {
                key: `${keyPrefix}billingItemRecordId`,
                label: `[${labelPrefix}billingItemRecordId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'taxPolicyId': bundle.inputData?.[`${keyPrefix}taxPolicyId`],
            'invoiceId': bundle.inputData?.[`${keyPrefix}invoiceId`],
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
            'taxAmountInUSD': bundle.inputData?.[`${keyPrefix}taxAmountInUSD`],
            'taxBaseAmountInUSD': bundle.inputData?.[`${keyPrefix}taxBaseAmountInUSD`],
            'billingItemRecordId': bundle.inputData?.[`${keyPrefix}billingItemRecordId`],
        }
    },
}
