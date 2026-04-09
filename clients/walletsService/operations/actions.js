const FenixAllianceABPWebApi = require('../apis/FenixAllianceABPWebApi');
const WalletsApi = require('../apis/WalletsApi');
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
    [WalletsApi.createWalletLocationAsync.key]: WalletsApi.createWalletLocationAsync,
    [WalletsApi.deleteWalletLocationAsync.key]: WalletsApi.deleteWalletLocationAsync,
    [WalletsApi.getIncomingPaymentsAsync.key]: WalletsApi.getIncomingPaymentsAsync,
    [WalletsApi.getIncomingPaymentsCountAsync.key]: WalletsApi.getIncomingPaymentsCountAsync,
    [WalletsApi.getIncomingWalletInvoicesAsync.key]: WalletsApi.getIncomingWalletInvoicesAsync,
    [WalletsApi.getIncomingWalletInvoicesCountAsync.key]: WalletsApi.getIncomingWalletInvoicesCountAsync,
    [WalletsApi.getOutgoingPaymentsAsync.key]: WalletsApi.getOutgoingPaymentsAsync,
    [WalletsApi.getOutgoingPaymentsCountAsync.key]: WalletsApi.getOutgoingPaymentsCountAsync,
    [WalletsApi.getOutgoingWalletInvoicesAsync.key]: WalletsApi.getOutgoingWalletInvoicesAsync,
    [WalletsApi.getOutgoingWalletInvoicesCountAsync.key]: WalletsApi.getOutgoingWalletInvoicesCountAsync,
    [WalletsApi.getWalletDetailsAsync.key]: WalletsApi.getWalletDetailsAsync,
    [WalletsApi.getWalletExtendedOrdersAsync.key]: WalletsApi.getWalletExtendedOrdersAsync,
    [WalletsApi.getWalletInvoicesAsync.key]: WalletsApi.getWalletInvoicesAsync,
    [WalletsApi.getWalletInvoicesCountAsync.key]: WalletsApi.getWalletInvoicesCountAsync,
    [WalletsApi.getWalletLocationAsync.key]: WalletsApi.getWalletLocationAsync,
    [WalletsApi.getWalletLocationsAsync.key]: WalletsApi.getWalletLocationsAsync,
    [WalletsApi.getWalletLocationsCountAsync.key]: WalletsApi.getWalletLocationsCountAsync,
    [WalletsApi.getWalletOrdersAsync.key]: WalletsApi.getWalletOrdersAsync,
    [WalletsApi.getWalletOrdersCountAsync.key]: WalletsApi.getWalletOrdersCountAsync,
    [WalletsApi.getWalletPaymentsAsync.key]: WalletsApi.getWalletPaymentsAsync,
    [WalletsApi.getWalletPaymentsCountAsync.key]: WalletsApi.getWalletPaymentsCountAsync,
    [WalletsApi.updateWalletLocationAsync.key]: WalletsApi.updateWalletLocationAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
