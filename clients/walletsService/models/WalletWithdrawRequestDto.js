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
                key: `${keyPrefix}requestedWithdrawAmount`,
                label: `[${labelPrefix}requestedWithdrawAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}requestedWithdrawAmountInUSD`,
                label: `[${labelPrefix}requestedWithdrawAmountInUSD]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}walletWithdrawRequestStatus`,
                label: `[${labelPrefix}walletWithdrawRequestStatus]`,
                type: 'string',
                choices: [
                    'Pending',
                    'Processed',
                    'Cancelled',
                    'OnHold',
                    'Denied',
                ],
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessId`,
                label: `[${labelPrefix}businessId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}walletAccountId`,
                label: `[${labelPrefix}walletAccountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bankAccountId`,
                label: `[${labelPrefix}bankAccountId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'requestedWithdrawAmount': bundle.inputData?.[`${keyPrefix}requestedWithdrawAmount`],
            'requestedWithdrawAmountInUSD': bundle.inputData?.[`${keyPrefix}requestedWithdrawAmountInUSD`],
            'walletWithdrawRequestStatus': bundle.inputData?.[`${keyPrefix}walletWithdrawRequestStatus`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'businessId': bundle.inputData?.[`${keyPrefix}businessId`],
            'walletAccountId': bundle.inputData?.[`${keyPrefix}walletAccountId`],
            'bankAccountId': bundle.inputData?.[`${keyPrefix}bankAccountId`],
        }
    },
}
