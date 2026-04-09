const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}favicon`,
                label: `[${labelPrefix}favicon]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}favicon16`,
                label: `[${labelPrefix}favicon16]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}favicon32`,
                label: `[${labelPrefix}favicon32]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}favicon96`,
                label: `[${labelPrefix}favicon96]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}favicon128`,
                label: `[${labelPrefix}favicon128]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}favicon196`,
                label: `[${labelPrefix}favicon196]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'favicon': bundle.inputData?.[`${keyPrefix}favicon`],
            'favicon16': bundle.inputData?.[`${keyPrefix}favicon16`],
            'favicon32': bundle.inputData?.[`${keyPrefix}favicon32`],
            'favicon96': bundle.inputData?.[`${keyPrefix}favicon96`],
            'favicon128': bundle.inputData?.[`${keyPrefix}favicon128`],
            'favicon196': bundle.inputData?.[`${keyPrefix}favicon196`],
        }
    },
}
