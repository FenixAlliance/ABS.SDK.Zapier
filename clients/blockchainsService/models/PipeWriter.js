const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}canGetUnflushedBytes`,
                label: `[${labelPrefix}canGetUnflushedBytes]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}unflushedBytes`,
                label: `[${labelPrefix}unflushedBytes]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'canGetUnflushedBytes': bundle.inputData?.[`${keyPrefix}canGetUnflushedBytes`],
            'unflushedBytes': bundle.inputData?.[`${keyPrefix}unflushedBytes`],
        }
    },
}
