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
                key: `${keyPrefix}wofF2`,
                label: `[${labelPrefix}wofF2]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}woff`,
                label: `[${labelPrefix}woff]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ttf`,
                label: `[${labelPrefix}ttf]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}eot`,
                label: `[${labelPrefix}eot]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}svg`,
                label: `[${labelPrefix}svg]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'wofF2': bundle.inputData?.[`${keyPrefix}wofF2`],
            'woff': bundle.inputData?.[`${keyPrefix}woff`],
            'ttf': bundle.inputData?.[`${keyPrefix}ttf`],
            'eot': bundle.inputData?.[`${keyPrefix}eot`],
            'svg': bundle.inputData?.[`${keyPrefix}svg`],
        }
    },
}
