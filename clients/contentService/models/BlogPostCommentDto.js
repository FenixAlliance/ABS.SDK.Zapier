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
                key: `${keyPrefix}blogPostID`,
                label: `[${labelPrefix}blogPostID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ownerSocialProfileID`,
                label: `[${labelPrefix}ownerSocialProfileID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialPostID`,
                label: `[${labelPrefix}socialPostID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentCommentID`,
                label: `[${labelPrefix}parentCommentID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'blogPostID': bundle.inputData?.[`${keyPrefix}blogPostID`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'ownerSocialProfileID': bundle.inputData?.[`${keyPrefix}ownerSocialProfileID`],
            'socialPostID': bundle.inputData?.[`${keyPrefix}socialPostID`],
            'parentCommentID': bundle.inputData?.[`${keyPrefix}parentCommentID`],
        }
    },
}
