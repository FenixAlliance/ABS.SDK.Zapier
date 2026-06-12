const ActivityFeedsApi = require('../apis/ActivityFeedsApi');
const CompletionsApi = require('../apis/CompletionsApi');
const FenixAlliancePortalsWebsiteApi = require('../apis/FenixAlliancePortalsWebsiteApi');
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
    [ActivityFeedsApi.getActivityTypeByIdAsync.key]: ActivityFeedsApi.getActivityTypeByIdAsync,
    [ActivityFeedsApi.getActivityTypesAsync.key]: ActivityFeedsApi.getActivityTypesAsync,
    [ActivityFeedsApi.patchActivityAsync.key]: ActivityFeedsApi.patchActivityAsync,
    [ActivityFeedsApi.patchActivityTypeAsync.key]: ActivityFeedsApi.patchActivityTypeAsync,
    [ActivityFeedsApi.updateActivityAsync.key]: ActivityFeedsApi.updateActivityAsync,
    [ActivityFeedsApi.updateActivityTypeAsync.key]: ActivityFeedsApi.updateActivityTypeAsync,
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
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
