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
                key: `${keyPrefix}dateStart`,
                label: `[${labelPrefix}dateStart]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dateEnd`,
                label: `[${labelPrefix}dateEnd]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'dateStart': bundle.inputData?.[`${keyPrefix}dateStart`],
            'dateEnd': bundle.inputData?.[`${keyPrefix}dateEnd`],
        }
    },
}
