const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}websiteURL`,
                label: `[${labelPrefix}websiteURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logoURL`,
                label: `[${labelPrefix}logoURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}featured`,
                label: `[${labelPrefix}featured]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}trending`,
                label: `[${labelPrefix}trending]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'websiteURL': bundle.inputData?.[`${keyPrefix}websiteURL`],
            'logoURL': bundle.inputData?.[`${keyPrefix}logoURL`],
            'featured': bundle.inputData?.[`${keyPrefix}featured`],
            'trending': bundle.inputData?.[`${keyPrefix}trending`],
        }
    },
}
