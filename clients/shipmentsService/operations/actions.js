const FenixAllianceABSWebApi = require('../apis/FenixAllianceABSWebApi');
const ItemShippingPoliciesApi = require('../apis/ItemShippingPoliciesApi');
const ShipmentsApi = require('../apis/ShipmentsApi');
const ShippingClassesApi = require('../apis/ShippingClassesApi');
const ShippingCouriersApi = require('../apis/ShippingCouriersApi');
const ShippingLabelsApi = require('../apis/ShippingLabelsApi');
const ShippingMethodsApi = require('../apis/ShippingMethodsApi');
const ShippingRegionsApi = require('../apis/ShippingRegionsApi');
const ShippingZonesApi = require('../apis/ShippingZonesApi');
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
    [ItemShippingPoliciesApi.createItemShippingPolicyAsync.key]: ItemShippingPoliciesApi.createItemShippingPolicyAsync,
    [ItemShippingPoliciesApi.deleteItemShippingPolicyAsync.key]: ItemShippingPoliciesApi.deleteItemShippingPolicyAsync,
    [ItemShippingPoliciesApi.getItemShippingPoliciesAsync.key]: ItemShippingPoliciesApi.getItemShippingPoliciesAsync,
    [ItemShippingPoliciesApi.getItemShippingPoliciesCountAsync.key]: ItemShippingPoliciesApi.getItemShippingPoliciesCountAsync,
    [ItemShippingPoliciesApi.getItemShippingPolicyByIdAsync.key]: ItemShippingPoliciesApi.getItemShippingPolicyByIdAsync,
    [ItemShippingPoliciesApi.updateItemShippingPolicyAsync.key]: ItemShippingPoliciesApi.updateItemShippingPolicyAsync,
    [ShipmentsApi.createShipmentAsync.key]: ShipmentsApi.createShipmentAsync,
    [ShipmentsApi.deleteShipmentAsync.key]: ShipmentsApi.deleteShipmentAsync,
    [ShipmentsApi.getShipmentByIdAsync.key]: ShipmentsApi.getShipmentByIdAsync,
    [ShipmentsApi.getShipmentsAsync.key]: ShipmentsApi.getShipmentsAsync,
    [ShipmentsApi.getShipmentsCountAsync.key]: ShipmentsApi.getShipmentsCountAsync,
    [ShipmentsApi.updateShipmentAsync.key]: ShipmentsApi.updateShipmentAsync,
    [ShippingClassesApi.createShippingClassAsync.key]: ShippingClassesApi.createShippingClassAsync,
    [ShippingClassesApi.deleteShippingClassAsync.key]: ShippingClassesApi.deleteShippingClassAsync,
    [ShippingClassesApi.getShippingClassByIdAsync.key]: ShippingClassesApi.getShippingClassByIdAsync,
    [ShippingClassesApi.getShippingClassesAsync.key]: ShippingClassesApi.getShippingClassesAsync,
    [ShippingClassesApi.getShippingClassesCountAsync.key]: ShippingClassesApi.getShippingClassesCountAsync,
    [ShippingClassesApi.updateShippingClassAsync.key]: ShippingClassesApi.updateShippingClassAsync,
    [ShippingCouriersApi.createShippingCourierAsync.key]: ShippingCouriersApi.createShippingCourierAsync,
    [ShippingCouriersApi.deleteShippingCourierAsync.key]: ShippingCouriersApi.deleteShippingCourierAsync,
    [ShippingCouriersApi.getShippingCourierByIdAsync.key]: ShippingCouriersApi.getShippingCourierByIdAsync,
    [ShippingCouriersApi.getShippingCouriersAsync.key]: ShippingCouriersApi.getShippingCouriersAsync,
    [ShippingCouriersApi.getShippingCouriersCountAsync.key]: ShippingCouriersApi.getShippingCouriersCountAsync,
    [ShippingCouriersApi.updateShippingCourierAsync.key]: ShippingCouriersApi.updateShippingCourierAsync,
    [ShippingLabelsApi.createShippingLabelAsync.key]: ShippingLabelsApi.createShippingLabelAsync,
    [ShippingLabelsApi.deleteShippingLabelAsync.key]: ShippingLabelsApi.deleteShippingLabelAsync,
    [ShippingLabelsApi.getShippingLabelByIdAsync.key]: ShippingLabelsApi.getShippingLabelByIdAsync,
    [ShippingLabelsApi.getShippingLabelsAsync.key]: ShippingLabelsApi.getShippingLabelsAsync,
    [ShippingLabelsApi.getShippingLabelsCountAsync.key]: ShippingLabelsApi.getShippingLabelsCountAsync,
    [ShippingLabelsApi.updateShippingLabelAsync.key]: ShippingLabelsApi.updateShippingLabelAsync,
    [ShippingMethodsApi.createShippingMethodAsync.key]: ShippingMethodsApi.createShippingMethodAsync,
    [ShippingMethodsApi.deleteShippingMethodAsync.key]: ShippingMethodsApi.deleteShippingMethodAsync,
    [ShippingMethodsApi.getShippingMethodByIdAsync.key]: ShippingMethodsApi.getShippingMethodByIdAsync,
    [ShippingMethodsApi.getShippingMethodsAsync.key]: ShippingMethodsApi.getShippingMethodsAsync,
    [ShippingMethodsApi.getShippingMethodsCountAsync.key]: ShippingMethodsApi.getShippingMethodsCountAsync,
    [ShippingMethodsApi.updateShippingMethodAsync.key]: ShippingMethodsApi.updateShippingMethodAsync,
    [ShippingRegionsApi.createShippingRegionAsync.key]: ShippingRegionsApi.createShippingRegionAsync,
    [ShippingRegionsApi.deleteShippingRegionAsync.key]: ShippingRegionsApi.deleteShippingRegionAsync,
    [ShippingRegionsApi.getShippingRegionByIdAsync.key]: ShippingRegionsApi.getShippingRegionByIdAsync,
    [ShippingRegionsApi.getShippingRegionsAsync.key]: ShippingRegionsApi.getShippingRegionsAsync,
    [ShippingRegionsApi.getShippingRegionsCountAsync.key]: ShippingRegionsApi.getShippingRegionsCountAsync,
    [ShippingRegionsApi.updateShippingRegionAsync.key]: ShippingRegionsApi.updateShippingRegionAsync,
    [ShippingZonesApi.createShippingZoneAsync.key]: ShippingZonesApi.createShippingZoneAsync,
    [ShippingZonesApi.deleteShippingZoneAsync.key]: ShippingZonesApi.deleteShippingZoneAsync,
    [ShippingZonesApi.getShippingZoneByIdAsync.key]: ShippingZonesApi.getShippingZoneByIdAsync,
    [ShippingZonesApi.getShippingZonesAsync.key]: ShippingZonesApi.getShippingZonesAsync,
    [ShippingZonesApi.getShippingZonesCountAsync.key]: ShippingZonesApi.getShippingZonesCountAsync,
    [ShippingZonesApi.updateShippingZoneAsync.key]: ShippingZonesApi.updateShippingZoneAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
