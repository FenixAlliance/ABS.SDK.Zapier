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
                key: `${keyPrefix}serviceId`,
                label: `[${labelPrefix}serviceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}serviceLevelId`,
                label: `[${labelPrefix}serviceLevelId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'serviceId': bundle.inputData?.[`${keyPrefix}serviceId`],
            'serviceLevelId': bundle.inputData?.[`${keyPrefix}serviceLevelId`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
        }
    },
}
