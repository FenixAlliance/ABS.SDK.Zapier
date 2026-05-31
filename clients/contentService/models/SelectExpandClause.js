const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}selectedItems`,
                label: `[${labelPrefix}selectedItems]`,
                list: true,
                type: 'object',
            },
            {
                key: `${keyPrefix}allSelected`,
                label: `[${labelPrefix}allSelected]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'selectedItems': bundle.inputData?.[`${keyPrefix}selectedItems`],
            'allSelected': bundle.inputData?.[`${keyPrefix}allSelected`],
        }
    },
}
