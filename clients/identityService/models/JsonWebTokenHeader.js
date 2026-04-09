const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}alg`,
                label: `[${labelPrefix}alg]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}jku`,
                label: `[${labelPrefix}jku]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}kid`,
                label: `[${labelPrefix}kid]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}typ`,
                label: `[${labelPrefix}typ]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'alg': bundle.inputData?.[`${keyPrefix}alg`],
            'jku': bundle.inputData?.[`${keyPrefix}jku`],
            'kid': bundle.inputData?.[`${keyPrefix}kid`],
            'typ': bundle.inputData?.[`${keyPrefix}typ`],
        }
    },
}
