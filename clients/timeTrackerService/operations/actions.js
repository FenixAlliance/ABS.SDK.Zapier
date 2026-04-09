const FenixAllianceABPWebApi = require('../apis/FenixAllianceABPWebApi');
const ProjectTimeLogsApi = require('../apis/ProjectTimeLogsApi');
const TimeLogApprovalsApi = require('../apis/TimeLogApprovalsApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
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
    [ProjectTimeLogsApi.countProjectPeriodTimeLogsAsync.key]: ProjectTimeLogsApi.countProjectPeriodTimeLogsAsync,
    [ProjectTimeLogsApi.createProjectTimeLogAsync.key]: ProjectTimeLogsApi.createProjectTimeLogAsync,
    [ProjectTimeLogsApi.deleteProjectTimeLogAsync.key]: ProjectTimeLogsApi.deleteProjectTimeLogAsync,
    [ProjectTimeLogsApi.getProjectPeriodTimeLogsAsync.key]: ProjectTimeLogsApi.getProjectPeriodTimeLogsAsync,
    [ProjectTimeLogsApi.getProjectTimeLogByIdAsync.key]: ProjectTimeLogsApi.getProjectTimeLogByIdAsync,
    [ProjectTimeLogsApi.getProjectTimeLogsAsync.key]: ProjectTimeLogsApi.getProjectTimeLogsAsync,
    [ProjectTimeLogsApi.getProjectTimeLogsByResponsibleContactAsync.key]: ProjectTimeLogsApi.getProjectTimeLogsByResponsibleContactAsync,
    [ProjectTimeLogsApi.getProjectTimeLogsCreatedByContactAsync.key]: ProjectTimeLogsApi.getProjectTimeLogsCreatedByContactAsync,
    [ProjectTimeLogsApi.updateProjectTimeLogAsync.key]: ProjectTimeLogsApi.updateProjectTimeLogAsync,
    [TimeLogApprovalsApi.requestProjectHoursApprovalAsync.key]: TimeLogApprovalsApi.requestProjectHoursApprovalAsync,
    [TimeLogApprovalsApi.updateProjectHoursApprovalApproverAsync.key]: TimeLogApprovalsApi.updateProjectHoursApprovalApproverAsync,
    [TimeLogApprovalsApi.updateProjectHoursApprovalStatusAsync.key]: TimeLogApprovalsApi.updateProjectHoursApprovalStatusAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
