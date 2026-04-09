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
                key: `${keyPrefix}birthday`,
                label: `[${labelPrefix}birthday]`,
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
                key: `${keyPrefix}publicName`,
                label: `[${labelPrefix}publicName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}languageId`,
                label: `[${labelPrefix}languageId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timezoneId`,
                label: `[${labelPrefix}timezoneId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryId`,
                label: `[${labelPrefix}countryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cityId`,
                label: `[${labelPrefix}cityId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}stateId`,
                label: `[${labelPrefix}stateId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}about`,
                label: `[${labelPrefix}about]`,
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
                key: `${keyPrefix}gitHubUrl`,
                label: `[${labelPrefix}gitHubUrl]`,
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
                key: `${keyPrefix}socialFeedId`,
                label: `[${labelPrefix}socialFeedId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileId`,
                label: `[${labelPrefix}socialProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}gender`,
                label: `[${labelPrefix}gender]`,
                type: 'string',
                choices: [
                    'Unknown',
                    'Male',
                    'Female',
                    'PreferNotToSay',
                ],
            },
            {
                key: `${keyPrefix}walletId`,
                label: `[${labelPrefix}walletId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}userName`,
                label: `[${labelPrefix}userName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}publicIdentifier`,
                label: `[${labelPrefix}publicIdentifier]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}phoneNumberConfirmed`,
                label: `[${labelPrefix}phoneNumberConfirmed]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}availability`,
                label: `[${labelPrefix}availability]`,
                type: 'string',
                choices: [
                    'DND',
                    'Busy',
                    'Away',
                    'Offline',
                    'Available',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'qualifiedName': bundle.inputData?.[`${keyPrefix}qualifiedName`],
            'birthday': bundle.inputData?.[`${keyPrefix}birthday`],
            'firstName': bundle.inputData?.[`${keyPrefix}firstName`],
            'lastName': bundle.inputData?.[`${keyPrefix}lastName`],
            'publicName': bundle.inputData?.[`${keyPrefix}publicName`],
            'languageId': bundle.inputData?.[`${keyPrefix}languageId`],
            'timezoneId': bundle.inputData?.[`${keyPrefix}timezoneId`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'cityId': bundle.inputData?.[`${keyPrefix}cityId`],
            'stateId': bundle.inputData?.[`${keyPrefix}stateId`],
            'about': bundle.inputData?.[`${keyPrefix}about`],
            'jobTitle': bundle.inputData?.[`${keyPrefix}jobTitle`],
            'coverUrl': bundle.inputData?.[`${keyPrefix}coverUrl`],
            'avatarUrl': bundle.inputData?.[`${keyPrefix}avatarUrl`],
            'gitHubUrl': bundle.inputData?.[`${keyPrefix}gitHubUrl`],
            'websiteUrl': bundle.inputData?.[`${keyPrefix}websiteUrl`],
            'twitterUrl': bundle.inputData?.[`${keyPrefix}twitterUrl`],
            'facebookUrl': bundle.inputData?.[`${keyPrefix}facebookUrl`],
            'youTubeUrl': bundle.inputData?.[`${keyPrefix}youTubeUrl`],
            'linkedInUrl': bundle.inputData?.[`${keyPrefix}linkedInUrl`],
            'instagramUrl': bundle.inputData?.[`${keyPrefix}instagramUrl`],
            'socialFeedId': bundle.inputData?.[`${keyPrefix}socialFeedId`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
            'gender': bundle.inputData?.[`${keyPrefix}gender`],
            'walletId': bundle.inputData?.[`${keyPrefix}walletId`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'userName': bundle.inputData?.[`${keyPrefix}userName`],
            'publicIdentifier': bundle.inputData?.[`${keyPrefix}publicIdentifier`],
            'phoneNumberConfirmed': bundle.inputData?.[`${keyPrefix}phoneNumberConfirmed`],
            'availability': bundle.inputData?.[`${keyPrefix}availability`],
        }
    },
}
