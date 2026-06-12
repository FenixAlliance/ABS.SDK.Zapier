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
                key: `${keyPrefix}authenticationType`,
                label: `[${labelPrefix}authenticationType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isAuthenticated`,
                label: `[${labelPrefix}isAuthenticated]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'authenticationType': bundle.inputData?.[`${keyPrefix}authenticationType`],
            'isAuthenticated': bundle.inputData?.[`${keyPrefix}isAuthenticated`],
        }
    },
}
