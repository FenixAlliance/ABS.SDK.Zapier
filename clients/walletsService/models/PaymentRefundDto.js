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
                key: `${keyPrefix}paymentId`,
                label: `[${labelPrefix}paymentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}walletAccountId`,
                label: `[${labelPrefix}walletAccountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}refundRequestId`,
                label: `[${labelPrefix}refundRequestId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}totalFees`,
                label: `[${labelPrefix}totalFees]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'paymentId': bundle.inputData?.[`${keyPrefix}paymentId`],
            'walletAccountId': bundle.inputData?.[`${keyPrefix}walletAccountId`],
            'refundRequestId': bundle.inputData?.[`${keyPrefix}refundRequestId`],
            'totalFees': bundle.inputData?.[`${keyPrefix}totalFees`],
        }
    },
}
