const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}loginProvider`,
                label: `[${labelPrefix}loginProvider]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}providerKey`,
                label: `[${labelPrefix}providerKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}providerDisplayName`,
                label: `[${labelPrefix}providerDisplayName]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'loginProvider': bundle.inputData?.[`${keyPrefix}loginProvider`],
            'providerKey': bundle.inputData?.[`${keyPrefix}providerKey`],
            'providerDisplayName': bundle.inputData?.[`${keyPrefix}providerDisplayName`],
        }
    },
}
