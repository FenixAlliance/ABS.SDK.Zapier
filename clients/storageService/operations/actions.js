const AvatarsApi = require('../apis/AvatarsApi');
const BlobsApi = require('../apis/BlobsApi');
const FenixAllianceABPWebApi = require('../apis/FenixAllianceABPWebApi');
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
