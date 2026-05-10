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
                key: `${keyPrefix}withdrawStatus`,
                label: `[${labelPrefix}withdrawStatus]`,
                type: 'string',
                choices: [
                    'OnHold',
                    'Retained',
                    'Processing',
                    'OnValidation',
                    'Processed',
                ],
            },
            {
                key: `${keyPrefix}walletAccountId`,
                label: `[${labelPrefix}walletAccountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}walletWithdrawRequestId`,
                label: `[${labelPrefix}walletWithdrawRequestId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}balanceBeforeWithdraw`,
                label: `[${labelPrefix}balanceBeforeWithdraw]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}balanceAfterWithdraw`,
                label: `[${labelPrefix}balanceAfterWithdraw]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}withdrawedAmount`,
                label: `[${labelPrefix}withdrawedAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'withdrawStatus': bundle.inputData?.[`${keyPrefix}withdrawStatus`],
            'walletAccountId': bundle.inputData?.[`${keyPrefix}walletAccountId`],
            'walletWithdrawRequestId': bundle.inputData?.[`${keyPrefix}walletWithdrawRequestId`],
            'balanceBeforeWithdraw': bundle.inputData?.[`${keyPrefix}balanceBeforeWithdraw`],
            'balanceAfterWithdraw': bundle.inputData?.[`${keyPrefix}balanceAfterWithdraw`],
            'withdrawedAmount': bundle.inputData?.[`${keyPrefix}withdrawedAmount`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
        }
    },
}
