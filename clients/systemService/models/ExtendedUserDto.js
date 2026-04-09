const utils = require('../utils/utils');
const CartDto = require('../models/CartDto');
const SocialProfileDto = require('../models/SocialProfileDto');
const UserSettingsDto = require('../models/UserSettingsDto');
const WalletDto = require('../models/WalletDto');

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
                key: `${keyPrefix}fullName`,
                label: `[${labelPrefix}fullName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}qualifiedName`,
                label: `[${labelPrefix}qualifiedName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}publicName`,
                label: `[${labelPrefix}publicName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}handler`,
                label: `[${labelPrefix}handler]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastName`,
                label: `[${labelPrefix}lastName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}firstName`,
                label: `[${labelPrefix}firstName]`,
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
                key: `${keyPrefix}facebookUrl`,
                label: `[${labelPrefix}facebookUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}instagramUrl`,
                label: `[${labelPrefix}instagramUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileId`,
                label: `[${labelPrefix}socialProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}birthday`,
                label: `[${labelPrefix}birthday]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}idProvider`,
                label: `[${labelPrefix}idProvider]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}languageId`,
                label: `[${labelPrefix}languageId]`,
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
                key: `${keyPrefix}jobTitle`,
                label: `[${labelPrefix}jobTitle]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialFeedId`,
                label: `[${labelPrefix}socialFeedId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currentTenantId`,
                label: `[${labelPrefix}currentTenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currentEnrollmentId`,
                label: `[${labelPrefix}currentEnrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cartId`,
                label: `[${labelPrefix}cartId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}walletId`,
                label: `[${labelPrefix}walletId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}userName`,
                label: `[${labelPrefix}userName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}phoneNumber`,
                label: `[${labelPrefix}phoneNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}publicIdentifier`,
                label: `[${labelPrefix}publicIdentifier]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}identityProvider`,
                label: `[${labelPrefix}identityProvider]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}phoneNumberConfirmed`,
                label: `[${labelPrefix}phoneNumberConfirmed]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}emailConfirmed`,
                label: `[${labelPrefix}emailConfirmed]`,
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
            {
                key: `${keyPrefix}lockoutEnabled`,
                label: `[${labelPrefix}lockoutEnabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}lockoutEnd`,
                label: `[${labelPrefix}lockoutEnd]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentsCount`,
                label: `[${labelPrefix}enrollmentsCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}siteTheme`,
                label: `[${labelPrefix}siteTheme]`,
                type: 'string',
                choices: [
                    'System',
                    'Light',
                    'Dark',
                ],
            },
            ...CartDto.fields(`${keyPrefix}cart`, isInput),
            ...WalletDto.fields(`${keyPrefix}wallet`, isInput),
            ...SocialProfileDto.fields(`${keyPrefix}socialProfile`, isInput),
            ...UserSettingsDto.fields(`${keyPrefix}settings`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'fullName': bundle.inputData?.[`${keyPrefix}fullName`],
            'qualifiedName': bundle.inputData?.[`${keyPrefix}qualifiedName`],
            'publicName': bundle.inputData?.[`${keyPrefix}publicName`],
            'handler': bundle.inputData?.[`${keyPrefix}handler`],
            'lastName': bundle.inputData?.[`${keyPrefix}lastName`],
            'firstName': bundle.inputData?.[`${keyPrefix}firstName`],
            'coverUrl': bundle.inputData?.[`${keyPrefix}coverUrl`],
            'avatarUrl': bundle.inputData?.[`${keyPrefix}avatarUrl`],
            'gitHubUrl': bundle.inputData?.[`${keyPrefix}gitHubUrl`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'timezoneId': bundle.inputData?.[`${keyPrefix}timezoneId`],
            'websiteUrl': bundle.inputData?.[`${keyPrefix}websiteUrl`],
            'twitterUrl': bundle.inputData?.[`${keyPrefix}twitterUrl`],
            'youTubeUrl': bundle.inputData?.[`${keyPrefix}youTubeUrl`],
            'linkedInUrl': bundle.inputData?.[`${keyPrefix}linkedInUrl`],
            'facebookUrl': bundle.inputData?.[`${keyPrefix}facebookUrl`],
            'instagramUrl': bundle.inputData?.[`${keyPrefix}instagramUrl`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
            'birthday': bundle.inputData?.[`${keyPrefix}birthday`],
            'idProvider': bundle.inputData?.[`${keyPrefix}idProvider`],
            'languageId': bundle.inputData?.[`${keyPrefix}languageId`],
            'gender': bundle.inputData?.[`${keyPrefix}gender`],
            'cityId': bundle.inputData?.[`${keyPrefix}cityId`],
            'stateId': bundle.inputData?.[`${keyPrefix}stateId`],
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'about': bundle.inputData?.[`${keyPrefix}about`],
            'jobTitle': bundle.inputData?.[`${keyPrefix}jobTitle`],
            'socialFeedId': bundle.inputData?.[`${keyPrefix}socialFeedId`],
            'currentTenantId': bundle.inputData?.[`${keyPrefix}currentTenantId`],
            'currentEnrollmentId': bundle.inputData?.[`${keyPrefix}currentEnrollmentId`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'cartId': bundle.inputData?.[`${keyPrefix}cartId`],
            'walletId': bundle.inputData?.[`${keyPrefix}walletId`],
            'userName': bundle.inputData?.[`${keyPrefix}userName`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'phoneNumber': bundle.inputData?.[`${keyPrefix}phoneNumber`],
            'publicIdentifier': bundle.inputData?.[`${keyPrefix}publicIdentifier`],
            'identityProvider': bundle.inputData?.[`${keyPrefix}identityProvider`],
            'phoneNumberConfirmed': bundle.inputData?.[`${keyPrefix}phoneNumberConfirmed`],
            'emailConfirmed': bundle.inputData?.[`${keyPrefix}emailConfirmed`],
            'availability': bundle.inputData?.[`${keyPrefix}availability`],
            'lockoutEnabled': bundle.inputData?.[`${keyPrefix}lockoutEnabled`],
            'lockoutEnd': bundle.inputData?.[`${keyPrefix}lockoutEnd`],
            'enrollmentsCount': bundle.inputData?.[`${keyPrefix}enrollmentsCount`],
            'siteTheme': bundle.inputData?.[`${keyPrefix}siteTheme`],
            'cart': utils.removeIfEmpty(CartDto.mapping(bundle, `${keyPrefix}cart`)),
            'wallet': utils.removeIfEmpty(WalletDto.mapping(bundle, `${keyPrefix}wallet`)),
            'socialProfile': utils.removeIfEmpty(SocialProfileDto.mapping(bundle, `${keyPrefix}socialProfile`)),
            'settings': utils.removeIfEmpty(UserSettingsDto.mapping(bundle, `${keyPrefix}settings`)),
        }
    },
}
