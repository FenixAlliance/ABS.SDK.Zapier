const CompletionsApi = require('../apis/CompletionsApi');
const FenixAlliancePortalsWebsiteApi = require('../apis/FenixAlliancePortalsWebsiteApi');
const OrdersApi = require('../apis/OrdersApi');
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
    [OrdersApi.patchOrder.key]: OrdersApi.patchOrder,
    [OrdersApi.patchOrderLine.key]: OrdersApi.patchOrderLine,
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
