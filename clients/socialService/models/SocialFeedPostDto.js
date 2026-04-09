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
                key: `${keyPrefix}socialProfileId`,
                label: `[${labelPrefix}socialProfileId]`,
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
                key: `${keyPrefix}commentsCount`,
                label: `[${labelPrefix}commentsCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}reactionsCount`,
                label: `[${labelPrefix}reactionsCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}socialFeedId`,
                label: `[${labelPrefix}socialFeedId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
            'socialProfileName': bundle.inputData?.[`${keyPrefix}socialProfileName`],
            'socialProfileAvatarUrl': bundle.inputData?.[`${keyPrefix}socialProfileAvatarUrl`],
            'commentsCount': bundle.inputData?.[`${keyPrefix}commentsCount`],
            'reactionsCount': bundle.inputData?.[`${keyPrefix}reactionsCount`],
            'socialFeedId': bundle.inputData?.[`${keyPrefix}socialFeedId`],
        }
    },
}
