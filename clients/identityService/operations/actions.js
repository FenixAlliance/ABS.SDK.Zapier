const ApplicationsApi = require('../apis/ApplicationsApi');
const CheckerApi = require('../apis/CheckerApi');
const FenixAllianceABPWebApi = require('../apis/FenixAllianceABPWebApi');
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
    [FenixAllianceABPWebApi.forgotPasswordPost.key]: FenixAllianceABPWebApi.forgotPasswordPost,
    [FenixAllianceABPWebApi.healthGet.key]: FenixAllianceABPWebApi.healthGet,
    [FenixAllianceABPWebApi.helloGet.key]: FenixAllianceABPWebApi.helloGet,
    [FenixAllianceABPWebApi.loginPost.key]: FenixAllianceABPWebApi.loginPost,
    [FenixAllianceABPWebApi.manage2faPost.key]: FenixAllianceABPWebApi.manage2faPost,
    [FenixAllianceABPWebApi.manageInfoGet.key]: FenixAllianceABPWebApi.manageInfoGet,
    [FenixAllianceABPWebApi.manageInfoPost.key]: FenixAllianceABPWebApi.manageInfoPost,
    [FenixAllianceABPWebApi.mapIdentityApi/confirmEmail.key]: FenixAllianceABPWebApi.mapIdentityApi/confirmEmail,
    [FenixAllianceABPWebApi.refreshPost.key]: FenixAllianceABPWebApi.refreshPost,
    [FenixAllianceABPWebApi.registerPost.key]: FenixAllianceABPWebApi.registerPost,
    [FenixAllianceABPWebApi.resendConfirmationEmailPost.key]: FenixAllianceABPWebApi.resendConfirmationEmailPost,
    [FenixAllianceABPWebApi.resetPasswordPost.key]: FenixAllianceABPWebApi.resetPasswordPost,
    [FenixAllianceABPWebApi.versionGet.key]: FenixAllianceABPWebApi.versionGet,
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
