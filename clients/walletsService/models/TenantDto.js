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
                key: `${keyPrefix}taxId`,
                label: `[${labelPrefix}taxId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}about`,
                label: `[${labelPrefix}about]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}walletId`,
                label: `[${labelPrefix}walletId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialFeedId`,
                label: `[${labelPrefix}socialFeedId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessIndustryId`,
                label: `[${labelPrefix}businessIndustryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessSegmentId`,
                label: `[${labelPrefix}businessSegmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileId`,
                label: `[${labelPrefix}socialProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}languageId`,
                label: `[${labelPrefix}languageId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}duns`,
                label: `[${labelPrefix}duns]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}slogan`,
                label: `[${labelPrefix}slogan]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}legalName`,
                label: `[${labelPrefix}legalName]`,
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
                key: `${keyPrefix}cartId`,
                label: `[${labelPrefix}cartId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
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
                key: `${keyPrefix}webUrl`,
                label: `[${labelPrefix}webUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}facebookUrl`,
                label: `[${labelPrefix}facebookUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}twitterUrl`,
                label: `[${labelPrefix}twitterUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}gitHubUrl`,
                label: `[${labelPrefix}gitHubUrl]`,
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
                key: `${keyPrefix}youTubeUrl`,
                label: `[${labelPrefix}youTubeUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}whatsAppNumber`,
                label: `[${labelPrefix}whatsAppNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}supportPhoneNumber`,
                label: `[${labelPrefix}supportPhoneNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}verified`,
                label: `[${labelPrefix}verified]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}businessName`,
                label: `[${labelPrefix}businessName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessLegalName`,
                label: `[${labelPrefix}businessLegalName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}twitterUsername`,
                label: `[${labelPrefix}twitterUsername]`,
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
            'taxId': bundle.inputData?.[`${keyPrefix}taxId`],
            'about': bundle.inputData?.[`${keyPrefix}about`],
            'walletId': bundle.inputData?.[`${keyPrefix}walletId`],
            'socialFeedId': bundle.inputData?.[`${keyPrefix}socialFeedId`],
            'businessIndustryId': bundle.inputData?.[`${keyPrefix}businessIndustryId`],
            'businessSegmentId': bundle.inputData?.[`${keyPrefix}businessSegmentId`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
            'languageId': bundle.inputData?.[`${keyPrefix}languageId`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'duns': bundle.inputData?.[`${keyPrefix}duns`],
            'slogan': bundle.inputData?.[`${keyPrefix}slogan`],
            'legalName': bundle.inputData?.[`${keyPrefix}legalName`],
            'coverUrl': bundle.inputData?.[`${keyPrefix}coverUrl`],
            'avatarUrl': bundle.inputData?.[`${keyPrefix}avatarUrl`],
            'cartId': bundle.inputData?.[`${keyPrefix}cartId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'timezoneId': bundle.inputData?.[`${keyPrefix}timezoneId`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'stateId': bundle.inputData?.[`${keyPrefix}stateId`],
            'cityId': bundle.inputData?.[`${keyPrefix}cityId`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'webUrl': bundle.inputData?.[`${keyPrefix}webUrl`],
            'facebookUrl': bundle.inputData?.[`${keyPrefix}facebookUrl`],
            'twitterUrl': bundle.inputData?.[`${keyPrefix}twitterUrl`],
            'gitHubUrl': bundle.inputData?.[`${keyPrefix}gitHubUrl`],
            'linkedInUrl': bundle.inputData?.[`${keyPrefix}linkedInUrl`],
            'instagramUrl': bundle.inputData?.[`${keyPrefix}instagramUrl`],
            'youTubeUrl': bundle.inputData?.[`${keyPrefix}youTubeUrl`],
            'whatsAppNumber': bundle.inputData?.[`${keyPrefix}whatsAppNumber`],
            'supportPhoneNumber': bundle.inputData?.[`${keyPrefix}supportPhoneNumber`],
            'verified': bundle.inputData?.[`${keyPrefix}verified`],
            'businessName': bundle.inputData?.[`${keyPrefix}businessName`],
            'businessLegalName': bundle.inputData?.[`${keyPrefix}businessLegalName`],
            'twitterUsername': bundle.inputData?.[`${keyPrefix}twitterUsername`],
        }
    },
}
