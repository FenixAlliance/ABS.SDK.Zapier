const CountriesApi = require('../apis/CountriesApi');
const CurrenciesApi = require('../apis/CurrenciesApi');
const FenixAllianceABSWebApi = require('../apis/FenixAllianceABSWebApi');
const LanguagesApi = require('../apis/LanguagesApi');
const TimezonesApi = require('../apis/TimezonesApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [CountriesApi.countCountries.key]: CountriesApi.countCountries,
    [CountriesApi.getAllCountries.key]: CountriesApi.getAllCountries,
    [CountriesApi.getCallingCodesByCountryIdAsync.key]: CountriesApi.getCallingCodesByCountryIdAsync,
    [CountriesApi.getCitiesByCountryStateIdAsync.key]: CountriesApi.getCitiesByCountryStateIdAsync,
    [CountriesApi.getCountryById.key]: CountriesApi.getCountryById,
    [CountriesApi.getCountryStateByIdAsync.key]: CountriesApi.getCountryStateByIdAsync,
    [CountriesApi.getCountryStatesAsync.key]: CountriesApi.getCountryStatesAsync,
    [CountriesApi.getEnabledCurrenciesByCountryIdAsync.key]: CountriesApi.getEnabledCurrenciesByCountryIdAsync,
    [CountriesApi.getTimeZonesByCountryIdAsync.key]: CountriesApi.getTimeZonesByCountryIdAsync,
    [CountriesApi.getTopLevelDomainsByCountryIdAsync.key]: CountriesApi.getTopLevelDomainsByCountryIdAsync,
    [CountriesApi.searchCountriesByNameAsync.key]: CountriesApi.searchCountriesByNameAsync,
    [CurrenciesApi.countCurrenciesAsync.key]: CurrenciesApi.countCurrenciesAsync,
    [CurrenciesApi.getCurrencyByIdAsync.key]: CurrenciesApi.getCurrencyByIdAsync,
    [CurrenciesApi.getEnabledCurrenciesAsync.key]: CurrenciesApi.getEnabledCurrenciesAsync,
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
    [LanguagesApi.countLanguagesAsync.key]: LanguagesApi.countLanguagesAsync,
    [LanguagesApi.getLanguageByIdAsync.key]: LanguagesApi.getLanguageByIdAsync,
    [LanguagesApi.getLanguagesAsync.key]: LanguagesApi.getLanguagesAsync,
    [TimezonesApi.countTimezonesAsync.key]: TimezonesApi.countTimezonesAsync,
    [TimezonesApi.getTimeZoneByIdAsync.key]: TimezonesApi.getTimeZoneByIdAsync,
    [TimezonesApi.getTimeZonesAsync.key]: TimezonesApi.getTimeZonesAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
