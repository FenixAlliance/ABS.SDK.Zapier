const AntiforgeryApi = require('../apis/AntiforgeryApi');
const CartsApi = require('../apis/CartsApi');
const CompletionsApi = require('../apis/CompletionsApi');
const ContactOptionsApi = require('../apis/ContactOptionsApi');
const EmailsApi = require('../apis/EmailsApi');
const FenixAlliancePortalsWebsiteApi = require('../apis/FenixAlliancePortalsWebsiteApi');
const IPLookupsApi = require('../apis/IPLookupsApi');
const LicensesApi = require('../apis/LicensesApi');
const LicensingApi = require('../apis/LicensingApi');
const MigrationsApi = require('../apis/MigrationsApi');
const ModulesApi = require('../apis/ModulesApi');
const OptionsApi = require('../apis/OptionsApi');
const OverviewApi = require('../apis/OverviewApi');
const PortalsApi = require('../apis/PortalsApi');
const TenantOptionsApi = require('../apis/TenantOptionsApi');
const TenantsApi = require('../apis/TenantsApi');
const UserOptionsApi = require('../apis/UserOptionsApi');
const UsersApi = require('../apis/UsersApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [AntiforgeryApi.getAndStoreTokens.key]: AntiforgeryApi.getAndStoreTokens,
    [AntiforgeryApi.isRequestValidAsync.key]: AntiforgeryApi.isRequestValidAsync,
    [CartsApi.deleteSystemCart.key]: CartsApi.deleteSystemCart,
    [CartsApi.getSystemCartById.key]: CartsApi.getSystemCartById,
    [CartsApi.getSystemCarts.key]: CartsApi.getSystemCarts,
    [CartsApi.getSystemCartsCount.key]: CartsApi.getSystemCartsCount,
    [CompletionsApi.apiV2AiServiceCompletionsCompleteGet.key]: CompletionsApi.apiV2AiServiceCompletionsCompleteGet,
    [ContactOptionsApi.createSystemContactOption.key]: ContactOptionsApi.createSystemContactOption,
    [ContactOptionsApi.deleteSystemContactOption.key]: ContactOptionsApi.deleteSystemContactOption,
    [ContactOptionsApi.getSystemContactOptionById.key]: ContactOptionsApi.getSystemContactOptionById,
    [ContactOptionsApi.getSystemContactOptions.key]: ContactOptionsApi.getSystemContactOptions,
    [ContactOptionsApi.getSystemContactOptionsCount.key]: ContactOptionsApi.getSystemContactOptionsCount,
    [ContactOptionsApi.updateSystemContactOption.key]: ContactOptionsApi.updateSystemContactOption,
    [EmailsApi.adminPreviewBasicEmailTemplate.key]: EmailsApi.adminPreviewBasicEmailTemplate,
    [EmailsApi.adminSendBasicEmail.key]: EmailsApi.adminSendBasicEmail,
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
    [IPLookupsApi.deleteSystemIPLookup.key]: IPLookupsApi.deleteSystemIPLookup,
    [IPLookupsApi.getSystemIPLookupById.key]: IPLookupsApi.getSystemIPLookupById,
    [IPLookupsApi.getSystemIPLookups.key]: IPLookupsApi.getSystemIPLookups,
    [IPLookupsApi.getSystemIPLookupsCount.key]: IPLookupsApi.getSystemIPLookupsCount,
    [LicensesApi.apiLicensingLicensesGeneratePost.key]: LicensesApi.apiLicensingLicensesGeneratePost,
    [LicensesApi.apiLicensingLicensesValidateAttributesGet.key]: LicensesApi.apiLicensingLicensesValidateAttributesGet,
    [LicensesApi.apiLicensingLicensesValidateErrorsGet.key]: LicensesApi.apiLicensingLicensesValidateErrorsGet,
    [LicensesApi.apiLicensingLicensesValidateGet.key]: LicensesApi.apiLicensingLicensesValidateGet,
    [LicensingApi.getLicenseAssignmentsAsync.key]: LicensingApi.getLicenseAssignmentsAsync,
    [LicensingApi.getLicenseAttributesAsync.key]: LicensingApi.getLicenseAttributesAsync,
    [LicensingApi.getLicenseByIdAsync.key]: LicensingApi.getLicenseByIdAsync,
    [LicensingApi.getLicenseFeaturesAsync.key]: LicensingApi.getLicenseFeaturesAsync,
    [LicensingApi.getLicenseRecordsQuotaAsync.key]: LicensingApi.getLicenseRecordsQuotaAsync,
    [LicensingApi.getLicensesAsync.key]: LicensingApi.getLicensesAsync,
    [LicensingApi.redeemLicenseAsync.key]: LicensingApi.redeemLicenseAsync,
    [LicensingApi.validateLicenseAsync.key]: LicensingApi.validateLicenseAsync,
    [MigrationsApi.migrate.key]: MigrationsApi.migrate,
    [MigrationsApi.migrations.key]: MigrationsApi.migrations,
    [ModulesApi.getAllModules.key]: ModulesApi.getAllModules,
    [ModulesApi.getAvailableModules.key]: ModulesApi.getAvailableModules,
    [OptionsApi.createSystemOption.key]: OptionsApi.createSystemOption,
    [OptionsApi.deleteSystemOption.key]: OptionsApi.deleteSystemOption,
    [OptionsApi.getSystemOptionById.key]: OptionsApi.getSystemOptionById,
    [OptionsApi.getSystemOptionByKey.key]: OptionsApi.getSystemOptionByKey,
    [OptionsApi.getSystemOptions.key]: OptionsApi.getSystemOptions,
    [OptionsApi.getSystemOptionsCount.key]: OptionsApi.getSystemOptionsCount,
    [OptionsApi.updateSystemOption.key]: OptionsApi.updateSystemOption,
    [OptionsApi.upsertSystemOption.key]: OptionsApi.upsertSystemOption,
    [OverviewApi.getSystemOverview.key]: OverviewApi.getSystemOverview,
    [PortalsApi.createSystemPortal.key]: PortalsApi.createSystemPortal,
    [PortalsApi.deleteSystemPortal.key]: PortalsApi.deleteSystemPortal,
    [PortalsApi.getSystemPortalById.key]: PortalsApi.getSystemPortalById,
    [PortalsApi.getSystemPortals.key]: PortalsApi.getSystemPortals,
    [PortalsApi.getSystemPortalsCount.key]: PortalsApi.getSystemPortalsCount,
    [PortalsApi.updateSystemPortal.key]: PortalsApi.updateSystemPortal,
    [TenantOptionsApi.createSystemTenantOption.key]: TenantOptionsApi.createSystemTenantOption,
    [TenantOptionsApi.deleteSystemTenantOption.key]: TenantOptionsApi.deleteSystemTenantOption,
    [TenantOptionsApi.getSystemTenantOptionById.key]: TenantOptionsApi.getSystemTenantOptionById,
    [TenantOptionsApi.getSystemTenantOptions.key]: TenantOptionsApi.getSystemTenantOptions,
    [TenantOptionsApi.getSystemTenantOptionsCount.key]: TenantOptionsApi.getSystemTenantOptionsCount,
    [TenantOptionsApi.updateSystemTenantOption.key]: TenantOptionsApi.updateSystemTenantOption,
    [TenantsApi.adminPreviewTenantEmail.key]: TenantsApi.adminPreviewTenantEmail,
    [TenantsApi.adminSendTenantEmail.key]: TenantsApi.adminSendTenantEmail,
    [TenantsApi.createTenant.key]: TenantsApi.createTenant,
    [TenantsApi.deleteTenant.key]: TenantsApi.deleteTenant,
    [TenantsApi.getAllExtendedTenants.key]: TenantsApi.getAllExtendedTenants,
    [TenantsApi.getAllTenants.key]: TenantsApi.getAllTenants,
    [TenantsApi.getExtendedTenantsCount.key]: TenantsApi.getExtendedTenantsCount,
    [TenantsApi.getTenant.key]: TenantsApi.getTenant,
    [TenantsApi.getTenantsCount.key]: TenantsApi.getTenantsCount,
    [TenantsApi.updateTenant.key]: TenantsApi.updateTenant,
    [UserOptionsApi.createSystemUserOption.key]: UserOptionsApi.createSystemUserOption,
    [UserOptionsApi.deleteSystemUserOption.key]: UserOptionsApi.deleteSystemUserOption,
    [UserOptionsApi.getSystemUserOptionById.key]: UserOptionsApi.getSystemUserOptionById,
    [UserOptionsApi.getSystemUserOptions.key]: UserOptionsApi.getSystemUserOptions,
    [UserOptionsApi.getSystemUserOptionsCount.key]: UserOptionsApi.getSystemUserOptionsCount,
    [UserOptionsApi.updateSystemUserOption.key]: UserOptionsApi.updateSystemUserOption,
    [UsersApi.adminPreviewUserEmailTemplate.key]: UsersApi.adminPreviewUserEmailTemplate,
    [UsersApi.adminSendUserEmail.key]: UsersApi.adminSendUserEmail,
    [UsersApi.createAccountHolderAsync.key]: UsersApi.createAccountHolderAsync,
    [UsersApi.deleteAccountHolderAsync.key]: UsersApi.deleteAccountHolderAsync,
    [UsersApi.getExtendedAccountHolderAsync.key]: UsersApi.getExtendedAccountHolderAsync,
    [UsersApi.getExtendedUsersAsync.key]: UsersApi.getExtendedUsersAsync,
    [UsersApi.getExtendedUsersCountAsync.key]: UsersApi.getExtendedUsersCountAsync,
    [UsersApi.getUserAsync.key]: UsersApi.getUserAsync,
    [UsersApi.getUsersAsync.key]: UsersApi.getUsersAsync,
    [UsersApi.getUsersCountAsync.key]: UsersApi.getUsersCountAsync,
    [UsersApi.updateAccountHolderAsync.key]: UsersApi.updateAccountHolderAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
