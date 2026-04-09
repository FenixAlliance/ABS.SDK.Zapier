const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}legalName`,
                label: `[${labelPrefix}legalName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                required: true,
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
                key: `${keyPrefix}about`,
                label: `[${labelPrefix}about]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}slogan`,
                label: `[${labelPrefix}slogan]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}handler`,
                label: `[${labelPrefix}handler]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}duns`,
                label: `[${labelPrefix}duns]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxId`,
                label: `[${labelPrefix}taxId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}avatarUrl`,
                label: `[${labelPrefix}avatarUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}twitterUsername`,
                label: `[${labelPrefix}twitterUsername]`,
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
                key: `${keyPrefix}countryId`,
                label: `[${labelPrefix}countryId]`,
                required: true,
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
                key: `${keyPrefix}stateId`,
                label: `[${labelPrefix}stateId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cityId`,
                label: `[${labelPrefix}cityId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'legalName': bundle.inputData?.[`${keyPrefix}legalName`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'phone': bundle.inputData?.[`${keyPrefix}phone`],
            'webUrl': bundle.inputData?.[`${keyPrefix}webUrl`],
            'about': bundle.inputData?.[`${keyPrefix}about`],
            'slogan': bundle.inputData?.[`${keyPrefix}slogan`],
            'handler': bundle.inputData?.[`${keyPrefix}handler`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'duns': bundle.inputData?.[`${keyPrefix}duns`],
            'taxId': bundle.inputData?.[`${keyPrefix}taxId`],
            'avatarUrl': bundle.inputData?.[`${keyPrefix}avatarUrl`],
            'twitterUsername': bundle.inputData?.[`${keyPrefix}twitterUsername`],
            'facebookUrl': bundle.inputData?.[`${keyPrefix}facebookUrl`],
            'twitterUrl': bundle.inputData?.[`${keyPrefix}twitterUrl`],
            'gitHubUrl': bundle.inputData?.[`${keyPrefix}gitHubUrl`],
            'linkedInUrl': bundle.inputData?.[`${keyPrefix}linkedInUrl`],
            'instagramUrl': bundle.inputData?.[`${keyPrefix}instagramUrl`],
            'youTubeUrl': bundle.inputData?.[`${keyPrefix}youTubeUrl`],
            'whatsAppNumber': bundle.inputData?.[`${keyPrefix}whatsAppNumber`],
            'supportPhoneNumber': bundle.inputData?.[`${keyPrefix}supportPhoneNumber`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'timezoneId': bundle.inputData?.[`${keyPrefix}timezoneId`],
            'languageId': bundle.inputData?.[`${keyPrefix}languageId`],
            'stateId': bundle.inputData?.[`${keyPrefix}stateId`],
            'cityId': bundle.inputData?.[`${keyPrefix}cityId`],
        }
    },
}
