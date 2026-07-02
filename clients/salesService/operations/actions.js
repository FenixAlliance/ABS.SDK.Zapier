const FenixAllianceABSWebApi = require('../apis/FenixAllianceABSWebApi');
const LoyaltyProgramsApi = require('../apis/LoyaltyProgramsApi');
const MarginsApi = require('../apis/MarginsApi');
const PointOfSalesApi = require('../apis/PointOfSalesApi');
const SalesLiteraturesApi = require('../apis/SalesLiteraturesApi');
const StoresApi = require('../apis/StoresApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
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
    [LoyaltyProgramsApi.countLoyaltyProgramsAsync.key]: LoyaltyProgramsApi.countLoyaltyProgramsAsync,
    [LoyaltyProgramsApi.createLoyaltyProgramAsync.key]: LoyaltyProgramsApi.createLoyaltyProgramAsync,
    [LoyaltyProgramsApi.deleteLoyaltyProgramAsync.key]: LoyaltyProgramsApi.deleteLoyaltyProgramAsync,
    [LoyaltyProgramsApi.getLoyaltyProgramAsync.key]: LoyaltyProgramsApi.getLoyaltyProgramAsync,
    [LoyaltyProgramsApi.getLoyaltyProgramsAsync.key]: LoyaltyProgramsApi.getLoyaltyProgramsAsync,
    [LoyaltyProgramsApi.patchLoyaltyProgramAsync.key]: LoyaltyProgramsApi.patchLoyaltyProgramAsync,
    [LoyaltyProgramsApi.updateLoyaltyProgramAsync.key]: LoyaltyProgramsApi.updateLoyaltyProgramAsync,
    [MarginsApi.getQuoteAsync.key]: MarginsApi.getQuoteAsync,
    [PointOfSalesApi.countPointOfSalesAsync.key]: PointOfSalesApi.countPointOfSalesAsync,
    [PointOfSalesApi.createPointOfSaleAsync.key]: PointOfSalesApi.createPointOfSaleAsync,
    [PointOfSalesApi.deletePointOfSaleAsync.key]: PointOfSalesApi.deletePointOfSaleAsync,
    [PointOfSalesApi.getPointOfSaleAsync.key]: PointOfSalesApi.getPointOfSaleAsync,
    [PointOfSalesApi.getPointOfSalesAsync.key]: PointOfSalesApi.getPointOfSalesAsync,
    [PointOfSalesApi.patchPointOfSaleAsync.key]: PointOfSalesApi.patchPointOfSaleAsync,
    [PointOfSalesApi.updatePointOfSaleAsync.key]: PointOfSalesApi.updatePointOfSaleAsync,
    [SalesLiteraturesApi.countSalesLiteraturesAsync.key]: SalesLiteraturesApi.countSalesLiteraturesAsync,
    [SalesLiteraturesApi.createSalesLiteratureAsync.key]: SalesLiteraturesApi.createSalesLiteratureAsync,
    [SalesLiteraturesApi.deleteSalesLiteratureAsync.key]: SalesLiteraturesApi.deleteSalesLiteratureAsync,
    [SalesLiteraturesApi.getExtendedSalesLiteraturesAsync.key]: SalesLiteraturesApi.getExtendedSalesLiteraturesAsync,
    [SalesLiteraturesApi.getSalesLiteratureAsync.key]: SalesLiteraturesApi.getSalesLiteratureAsync,
    [SalesLiteraturesApi.getSalesLiteraturesAsync.key]: SalesLiteraturesApi.getSalesLiteraturesAsync,
    [SalesLiteraturesApi.patchSalesLiteratureAsync.key]: SalesLiteraturesApi.patchSalesLiteratureAsync,
    [SalesLiteraturesApi.updateSalesLiteratureAsync.key]: SalesLiteraturesApi.updateSalesLiteratureAsync,
    [StoresApi.countStoresAsync.key]: StoresApi.countStoresAsync,
    [StoresApi.createStoreAsync.key]: StoresApi.createStoreAsync,
    [StoresApi.deleteStoreAsync.key]: StoresApi.deleteStoreAsync,
    [StoresApi.getStoreAsync.key]: StoresApi.getStoreAsync,
    [StoresApi.getStoresAsync.key]: StoresApi.getStoresAsync,
    [StoresApi.patchStoreAsync.key]: StoresApi.patchStoreAsync,
    [StoresApi.updateStoreAsync.key]: StoresApi.updateStoreAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
