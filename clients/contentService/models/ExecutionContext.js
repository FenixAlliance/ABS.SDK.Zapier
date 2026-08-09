const utils = require('../utils/utils');
const AuthResult = require('../models/AuthResult');
const CartDto = require('../models/CartDto');
const CountryDto = require('../models/CountryDto');
const CrmContext = require('../models/CrmContext');
const CurrencyDto = require('../models/CurrencyDto');
const ExtendedInviteDto = require('../models/ExtendedInviteDto');
const ExtendedTenantDto = require('../models/ExtendedTenantDto');
const ExtendedTenantEnrollmentDto = require('../models/ExtendedTenantEnrollmentDto');
const ExtendedUserDto = require('../models/ExtendedUserDto');
const ForexRatesDto = require('../models/ForexRatesDto');
const Money = require('../models/Money');
const SuiteLicenseFeatureDto = require('../models/SuiteLicenseFeatureDto');
const TenantDto = require('../models/TenantDto');
const TenantEnrollmentDto = require('../models/TenantEnrollmentDto');
const WebPortalDto = require('../models/WebPortalDto');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}isAuthenticated`,
                label: `[${labelPrefix}isAuthenticated]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}currentCartId`,
                label: `[${labelPrefix}currentCartId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currentUserId`,
                label: `[${labelPrefix}currentUserId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currentTenantId`,
                label: `[${labelPrefix}currentTenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currentPortalId`,
                label: `[${labelPrefix}currentPortalId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currentEnrollmentId`,
                label: `[${labelPrefix}currentEnrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}pageSize`,
                label: `[${labelPrefix}pageSize]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}dateFormat`,
                label: `[${labelPrefix}dateFormat]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyFormat`,
                label: `[${labelPrefix}currencyFormat]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dateTimeFormat`,
                label: `[${labelPrefix}dateTimeFormat]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}toDateDataSummaries`,
                label: `[${labelPrefix}toDateDataSummaries]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fromDateDataSummaries`,
                label: `[${labelPrefix}fromDateDataSummaries]`,
                type: 'string',
            },
            ...AuthResult.fields(`${keyPrefix}authorization`, isInput),
            ...ExtendedUserDto.fields(`${keyPrefix}user`, isInput),
            ...ExtendedTenantDto.fields(`${keyPrefix}currentTenant`, isInput),
            ...TenantEnrollmentDto.fields(`${keyPrefix}currentEnrollment`, isInput),
            ...CrmContext.fields(`${keyPrefix}selectedTenantMappings`, isInput),
            ...CrmContext.fields(`${keyPrefix}portalOwnerMappings`, isInput),
            ...CrmContext.fields(`${keyPrefix}rootTenantMappings`, isInput),
            ...CartDto.fields(`${keyPrefix}cart`, isInput),
            ...CurrencyDto.fields(`${keyPrefix}currency`, isInput),
            ...ForexRatesDto.fields(`${keyPrefix}forexRates`, isInput),
            ...Money.fields(`${keyPrefix}exchangeRate`, isInput),
            ...CountryDto.fields(`${keyPrefix}country`, isInput),
            ...TenantDto.fields(`${keyPrefix}rootTenant`, isInput),
            ...WebPortalDto.fields(`${keyPrefix}currentPortal`, isInput),
            {
                key: `${keyPrefix}tenants`,
                label: `[${labelPrefix}tenants]`,
                children: ExtendedTenantDto.fields(`${keyPrefix}tenants${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}enrollments`,
                label: `[${labelPrefix}enrollments]`,
                children: ExtendedTenantEnrollmentDto.fields(`${keyPrefix}enrollments${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}availablePortals`,
                label: `[${labelPrefix}availablePortals]`,
                children: WebPortalDto.fields(`${keyPrefix}availablePortals${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}invitations`,
                label: `[${labelPrefix}invitations]`,
                children: ExtendedInviteDto.fields(`${keyPrefix}invitations${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}grantedPermissions`,
                label: `[${labelPrefix}grantedPermissions]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}accessibleFeatures`,
                label: `[${labelPrefix}accessibleFeatures]`,
                children: SuiteLicenseFeatureDto.fields(`${keyPrefix}accessibleFeatures${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}cultureName`,
                label: `[${labelPrefix}cultureName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timezoneId`,
                label: `[${labelPrefix}timezoneId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'isAuthenticated': bundle.inputData?.[`${keyPrefix}isAuthenticated`],
            'currentCartId': bundle.inputData?.[`${keyPrefix}currentCartId`],
            'currentUserId': bundle.inputData?.[`${keyPrefix}currentUserId`],
            'currentTenantId': bundle.inputData?.[`${keyPrefix}currentTenantId`],
            'currentPortalId': bundle.inputData?.[`${keyPrefix}currentPortalId`],
            'currentEnrollmentId': bundle.inputData?.[`${keyPrefix}currentEnrollmentId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'pageSize': bundle.inputData?.[`${keyPrefix}pageSize`],
            'dateFormat': bundle.inputData?.[`${keyPrefix}dateFormat`],
            'currencyFormat': bundle.inputData?.[`${keyPrefix}currencyFormat`],
            'dateTimeFormat': bundle.inputData?.[`${keyPrefix}dateTimeFormat`],
            'toDateDataSummaries': bundle.inputData?.[`${keyPrefix}toDateDataSummaries`],
            'fromDateDataSummaries': bundle.inputData?.[`${keyPrefix}fromDateDataSummaries`],
            'authorization': utils.removeIfEmpty(AuthResult.mapping(bundle, `${keyPrefix}authorization`)),
            'user': utils.removeIfEmpty(ExtendedUserDto.mapping(bundle, `${keyPrefix}user`)),
            'currentTenant': utils.removeIfEmpty(ExtendedTenantDto.mapping(bundle, `${keyPrefix}currentTenant`)),
            'currentEnrollment': utils.removeIfEmpty(TenantEnrollmentDto.mapping(bundle, `${keyPrefix}currentEnrollment`)),
            'selectedTenantMappings': utils.removeIfEmpty(CrmContext.mapping(bundle, `${keyPrefix}selectedTenantMappings`)),
            'portalOwnerMappings': utils.removeIfEmpty(CrmContext.mapping(bundle, `${keyPrefix}portalOwnerMappings`)),
            'rootTenantMappings': utils.removeIfEmpty(CrmContext.mapping(bundle, `${keyPrefix}rootTenantMappings`)),
            'cart': utils.removeIfEmpty(CartDto.mapping(bundle, `${keyPrefix}cart`)),
            'currency': utils.removeIfEmpty(CurrencyDto.mapping(bundle, `${keyPrefix}currency`)),
            'forexRates': utils.removeIfEmpty(ForexRatesDto.mapping(bundle, `${keyPrefix}forexRates`)),
            'exchangeRate': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}exchangeRate`)),
            'country': utils.removeIfEmpty(CountryDto.mapping(bundle, `${keyPrefix}country`)),
            'rootTenant': utils.removeIfEmpty(TenantDto.mapping(bundle, `${keyPrefix}rootTenant`)),
            'currentPortal': utils.removeIfEmpty(WebPortalDto.mapping(bundle, `${keyPrefix}currentPortal`)),
            'tenants': utils.childMapping(bundle.inputData?.[`${keyPrefix}tenants`], `${keyPrefix}tenants`, ExtendedTenantDto),
            'enrollments': utils.childMapping(bundle.inputData?.[`${keyPrefix}enrollments`], `${keyPrefix}enrollments`, ExtendedTenantEnrollmentDto),
            'availablePortals': utils.childMapping(bundle.inputData?.[`${keyPrefix}availablePortals`], `${keyPrefix}availablePortals`, WebPortalDto),
            'invitations': utils.childMapping(bundle.inputData?.[`${keyPrefix}invitations`], `${keyPrefix}invitations`, ExtendedInviteDto),
            'grantedPermissions': bundle.inputData?.[`${keyPrefix}grantedPermissions`],
            'accessibleFeatures': utils.childMapping(bundle.inputData?.[`${keyPrefix}accessibleFeatures`], `${keyPrefix}accessibleFeatures`, SuiteLicenseFeatureDto),
            'cultureName': bundle.inputData?.[`${keyPrefix}cultureName`],
            'timezoneId': bundle.inputData?.[`${keyPrefix}timezoneId`],
        }
    },
}
