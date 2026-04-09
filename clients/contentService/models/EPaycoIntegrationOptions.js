const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}customerID`,
                label: `[${labelPrefix}customerID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customerKey`,
                label: `[${labelPrefix}customerKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}apiKey`,
                label: `[${labelPrefix}apiKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}apiSecret`,
                label: `[${labelPrefix}apiSecret]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'customerID': bundle.inputData?.[`${keyPrefix}customerID`],
            'customerKey': bundle.inputData?.[`${keyPrefix}customerKey`],
            'apiKey': bundle.inputData?.[`${keyPrefix}apiKey`],
            'apiSecret': bundle.inputData?.[`${keyPrefix}apiSecret`],
        }
    },
}
