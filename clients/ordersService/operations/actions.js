const FenixAllianceABSWebApi = require('../apis/FenixAllianceABSWebApi');
const OrdersApi = require('../apis/OrdersApi');
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
    [OrdersApi.calculateOrder.key]: OrdersApi.calculateOrder,
    [OrdersApi.calculateOrderLine.key]: OrdersApi.calculateOrderLine,
    [OrdersApi.createOrder.key]: OrdersApi.createOrder,
    [OrdersApi.createOrderLine.key]: OrdersApi.createOrderLine,
    [OrdersApi.deleteOrder.key]: OrdersApi.deleteOrder,
    [OrdersApi.deleteOrderLine.key]: OrdersApi.deleteOrderLine,
    [OrdersApi.getExtendedOrders.key]: OrdersApi.getExtendedOrders,
    [OrdersApi.getOrder.key]: OrdersApi.getOrder,
    [OrdersApi.getOrderLine.key]: OrdersApi.getOrderLine,
    [OrdersApi.getOrderLines.key]: OrdersApi.getOrderLines,
    [OrdersApi.getOrderLinesCount.key]: OrdersApi.getOrderLinesCount,
    [OrdersApi.getOrders.key]: OrdersApi.getOrders,
    [OrdersApi.getOrdersCount.key]: OrdersApi.getOrdersCount,
    [OrdersApi.previewOrderEmailTemplate.key]: OrdersApi.previewOrderEmailTemplate,
    [OrdersApi.sendOrderEmail.key]: OrdersApi.sendOrderEmail,
    [OrdersApi.submitCart.key]: OrdersApi.submitCart,
    [OrdersApi.updateOrder.key]: OrdersApi.updateOrder,
    [OrdersApi.updateOrderLine.key]: OrdersApi.updateOrderLine,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
