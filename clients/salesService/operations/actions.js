const CompletionsApi = require('../apis/CompletionsApi');
const FenixAlliancePortalsWebsiteApi = require('../apis/FenixAlliancePortalsWebsiteApi');
const LoyaltyProgramsApi = require('../apis/LoyaltyProgramsApi');
const MarginsApi = require('../apis/MarginsApi');
const PointOfSalesApi = require('../apis/PointOfSalesApi');
const SalesLiteraturesApi = require('../apis/SalesLiteraturesApi');
const StoresApi = require('../apis/StoresApi');
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
    [LoyaltyProgramsApi.countLoyaltyProgramsAsync.key]: LoyaltyProgramsApi.countLoyaltyProgramsAsync,
    [LoyaltyProgramsApi.createLoyaltyProgramAsync.key]: LoyaltyProgramsApi.createLoyaltyProgramAsync,
    [LoyaltyProgramsApi.deleteLoyaltyProgramAsync.key]: LoyaltyProgramsApi.deleteLoyaltyProgramAsync,
    [LoyaltyProgramsApi.getLoyaltyProgramAsync.key]: LoyaltyProgramsApi.getLoyaltyProgramAsync,
    [LoyaltyProgramsApi.getLoyaltyProgramsAsync.key]: LoyaltyProgramsApi.getLoyaltyProgramsAsync,
    [LoyaltyProgramsApi.updateLoyaltyProgramAsync.key]: LoyaltyProgramsApi.updateLoyaltyProgramAsync,
    [MarginsApi.getQuoteAsync.key]: MarginsApi.getQuoteAsync,
    [PointOfSalesApi.countPointOfSalesAsync.key]: PointOfSalesApi.countPointOfSalesAsync,
    [PointOfSalesApi.createPointOfSaleAsync.key]: PointOfSalesApi.createPointOfSaleAsync,
    [PointOfSalesApi.deletePointOfSaleAsync.key]: PointOfSalesApi.deletePointOfSaleAsync,
    [PointOfSalesApi.getPointOfSaleAsync.key]: PointOfSalesApi.getPointOfSaleAsync,
    [PointOfSalesApi.getPointOfSalesAsync.key]: PointOfSalesApi.getPointOfSalesAsync,
    [PointOfSalesApi.updatePointOfSaleAsync.key]: PointOfSalesApi.updatePointOfSaleAsync,
    [SalesLiteraturesApi.countSalesLiteraturesAsync.key]: SalesLiteraturesApi.countSalesLiteraturesAsync,
    [SalesLiteraturesApi.createSalesLiteratureAsync.key]: SalesLiteraturesApi.createSalesLiteratureAsync,
    [SalesLiteraturesApi.deleteSalesLiteratureAsync.key]: SalesLiteraturesApi.deleteSalesLiteratureAsync,
    [SalesLiteraturesApi.getExtendedSalesLiteraturesAsync.key]: SalesLiteraturesApi.getExtendedSalesLiteraturesAsync,
    [SalesLiteraturesApi.getSalesLiteratureAsync.key]: SalesLiteraturesApi.getSalesLiteratureAsync,
    [SalesLiteraturesApi.getSalesLiteraturesAsync.key]: SalesLiteraturesApi.getSalesLiteraturesAsync,
    [SalesLiteraturesApi.updateSalesLiteratureAsync.key]: SalesLiteraturesApi.updateSalesLiteratureAsync,
    [StoresApi.countStoresAsync.key]: StoresApi.countStoresAsync,
    [StoresApi.createStoreAsync.key]: StoresApi.createStoreAsync,
    [StoresApi.deleteStoreAsync.key]: StoresApi.deleteStoreAsync,
    [StoresApi.getStoreAsync.key]: StoresApi.getStoreAsync,
    [StoresApi.getStoresAsync.key]: StoresApi.getStoresAsync,
    [StoresApi.updateStoreAsync.key]: StoresApi.updateStoreAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
