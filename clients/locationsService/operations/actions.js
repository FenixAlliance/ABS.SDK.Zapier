const FenixAllianceABPWebApi = require('../apis/FenixAllianceABPWebApi');
const LocationsApi = require('../apis/LocationsApi');
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
    [LocationsApi.createLocationAsync.key]: LocationsApi.createLocationAsync,
    [LocationsApi.createWalletLocationAsync.key]: LocationsApi.createWalletLocationAsync,
    [LocationsApi.deleteLocationAsync.key]: LocationsApi.deleteLocationAsync,
    [LocationsApi.deleteWalletLocationAsync.key]: LocationsApi.deleteWalletLocationAsync,
    [LocationsApi.getLocationAsync.key]: LocationsApi.getLocationAsync,
    [LocationsApi.getLocationsAsync.key]: LocationsApi.getLocationsAsync,
    [LocationsApi.getLocationsCountAsync.key]: LocationsApi.getLocationsCountAsync,
    [LocationsApi.getWalletLocationAsync.key]: LocationsApi.getWalletLocationAsync,
    [LocationsApi.getWalletLocationsAsync.key]: LocationsApi.getWalletLocationsAsync,
    [LocationsApi.getWalletLocationsCountAsync.key]: LocationsApi.getWalletLocationsCountAsync,
    [LocationsApi.updateLocationAsync.key]: LocationsApi.updateLocationAsync,
    [LocationsApi.updateWalletLocationAsync.key]: LocationsApi.updateWalletLocationAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
