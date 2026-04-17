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
                key: `${keyPrefix}ledgerClass`,
                label: `[${labelPrefix}ledgerClass]`,
                type: 'string',
                choices: [
                    'Assets',
                    'Equity',
                    'Gains',
                    'Losses',
                    'Revenue',
                    'Expenses',
                    'Liabilities',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'ledgerClass': bundle.inputData?.[`${keyPrefix}ledgerClass`],
        }
    },
}
