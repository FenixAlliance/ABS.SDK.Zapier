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
                key: `${keyPrefix}read`,
                label: `[${labelPrefix}read]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}conversationId`,
                label: `[${labelPrefix}conversationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}senderSocialProfileId`,
                label: `[${labelPrefix}senderSocialProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}receiverSocialProfileId`,
                label: `[${labelPrefix}receiverSocialProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sentTimestamp`,
                label: `[${labelPrefix}sentTimestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}readTimestamp`,
                label: `[${labelPrefix}readTimestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}receivedTimestamp`,
                label: `[${labelPrefix}receivedTimestamp]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'read': bundle.inputData?.[`${keyPrefix}read`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'conversationId': bundle.inputData?.[`${keyPrefix}conversationId`],
            'senderSocialProfileId': bundle.inputData?.[`${keyPrefix}senderSocialProfileId`],
            'receiverSocialProfileId': bundle.inputData?.[`${keyPrefix}receiverSocialProfileId`],
            'sentTimestamp': bundle.inputData?.[`${keyPrefix}sentTimestamp`],
            'readTimestamp': bundle.inputData?.[`${keyPrefix}readTimestamp`],
            'receivedTimestamp': bundle.inputData?.[`${keyPrefix}receivedTimestamp`],
        }
    },
}
