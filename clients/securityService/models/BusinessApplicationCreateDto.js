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
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}namespace`,
                label: `[${labelPrefix}namespace]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}displayName`,
                label: `[${labelPrefix}displayName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}avatarURL`,
                label: `[${labelPrefix}avatarURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}websiteUrl`,
                label: `[${labelPrefix}websiteUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isMultiTenant`,
                label: `[${labelPrefix}isMultiTenant]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isVerified`,
                label: `[${labelPrefix}isVerified]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isDisabled`,
                label: `[${labelPrefix}isDisabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isSinglePageApplication`,
                label: `[${labelPrefix}isSinglePageApplication]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isNativeOrDesktopApp`,
                label: `[${labelPrefix}isNativeOrDesktopApp]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}contactEmail`,
                label: `[${labelPrefix}contactEmail]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}privacyPolicyURL`,
                label: `[${labelPrefix}privacyPolicyURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}termsAndConditionsURL`,
                label: `[${labelPrefix}termsAndConditionsURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}requireHttps`,
                label: `[${labelPrefix}requireHttps]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}requireAppSecret`,
                label: `[${labelPrefix}requireAppSecret]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableClientOauthLogin`,
                label: `[${labelPrefix}enableClientOauthLogin]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableWebOAuthLogin`,
                label: `[${labelPrefix}enableWebOAuthLogin]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableDeviceOAuthLogin`,
                label: `[${labelPrefix}enableDeviceOAuthLogin]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}allowAccessToSuiteSettings`,
                label: `[${labelPrefix}allowAccessToSuiteSettings]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}requireWebOAuthReauthentication`,
                label: `[${labelPrefix}requireWebOAuthReauthentication]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}requireTwoFactorReauthorization`,
                label: `[${labelPrefix}requireTwoFactorReauthorization]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableEmbeddedBrowserOAuthLogin`,
                label: `[${labelPrefix}enableEmbeddedBrowserOAuthLogin]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}useStrictModeForRedirectURIs`,
                label: `[${labelPrefix}useStrictModeForRedirectURIs]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}countryRestricted`,
                label: `[${labelPrefix}countryRestricted]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}spaUIEngine`,
                label: `[${labelPrefix}spaUIEngine]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}spaStaticFilesRootPath`,
                label: `[${labelPrefix}spaStaticFilesRootPath]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}spaRelativeAppPath`,
                label: `[${labelPrefix}spaRelativeAppPath]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}spaNpmStartScript`,
                label: `[${labelPrefix}spaNpmStartScript]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}spaNpmPublishScript`,
                label: `[${labelPrefix}spaNpmPublishScript]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}spaRelativeSourcePath`,
                label: `[${labelPrefix}spaRelativeSourcePath]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}spaRelativeOutputPath`,
                label: `[${labelPrefix}spaRelativeOutputPath]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}useProxyToSpaDevelopmentServer`,
                label: `[${labelPrefix}useProxyToSpaDevelopmentServer]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}spaDevelopmentServerUri`,
                label: `[${labelPrefix}spaDevelopmentServerUri]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enableGitRepoManagement`,
                label: `[${labelPrefix}enableGitRepoManagement]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}gitRepoUrl`,
                label: `[${labelPrefix}gitRepoUrl]`,
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
            'namespace': bundle.inputData?.[`${keyPrefix}namespace`],
            'displayName': bundle.inputData?.[`${keyPrefix}displayName`],
            'avatarURL': bundle.inputData?.[`${keyPrefix}avatarURL`],
            'websiteUrl': bundle.inputData?.[`${keyPrefix}websiteUrl`],
            'isMultiTenant': bundle.inputData?.[`${keyPrefix}isMultiTenant`],
            'isVerified': bundle.inputData?.[`${keyPrefix}isVerified`],
            'isDisabled': bundle.inputData?.[`${keyPrefix}isDisabled`],
            'isSinglePageApplication': bundle.inputData?.[`${keyPrefix}isSinglePageApplication`],
            'isNativeOrDesktopApp': bundle.inputData?.[`${keyPrefix}isNativeOrDesktopApp`],
            'contactEmail': bundle.inputData?.[`${keyPrefix}contactEmail`],
            'privacyPolicyURL': bundle.inputData?.[`${keyPrefix}privacyPolicyURL`],
            'termsAndConditionsURL': bundle.inputData?.[`${keyPrefix}termsAndConditionsURL`],
            'requireHttps': bundle.inputData?.[`${keyPrefix}requireHttps`],
            'requireAppSecret': bundle.inputData?.[`${keyPrefix}requireAppSecret`],
            'enableClientOauthLogin': bundle.inputData?.[`${keyPrefix}enableClientOauthLogin`],
            'enableWebOAuthLogin': bundle.inputData?.[`${keyPrefix}enableWebOAuthLogin`],
            'enableDeviceOAuthLogin': bundle.inputData?.[`${keyPrefix}enableDeviceOAuthLogin`],
            'allowAccessToSuiteSettings': bundle.inputData?.[`${keyPrefix}allowAccessToSuiteSettings`],
            'requireWebOAuthReauthentication': bundle.inputData?.[`${keyPrefix}requireWebOAuthReauthentication`],
            'requireTwoFactorReauthorization': bundle.inputData?.[`${keyPrefix}requireTwoFactorReauthorization`],
            'enableEmbeddedBrowserOAuthLogin': bundle.inputData?.[`${keyPrefix}enableEmbeddedBrowserOAuthLogin`],
            'useStrictModeForRedirectURIs': bundle.inputData?.[`${keyPrefix}useStrictModeForRedirectURIs`],
            'countryRestricted': bundle.inputData?.[`${keyPrefix}countryRestricted`],
            'spaUIEngine': bundle.inputData?.[`${keyPrefix}spaUIEngine`],
            'spaStaticFilesRootPath': bundle.inputData?.[`${keyPrefix}spaStaticFilesRootPath`],
            'spaRelativeAppPath': bundle.inputData?.[`${keyPrefix}spaRelativeAppPath`],
            'spaNpmStartScript': bundle.inputData?.[`${keyPrefix}spaNpmStartScript`],
            'spaNpmPublishScript': bundle.inputData?.[`${keyPrefix}spaNpmPublishScript`],
            'spaRelativeSourcePath': bundle.inputData?.[`${keyPrefix}spaRelativeSourcePath`],
            'spaRelativeOutputPath': bundle.inputData?.[`${keyPrefix}spaRelativeOutputPath`],
            'useProxyToSpaDevelopmentServer': bundle.inputData?.[`${keyPrefix}useProxyToSpaDevelopmentServer`],
            'spaDevelopmentServerUri': bundle.inputData?.[`${keyPrefix}spaDevelopmentServerUri`],
            'enableGitRepoManagement': bundle.inputData?.[`${keyPrefix}enableGitRepoManagement`],
            'gitRepoUrl': bundle.inputData?.[`${keyPrefix}gitRepoUrl`],
        }
    },
}
