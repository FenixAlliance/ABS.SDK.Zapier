const EmployeesApi = require('../apis/EmployeesApi');
const EmployersApi = require('../apis/EmployersApi');
const FenixAllianceABPWebApi = require('../apis/FenixAllianceABPWebApi');
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
