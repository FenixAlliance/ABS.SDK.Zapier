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
                key: `${keyPrefix}bodyHtml`,
                label: `[${labelPrefix}bodyHtml]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bodyFormat`,
                label: `[${labelPrefix}bodyFormat]`,
                type: 'string',
                choices: [
                    'PlainText',
                    'Html',
                ],
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
            'bodyHtml': bundle.inputData?.[`${keyPrefix}bodyHtml`],
            'bodyFormat': bundle.inputData?.[`${keyPrefix}bodyFormat`],
            'parentCommentId': bundle.inputData?.[`${keyPrefix}parentCommentId`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
            'socialFeedPostId': bundle.inputData?.[`${keyPrefix}socialFeedPostId`],
            'socialPostId': bundle.inputData?.[`${keyPrefix}socialPostId`],
        }
    },
}
