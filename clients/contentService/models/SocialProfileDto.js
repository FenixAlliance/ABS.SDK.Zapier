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
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}about`,
                label: `[${labelPrefix}about]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cover`,
                label: `[${labelPrefix}cover]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}avatar`,
                label: `[${labelPrefix}avatar]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryId`,
                label: `[${labelPrefix}countryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryName`,
                label: `[${labelPrefix}countryName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}identityId`,
                label: `[${labelPrefix}identityId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}followsCount`,
                label: `[${labelPrefix}followsCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}messagesCount`,
                label: `[${labelPrefix}messagesCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}followersCount`,
                label: `[${labelPrefix}followersCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}notificationsCount`,
                label: `[${labelPrefix}notificationsCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}unreadNotificationsCount`,
                label: `[${labelPrefix}unreadNotificationsCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}unreadMessagesCount`,
                label: `[${labelPrefix}unreadMessagesCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
                choices: [
                    'User',
                    'Tenant',
                    'Contact',
                ],
            },
            {
                key: `${keyPrefix}socialFeedId`,
                label: `[${labelPrefix}socialFeedId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}twitterUrl`,
                label: `[${labelPrefix}twitterUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}facebookURL`,
                label: `[${labelPrefix}facebookURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}linkedInURL`,
                label: `[${labelPrefix}linkedInURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}youtubeURL`,
                label: `[${labelPrefix}youtubeURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}githubURL`,
                label: `[${labelPrefix}githubURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}pinterestURL`,
                label: `[${labelPrefix}pinterestURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dribbleURL`,
                label: `[${labelPrefix}dribbleURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}domain`,
                label: `[${labelPrefix}domain]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'about': bundle.inputData?.[`${keyPrefix}about`],
            'cover': bundle.inputData?.[`${keyPrefix}cover`],
            'avatar': bundle.inputData?.[`${keyPrefix}avatar`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'countryName': bundle.inputData?.[`${keyPrefix}countryName`],
            'identityId': bundle.inputData?.[`${keyPrefix}identityId`],
            'followsCount': bundle.inputData?.[`${keyPrefix}followsCount`],
            'messagesCount': bundle.inputData?.[`${keyPrefix}messagesCount`],
            'followersCount': bundle.inputData?.[`${keyPrefix}followersCount`],
            'notificationsCount': bundle.inputData?.[`${keyPrefix}notificationsCount`],
            'unreadNotificationsCount': bundle.inputData?.[`${keyPrefix}unreadNotificationsCount`],
            'unreadMessagesCount': bundle.inputData?.[`${keyPrefix}unreadMessagesCount`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'socialFeedId': bundle.inputData?.[`${keyPrefix}socialFeedId`],
            'twitterUrl': bundle.inputData?.[`${keyPrefix}twitterUrl`],
            'facebookURL': bundle.inputData?.[`${keyPrefix}facebookURL`],
            'linkedInURL': bundle.inputData?.[`${keyPrefix}linkedInURL`],
            'youtubeURL': bundle.inputData?.[`${keyPrefix}youtubeURL`],
            'githubURL': bundle.inputData?.[`${keyPrefix}githubURL`],
            'pinterestURL': bundle.inputData?.[`${keyPrefix}pinterestURL`],
            'dribbleURL': bundle.inputData?.[`${keyPrefix}dribbleURL`],
            'domain': bundle.inputData?.[`${keyPrefix}domain`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
        }
    },
}
