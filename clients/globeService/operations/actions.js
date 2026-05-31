const CompletionsApi = require('../apis/CompletionsApi');
const CountriesApi = require('../apis/CountriesApi');
const CurrenciesApi = require('../apis/CurrenciesApi');
const FenixAlliancePortalsWebsiteApi = require('../apis/FenixAlliancePortalsWebsiteApi');
const LanguagesApi = require('../apis/LanguagesApi');
const MigrationsApi = require('../apis/MigrationsApi');
const TimezonesApi = require('../apis/TimezonesApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [CompletionsApi.apiV2AiServiceCompletionsCompleteGet.key]: CompletionsApi.apiV2AiServiceCompletionsCompleteGet,
    [CountriesApi.countCallingCodesByCountryAsync.key]: CountriesApi.countCallingCodesByCountryAsync,
    [CountriesApi.countCitiesByStateAsync.key]: CountriesApi.countCitiesByStateAsync,
    [CountriesApi.countCountries.key]: CountriesApi.countCountries,
    [CountriesApi.countCountryStatesAsync.key]: CountriesApi.countCountryStatesAsync,
    [CountriesApi.countTimezonesByCountryAsync.key]: CountriesApi.countTimezonesByCountryAsync,
    [CountriesApi.countTopLevelDomainsByCountryAsync.key]: CountriesApi.countTopLevelDomainsByCountryAsync,
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
    [LanguagesApi.countLanguagesAsync.key]: LanguagesApi.countLanguagesAsync,
    [LanguagesApi.getLanguageByIdAsync.key]: LanguagesApi.getLanguageByIdAsync,
    [LanguagesApi.getLanguagesAsync.key]: LanguagesApi.getLanguagesAsync,
    [MigrationsApi.apiV2GlobalSystemMigratePost.key]: MigrationsApi.apiV2GlobalSystemMigratePost,
    [TimezonesApi.countTimezonesAsync.key]: TimezonesApi.countTimezonesAsync,
    [TimezonesApi.getTimeZoneByIdAsync.key]: TimezonesApi.getTimeZoneByIdAsync,
    [TimezonesApi.getTimeZonesAsync.key]: TimezonesApi.getTimeZonesAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
