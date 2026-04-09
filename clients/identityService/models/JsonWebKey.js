const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}kid`,
                label: `[${labelPrefix}kid]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}nbf`,
                label: `[${labelPrefix}nbf]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}use`,
                label: `[${labelPrefix}use]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}kty`,
                label: `[${labelPrefix}kty]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}e`,
                label: `[${labelPrefix}e]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}n`,
                label: `[${labelPrefix}n]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'kid': bundle.inputData?.[`${keyPrefix}kid`],
            'nbf': bundle.inputData?.[`${keyPrefix}nbf`],
            'use': bundle.inputData?.[`${keyPrefix}use`],
            'kty': bundle.inputData?.[`${keyPrefix}kty`],
            'e': bundle.inputData?.[`${keyPrefix}e`],
            'n': bundle.inputData?.[`${keyPrefix}n`],
        }
    },
}
