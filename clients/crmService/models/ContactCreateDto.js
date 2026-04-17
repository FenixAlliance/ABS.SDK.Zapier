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
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                required: true,
                type: 'string',
                choices: [
                    'Individual',
                    'Organization',
                ],
            },
            {
                key: `${keyPrefix}firstName`,
                label: `[${labelPrefix}firstName]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastName`,
                label: `[${labelPrefix}lastName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxId`,
                label: `[${labelPrefix}taxId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}primaryContactId`,
                label: `[${labelPrefix}primaryContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}qualifiedName`,
                label: `[${labelPrefix}qualifiedName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}about`,
                label: `[${labelPrefix}about]`,
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
                key: `${keyPrefix}mobilePhone`,
                label: `[${labelPrefix}mobilePhone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessPhone`,
                label: `[${labelPrefix}businessPhone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}postalCode`,
                label: `[${labelPrefix}postalCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}duns`,
                label: `[${labelPrefix}duns]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}jobTitle`,
                label: `[${labelPrefix}jobTitle]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}webUrl`,
                label: `[${labelPrefix}webUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
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
                key: `${keyPrefix}birthday`,
                label: `[${labelPrefix}birthday]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}streetLine1`,
                label: `[${labelPrefix}streetLine1]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}streetLine2`,
                label: `[${labelPrefix}streetLine2]`,
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
            {
                key: `${keyPrefix}instagramUsername`,
                label: `[${labelPrefix}instagramUsername]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tikTokUsername`,
                label: `[${labelPrefix}tikTokUsername]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}stackExchangeUrl`,
                label: `[${labelPrefix}stackExchangeUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}stackOverflowUrl`,
                label: `[${labelPrefix}stackOverflowUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentContactId`,
                label: `[${labelPrefix}parentContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}faxNumber`,
                label: `[${labelPrefix}faxNumber]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'firstName': bundle.inputData?.[`${keyPrefix}firstName`],
            'lastName': bundle.inputData?.[`${keyPrefix}lastName`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'taxId': bundle.inputData?.[`${keyPrefix}taxId`],
            'primaryContactId': bundle.inputData?.[`${keyPrefix}primaryContactId`],
            'qualifiedName': bundle.inputData?.[`${keyPrefix}qualifiedName`],
            'about': bundle.inputData?.[`${keyPrefix}about`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'stateId': bundle.inputData?.[`${keyPrefix}stateId`],
            'cityId': bundle.inputData?.[`${keyPrefix}cityId`],
            'mobilePhone': bundle.inputData?.[`${keyPrefix}mobilePhone`],
            'businessPhone': bundle.inputData?.[`${keyPrefix}businessPhone`],
            'postalCode': bundle.inputData?.[`${keyPrefix}postalCode`],
            'duns': bundle.inputData?.[`${keyPrefix}duns`],
            'jobTitle': bundle.inputData?.[`${keyPrefix}jobTitle`],
            'webUrl': bundle.inputData?.[`${keyPrefix}webUrl`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'languageId': bundle.inputData?.[`${keyPrefix}languageId`],
            'timezoneId': bundle.inputData?.[`${keyPrefix}timezoneId`],
            'birthday': bundle.inputData?.[`${keyPrefix}birthday`],
            'streetLine1': bundle.inputData?.[`${keyPrefix}streetLine1`],
            'streetLine2': bundle.inputData?.[`${keyPrefix}streetLine2`],
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
            'instagramUsername': bundle.inputData?.[`${keyPrefix}instagramUsername`],
            'tikTokUsername': bundle.inputData?.[`${keyPrefix}tikTokUsername`],
            'stackExchangeUrl': bundle.inputData?.[`${keyPrefix}stackExchangeUrl`],
            'stackOverflowUrl': bundle.inputData?.[`${keyPrefix}stackOverflowUrl`],
            'parentContactId': bundle.inputData?.[`${keyPrefix}parentContactId`],
            'faxNumber': bundle.inputData?.[`${keyPrefix}faxNumber`],
        }
    },
}
