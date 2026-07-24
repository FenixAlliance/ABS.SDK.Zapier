const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}isValid`,
                label: `[${labelPrefix}isValid]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}method`,
                label: `[${labelPrefix}method]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signerSubject`,
                label: `[${labelPrefix}signerSubject]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signerThumbprint`,
                label: `[${labelPrefix}signerThumbprint]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}issues`,
                label: `[${labelPrefix}issues]`,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'isValid': bundle.inputData?.[`${keyPrefix}isValid`],
            'method': bundle.inputData?.[`${keyPrefix}method`],
            'signerSubject': bundle.inputData?.[`${keyPrefix}signerSubject`],
            'signerThumbprint': bundle.inputData?.[`${keyPrefix}signerThumbprint`],
            'issues': bundle.inputData?.[`${keyPrefix}issues`],
        }
    },
}
