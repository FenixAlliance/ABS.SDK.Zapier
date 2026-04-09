const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}newValue`,
                label: `[${labelPrefix}newValue]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}reason`,
                label: `[${labelPrefix}reason]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}amendmentDate`,
                label: `[${labelPrefix}amendmentDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}approvedBy`,
                label: `[${labelPrefix}approvedBy]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}approvalDate`,
                label: `[${labelPrefix}approvalDate]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'newValue': bundle.inputData?.[`${keyPrefix}newValue`],
            'reason': bundle.inputData?.[`${keyPrefix}reason`],
            'amendmentDate': bundle.inputData?.[`${keyPrefix}amendmentDate`],
            'approvedBy': bundle.inputData?.[`${keyPrefix}approvedBy`],
            'approvalDate': bundle.inputData?.[`${keyPrefix}approvalDate`],
        }
    },
}
