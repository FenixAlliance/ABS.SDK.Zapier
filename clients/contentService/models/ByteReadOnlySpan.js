const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}length`,
                label: `[${labelPrefix}length]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}isEmpty`,
                label: `[${labelPrefix}isEmpty]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'length': bundle.inputData?.[`${keyPrefix}length`],
            'isEmpty': bundle.inputData?.[`${keyPrefix}isEmpty`],
        }
    },
}
