const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}taxPolicyId`,
                label: `[${labelPrefix}taxPolicyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemPriceId`,
                label: `[${labelPrefix}itemPriceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemId`,
                label: `[${labelPrefix}itemId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'taxPolicyId': bundle.inputData?.[`${keyPrefix}taxPolicyId`],
            'itemPriceId': bundle.inputData?.[`${keyPrefix}itemPriceId`],
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
        }
    },
}
