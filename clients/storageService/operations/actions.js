const AvatarsApi = require('../apis/AvatarsApi');
const BlobsApi = require('../apis/BlobsApi');
const CompletionsApi = require('../apis/CompletionsApi');
const FenixAlliancePortalsWebsiteApi = require('../apis/FenixAlliancePortalsWebsiteApi');
const FilesApi = require('../apis/FilesApi');
const RadzenEditorApi = require('../apis/RadzenEditorApi');
const UploadsApi = require('../apis/UploadsApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [AvatarsApi.getAvatar.key]: AvatarsApi.getAvatar,
    [AvatarsApi.getContactAvatar.key]: AvatarsApi.getContactAvatar,
    [AvatarsApi.getCurrentUserAvatar.key]: AvatarsApi.getCurrentUserAvatar,
    [AvatarsApi.getTenantAvatar.key]: AvatarsApi.getTenantAvatar,
    [AvatarsApi.getUserAvatar.key]: AvatarsApi.getUserAvatar,
    [AvatarsApi.updateContactAvatar.key]: AvatarsApi.updateContactAvatar,
    [AvatarsApi.updateTenantAvatar.key]: AvatarsApi.updateTenantAvatar,
    [AvatarsApi.updateUserAvatar.key]: AvatarsApi.updateUserAvatar,
    [BlobsApi.getBlobAsync.key]: BlobsApi.getBlobAsync,
    [BlobsApi.getBlobsAsync.key]: BlobsApi.getBlobsAsync,
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
    [FilesApi.createFileAsync.key]: FilesApi.createFileAsync,
    [FilesApi.deleteFileAsync.key]: FilesApi.deleteFileAsync,
    [FilesApi.downloadFileAsync.key]: FilesApi.downloadFileAsync,
    [FilesApi.getFileAsync.key]: FilesApi.getFileAsync,
    [FilesApi.getFilesAsync.key]: FilesApi.getFilesAsync,
    [FilesApi.updateFileAsync.key]: FilesApi.updateFileAsync,
    [RadzenEditorApi.image.key]: RadzenEditorApi.image,
    [RadzenEditorApi.multiple.key]: RadzenEditorApi.multiple,
    [RadzenEditorApi.post.key]: RadzenEditorApi.post,
    [RadzenEditorApi.single.key]: RadzenEditorApi.single,
    [RadzenEditorApi.specific.key]: RadzenEditorApi.specific,
    [UploadsApi.saveFileAsync.key]: UploadsApi.saveFileAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
