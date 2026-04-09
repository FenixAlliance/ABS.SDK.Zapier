const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}success`,
                label: `[${labelPrefix}success]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}date`,
                label: `[${labelPrefix}date]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}base`,
                label: `[${labelPrefix}base]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}requestTimestamp`,
                label: `[${labelPrefix}requestTimestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}rates`,
                label: `[${labelPrefix}rates]`,
                type: 'object',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'success': bundle.inputData?.[`${keyPrefix}success`],
            'date': bundle.inputData?.[`${keyPrefix}date`],
            'base': bundle.inputData?.[`${keyPrefix}base`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'requestTimestamp': bundle.inputData?.[`${keyPrefix}requestTimestamp`],
            'rates': bundle.inputData?.[`${keyPrefix}rates`],
        }
    },
}
