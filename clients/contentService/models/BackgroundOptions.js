const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}backgroundPatternID`,
                label: `[${labelPrefix}backgroundPatternID]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}enableBackgroundPattern`,
                label: `[${labelPrefix}enableBackgroundPattern]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}backgroundImageForPage`,
                label: `[${labelPrefix}backgroundImageForPage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}backgroundColorForPage`,
                label: `[${labelPrefix}backgroundColorForPage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}mainContentColor`,
                label: `[${labelPrefix}mainContentColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}mainContentImageURL`,
                label: `[${labelPrefix}mainContentImageURL]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'backgroundPatternID': bundle.inputData?.[`${keyPrefix}backgroundPatternID`],
            'enableBackgroundPattern': bundle.inputData?.[`${keyPrefix}enableBackgroundPattern`],
            'backgroundImageForPage': bundle.inputData?.[`${keyPrefix}backgroundImageForPage`],
            'backgroundColorForPage': bundle.inputData?.[`${keyPrefix}backgroundColorForPage`],
            'mainContentColor': bundle.inputData?.[`${keyPrefix}mainContentColor`],
            'mainContentImageURL': bundle.inputData?.[`${keyPrefix}mainContentImageURL`],
        }
    },
}
