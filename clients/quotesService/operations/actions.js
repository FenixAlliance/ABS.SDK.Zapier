const CompletionsApi = require('../apis/CompletionsApi');
const FenixAlliancePortalsWebsiteApi = require('../apis/FenixAlliancePortalsWebsiteApi');
const QuotesApi = require('../apis/QuotesApi');
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
    [QuotesApi.calculateQuote.key]: QuotesApi.calculateQuote,
    [QuotesApi.calculateQuoteLine.key]: QuotesApi.calculateQuoteLine,
    [QuotesApi.closeQuote.key]: QuotesApi.closeQuote,
    [QuotesApi.createOrderFromQuote.key]: QuotesApi.createOrderFromQuote,
    [QuotesApi.createQuote.key]: QuotesApi.createQuote,
    [QuotesApi.createQuoteLine.key]: QuotesApi.createQuoteLine,
    [QuotesApi.deleteQuote.key]: QuotesApi.deleteQuote,
    [QuotesApi.deleteQuoteLine.key]: QuotesApi.deleteQuoteLine,
    [QuotesApi.getExtendedQuotes.key]: QuotesApi.getExtendedQuotes,
    [QuotesApi.getQuote.key]: QuotesApi.getQuote,
    [QuotesApi.getQuoteLine.key]: QuotesApi.getQuoteLine,
    [QuotesApi.getQuoteLines.key]: QuotesApi.getQuoteLines,
    [QuotesApi.getQuoteLinesCount.key]: QuotesApi.getQuoteLinesCount,
    [QuotesApi.getQuotes.key]: QuotesApi.getQuotes,
    [QuotesApi.getQuotesCount.key]: QuotesApi.getQuotesCount,
    [QuotesApi.previewQuoteEmailTemplate.key]: QuotesApi.previewQuoteEmailTemplate,
    [QuotesApi.quoteLineExists.key]: QuotesApi.quoteLineExists,
    [QuotesApi.reopenQuote.key]: QuotesApi.reopenQuote,
    [QuotesApi.sendQuoteEmail.key]: QuotesApi.sendQuoteEmail,
    [QuotesApi.updateQuote.key]: QuotesApi.updateQuote,
    [QuotesApi.updateQuoteLine.key]: QuotesApi.updateQuoteLine,
    [QuotesApi.upsertQuoteLine.key]: QuotesApi.upsertQuoteLine,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
