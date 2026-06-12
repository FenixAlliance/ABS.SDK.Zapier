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
                key: `${keyPrefix}activitiesCount`,
                label: `[${labelPrefix}activitiesCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'activitiesCount': bundle.inputData?.[`${keyPrefix}activitiesCount`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
        }
    },
}
