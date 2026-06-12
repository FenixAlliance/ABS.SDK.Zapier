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
                key: `${keyPrefix}blogPostId`,
                label: `[${labelPrefix}blogPostId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ownerSocialProfileId`,
                label: `[${labelPrefix}ownerSocialProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialPostId`,
                label: `[${labelPrefix}socialPostId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentCommentId`,
                label: `[${labelPrefix}parentCommentId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'blogPostId': bundle.inputData?.[`${keyPrefix}blogPostId`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'ownerSocialProfileId': bundle.inputData?.[`${keyPrefix}ownerSocialProfileId`],
            'socialPostId': bundle.inputData?.[`${keyPrefix}socialPostId`],
            'parentCommentId': bundle.inputData?.[`${keyPrefix}parentCommentId`],
        }
    },
}
