const CompletionsApi = require('../apis/CompletionsApi');
const FenixAlliancePortalsWebsiteApi = require('../apis/FenixAlliancePortalsWebsiteApi');
const SubscriptionPlansApi = require('../apis/SubscriptionPlansApi');
const SubscriptionsApi = require('../apis/SubscriptionsApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
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
    [SubscriptionPlansApi.createSubscriptionPlanAsync.key]: SubscriptionPlansApi.createSubscriptionPlanAsync,
    [SubscriptionPlansApi.deleteSubscriptionPlanAsync.key]: SubscriptionPlansApi.deleteSubscriptionPlanAsync,
    [SubscriptionPlansApi.getSubscriptionPlanByIdAsync.key]: SubscriptionPlansApi.getSubscriptionPlanByIdAsync,
    [SubscriptionPlansApi.getSubscriptionPlansAsync.key]: SubscriptionPlansApi.getSubscriptionPlansAsync,
    [SubscriptionPlansApi.getSubscriptionPlansCountAsync.key]: SubscriptionPlansApi.getSubscriptionPlansCountAsync,
    [SubscriptionPlansApi.updateSubscriptionPlanAsync.key]: SubscriptionPlansApi.updateSubscriptionPlanAsync,
    [SubscriptionsApi.createSubscriptionAsync.key]: SubscriptionsApi.createSubscriptionAsync,
    [SubscriptionsApi.deleteSubscriptionAsync.key]: SubscriptionsApi.deleteSubscriptionAsync,
    [SubscriptionsApi.getSubscriptionByIdAsync.key]: SubscriptionsApi.getSubscriptionByIdAsync,
    [SubscriptionsApi.getSubscriptionsAsync.key]: SubscriptionsApi.getSubscriptionsAsync,
    [SubscriptionsApi.getSubscriptionsCountAsync.key]: SubscriptionsApi.getSubscriptionsCountAsync,
    [SubscriptionsApi.updateSubscriptionAsync.key]: SubscriptionsApi.updateSubscriptionAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
