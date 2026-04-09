const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
                key: `${keyPrefix}idProvider`,
                label: `[${labelPrefix}idProvider]`,
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
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}about`,
                label: `[${labelPrefix}about]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}jobTitle`,
                label: `[${labelPrefix}jobTitle]`,
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
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryId`,
                label: `[${labelPrefix}countryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}stateId`,
                label: `[${labelPrefix}stateId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cityId`,
                label: `[${labelPrefix}cityId]`,
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
                key: `${keyPrefix}webUrl`,
                label: `[${labelPrefix}webUrl]`,
                type: 'string',
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
            'qualifiedName': bundle.inputData?.[`${keyPrefix}qualifiedName`],
            'birthday': bundle.inputData?.[`${keyPrefix}birthday`],
            'firstName': bundle.inputData?.[`${keyPrefix}firstName`],
            'lastName': bundle.inputData?.[`${keyPrefix}lastName`],
            'publicName': bundle.inputData?.[`${keyPrefix}publicName`],
            'idProvider': bundle.inputData?.[`${keyPrefix}idProvider`],
            'gender': bundle.inputData?.[`${keyPrefix}gender`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'about': bundle.inputData?.[`${keyPrefix}about`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'jobTitle': bundle.inputData?.[`${keyPrefix}jobTitle`],
            'timezoneId': bundle.inputData?.[`${keyPrefix}timezoneId`],
            'languageId': bundle.inputData?.[`${keyPrefix}languageId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'stateId': bundle.inputData?.[`${keyPrefix}stateId`],
            'cityId': bundle.inputData?.[`${keyPrefix}cityId`],
            'gitHubUrl': bundle.inputData?.[`${keyPrefix}gitHubUrl`],
            'websiteUrl': bundle.inputData?.[`${keyPrefix}websiteUrl`],
            'twitterUrl': bundle.inputData?.[`${keyPrefix}twitterUrl`],
            'facebookUrl': bundle.inputData?.[`${keyPrefix}facebookUrl`],
            'youTubeUrl': bundle.inputData?.[`${keyPrefix}youTubeUrl`],
            'linkedInUrl': bundle.inputData?.[`${keyPrefix}linkedInUrl`],
            'instagramUrl': bundle.inputData?.[`${keyPrefix}instagramUrl`],
            'webUrl': bundle.inputData?.[`${keyPrefix}webUrl`],
            'availability': bundle.inputData?.[`${keyPrefix}availability`],
        }
    },
}
