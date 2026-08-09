const FenixAllianceABSWebApi = require('../apis/FenixAllianceABSWebApi');
const LicenseAttributesApi = require('../apis/LicenseAttributesApi');
const LicenseFeaturesApi = require('../apis/LicenseFeaturesApi');
const LicenseTypesApi = require('../apis/LicenseTypesApi');
const LicensesApi = require('../apis/LicensesApi');
const LicensingCertificatesApi = require('../apis/LicensingCertificatesApi');
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
    [LicenseAttributesApi.createLicenseAttributeAsync.key]: LicenseAttributesApi.createLicenseAttributeAsync,
    [LicenseAttributesApi.deleteLicenseAttributeAsync.key]: LicenseAttributesApi.deleteLicenseAttributeAsync,
    [LicenseAttributesApi.getLicenseAttributeByIdAsync.key]: LicenseAttributesApi.getLicenseAttributeByIdAsync,
    [LicenseAttributesApi.getLicenseAttributesAsync.key]: LicenseAttributesApi.getLicenseAttributesAsync,
    [LicenseAttributesApi.getLicenseAttributesCountAsync.key]: LicenseAttributesApi.getLicenseAttributesCountAsync,
    [LicenseAttributesApi.patchLicenseAttributeAsync.key]: LicenseAttributesApi.patchLicenseAttributeAsync,
    [LicenseAttributesApi.updateLicenseAttributeAsync.key]: LicenseAttributesApi.updateLicenseAttributeAsync,
    [LicenseFeaturesApi.createLicenseFeatureAsync.key]: LicenseFeaturesApi.createLicenseFeatureAsync,
    [LicenseFeaturesApi.deleteLicenseFeatureAsync.key]: LicenseFeaturesApi.deleteLicenseFeatureAsync,
    [LicenseFeaturesApi.getLicenseFeatureByIdAsync.key]: LicenseFeaturesApi.getLicenseFeatureByIdAsync,
    [LicenseFeaturesApi.getLicenseFeaturesAsync.key]: LicenseFeaturesApi.getLicenseFeaturesAsync,
    [LicenseFeaturesApi.getLicenseFeaturesCountAsync.key]: LicenseFeaturesApi.getLicenseFeaturesCountAsync,
    [LicenseFeaturesApi.patchLicenseFeatureAsync.key]: LicenseFeaturesApi.patchLicenseFeatureAsync,
    [LicenseFeaturesApi.updateLicenseFeatureAsync.key]: LicenseFeaturesApi.updateLicenseFeatureAsync,
    [LicenseTypesApi.createLicenseTypeAsync.key]: LicenseTypesApi.createLicenseTypeAsync,
    [LicenseTypesApi.deleteLicenseTypeAsync.key]: LicenseTypesApi.deleteLicenseTypeAsync,
    [LicenseTypesApi.getLicenseTypeByIdAsync.key]: LicenseTypesApi.getLicenseTypeByIdAsync,
    [LicenseTypesApi.getLicenseTypesAsync.key]: LicenseTypesApi.getLicenseTypesAsync,
    [LicenseTypesApi.getLicenseTypesCountAsync.key]: LicenseTypesApi.getLicenseTypesCountAsync,
    [LicenseTypesApi.patchLicenseTypeAsync.key]: LicenseTypesApi.patchLicenseTypeAsync,
    [LicenseTypesApi.updateLicenseTypeAsync.key]: LicenseTypesApi.updateLicenseTypeAsync,
    [LicensesApi.createLicenseAsync.key]: LicensesApi.createLicenseAsync,
    [LicensesApi.deleteLicenseAsync.key]: LicensesApi.deleteLicenseAsync,
    [LicensesApi.getLicenseByIdAsync.key]: LicensesApi.getLicenseByIdAsync,
    [LicensesApi.getLicensesAsync.key]: LicensesApi.getLicensesAsync,
    [LicensesApi.getLicensesCountAsync.key]: LicensesApi.getLicensesCountAsync,
    [LicensesApi.updateLicenseAsync.key]: LicensesApi.updateLicenseAsync,
    [LicensingCertificatesApi.createLicensingCertificateAsync.key]: LicensingCertificatesApi.createLicensingCertificateAsync,
    [LicensingCertificatesApi.deleteLicensingCertificateAsync.key]: LicensingCertificatesApi.deleteLicensingCertificateAsync,
    [LicensingCertificatesApi.getLicensingCertificateByIdAsync.key]: LicensingCertificatesApi.getLicensingCertificateByIdAsync,
    [LicensingCertificatesApi.getLicensingCertificatesAsync.key]: LicensingCertificatesApi.getLicensingCertificatesAsync,
    [LicensingCertificatesApi.getLicensingCertificatesCountAsync.key]: LicensingCertificatesApi.getLicensingCertificatesCountAsync,
    [LicensingCertificatesApi.patchLicensingCertificateAsync.key]: LicensingCertificatesApi.patchLicensingCertificateAsync,
    [LicensingCertificatesApi.updateLicensingCertificateAsync.key]: LicensingCertificatesApi.updateLicensingCertificateAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
