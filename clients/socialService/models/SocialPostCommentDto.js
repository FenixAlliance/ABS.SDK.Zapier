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
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentCommentId`,
                label: `[${labelPrefix}parentCommentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileId`,
                label: `[${labelPrefix}socialProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialFeedPostId`,
                label: `[${labelPrefix}socialFeedPostId]`,
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
            {
                key: `${keyPrefix}socialPostId`,
                label: `[${labelPrefix}socialPostId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'parentCommentId': bundle.inputData?.[`${keyPrefix}parentCommentId`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
            'socialFeedPostId': bundle.inputData?.[`${keyPrefix}socialFeedPostId`],
            'socialProfileName': bundle.inputData?.[`${keyPrefix}socialProfileName`],
            'socialProfileAvatarUrl': bundle.inputData?.[`${keyPrefix}socialProfileAvatarUrl`],
            'socialPostId': bundle.inputData?.[`${keyPrefix}socialPostId`],
        }
    },
}
