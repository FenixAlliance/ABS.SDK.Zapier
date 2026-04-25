const FenixAllianceABSWebApi = require('../apis/FenixAllianceABSWebApi');
const ServiceCaseTypesApi = require('../apis/ServiceCaseTypesApi');
const ServiceCasesApi = require('../apis/ServiceCasesApi');
const ServiceLevelAgreementsApi = require('../apis/ServiceLevelAgreementsApi');
const ServiceLevelsApi = require('../apis/ServiceLevelsApi');
const ServiceQueuesApi = require('../apis/ServiceQueuesApi');
const ServicesApi = require('../apis/ServicesApi');
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
    [ServiceCaseTypesApi.createServiceCaseTypeAsync.key]: ServiceCaseTypesApi.createServiceCaseTypeAsync,
    [ServiceCaseTypesApi.deleteServiceCaseTypeAsync.key]: ServiceCaseTypesApi.deleteServiceCaseTypeAsync,
    [ServiceCaseTypesApi.getServiceCaseTypeByIdAsync.key]: ServiceCaseTypesApi.getServiceCaseTypeByIdAsync,
    [ServiceCaseTypesApi.getServiceCaseTypesAsync.key]: ServiceCaseTypesApi.getServiceCaseTypesAsync,
    [ServiceCaseTypesApi.getServiceCaseTypesCountAsync.key]: ServiceCaseTypesApi.getServiceCaseTypesCountAsync,
    [ServiceCaseTypesApi.updateServiceCaseTypeAsync.key]: ServiceCaseTypesApi.updateServiceCaseTypeAsync,
    [ServiceCasesApi.createServiceCaseAsync.key]: ServiceCasesApi.createServiceCaseAsync,
    [ServiceCasesApi.deleteServiceCaseAsync.key]: ServiceCasesApi.deleteServiceCaseAsync,
    [ServiceCasesApi.getServiceCaseByIdAsync.key]: ServiceCasesApi.getServiceCaseByIdAsync,
    [ServiceCasesApi.getServiceCasesAsync.key]: ServiceCasesApi.getServiceCasesAsync,
    [ServiceCasesApi.getServiceCasesCountAsync.key]: ServiceCasesApi.getServiceCasesCountAsync,
    [ServiceCasesApi.updateServiceCaseAsync.key]: ServiceCasesApi.updateServiceCaseAsync,
    [ServiceLevelAgreementsApi.createServiceLevelAgreementAsync.key]: ServiceLevelAgreementsApi.createServiceLevelAgreementAsync,
    [ServiceLevelAgreementsApi.deleteServiceLevelAgreementAsync.key]: ServiceLevelAgreementsApi.deleteServiceLevelAgreementAsync,
    [ServiceLevelAgreementsApi.getServiceLevelAgreementByIdAsync.key]: ServiceLevelAgreementsApi.getServiceLevelAgreementByIdAsync,
    [ServiceLevelAgreementsApi.getServiceLevelAgreementsAsync.key]: ServiceLevelAgreementsApi.getServiceLevelAgreementsAsync,
    [ServiceLevelAgreementsApi.getServiceLevelAgreementsCountAsync.key]: ServiceLevelAgreementsApi.getServiceLevelAgreementsCountAsync,
    [ServiceLevelAgreementsApi.updateServiceLevelAgreementAsync.key]: ServiceLevelAgreementsApi.updateServiceLevelAgreementAsync,
    [ServiceLevelsApi.countAllServiceLevelsAsync.key]: ServiceLevelsApi.countAllServiceLevelsAsync,
    [ServiceLevelsApi.createServiceLevelAsync.key]: ServiceLevelsApi.createServiceLevelAsync,
    [ServiceLevelsApi.deleteServiceLevelAsync.key]: ServiceLevelsApi.deleteServiceLevelAsync,
    [ServiceLevelsApi.getAllServiceLevelsAsync.key]: ServiceLevelsApi.getAllServiceLevelsAsync,
    [ServiceLevelsApi.getServiceLevelByIdAsync.key]: ServiceLevelsApi.getServiceLevelByIdAsync,
    [ServiceLevelsApi.getServiceLevelsAsync.key]: ServiceLevelsApi.getServiceLevelsAsync,
    [ServiceLevelsApi.getServiceLevelsCountAsync.key]: ServiceLevelsApi.getServiceLevelsCountAsync,
    [ServiceLevelsApi.updateServiceLevelAsync.key]: ServiceLevelsApi.updateServiceLevelAsync,
    [ServiceQueuesApi.createServiceQueueAsync.key]: ServiceQueuesApi.createServiceQueueAsync,
    [ServiceQueuesApi.deleteServiceQueueAsync.key]: ServiceQueuesApi.deleteServiceQueueAsync,
    [ServiceQueuesApi.getServiceQueueByIdAsync.key]: ServiceQueuesApi.getServiceQueueByIdAsync,
    [ServiceQueuesApi.getServiceQueuesAsync.key]: ServiceQueuesApi.getServiceQueuesAsync,
    [ServiceQueuesApi.getServiceQueuesCountAsync.key]: ServiceQueuesApi.getServiceQueuesCountAsync,
    [ServiceQueuesApi.updateServiceQueueAsync.key]: ServiceQueuesApi.updateServiceQueueAsync,
    [ServicesApi.createServiceAsync.key]: ServicesApi.createServiceAsync,
    [ServicesApi.deleteServiceAsync.key]: ServicesApi.deleteServiceAsync,
    [ServicesApi.getServiceByIdAsync.key]: ServicesApi.getServiceByIdAsync,
    [ServicesApi.getServicesAsync.key]: ServicesApi.getServicesAsync,
    [ServicesApi.getServicesCountAsync.key]: ServicesApi.getServicesCountAsync,
    [ServicesApi.updateServiceAsync.key]: ServicesApi.updateServiceAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
