const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}minSize`,
                label: `[${labelPrefix}minSize]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}maxSize`,
                label: `[${labelPrefix}maxSize]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}skipSize`,
                label: `[${labelPrefix}skipSize]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'minSize': bundle.inputData?.[`${keyPrefix}minSize`],
            'maxSize': bundle.inputData?.[`${keyPrefix}maxSize`],
            'skipSize': bundle.inputData?.[`${keyPrefix}skipSize`],
        }
    },
}
