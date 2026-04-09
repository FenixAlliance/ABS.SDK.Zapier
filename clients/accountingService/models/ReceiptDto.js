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
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}closed`,
                label: `[${labelPrefix}closed]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}accountHolderId`,
                label: `[${labelPrefix}accountHolderId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}receiptType`,
                label: `[${labelPrefix}receiptType]`,
                type: 'string',
                choices: [
                    'PaymentReceipt',
                    'PurchaseReceipt',
                ],
            },
            {
                key: `${keyPrefix}orderId`,
                label: `[${labelPrefix}orderId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoiceId`,
                label: `[${labelPrefix}invoiceId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'paymentId': bundle.inputData?.[`${keyPrefix}paymentId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'closed': bundle.inputData?.[`${keyPrefix}closed`],
            'accountHolderId': bundle.inputData?.[`${keyPrefix}accountHolderId`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'receiptType': bundle.inputData?.[`${keyPrefix}receiptType`],
            'orderId': bundle.inputData?.[`${keyPrefix}orderId`],
            'invoiceId': bundle.inputData?.[`${keyPrefix}invoiceId`],
        }
    },
}
