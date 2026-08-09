const utils = require('../utils/utils');
const SocialPostAttachmentRefDto = require('../models/SocialPostAttachmentRefDto');
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
                key: `${keyPrefix}backgroundStyle`,
                label: `[${labelPrefix}backgroundStyle]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialFeedId`,
                label: `[${labelPrefix}socialFeedId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}facepile`,
                label: `[${labelPrefix}facepile]`,
                children: SocialPostReactionFacepileDto.fields(`${keyPrefix}facepile${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}attachments`,
                label: `[${labelPrefix}attachments]`,
                children: SocialPostAttachmentRefDto.fields(`${keyPrefix}attachments${!isInput ? '[]' : ''}`, isInput, true), 
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
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
            'socialProfileName': bundle.inputData?.[`${keyPrefix}socialProfileName`],
            'socialProfileAvatarUrl': bundle.inputData?.[`${keyPrefix}socialProfileAvatarUrl`],
            'commentsCount': bundle.inputData?.[`${keyPrefix}commentsCount`],
            'reactionsCount': bundle.inputData?.[`${keyPrefix}reactionsCount`],
            'socialProfileType': bundle.inputData?.[`${keyPrefix}socialProfileType`],
            'bodyHtml': bundle.inputData?.[`${keyPrefix}bodyHtml`],
            'bodyFormat': bundle.inputData?.[`${keyPrefix}bodyFormat`],
            'backgroundStyle': bundle.inputData?.[`${keyPrefix}backgroundStyle`],
            'socialFeedId': bundle.inputData?.[`${keyPrefix}socialFeedId`],
            'facepile': utils.childMapping(bundle.inputData?.[`${keyPrefix}facepile`], `${keyPrefix}facepile`, SocialPostReactionFacepileDto),
            'attachments': utils.childMapping(bundle.inputData?.[`${keyPrefix}attachments`], `${keyPrefix}attachments`, SocialPostAttachmentRefDto),
            'myReaction': bundle.inputData?.[`${keyPrefix}myReaction`],
            'myReactionId': bundle.inputData?.[`${keyPrefix}myReactionId`],
        }
    },
}
