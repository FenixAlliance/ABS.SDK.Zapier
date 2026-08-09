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
                key: `${keyPrefix}pageSize`,
                label: `[${labelPrefix}pageSize]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}dateFormat`,
                label: `[${labelPrefix}dateFormat]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyFormat`,
                label: `[${labelPrefix}currencyFormat]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dateTimeFormat`,
                label: `[${labelPrefix}dateTimeFormat]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}siteTheme`,
                label: `[${labelPrefix}siteTheme]`,
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
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'pageSize': bundle.inputData?.[`${keyPrefix}pageSize`],
            'dateFormat': bundle.inputData?.[`${keyPrefix}dateFormat`],
            'currencyFormat': bundle.inputData?.[`${keyPrefix}currencyFormat`],
            'dateTimeFormat': bundle.inputData?.[`${keyPrefix}dateTimeFormat`],
            'siteTheme': bundle.inputData?.[`${keyPrefix}siteTheme`],
        }
    },
}
