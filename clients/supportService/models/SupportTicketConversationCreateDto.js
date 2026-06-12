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
                key: `${keyPrefix}topic`,
                label: `[${labelPrefix}topic]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}closed`,
                label: `[${labelPrefix}closed]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}closedTimestamp`,
                label: `[${labelPrefix}closedTimestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileId`,
                label: `[${labelPrefix}socialProfileId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'topic': bundle.inputData?.[`${keyPrefix}topic`],
            'closed': bundle.inputData?.[`${keyPrefix}closed`],
            'closedTimestamp': bundle.inputData?.[`${keyPrefix}closedTimestamp`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
        }
    },
}
