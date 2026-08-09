const BlockchainsApi = require('../apis/BlockchainsApi');
const FenixAllianceABSWebApi = require('../apis/FenixAllianceABSWebApi');
const NonFungibleTokensApi = require('../apis/NonFungibleTokensApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [BlockchainsApi.createBlockchainAsync.key]: BlockchainsApi.createBlockchainAsync,
    [BlockchainsApi.createBlockchainBlockAsync.key]: BlockchainsApi.createBlockchainBlockAsync,
    [BlockchainsApi.deleteBlockchainAsync.key]: BlockchainsApi.deleteBlockchainAsync,
    [BlockchainsApi.deleteBlockchainBlockAsync.key]: BlockchainsApi.deleteBlockchainBlockAsync,
    [BlockchainsApi.getBlockchainBlockByIdAsync.key]: BlockchainsApi.getBlockchainBlockByIdAsync,
    [BlockchainsApi.getBlockchainBlocksAsync.key]: BlockchainsApi.getBlockchainBlocksAsync,
    [BlockchainsApi.getBlockchainBlocksCountAsync.key]: BlockchainsApi.getBlockchainBlocksCountAsync,
    [BlockchainsApi.getBlockchainByIdAsync.key]: BlockchainsApi.getBlockchainByIdAsync,
    [BlockchainsApi.getBlockchainsAsync.key]: BlockchainsApi.getBlockchainsAsync,
    [BlockchainsApi.getBlockchainsCountAsync.key]: BlockchainsApi.getBlockchainsCountAsync,
    [BlockchainsApi.patchBlockchainAsync.key]: BlockchainsApi.patchBlockchainAsync,
    [BlockchainsApi.patchBlockchainBlockAsync.key]: BlockchainsApi.patchBlockchainBlockAsync,
    [BlockchainsApi.updateBlockchainAsync.key]: BlockchainsApi.updateBlockchainAsync,
    [BlockchainsApi.updateBlockchainBlockAsync.key]: BlockchainsApi.updateBlockchainBlockAsync,
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
    [NonFungibleTokensApi.createNonFungibleTokenAsync.key]: NonFungibleTokensApi.createNonFungibleTokenAsync,
    [NonFungibleTokensApi.deleteNonFungibleTokenAsync.key]: NonFungibleTokensApi.deleteNonFungibleTokenAsync,
    [NonFungibleTokensApi.getNonFungibleTokenByIdAsync.key]: NonFungibleTokensApi.getNonFungibleTokenByIdAsync,
    [NonFungibleTokensApi.getNonFungibleTokensAsync.key]: NonFungibleTokensApi.getNonFungibleTokensAsync,
    [NonFungibleTokensApi.getNonFungibleTokensCountAsync.key]: NonFungibleTokensApi.getNonFungibleTokensCountAsync,
    [NonFungibleTokensApi.patchNonFungibleTokenAsync.key]: NonFungibleTokensApi.patchNonFungibleTokenAsync,
    [NonFungibleTokensApi.updateNonFungibleTokenAsync.key]: NonFungibleTokensApi.updateNonFungibleTokenAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
