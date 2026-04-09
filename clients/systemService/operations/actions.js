const AntiforgeryApi = require('../apis/AntiforgeryApi');
const EmailsApi = require('../apis/EmailsApi');
const FenixAllianceABPWebApi = require('../apis/FenixAllianceABPWebApi');
const LicensingApi = require('../apis/LicensingApi');
const MigrationsApi = require('../apis/MigrationsApi');
const ModulesApi = require('../apis/ModulesApi');
const OptionsApi = require('../apis/OptionsApi');
const TenantsApi = require('../apis/TenantsApi');
const UsersApi = require('../apis/UsersApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [AntiforgeryApi.getAndStoreTokens.key]: AntiforgeryApi.getAndStoreTokens,
    [AntiforgeryApi.isRequestValidAsync.key]: AntiforgeryApi.isRequestValidAsync,
    [EmailsApi.adminPreviewBasicEmailTemplate.key]: EmailsApi.adminPreviewBasicEmailTemplate,
    [EmailsApi.adminSendBasicEmail.key]: EmailsApi.adminSendBasicEmail,
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
