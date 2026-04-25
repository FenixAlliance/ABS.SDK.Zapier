const FenixAllianceABSWebApi = require('../apis/FenixAllianceABSWebApi');
const PaymentMethodsApi = require('../apis/PaymentMethodsApi');
const PaymentModesApi = require('../apis/PaymentModesApi');
const PaymentTermsApi = require('../apis/PaymentTermsApi');
const PaymentsApi = require('../apis/PaymentsApi');
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
    [PaymentMethodsApi.createPaymentMethodAsync.key]: PaymentMethodsApi.createPaymentMethodAsync,
    [PaymentMethodsApi.deletePaymentMethodAsync.key]: PaymentMethodsApi.deletePaymentMethodAsync,
    [PaymentMethodsApi.getPaymentMethodDetailsAsync.key]: PaymentMethodsApi.getPaymentMethodDetailsAsync,
    [PaymentMethodsApi.getPaymentMethodsAsync.key]: PaymentMethodsApi.getPaymentMethodsAsync,
    [PaymentMethodsApi.getPaymentMethodsCountAsync.key]: PaymentMethodsApi.getPaymentMethodsCountAsync,
    [PaymentMethodsApi.updatePaymentMethodAsync.key]: PaymentMethodsApi.updatePaymentMethodAsync,
    [PaymentModesApi.createPaymentModeAsync.key]: PaymentModesApi.createPaymentModeAsync,
    [PaymentModesApi.deletePaymentModeAsync.key]: PaymentModesApi.deletePaymentModeAsync,
    [PaymentModesApi.getPaymentModeDetailsAsync.key]: PaymentModesApi.getPaymentModeDetailsAsync,
    [PaymentModesApi.getPaymentModesAsync.key]: PaymentModesApi.getPaymentModesAsync,
    [PaymentModesApi.getPaymentModesCountAsync.key]: PaymentModesApi.getPaymentModesCountAsync,
    [PaymentModesApi.updatePaymentModeAsync.key]: PaymentModesApi.updatePaymentModeAsync,
    [PaymentTermsApi.createPaymentTermAsync.key]: PaymentTermsApi.createPaymentTermAsync,
    [PaymentTermsApi.deletePaymentTermAsync.key]: PaymentTermsApi.deletePaymentTermAsync,
    [PaymentTermsApi.getPaymentTermDetailsAsync.key]: PaymentTermsApi.getPaymentTermDetailsAsync,
    [PaymentTermsApi.getPaymentTermsAsync.key]: PaymentTermsApi.getPaymentTermsAsync,
    [PaymentTermsApi.getPaymentTermsCountAsync.key]: PaymentTermsApi.getPaymentTermsCountAsync,
    [PaymentTermsApi.updatePaymentTermAsync.key]: PaymentTermsApi.updatePaymentTermAsync,
    [PaymentsApi.createPaymentAsync.key]: PaymentsApi.createPaymentAsync,
    [PaymentsApi.deletePaymentAsync.key]: PaymentsApi.deletePaymentAsync,
    [PaymentsApi.getPaymentAsync.key]: PaymentsApi.getPaymentAsync,
    [PaymentsApi.getPaymentAsyncV2.key]: PaymentsApi.getPaymentAsyncV2,
    [PaymentsApi.getPaymentsAsync.key]: PaymentsApi.getPaymentsAsync,
    [PaymentsApi.updatePaymentAsync.key]: PaymentsApi.updatePaymentAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
