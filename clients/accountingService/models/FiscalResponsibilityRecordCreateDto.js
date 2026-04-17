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
                key: `${keyPrefix}fiscalResponsibilityId`,
                label: `[${labelPrefix}fiscalResponsibilityId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}billingProfileId`,
                label: `[${labelPrefix}billingProfileId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'fiscalResponsibilityId': bundle.inputData?.[`${keyPrefix}fiscalResponsibilityId`],
            'billingProfileId': bundle.inputData?.[`${keyPrefix}billingProfileId`],
        }
    },
}
