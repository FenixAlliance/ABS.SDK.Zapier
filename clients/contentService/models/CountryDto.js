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
                key: `${keyPrefix}iso3`,
                label: `[${labelPrefix}iso3]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}iso2`,
                label: `[${labelPrefix}iso2]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}nativeName`,
                label: `[${labelPrefix}nativeName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}flagUrl`,
                label: `[${labelPrefix}flagUrl]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'iso3': bundle.inputData?.[`${keyPrefix}iso3`],
            'iso2': bundle.inputData?.[`${keyPrefix}iso2`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'nativeName': bundle.inputData?.[`${keyPrefix}nativeName`],
            'flagUrl': bundle.inputData?.[`${keyPrefix}flagUrl`],
        }
    },
}
