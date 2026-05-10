const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}default`,
                label: `[${labelPrefix}default]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}everywhere`,
                label: `[${labelPrefix}everywhere]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}postalCodes`,
                label: `[${labelPrefix}postalCodes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryCodes`,
                label: `[${labelPrefix}countryCodes]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'default': bundle.inputData?.[`${keyPrefix}default`],
            'everywhere': bundle.inputData?.[`${keyPrefix}everywhere`],
            'postalCodes': bundle.inputData?.[`${keyPrefix}postalCodes`],
            'countryCodes': bundle.inputData?.[`${keyPrefix}countryCodes`],
        }
    },
}
