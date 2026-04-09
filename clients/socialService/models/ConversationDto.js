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
                key: `${keyPrefix}subject`,
                label: `[${labelPrefix}subject]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileId`,
                label: `[${labelPrefix}socialProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}startedTimestamp`,
                label: `[${labelPrefix}startedTimestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastMessageTimestamp`,
                label: `[${labelPrefix}lastMessageTimestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastMessage`,
                label: `[${labelPrefix}lastMessage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileName`,
                label: `[${labelPrefix}socialProfileName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileAvatarUrl`,
                label: `[${labelPrefix}socialProfileAvatarUrl]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'subject': bundle.inputData?.[`${keyPrefix}subject`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
            'startedTimestamp': bundle.inputData?.[`${keyPrefix}startedTimestamp`],
            'lastMessageTimestamp': bundle.inputData?.[`${keyPrefix}lastMessageTimestamp`],
            'lastMessage': bundle.inputData?.[`${keyPrefix}lastMessage`],
            'socialProfileName': bundle.inputData?.[`${keyPrefix}socialProfileName`],
            'socialProfileAvatarUrl': bundle.inputData?.[`${keyPrefix}socialProfileAvatarUrl`],
        }
    },
}
