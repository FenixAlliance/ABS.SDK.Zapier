const CreditNotesApi = require('../apis/CreditNotesApi');
const DebitNotesApi = require('../apis/DebitNotesApi');
const DespatchAdvicesApi = require('../apis/DespatchAdvicesApi');
const FenixAllianceABSWebApi = require('../apis/FenixAllianceABSWebApi');
const InvoicesApi = require('../apis/InvoicesApi');
const ReceiptAdvicesApi = require('../apis/ReceiptAdvicesApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [CreditNotesApi.apiV2UblServiceCreditNotesInvoiceIdGet.key]: CreditNotesApi.apiV2UblServiceCreditNotesInvoiceIdGet,
    [DebitNotesApi.apiV2UblServiceDebitNotesInvoiceIdGet.key]: DebitNotesApi.apiV2UblServiceDebitNotesInvoiceIdGet,
    [DespatchAdvicesApi.apiV2UblServiceDespatchAdvicesShipmentIdGet.key]: DespatchAdvicesApi.apiV2UblServiceDespatchAdvicesShipmentIdGet,
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
    [InvoicesApi.apiV2UblServiceInvoicesInvoiceIdGet.key]: InvoicesApi.apiV2UblServiceInvoicesInvoiceIdGet,
    [ReceiptAdvicesApi.apiV2UblServiceReceiptAdvicesItemRestockIdGet.key]: ReceiptAdvicesApi.apiV2UblServiceReceiptAdvicesItemRestockIdGet,
    [ReceiptAdvicesApi.apiV2UblServiceReceiptAdvicesItemRestockIdPartitionsGet.key]: ReceiptAdvicesApi.apiV2UblServiceReceiptAdvicesItemRestockIdPartitionsGet,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
