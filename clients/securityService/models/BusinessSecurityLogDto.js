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
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}securityEvent`,
                label: `[${labelPrefix}securityEvent]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}requiresAttention`,
                label: `[${labelPrefix}requiresAttention]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}businessID`,
                label: `[${labelPrefix}businessID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'securityEvent': bundle.inputData?.[`${keyPrefix}securityEvent`],
            'requiresAttention': bundle.inputData?.[`${keyPrefix}requiresAttention`],
            'businessID': bundle.inputData?.[`${keyPrefix}businessID`],
        }
    },
}
