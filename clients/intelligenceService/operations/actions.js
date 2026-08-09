const AiProvidersApi = require('../apis/AiProvidersApi');
const CapabilitiesApi = require('../apis/CapabilitiesApi');
const CognitiveAgentConversationAttachmentsApi = require('../apis/CognitiveAgentConversationAttachmentsApi');
const CognitiveAgentConversationsApi = require('../apis/CognitiveAgentConversationsApi');
const CognitiveAgentMessagesApi = require('../apis/CognitiveAgentMessagesApi');
const CognitiveAgentSkillsApi = require('../apis/CognitiveAgentSkillsApi');
const CognitiveAgentVariablesApi = require('../apis/CognitiveAgentVariablesApi');
const CognitiveAgentsApi = require('../apis/CognitiveAgentsApi');
const CognitiveSkillsApi = require('../apis/CognitiveSkillsApi');
const FenixAllianceABSWebApi = require('../apis/FenixAllianceABSWebApi');
const IntelligenceServiceApi = require('../apis/IntelligenceServiceApi');
const { triggerMiddleware, isTrigger, searchMiddleware, hasSearchRequisites, isSearchAction, isCreateAction } = require('../utils/utils');

const actions = {
    [AiProvidersApi.getAiProvidersAsync.key]: AiProvidersApi.getAiProvidersAsync,
    [CapabilitiesApi.getCapabilitiesAsync.key]: CapabilitiesApi.getCapabilitiesAsync,
    [CapabilitiesApi.getCapabilitiesCountAsync.key]: CapabilitiesApi.getCapabilitiesCountAsync,
    [CapabilitiesApi.getCapabilityByKeyAsync.key]: CapabilitiesApi.getCapabilityByKeyAsync,
    [CognitiveAgentConversationAttachmentsApi.uploadCognitiveAgentConversationAttachmentAsync.key]: CognitiveAgentConversationAttachmentsApi.uploadCognitiveAgentConversationAttachmentAsync,
    [CognitiveAgentConversationsApi.createCognitiveAgentConversationAsync.key]: CognitiveAgentConversationsApi.createCognitiveAgentConversationAsync,
    [CognitiveAgentConversationsApi.deleteCognitiveAgentConversationAsync.key]: CognitiveAgentConversationsApi.deleteCognitiveAgentConversationAsync,
    [CognitiveAgentConversationsApi.getCognitiveAgentConversationByIdAsync.key]: CognitiveAgentConversationsApi.getCognitiveAgentConversationByIdAsync,
    [CognitiveAgentConversationsApi.getCognitiveAgentConversationsAsync.key]: CognitiveAgentConversationsApi.getCognitiveAgentConversationsAsync,
    [CognitiveAgentConversationsApi.getCognitiveAgentConversationsCountAsync.key]: CognitiveAgentConversationsApi.getCognitiveAgentConversationsCountAsync,
    [CognitiveAgentConversationsApi.updateCognitiveAgentConversationAsync.key]: CognitiveAgentConversationsApi.updateCognitiveAgentConversationAsync,
    [CognitiveAgentMessagesApi.getCognitiveAgentMessageByIdAsync.key]: CognitiveAgentMessagesApi.getCognitiveAgentMessageByIdAsync,
    [CognitiveAgentMessagesApi.getCognitiveAgentMessagesAsync.key]: CognitiveAgentMessagesApi.getCognitiveAgentMessagesAsync,
    [CognitiveAgentMessagesApi.getCognitiveAgentMessagesCountAsync.key]: CognitiveAgentMessagesApi.getCognitiveAgentMessagesCountAsync,
    [CognitiveAgentSkillsApi.createCognitiveAgentSkillAsync.key]: CognitiveAgentSkillsApi.createCognitiveAgentSkillAsync,
    [CognitiveAgentSkillsApi.deleteCognitiveAgentSkillAsync.key]: CognitiveAgentSkillsApi.deleteCognitiveAgentSkillAsync,
    [CognitiveAgentSkillsApi.getCognitiveAgentSkillByIdAsync.key]: CognitiveAgentSkillsApi.getCognitiveAgentSkillByIdAsync,
    [CognitiveAgentSkillsApi.getCognitiveAgentSkillsAsync.key]: CognitiveAgentSkillsApi.getCognitiveAgentSkillsAsync,
    [CognitiveAgentSkillsApi.getCognitiveAgentSkillsCountAsync.key]: CognitiveAgentSkillsApi.getCognitiveAgentSkillsCountAsync,
    [CognitiveAgentSkillsApi.updateCognitiveAgentSkillAsync.key]: CognitiveAgentSkillsApi.updateCognitiveAgentSkillAsync,
    [CognitiveAgentVariablesApi.createCognitiveAgentVariableAsync.key]: CognitiveAgentVariablesApi.createCognitiveAgentVariableAsync,
    [CognitiveAgentVariablesApi.deleteCognitiveAgentVariableAsync.key]: CognitiveAgentVariablesApi.deleteCognitiveAgentVariableAsync,
    [CognitiveAgentVariablesApi.getCognitiveAgentVariableByIdAsync.key]: CognitiveAgentVariablesApi.getCognitiveAgentVariableByIdAsync,
    [CognitiveAgentVariablesApi.getCognitiveAgentVariablesAsync.key]: CognitiveAgentVariablesApi.getCognitiveAgentVariablesAsync,
    [CognitiveAgentVariablesApi.getCognitiveAgentVariablesCountAsync.key]: CognitiveAgentVariablesApi.getCognitiveAgentVariablesCountAsync,
    [CognitiveAgentVariablesApi.updateCognitiveAgentVariableAsync.key]: CognitiveAgentVariablesApi.updateCognitiveAgentVariableAsync,
    [CognitiveAgentsApi.createCognitiveAgentAsync.key]: CognitiveAgentsApi.createCognitiveAgentAsync,
    [CognitiveAgentsApi.deleteCognitiveAgentAsync.key]: CognitiveAgentsApi.deleteCognitiveAgentAsync,
    [CognitiveAgentsApi.getCognitiveAgentByIdAsync.key]: CognitiveAgentsApi.getCognitiveAgentByIdAsync,
    [CognitiveAgentsApi.getCognitiveAgentsAsync.key]: CognitiveAgentsApi.getCognitiveAgentsAsync,
    [CognitiveAgentsApi.getCognitiveAgentsCountAsync.key]: CognitiveAgentsApi.getCognitiveAgentsCountAsync,
    [CognitiveAgentsApi.updateCognitiveAgentAsync.key]: CognitiveAgentsApi.updateCognitiveAgentAsync,
    [CognitiveSkillsApi.createCognitiveSkillAsync.key]: CognitiveSkillsApi.createCognitiveSkillAsync,
    [CognitiveSkillsApi.deleteCognitiveSkillAsync.key]: CognitiveSkillsApi.deleteCognitiveSkillAsync,
    [CognitiveSkillsApi.getCognitiveSkillByIdAsync.key]: CognitiveSkillsApi.getCognitiveSkillByIdAsync,
    [CognitiveSkillsApi.getCognitiveSkillsAsync.key]: CognitiveSkillsApi.getCognitiveSkillsAsync,
    [CognitiveSkillsApi.getCognitiveSkillsCountAsync.key]: CognitiveSkillsApi.getCognitiveSkillsCountAsync,
    [CognitiveSkillsApi.updateCognitiveSkillAsync.key]: CognitiveSkillsApi.updateCognitiveSkillAsync,
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
    [IntelligenceServiceApi.invokeAgentSurfaceAsync.key]: IntelligenceServiceApi.invokeAgentSurfaceAsync,
}

module.exports = {
    searchActions: () => Object.entries(actions).reduce((actions, [key, value]) => isSearchAction(key) && hasSearchRequisites(value) ? {...actions, [key]: searchMiddleware(value)} : actions, {}),
    createActions: () => Object.entries(actions).reduce((actions, [key, value]) => isCreateAction(key) ? {...actions, [key]: value} : actions, {}),
    triggers: () => Object.entries(actions).reduce((actions, [key, value]) => isTrigger(key) ? {...actions, [key]: triggerMiddleware(value)} : actions, {}),
}
