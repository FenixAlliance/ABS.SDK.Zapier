const CountriesApi = require('../apis/CountriesApi');
const CurrenciesApi = require('../apis/CurrenciesApi');
const FenixAllianceABPWebApi = require('../apis/FenixAllianceABPWebApi');
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
