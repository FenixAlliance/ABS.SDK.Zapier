const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}base`,
                label: `[${labelPrefix}base]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}comments`,
                label: `[${labelPrefix}comments]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryLanguageId`,
                label: `[${labelPrefix}countryLanguageId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'base': bundle.inputData?.[`${keyPrefix}base`],
            'comments': bundle.inputData?.[`${keyPrefix}comments`],
            'countryLanguageId': bundle.inputData?.[`${keyPrefix}countryLanguageId`],
        }
    },
}
