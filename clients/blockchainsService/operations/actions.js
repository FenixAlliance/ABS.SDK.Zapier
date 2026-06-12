const BlockchainsApi = require('../apis/BlockchainsApi');
const CompletionsApi = require('../apis/CompletionsApi');
const FenixAlliancePortalsWebsiteApi = require('../apis/FenixAlliancePortalsWebsiteApi');
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
