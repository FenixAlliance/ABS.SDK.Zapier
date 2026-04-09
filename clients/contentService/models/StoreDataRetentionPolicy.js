const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}dataRetentionTimeSpanAmmount`,
                label: `[${labelPrefix}dataRetentionTimeSpanAmmount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}retentionTimeSpan`,
                label: `[${labelPrefix}retentionTimeSpan]`,
                type: 'string',
                choices: [
                    'Days',
                    'Weeks',
                    'Months',
                    'Years',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'dataRetentionTimeSpanAmmount': bundle.inputData?.[`${keyPrefix}dataRetentionTimeSpanAmmount`],
            'retentionTimeSpan': bundle.inputData?.[`${keyPrefix}retentionTimeSpan`],
        }
    },
}
