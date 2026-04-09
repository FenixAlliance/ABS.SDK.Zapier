const FenixAllianceABPWebApi = require('../apis/FenixAllianceABPWebApi');
const OrdersApi = require('../apis/OrdersApi');
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
