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
                key: `${keyPrefix}qualifiedName`,
                label: `[${labelPrefix}qualifiedName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
                choices: [
                    'Individual',
                    'Organization',
                ],
            },
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}phone`,
                label: `[${labelPrefix}phone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}publicName`,
                label: `[${labelPrefix}publicName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}firstName`,
                label: `[${labelPrefix}firstName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastName`,
                label: `[${labelPrefix}lastName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}jobTitle`,
                label: `[${labelPrefix}jobTitle]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}coverUrl`,
                label: `[${labelPrefix}coverUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}avatarUrl`,
                label: `[${labelPrefix}avatarUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryId`,
                label: `[${labelPrefix}countryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timezoneId`,
                label: `[${labelPrefix}timezoneId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}languageId`,
                label: `[${labelPrefix}languageId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileId`,
                label: `[${labelPrefix}socialProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}webUrl`,
                label: `[${labelPrefix}webUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}gitHubUrl`,
                label: `[${labelPrefix}gitHubUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}twitchUrl`,
                label: `[${labelPrefix}twitchUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}redditUrl`,
                label: `[${labelPrefix}redditUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tikTokUrl`,
                label: `[${labelPrefix}tikTokUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}websiteUrl`,
                label: `[${labelPrefix}websiteUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}twitterUrl`,
                label: `[${labelPrefix}twitterUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}facebookUrl`,
                label: `[${labelPrefix}facebookUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}youTubeUrl`,
                label: `[${labelPrefix}youTubeUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}linkedInUrl`,
                label: `[${labelPrefix}linkedInUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}instagramUrl`,
                label: `[${labelPrefix}instagramUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}githubUsername`,
                label: `[${labelPrefix}githubUsername]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'qualifiedName': bundle.inputData?.[`${keyPrefix}qualifiedName`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'publicName': bundle.inputData?.[`${keyPrefix}publicName`],
            'firstName': bundle.inputData?.[`${keyPrefix}firstName`],
            'lastName': bundle.inputData?.[`${keyPrefix}lastName`],
            'jobTitle': bundle.inputData?.[`${keyPrefix}jobTitle`],
            'coverUrl': bundle.inputData?.[`${keyPrefix}coverUrl`],
            'avatarUrl': bundle.inputData?.[`${keyPrefix}avatarUrl`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'timezoneId': bundle.inputData?.[`${keyPrefix}timezoneId`],
            'languageId': bundle.inputData?.[`${keyPrefix}languageId`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
            'webUrl': bundle.inputData?.[`${keyPrefix}webUrl`],
            'gitHubUrl': bundle.inputData?.[`${keyPrefix}gitHubUrl`],
            'twitchUrl': bundle.inputData?.[`${keyPrefix}twitchUrl`],
            'redditUrl': bundle.inputData?.[`${keyPrefix}redditUrl`],
            'tikTokUrl': bundle.inputData?.[`${keyPrefix}tikTokUrl`],
            'websiteUrl': bundle.inputData?.[`${keyPrefix}websiteUrl`],
            'twitterUrl': bundle.inputData?.[`${keyPrefix}twitterUrl`],
            'facebookUrl': bundle.inputData?.[`${keyPrefix}facebookUrl`],
            'youTubeUrl': bundle.inputData?.[`${keyPrefix}youTubeUrl`],
            'linkedInUrl': bundle.inputData?.[`${keyPrefix}linkedInUrl`],
            'instagramUrl': bundle.inputData?.[`${keyPrefix}instagramUrl`],
            'githubUsername': bundle.inputData?.[`${keyPrefix}githubUsername`],
        }
    },
}
