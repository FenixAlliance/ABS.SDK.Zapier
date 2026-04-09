const FenixAllianceABPWebApi = require('../apis/FenixAllianceABPWebApi');
const ProjectsApi = require('../apis/ProjectsApi');
const TaskCategoriesApi = require('../apis/TaskCategoriesApi');
const TaskTypesApi = require('../apis/TaskTypesApi');
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
    [ProjectsApi.createProjectAsync.key]: ProjectsApi.createProjectAsync,
    [ProjectsApi.createProjectPeriodAsync.key]: ProjectsApi.createProjectPeriodAsync,
    [ProjectsApi.createProjectTaskAsync.key]: ProjectsApi.createProjectTaskAsync,
    [ProjectsApi.deleteProjectAsync.key]: ProjectsApi.deleteProjectAsync,
    [ProjectsApi.deleteProjectPeriodAsync.key]: ProjectsApi.deleteProjectPeriodAsync,
    [ProjectsApi.deleteProjectTaskAsync.key]: ProjectsApi.deleteProjectTaskAsync,
    [ProjectsApi.getProjectByIdAsync.key]: ProjectsApi.getProjectByIdAsync,
    [ProjectsApi.getProjectPeriodsAsync.key]: ProjectsApi.getProjectPeriodsAsync,
    [ProjectsApi.getProjectTaskCategoriesAsync.key]: ProjectsApi.getProjectTaskCategoriesAsync,
    [ProjectsApi.getProjectTaskCategoriesCountAsync.key]: ProjectsApi.getProjectTaskCategoriesCountAsync,
    [ProjectsApi.getProjectTasksAsync.key]: ProjectsApi.getProjectTasksAsync,
    [ProjectsApi.getProjectTasksCountAsync.key]: ProjectsApi.getProjectTasksCountAsync,
    [ProjectsApi.getProjectTimeLogsAsync.key]: ProjectsApi.getProjectTimeLogsAsync,
    [ProjectsApi.getProjectTimeLogsCountAsync.key]: ProjectsApi.getProjectTimeLogsCountAsync,
    [ProjectsApi.getProjectsByTenantIdAsync.key]: ProjectsApi.getProjectsByTenantIdAsync,
    [ProjectsApi.getProjectsCountByTenantIdAsync.key]: ProjectsApi.getProjectsCountByTenantIdAsync,
    [ProjectsApi.updateProjectAsync.key]: ProjectsApi.updateProjectAsync,
    [ProjectsApi.updateProjectPeriodAsync.key]: ProjectsApi.updateProjectPeriodAsync,
    [ProjectsApi.updateProjectTaskAsync.key]: ProjectsApi.updateProjectTaskAsync,
    [TaskCategoriesApi.countTenantTaskCategoriesAsync.key]: TaskCategoriesApi.countTenantTaskCategoriesAsync,
    [TaskCategoriesApi.createTaskCategoryAsync.key]: TaskCategoriesApi.createTaskCategoryAsync,
    [TaskCategoriesApi.deleteTaskCategoryAsync.key]: TaskCategoriesApi.deleteTaskCategoryAsync,
    [TaskCategoriesApi.getTaskCategoryByIdAsync.key]: TaskCategoriesApi.getTaskCategoryByIdAsync,
    [TaskCategoriesApi.getTaskCategoryTaskTypesAsync.key]: TaskCategoriesApi.getTaskCategoryTaskTypesAsync,
    [TaskCategoriesApi.getTenantTaskCategoriesAsync.key]: TaskCategoriesApi.getTenantTaskCategoriesAsync,
    [TaskCategoriesApi.updateTaskCategoryAsync.key]: TaskCategoriesApi.updateTaskCategoryAsync,
    [TaskTypesApi.createTaskTypeAsync.key]: TaskTypesApi.createTaskTypeAsync,
    [TaskTypesApi.deleteTaskTypeAsync.key]: TaskTypesApi.deleteTaskTypeAsync,
    [TaskTypesApi.getTaskTypeByIdAsync.key]: TaskTypesApi.getTaskTypeByIdAsync,
    [TaskTypesApi.updateTaskTypeAsync.key]: TaskTypesApi.updateTaskTypeAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
