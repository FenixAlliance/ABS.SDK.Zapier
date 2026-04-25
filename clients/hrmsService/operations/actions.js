const EmployeesApi = require('../apis/EmployeesApi');
const EmployersApi = require('../apis/EmployersApi');
const FenixAllianceABSWebApi = require('../apis/FenixAllianceABSWebApi');
const GigsApi = require('../apis/GigsApi');
const JobOffersApi = require('../apis/JobOffersApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [EmployeesApi.createEmployeeAsync.key]: EmployeesApi.createEmployeeAsync,
    [EmployeesApi.deleteEmployeeAsync.key]: EmployeesApi.deleteEmployeeAsync,
    [EmployeesApi.getEmployeeByIdAsync.key]: EmployeesApi.getEmployeeByIdAsync,
    [EmployeesApi.getEmployeesAsync.key]: EmployeesApi.getEmployeesAsync,
    [EmployeesApi.getEmployeesCountAsync.key]: EmployeesApi.getEmployeesCountAsync,
    [EmployeesApi.updateEmployeeAsync.key]: EmployeesApi.updateEmployeeAsync,
    [EmployersApi.createEmployerAsync.key]: EmployersApi.createEmployerAsync,
    [EmployersApi.deleteEmployerAsync.key]: EmployersApi.deleteEmployerAsync,
    [EmployersApi.getEmployerByIdAsync.key]: EmployersApi.getEmployerByIdAsync,
    [EmployersApi.getEmployersAsync.key]: EmployersApi.getEmployersAsync,
    [EmployersApi.getEmployersCountAsync.key]: EmployersApi.getEmployersCountAsync,
    [EmployersApi.updateEmployerAsync.key]: EmployersApi.updateEmployerAsync,
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
    [GigsApi.createGigAsync.key]: GigsApi.createGigAsync,
    [GigsApi.deleteGigAsync.key]: GigsApi.deleteGigAsync,
    [GigsApi.getGigByIdAsync.key]: GigsApi.getGigByIdAsync,
    [GigsApi.getGigsAsync.key]: GigsApi.getGigsAsync,
    [GigsApi.getGigsCountAsync.key]: GigsApi.getGigsCountAsync,
    [GigsApi.updateGigAsync.key]: GigsApi.updateGigAsync,
    [JobOffersApi.createJobOfferAsync.key]: JobOffersApi.createJobOfferAsync,
    [JobOffersApi.deleteJobOfferAsync.key]: JobOffersApi.deleteJobOfferAsync,
    [JobOffersApi.getJobOfferByIdAsync.key]: JobOffersApi.getJobOfferByIdAsync,
    [JobOffersApi.getJobOffersAsync.key]: JobOffersApi.getJobOffersAsync,
    [JobOffersApi.getJobOffersCountAsync.key]: JobOffersApi.getJobOffersCountAsync,
    [JobOffersApi.updateJobOfferAsync.key]: JobOffersApi.updateJobOfferAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
