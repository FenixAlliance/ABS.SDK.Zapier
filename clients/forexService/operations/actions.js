const ExchangeApi = require('../apis/ExchangeApi');
const ExchangeVApi = require('../apis/ExchangeVApi');
const FenixAllianceABSWebApi = require('../apis/FenixAllianceABSWebApi');
const RatesApi = require('../apis/RatesApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [ExchangeApi.exchangeAmountAsync.key]: ExchangeApi.exchangeAmountAsync,
    [ExchangeApi.exchangeAmountHistoricalAsync.key]: ExchangeApi.exchangeAmountHistoricalAsync,
    [ExchangeVApi.exchangeAmountHistoricalV3Async.key]: ExchangeVApi.exchangeAmountHistoricalV3Async,
    [ExchangeVApi.exchangeAmountV3Async.key]: ExchangeVApi.exchangeAmountV3Async,
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
    [RatesApi.getHistoricalCurrencyRateAsync.key]: RatesApi.getHistoricalCurrencyRateAsync,
    [RatesApi.getHistoricalCurrencyRatesAsync.key]: RatesApi.getHistoricalCurrencyRatesAsync,
    [RatesApi.getLatestCurrencyRateAsync.key]: RatesApi.getLatestCurrencyRateAsync,
    [RatesApi.getLatestCurrencyRatesModelAsync.key]: RatesApi.getLatestCurrencyRatesModelAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
