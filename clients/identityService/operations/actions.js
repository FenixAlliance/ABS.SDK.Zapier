const ApplicationsApi = require('../apis/ApplicationsApi');
const CheckerApi = require('../apis/CheckerApi');
const FenixAllianceABSWebApi = require('../apis/FenixAllianceABSWebApi');
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
    [FenixAllianceABSWebApi.accountLogoutPost.key]: FenixAllianceABSWebApi.accountLogoutPost,
    [FenixAllianceABSWebApi.accountManageDownloadPersonalDataPost.key]: FenixAllianceABSWebApi.accountManageDownloadPersonalDataPost,
    [FenixAllianceABSWebApi.accountManageLinkExternalLoginPost.key]: FenixAllianceABSWebApi.accountManageLinkExternalLoginPost,
    [FenixAllianceABSWebApi.accountPerformExternalLoginPost.key]: FenixAllianceABSWebApi.accountPerformExternalLoginPost,
    [FenixAllianceABSWebApi.forgotPasswordPost.key]: FenixAllianceABSWebApi.forgotPasswordPost,
    [FenixAllianceABSWebApi.healthGet.key]: FenixAllianceABSWebApi.healthGet,
    [FenixAllianceABSWebApi.helloGet.key]: FenixAllianceABSWebApi.helloGet,
    [FenixAllianceABSWebApi.loginPost.key]: FenixAllianceABSWebApi.loginPost,
    [FenixAllianceABSWebApi.manage2faPost.key]: FenixAllianceABSWebApi.manage2faPost,
    [FenixAllianceABSWebApi.manageInfoGet.key]: FenixAllianceABSWebApi.manageInfoGet,
    [FenixAllianceABSWebApi.manageInfoPost.key]: FenixAllianceABSWebApi.manageInfoPost,
    [FenixAllianceABSWebApi.mapIdentityApi/confirmEmail.key]: FenixAllianceABSWebApi.mapIdentityApi/confirmEmail,
    [FenixAllianceABSWebApi.refreshPost.key]: FenixAllianceABSWebApi.refreshPost,
    [FenixAllianceABSWebApi.registerPost.key]: FenixAllianceABSWebApi.registerPost,
    [FenixAllianceABSWebApi.resendConfirmationEmailPost.key]: FenixAllianceABSWebApi.resendConfirmationEmailPost,
    [FenixAllianceABSWebApi.resetPasswordPost.key]: FenixAllianceABSWebApi.resetPasswordPost,
    [FenixAllianceABSWebApi.versionGet.key]: FenixAllianceABSWebApi.versionGet,
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
