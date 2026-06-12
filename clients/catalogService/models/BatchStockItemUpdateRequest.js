const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}itemIds`,
                label: `[${labelPrefix}itemIds]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}published`,
                label: `[${labelPrefix}published]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}taxable`,
                label: `[${labelPrefix}taxable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}addTaxPolicyIds`,
                label: `[${labelPrefix}addTaxPolicyIds]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}removeTaxPolicyIds`,
                label: `[${labelPrefix}removeTaxPolicyIds]`,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'itemIds': bundle.inputData?.[`${keyPrefix}itemIds`],
            'published': bundle.inputData?.[`${keyPrefix}published`],
            'taxable': bundle.inputData?.[`${keyPrefix}taxable`],
            'addTaxPolicyIds': bundle.inputData?.[`${keyPrefix}addTaxPolicyIds`],
            'removeTaxPolicyIds': bundle.inputData?.[`${keyPrefix}removeTaxPolicyIds`],
        }
    },
}
