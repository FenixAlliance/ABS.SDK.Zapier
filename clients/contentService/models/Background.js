const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}bgRepeat`,
                label: `[${labelPrefix}bgRepeat]`,
                type: 'string',
                choices: [
                    'All',
                    'Horizontally',
                    'Vertically',
                    'NoRepeat',
                ],
            },
            {
                key: `${keyPrefix}bgPosition`,
                label: `[${labelPrefix}bgPosition]`,
                type: 'string',
                choices: [
                    'TopLeft',
                    'TopRight',
                    'TopCenter',
                    'CenterLeft',
                    'CenterRight',
                    'CenterCenter',
                    'BottomLeft',
                    'BottomRight',
                    'BottomCenter',
                ],
            },
            {
                key: `${keyPrefix}backgroundColor`,
                label: `[${labelPrefix}backgroundColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}backgroundImageUrl`,
                label: `[${labelPrefix}backgroundImageUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enableFullWidthBackgroundImage`,
                label: `[${labelPrefix}enableFullWidthBackgroundImage]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'bgRepeat': bundle.inputData?.[`${keyPrefix}bgRepeat`],
            'bgPosition': bundle.inputData?.[`${keyPrefix}bgPosition`],
            'backgroundColor': bundle.inputData?.[`${keyPrefix}backgroundColor`],
            'backgroundImageUrl': bundle.inputData?.[`${keyPrefix}backgroundImageUrl`],
            'enableFullWidthBackgroundImage': bundle.inputData?.[`${keyPrefix}enableFullWidthBackgroundImage`],
        }
    },
}
