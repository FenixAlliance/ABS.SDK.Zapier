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
                key: `${keyPrefix}invoiceId`,
                label: `[${labelPrefix}invoiceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxPolicyId`,
                label: `[${labelPrefix}taxPolicyId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'invoiceId': bundle.inputData?.[`${keyPrefix}invoiceId`],
            'taxPolicyId': bundle.inputData?.[`${keyPrefix}taxPolicyId`],
        }
    },
}
