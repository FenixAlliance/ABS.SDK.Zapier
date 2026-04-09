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
                key: `${keyPrefix}iso639_1`,
                label: `[${labelPrefix}iso639_1]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}iso639_2`,
                label: `[${labelPrefix}iso639_2]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enabled`,
                label: `[${labelPrefix}enabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}languageNativeName`,
                label: `[${labelPrefix}languageNativeName]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'iso639_1': bundle.inputData?.[`${keyPrefix}iso639_1`],
            'iso639_2': bundle.inputData?.[`${keyPrefix}iso639_2`],
            'enabled': bundle.inputData?.[`${keyPrefix}enabled`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'languageNativeName': bundle.inputData?.[`${keyPrefix}languageNativeName`],
        }
    },
}
