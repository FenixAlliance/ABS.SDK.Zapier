const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}darkStyling`,
                label: `[${labelPrefix}darkStyling]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}themeName`,
                label: `[${labelPrefix}themeName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}defaultLayout`,
                label: `[${labelPrefix}defaultLayout]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}themeAssembly`,
                label: `[${labelPrefix}themeAssembly]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'darkStyling': bundle.inputData?.[`${keyPrefix}darkStyling`],
            'themeName': bundle.inputData?.[`${keyPrefix}themeName`],
            'defaultLayout': bundle.inputData?.[`${keyPrefix}defaultLayout`],
            'themeAssembly': bundle.inputData?.[`${keyPrefix}themeAssembly`],
        }
    },
}
