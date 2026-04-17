const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}loanTimestamp`,
                label: `[${labelPrefix}loanTimestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}paymentDeadline`,
                label: `[${labelPrefix}paymentDeadline]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}value`,
                label: `[${labelPrefix}value]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}interestRate`,
                label: `[${labelPrefix}interestRate]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}isCompundInterestRate`,
                label: `[${labelPrefix}isCompundInterestRate]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}loanTypeId`,
                label: `[${labelPrefix}loanTypeId]`,
                type: 'string',
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
            'loanTimestamp': bundle.inputData?.[`${keyPrefix}loanTimestamp`],
            'paymentDeadline': bundle.inputData?.[`${keyPrefix}paymentDeadline`],
            'value': bundle.inputData?.[`${keyPrefix}value`],
            'interestRate': bundle.inputData?.[`${keyPrefix}interestRate`],
            'isCompundInterestRate': bundle.inputData?.[`${keyPrefix}isCompundInterestRate`],
            'loanTypeId': bundle.inputData?.[`${keyPrefix}loanTypeId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
        }
    },
}
