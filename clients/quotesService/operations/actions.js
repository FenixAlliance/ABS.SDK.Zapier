const FenixAllianceABPWebApi = require('../apis/FenixAllianceABPWebApi');
const QuotesApi = require('../apis/QuotesApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
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
