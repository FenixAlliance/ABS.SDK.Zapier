const ApplicationsApi = require('../apis/ApplicationsApi');
const CheckerApi = require('../apis/CheckerApi');
const CompletionsApi = require('../apis/CompletionsApi');
const FenixAlliancePortalsWebsiteApi = require('../apis/FenixAlliancePortalsWebsiteApi');
const OAuthApi = require('../apis/OAuthApi');
const ResourceApi = require('../apis/ResourceApi');
const UserInfoApi = require('../apis/UserInfoApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [ApplicationsApi.getApplication.key]: ApplicationsApi.getApplication,
    [ApplicationsApi.getGrantedEnrollmentPermissions.key]: ApplicationsApi.getGrantedEnrollmentPermissions,
    [ApplicationsApi.getGrantedTenantPermissions.key]: ApplicationsApi.getGrantedTenantPermissions,
    [ApplicationsApi.getGrantedTenantRoles.key]: ApplicationsApi.getGrantedTenantRoles,
    [ApplicationsApi.getRequiredPermissions.key]: ApplicationsApi.getRequiredPermissions,
    [CheckerApi.isAuthenticated.key]: CheckerApi.isAuthenticated,
    [CompletionsApi.apiV2AiServiceCompletionsCompleteGet.key]: CompletionsApi.apiV2AiServiceCompletionsCompleteGet,
    [FenixAlliancePortalsWebsiteApi.accountLogoutPost.key]: FenixAlliancePortalsWebsiteApi.accountLogoutPost,
    [FenixAlliancePortalsWebsiteApi.accountManageDownloadPersonalDataPost.key]: FenixAlliancePortalsWebsiteApi.accountManageDownloadPersonalDataPost,
    [FenixAlliancePortalsWebsiteApi.accountManageLinkExternalLoginPost.key]: FenixAlliancePortalsWebsiteApi.accountManageLinkExternalLoginPost,
    [FenixAlliancePortalsWebsiteApi.accountPerformExternalLoginPost.key]: FenixAlliancePortalsWebsiteApi.accountPerformExternalLoginPost,
    [FenixAlliancePortalsWebsiteApi.forgotPasswordPost.key]: FenixAlliancePortalsWebsiteApi.forgotPasswordPost,
    [FenixAlliancePortalsWebsiteApi.healthGet.key]: FenixAlliancePortalsWebsiteApi.healthGet,
    [FenixAlliancePortalsWebsiteApi.helloGet.key]: FenixAlliancePortalsWebsiteApi.helloGet,
    [FenixAlliancePortalsWebsiteApi.loginPost.key]: FenixAlliancePortalsWebsiteApi.loginPost,
    [FenixAlliancePortalsWebsiteApi.manage2faPost.key]: FenixAlliancePortalsWebsiteApi.manage2faPost,
    [FenixAlliancePortalsWebsiteApi.manageInfoGet.key]: FenixAlliancePortalsWebsiteApi.manageInfoGet,
    [FenixAlliancePortalsWebsiteApi.manageInfoPost.key]: FenixAlliancePortalsWebsiteApi.manageInfoPost,
    [FenixAlliancePortalsWebsiteApi.mapIdentityApi/confirmEmail.key]: FenixAlliancePortalsWebsiteApi.mapIdentityApi/confirmEmail,
    [FenixAlliancePortalsWebsiteApi.refreshPost.key]: FenixAlliancePortalsWebsiteApi.refreshPost,
    [FenixAlliancePortalsWebsiteApi.registerPost.key]: FenixAlliancePortalsWebsiteApi.registerPost,
    [FenixAlliancePortalsWebsiteApi.resendConfirmationEmailPost.key]: FenixAlliancePortalsWebsiteApi.resendConfirmationEmailPost,
    [FenixAlliancePortalsWebsiteApi.resetPasswordPost.key]: FenixAlliancePortalsWebsiteApi.resetPasswordPost,
    [FenixAlliancePortalsWebsiteApi.versionGet.key]: FenixAlliancePortalsWebsiteApi.versionGet,
    [OAuthApi.checkPasswordSignInAsync.key]: OAuthApi.checkPasswordSignInAsync,
    [OAuthApi.get.key]: OAuthApi.get,
    [OAuthApi.getJwKs.key]: OAuthApi.getJwKs,
    [OAuthApi.getOpenIdConfiguration.key]: OAuthApi.getOpenIdConfiguration,
    [OAuthApi.getPermissions.key]: OAuthApi.getPermissions,
    [OAuthApi.passwordSignInAsync.key]: OAuthApi.passwordSignInAsync,
    [OAuthApi.token.key]: OAuthApi.token,
    [ResourceApi.getMessage.key]: ResourceApi.getMessage,
    [UserInfoApi.connectUserinfoGet.key]: UserInfoApi.connectUserinfoGet,
    [UserInfoApi.connectUserinfoPost.key]: UserInfoApi.connectUserinfoPost,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
