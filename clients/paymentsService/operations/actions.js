const CompletionsApi = require('../apis/CompletionsApi');
const FenixAlliancePortalsWebsiteApi = require('../apis/FenixAlliancePortalsWebsiteApi');
const PaymentMethodsApi = require('../apis/PaymentMethodsApi');
const PaymentModesApi = require('../apis/PaymentModesApi');
const PaymentTermsApi = require('../apis/PaymentTermsApi');
const PaymentsApi = require('../apis/PaymentsApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
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
    [PaymentMethodsApi.createPaymentMethodAsync.key]: PaymentMethodsApi.createPaymentMethodAsync,
    [PaymentMethodsApi.deletePaymentMethodAsync.key]: PaymentMethodsApi.deletePaymentMethodAsync,
    [PaymentMethodsApi.getPaymentMethodDetailsAsync.key]: PaymentMethodsApi.getPaymentMethodDetailsAsync,
    [PaymentMethodsApi.getPaymentMethodsAsync.key]: PaymentMethodsApi.getPaymentMethodsAsync,
    [PaymentMethodsApi.getPaymentMethodsCountAsync.key]: PaymentMethodsApi.getPaymentMethodsCountAsync,
    [PaymentMethodsApi.patchPaymentMethodAsync.key]: PaymentMethodsApi.patchPaymentMethodAsync,
    [PaymentMethodsApi.updatePaymentMethodAsync.key]: PaymentMethodsApi.updatePaymentMethodAsync,
    [PaymentModesApi.createPaymentModeAsync.key]: PaymentModesApi.createPaymentModeAsync,
    [PaymentModesApi.deletePaymentModeAsync.key]: PaymentModesApi.deletePaymentModeAsync,
    [PaymentModesApi.getPaymentModeDetailsAsync.key]: PaymentModesApi.getPaymentModeDetailsAsync,
    [PaymentModesApi.getPaymentModesAsync.key]: PaymentModesApi.getPaymentModesAsync,
    [PaymentModesApi.getPaymentModesCountAsync.key]: PaymentModesApi.getPaymentModesCountAsync,
    [PaymentModesApi.patchPaymentModeAsync.key]: PaymentModesApi.patchPaymentModeAsync,
    [PaymentModesApi.updatePaymentModeAsync.key]: PaymentModesApi.updatePaymentModeAsync,
    [PaymentTermsApi.createPaymentTermAsync.key]: PaymentTermsApi.createPaymentTermAsync,
    [PaymentTermsApi.deletePaymentTermAsync.key]: PaymentTermsApi.deletePaymentTermAsync,
    [PaymentTermsApi.getPaymentTermDetailsAsync.key]: PaymentTermsApi.getPaymentTermDetailsAsync,
    [PaymentTermsApi.getPaymentTermsAsync.key]: PaymentTermsApi.getPaymentTermsAsync,
    [PaymentTermsApi.getPaymentTermsCountAsync.key]: PaymentTermsApi.getPaymentTermsCountAsync,
    [PaymentTermsApi.patchPaymentTermAsync.key]: PaymentTermsApi.patchPaymentTermAsync,
    [PaymentTermsApi.updatePaymentTermAsync.key]: PaymentTermsApi.updatePaymentTermAsync,
    [PaymentsApi.createPaymentAsync.key]: PaymentsApi.createPaymentAsync,
    [PaymentsApi.deletePaymentAsync.key]: PaymentsApi.deletePaymentAsync,
    [PaymentsApi.getPaymentAsync.key]: PaymentsApi.getPaymentAsync,
    [PaymentsApi.getPaymentAsyncV2.key]: PaymentsApi.getPaymentAsyncV2,
    [PaymentsApi.getPaymentsAsync.key]: PaymentsApi.getPaymentsAsync,
    [PaymentsApi.patchPaymentAsync.key]: PaymentsApi.patchPaymentAsync,
    [PaymentsApi.updatePaymentAsync.key]: PaymentsApi.updatePaymentAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
