const ExchangeApi = require('../apis/ExchangeApi');
const ExchangeVApi = require('../apis/ExchangeVApi');
const FenixAllianceABPWebApi = require('../apis/FenixAllianceABPWebApi');
const RatesApi = require('../apis/RatesApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [ExchangeApi.exchangeAmountAsync.key]: ExchangeApi.exchangeAmountAsync,
    [ExchangeApi.exchangeAmountHistoricalAsync.key]: ExchangeApi.exchangeAmountHistoricalAsync,
    [ExchangeVApi.exchangeAmountHistoricalV3Async.key]: ExchangeVApi.exchangeAmountHistoricalV3Async,
    [ExchangeVApi.exchangeAmountV3Async.key]: ExchangeVApi.exchangeAmountV3Async,
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
