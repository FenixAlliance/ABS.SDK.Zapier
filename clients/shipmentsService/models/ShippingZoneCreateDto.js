const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
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
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'default': bundle.inputData?.[`${keyPrefix}default`],
            'everywhere': bundle.inputData?.[`${keyPrefix}everywhere`],
            'postalCodes': bundle.inputData?.[`${keyPrefix}postalCodes`],
            'countryCodes': bundle.inputData?.[`${keyPrefix}countryCodes`],
        }
    },
}
