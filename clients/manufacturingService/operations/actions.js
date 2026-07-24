const FenixAllianceABSWebApi = require('../apis/FenixAllianceABSWebApi');
const ProductionPlansApi = require('../apis/ProductionPlansApi');
const WorkOrderTypesApi = require('../apis/WorkOrderTypesApi');
const WorkOrdersApi = require('../apis/WorkOrdersApi');
const WorkstationsApi = require('../apis/WorkstationsApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [FenixAllianceABSWebApi.accountLogoutPost.key]: FenixAllianceABSWebApi.accountLogoutPost,
    [FenixAllianceABSWebApi.accountManageDownloadPersonalDataPost.key]: FenixAllianceABSWebApi.accountManageDownloadPersonalDataPost,
    [FenixAllianceABSWebApi.accountManageLinkExternalLoginPost.key]: FenixAllianceABSWebApi.accountManageLinkExternalLoginPost,
    [FenixAllianceABSWebApi.accountPerformExternalLoginPost.key]: FenixAllianceABSWebApi.accountPerformExternalLoginPost,
    [FenixAllianceABSWebApi.apiV2AIServiceAgentsAgentIdAguiPost.key]: FenixAllianceABSWebApi.apiV2AIServiceAgentsAgentIdAguiPost,
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
    [ProductionPlansApi.createProductionPlanAsync.key]: ProductionPlansApi.createProductionPlanAsync,
    [ProductionPlansApi.deleteProductionPlanAsync.key]: ProductionPlansApi.deleteProductionPlanAsync,
    [ProductionPlansApi.getProductionPlanByIdAsync.key]: ProductionPlansApi.getProductionPlanByIdAsync,
    [ProductionPlansApi.getProductionPlansAsync.key]: ProductionPlansApi.getProductionPlansAsync,
    [ProductionPlansApi.getProductionPlansCountAsync.key]: ProductionPlansApi.getProductionPlansCountAsync,
    [ProductionPlansApi.patchProductionPlanAsync.key]: ProductionPlansApi.patchProductionPlanAsync,
    [ProductionPlansApi.updateProductionPlanAsync.key]: ProductionPlansApi.updateProductionPlanAsync,
    [WorkOrderTypesApi.createWorkOrderTypeAsync.key]: WorkOrderTypesApi.createWorkOrderTypeAsync,
    [WorkOrderTypesApi.deleteWorkOrderTypeAsync.key]: WorkOrderTypesApi.deleteWorkOrderTypeAsync,
    [WorkOrderTypesApi.getWorkOrderTypeByIdAsync.key]: WorkOrderTypesApi.getWorkOrderTypeByIdAsync,
    [WorkOrderTypesApi.getWorkOrderTypesAsync.key]: WorkOrderTypesApi.getWorkOrderTypesAsync,
    [WorkOrderTypesApi.getWorkOrderTypesCountAsync.key]: WorkOrderTypesApi.getWorkOrderTypesCountAsync,
    [WorkOrderTypesApi.patchWorkOrderTypeAsync.key]: WorkOrderTypesApi.patchWorkOrderTypeAsync,
    [WorkOrderTypesApi.updateWorkOrderTypeAsync.key]: WorkOrderTypesApi.updateWorkOrderTypeAsync,
    [WorkOrdersApi.createWorkOrderAsync.key]: WorkOrdersApi.createWorkOrderAsync,
    [WorkOrdersApi.deleteWorkOrderAsync.key]: WorkOrdersApi.deleteWorkOrderAsync,
    [WorkOrdersApi.getWorkOrderByIdAsync.key]: WorkOrdersApi.getWorkOrderByIdAsync,
    [WorkOrdersApi.getWorkOrdersAsync.key]: WorkOrdersApi.getWorkOrdersAsync,
    [WorkOrdersApi.getWorkOrdersCountAsync.key]: WorkOrdersApi.getWorkOrdersCountAsync,
    [WorkOrdersApi.patchWorkOrderAsync.key]: WorkOrdersApi.patchWorkOrderAsync,
    [WorkOrdersApi.updateWorkOrderAsync.key]: WorkOrdersApi.updateWorkOrderAsync,
    [WorkstationsApi.createWorkstationAsync.key]: WorkstationsApi.createWorkstationAsync,
    [WorkstationsApi.deleteWorkstationAsync.key]: WorkstationsApi.deleteWorkstationAsync,
    [WorkstationsApi.getWorkstationByIdAsync.key]: WorkstationsApi.getWorkstationByIdAsync,
    [WorkstationsApi.getWorkstationsAsync.key]: WorkstationsApi.getWorkstationsAsync,
    [WorkstationsApi.getWorkstationsCountAsync.key]: WorkstationsApi.getWorkstationsCountAsync,
    [WorkstationsApi.patchWorkstationAsync.key]: WorkstationsApi.patchWorkstationAsync,
    [WorkstationsApi.updateWorkstationAsync.key]: WorkstationsApi.updateWorkstationAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
