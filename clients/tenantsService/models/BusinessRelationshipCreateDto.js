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
                key: `${keyPrefix}childTenantId`,
                label: `[${labelPrefix}childTenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ownershipPercentage`,
                label: `[${labelPrefix}ownershipPercentage]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'childTenantId': bundle.inputData?.[`${keyPrefix}childTenantId`],
            'ownershipPercentage': bundle.inputData?.[`${keyPrefix}ownershipPercentage`],
        }
    },
}
