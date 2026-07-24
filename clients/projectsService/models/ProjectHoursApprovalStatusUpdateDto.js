const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}approvalStatus`,
                label: `[${labelPrefix}approvalStatus]`,
                type: 'string',
                choices: [
                    'Pending',
                    'Approved',
                    'Rejected',
                ],
            },
            {
                key: `${keyPrefix}comments`,
                label: `[${labelPrefix}comments]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'approvalStatus': bundle.inputData?.[`${keyPrefix}approvalStatus`],
            'comments': bundle.inputData?.[`${keyPrefix}comments`],
        }
    },
}
