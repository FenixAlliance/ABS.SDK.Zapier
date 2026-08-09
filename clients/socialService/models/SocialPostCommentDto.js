const utils = require('../utils/utils');
const SocialPostReactionFacepileDto = require('../models/SocialPostReactionFacepileDto');

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
                key: `${keyPrefix}socialProfileType`,
                label: `[${labelPrefix}socialProfileType]`,
                type: 'string',
                choices: [
                    'User',
                    'Tenant',
                    'Contact',
                ],
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
                key: `${keyPrefix}replyCount`,
                label: `[${labelPrefix}replyCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}reactionsCount`,
                label: `[${labelPrefix}reactionsCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}socialPostId`,
                label: `[${labelPrefix}socialPostId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}facepile`,
                label: `[${labelPrefix}facepile]`,
                children: SocialPostReactionFacepileDto.fields(`${keyPrefix}facepile${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}myReaction`,
                label: `[${labelPrefix}myReaction]`,
                type: 'string',
                choices: [
                    'Like',
                    'Happy',
                    'HaHa',
                    'Love',
                    'Sad',
                    'Angry',
                    'Wow',
                    'Afraid',
                ],
            },
            {
                key: `${keyPrefix}myReactionId`,
                label: `[${labelPrefix}myReactionId]`,
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
            'socialProfileType': bundle.inputData?.[`${keyPrefix}socialProfileType`],
            'bodyHtml': bundle.inputData?.[`${keyPrefix}bodyHtml`],
            'bodyFormat': bundle.inputData?.[`${keyPrefix}bodyFormat`],
            'replyCount': bundle.inputData?.[`${keyPrefix}replyCount`],
            'reactionsCount': bundle.inputData?.[`${keyPrefix}reactionsCount`],
            'socialPostId': bundle.inputData?.[`${keyPrefix}socialPostId`],
            'facepile': utils.childMapping(bundle.inputData?.[`${keyPrefix}facepile`], `${keyPrefix}facepile`, SocialPostReactionFacepileDto),
            'myReaction': bundle.inputData?.[`${keyPrefix}myReaction`],
            'myReactionId': bundle.inputData?.[`${keyPrefix}myReactionId`],
        }
    },
}
