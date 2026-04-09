const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}pageSize`,
                label: `[${labelPrefix}pageSize]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}dateFormat`,
                label: `[${labelPrefix}dateFormat]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyFormat`,
                label: `[${labelPrefix}currencyFormat]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}dateTimeFormat`,
                label: `[${labelPrefix}dateTimeFormat]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}siteTheme`,
                label: `[${labelPrefix}siteTheme]`,
                required: true,
                type: 'string',
                choices: [
                    'System',
                    'Light',
                    'Dark',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'pageSize': bundle.inputData?.[`${keyPrefix}pageSize`],
            'dateFormat': bundle.inputData?.[`${keyPrefix}dateFormat`],
            'currencyFormat': bundle.inputData?.[`${keyPrefix}currencyFormat`],
            'dateTimeFormat': bundle.inputData?.[`${keyPrefix}dateTimeFormat`],
            'siteTheme': bundle.inputData?.[`${keyPrefix}siteTheme`],
        }
    },
}
