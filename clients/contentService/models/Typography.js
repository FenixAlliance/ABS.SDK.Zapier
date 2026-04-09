const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}fontSize`,
                label: `[${labelPrefix}fontSize]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}linkColor`,
                label: `[${labelPrefix}linkColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fontColor`,
                label: `[${labelPrefix}fontColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fontFamily`,
                label: `[${labelPrefix}fontFamily]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}letterSpacing`,
                label: `[${labelPrefix}letterSpacing]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}linkColorHover`,
                label: `[${labelPrefix}linkColorHover]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}backupFontFamily`,
                label: `[${labelPrefix}backupFontFamily]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fontWeightAndStyle`,
                label: `[${labelPrefix}fontWeightAndStyle]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'fontSize': bundle.inputData?.[`${keyPrefix}fontSize`],
            'linkColor': bundle.inputData?.[`${keyPrefix}linkColor`],
            'fontColor': bundle.inputData?.[`${keyPrefix}fontColor`],
            'fontFamily': bundle.inputData?.[`${keyPrefix}fontFamily`],
            'letterSpacing': bundle.inputData?.[`${keyPrefix}letterSpacing`],
            'linkColorHover': bundle.inputData?.[`${keyPrefix}linkColorHover`],
            'backupFontFamily': bundle.inputData?.[`${keyPrefix}backupFontFamily`],
            'fontWeightAndStyle': bundle.inputData?.[`${keyPrefix}fontWeightAndStyle`],
        }
    },
}
