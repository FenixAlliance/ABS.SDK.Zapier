const DiscountListsApi = require('../apis/DiscountListsApi');
const FenixAllianceABPWebApi = require('../apis/FenixAllianceABPWebApi');
const PriceListsApi = require('../apis/PriceListsApi');
const PricesApi = require('../apis/PricesApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [DiscountListsApi.createDiscountList.key]: DiscountListsApi.createDiscountList,
    [DiscountListsApi.createDiscountListEntry.key]: DiscountListsApi.createDiscountListEntry,
    [DiscountListsApi.deleteDiscountList.key]: DiscountListsApi.deleteDiscountList,
    [DiscountListsApi.deleteDiscountListEntry.key]: DiscountListsApi.deleteDiscountListEntry,
    [DiscountListsApi.getDiscountList.key]: DiscountListsApi.getDiscountList,
    [DiscountListsApi.getDiscountListEntries.key]: DiscountListsApi.getDiscountListEntries,
    [DiscountListsApi.getDiscountListEntriesCount.key]: DiscountListsApi.getDiscountListEntriesCount,
    [DiscountListsApi.getDiscountListEntry.key]: DiscountListsApi.getDiscountListEntry,
    [DiscountListsApi.getDiscountLists.key]: DiscountListsApi.getDiscountLists,
    [DiscountListsApi.getDiscountListsCount.key]: DiscountListsApi.getDiscountListsCount,
    [DiscountListsApi.updateDiscountList.key]: DiscountListsApi.updateDiscountList,
    [DiscountListsApi.updateDiscountListEntry.key]: DiscountListsApi.updateDiscountListEntry,
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
    [PriceListsApi.createPriceListAsync.key]: PriceListsApi.createPriceListAsync,
    [PriceListsApi.createPriceListPricesAsync.key]: PriceListsApi.createPriceListPricesAsync,
    [PriceListsApi.deletePriceListAsync.key]: PriceListsApi.deletePriceListAsync,
    [PriceListsApi.deletePriceListPriceAsync.key]: PriceListsApi.deletePriceListPriceAsync,
    [PriceListsApi.getPriceListAsync.key]: PriceListsApi.getPriceListAsync,
    [PriceListsApi.getPriceListPriceAsync.key]: PriceListsApi.getPriceListPriceAsync,
    [PriceListsApi.getPriceListPricesAsync.key]: PriceListsApi.getPriceListPricesAsync,
    [PriceListsApi.getPriceListsAsync.key]: PriceListsApi.getPriceListsAsync,
    [PriceListsApi.getPriceListsCountAsync.key]: PriceListsApi.getPriceListsCountAsync,
    [PriceListsApi.updatePriceListAsync.key]: PriceListsApi.updatePriceListAsync,
    [PriceListsApi.updatePriceListPriceAsync.key]: PriceListsApi.updatePriceListPriceAsync,
    [PricesApi.getFinalPrice.key]: PricesApi.getFinalPrice,
    [PricesApi.getPrice.key]: PricesApi.getPrice,
    [PricesApi.getTotalSavingsInUsd.key]: PricesApi.getTotalSavingsInUsd,
    [PricesApi.getTotalTaxesInUsd.key]: PricesApi.getTotalTaxesInUsd,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
