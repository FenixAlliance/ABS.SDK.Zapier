const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}top`,
                label: `[${labelPrefix}top]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bottom`,
                label: `[${labelPrefix}bottom]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}right`,
                label: `[${labelPrefix}right]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}left`,
                label: `[${labelPrefix}left]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'top': bundle.inputData?.[`${keyPrefix}top`],
            'bottom': bundle.inputData?.[`${keyPrefix}bottom`],
            'right': bundle.inputData?.[`${keyPrefix}right`],
            'left': bundle.inputData?.[`${keyPrefix}left`],
        }
    },
}
