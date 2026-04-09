const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}color`,
                label: `[${labelPrefix}color]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}icon`,
                label: `[${labelPrefix}icon]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}iconColor`,
                label: `[${labelPrefix}iconColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}favicon`,
                label: `[${labelPrefix}favicon]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'color': bundle.inputData?.[`${keyPrefix}color`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'icon': bundle.inputData?.[`${keyPrefix}icon`],
            'iconColor': bundle.inputData?.[`${keyPrefix}iconColor`],
            'favicon': bundle.inputData?.[`${keyPrefix}favicon`],
        }
    },
}
