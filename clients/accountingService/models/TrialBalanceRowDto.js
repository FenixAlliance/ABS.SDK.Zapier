const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}accountId`,
                label: `[${labelPrefix}accountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}normalBalance`,
                label: `[${labelPrefix}normalBalance]`,
                type: 'string',
                choices: [
                    'Debit',
                    'Credit',
                ],
            },
            {
                key: `${keyPrefix}debit`,
                label: `[${labelPrefix}debit]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}credit`,
                label: `[${labelPrefix}credit]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'accountId': bundle.inputData?.[`${keyPrefix}accountId`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'normalBalance': bundle.inputData?.[`${keyPrefix}normalBalance`],
            'debit': bundle.inputData?.[`${keyPrefix}debit`],
            'credit': bundle.inputData?.[`${keyPrefix}credit`],
        }
    },
}
