const ActivityFeedsApi = require('../apis/ActivityFeedsApi');
const FenixAllianceABSWebApi = require('../apis/FenixAllianceABSWebApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [ActivityFeedsApi.countActivityTypesAsync.key]: ActivityFeedsApi.countActivityTypesAsync,
    [ActivityFeedsApi.createActivityAsync.key]: ActivityFeedsApi.createActivityAsync,
    [ActivityFeedsApi.createActivityTypeAsync.key]: ActivityFeedsApi.createActivityTypeAsync,
    [ActivityFeedsApi.deleteActivityAsync.key]: ActivityFeedsApi.deleteActivityAsync,
    [ActivityFeedsApi.deleteActivityTypeAsync.key]: ActivityFeedsApi.deleteActivityTypeAsync,
    [ActivityFeedsApi.getActivitiesAsync.key]: ActivityFeedsApi.getActivitiesAsync,
    [ActivityFeedsApi.getActivitiesCountAsync.key]: ActivityFeedsApi.getActivitiesCountAsync,
    [ActivityFeedsApi.getActivityAsync.key]: ActivityFeedsApi.getActivityAsync,
    [ActivityFeedsApi.getActivityFeedAsync.key]: ActivityFeedsApi.getActivityFeedAsync,
    [ActivityFeedsApi.getActivityFeedsAsync.key]: ActivityFeedsApi.getActivityFeedsAsync,
    [ActivityFeedsApi.getActivityFeedsCountAsync.key]: ActivityFeedsApi.getActivityFeedsCountAsync,
    [ActivityFeedsApi.getActivityRecordsCountAsync.key]: ActivityFeedsApi.getActivityRecordsCountAsync,
    [ActivityFeedsApi.getActivityTypeByIdAsync.key]: ActivityFeedsApi.getActivityTypeByIdAsync,
    [ActivityFeedsApi.getActivityTypesAsync.key]: ActivityFeedsApi.getActivityTypesAsync,
    [ActivityFeedsApi.patchActivityAsync.key]: ActivityFeedsApi.patchActivityAsync,
    [ActivityFeedsApi.patchActivityTypeAsync.key]: ActivityFeedsApi.patchActivityTypeAsync,
    [ActivityFeedsApi.updateActivityAsync.key]: ActivityFeedsApi.updateActivityAsync,
    [ActivityFeedsApi.updateActivityTypeAsync.key]: ActivityFeedsApi.updateActivityTypeAsync,
    [FenixAllianceABSWebApi.accountLogoutPost.key]: FenixAllianceABSWebApi.accountLogoutPost,
    [FenixAllianceABSWebApi.accountManageDownloadPersonalDataPost.key]: FenixAllianceABSWebApi.accountManageDownloadPersonalDataPost,
    [FenixAllianceABSWebApi.accountManageLinkExternalLoginPost.key]: FenixAllianceABSWebApi.accountManageLinkExternalLoginPost,
    [FenixAllianceABSWebApi.accountPerformExternalLoginPost.key]: FenixAllianceABSWebApi.accountPerformExternalLoginPost,
    [FenixAllianceABSWebApi.apiV2AIServiceAgentsAgentIdAguiPost.key]: FenixAllianceABSWebApi.apiV2AIServiceAgentsAgentIdAguiPost,
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
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
