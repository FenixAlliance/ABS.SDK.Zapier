const AvatarsApi = require('../apis/AvatarsApi');
const BlobsApi = require('../apis/BlobsApi');
const EditorAssetsApi = require('../apis/EditorAssetsApi');
const FenixAllianceABSWebApi = require('../apis/FenixAllianceABSWebApi');
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
    [EditorAssetsApi.getEditorAssetAsync.key]: EditorAssetsApi.getEditorAssetAsync,
    [FenixAllianceABSWebApi.accountLogoutPost.key]: FenixAllianceABSWebApi.accountLogoutPost,
    [FenixAllianceABSWebApi.accountManageDownloadPersonalDataPost.key]: FenixAllianceABSWebApi.accountManageDownloadPersonalDataPost,
    [FenixAllianceABSWebApi.accountManageLinkExternalLoginPost.key]: FenixAllianceABSWebApi.accountManageLinkExternalLoginPost,
    [FenixAllianceABSWebApi.accountPerformExternalLoginPost.key]: FenixAllianceABSWebApi.accountPerformExternalLoginPost,
    [FenixAllianceABSWebApi.apiV2AIServiceAgentsAgentIdAguiPost.key]: FenixAllianceABSWebApi.apiV2AIServiceAgentsAgentIdAguiPost,
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
    [FilesApi.createFileAsync.key]: FilesApi.createFileAsync,
    [FilesApi.deleteFileAsync.key]: FilesApi.deleteFileAsync,
    [FilesApi.downloadFileAsync.key]: FilesApi.downloadFileAsync,
    [FilesApi.getFileAsync.key]: FilesApi.getFileAsync,
    [FilesApi.getFileThumbnailAsync.key]: FilesApi.getFileThumbnailAsync,
    [FilesApi.getFilesAsync.key]: FilesApi.getFilesAsync,
    [FilesApi.getFilesCountAsync.key]: FilesApi.getFilesCountAsync,
    [FilesApi.updateFileAsync.key]: FilesApi.updateFileAsync,
    [RadzenEditorApi.radzenUploadImage.key]: RadzenEditorApi.radzenUploadImage,
    [RadzenEditorApi.radzenUploadImageScoped.key]: RadzenEditorApi.radzenUploadImageScoped,
    [RadzenEditorApi.radzenUploadSingle.key]: RadzenEditorApi.radzenUploadSingle,
    [RadzenEditorApi.radzenUploadSingleScoped.key]: RadzenEditorApi.radzenUploadSingleScoped,
    [RadzenEditorApi.radzenUploadStream.key]: RadzenEditorApi.radzenUploadStream,
    [RadzenEditorApi.radzenUploadStreamScoped.key]: RadzenEditorApi.radzenUploadStreamScoped,
    [RadzenEditorApi.radzenUploadUserImage.key]: RadzenEditorApi.radzenUploadUserImage,
    [RadzenEditorApi.radzenUploadUserImageScoped.key]: RadzenEditorApi.radzenUploadUserImageScoped,
    [UploadsApi.saveFileAsync.key]: UploadsApi.saveFileAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
