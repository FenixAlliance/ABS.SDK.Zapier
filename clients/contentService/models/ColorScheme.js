const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}color0`,
                label: `[${labelPrefix}color0]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}color1`,
                label: `[${labelPrefix}color1]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}color2`,
                label: `[${labelPrefix}color2]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}color3`,
                label: `[${labelPrefix}color3]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}color4`,
                label: `[${labelPrefix}color4]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}color5`,
                label: `[${labelPrefix}color5]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}color6`,
                label: `[${labelPrefix}color6]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}color7`,
                label: `[${labelPrefix}color7]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}color8`,
                label: `[${labelPrefix}color8]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}color9`,
                label: `[${labelPrefix}color9]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'color0': bundle.inputData?.[`${keyPrefix}color0`],
            'color1': bundle.inputData?.[`${keyPrefix}color1`],
            'color2': bundle.inputData?.[`${keyPrefix}color2`],
            'color3': bundle.inputData?.[`${keyPrefix}color3`],
            'color4': bundle.inputData?.[`${keyPrefix}color4`],
            'color5': bundle.inputData?.[`${keyPrefix}color5`],
            'color6': bundle.inputData?.[`${keyPrefix}color6`],
            'color7': bundle.inputData?.[`${keyPrefix}color7`],
            'color8': bundle.inputData?.[`${keyPrefix}color8`],
            'color9': bundle.inputData?.[`${keyPrefix}color9`],
        }
    },
}
