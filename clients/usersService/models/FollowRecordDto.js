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
                key: `${keyPrefix}followerId`,
                label: `[${labelPrefix}followerId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}followedId`,
                label: `[${labelPrefix}followedId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}alerts`,
                label: `[${labelPrefix}alerts]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'followerId': bundle.inputData?.[`${keyPrefix}followerId`],
            'followedId': bundle.inputData?.[`${keyPrefix}followedId`],
            'alerts': bundle.inputData?.[`${keyPrefix}alerts`],
        }
    },
}
