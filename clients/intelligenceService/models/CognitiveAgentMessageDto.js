const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cognitiveAgentConversationId`,
                label: `[${labelPrefix}cognitiveAgentConversationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cognitiveAgentId`,
                label: `[${labelPrefix}cognitiveAgentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}role`,
                label: `[${labelPrefix}role]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}content`,
                label: `[${labelPrefix}content]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sequence`,
                label: `[${labelPrefix}sequence]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}creationDate`,
                label: `[${labelPrefix}creationDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}metadataJson`,
                label: `[${labelPrefix}metadataJson]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}aiRunId`,
                label: `[${labelPrefix}aiRunId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'cognitiveAgentConversationId': bundle.inputData?.[`${keyPrefix}cognitiveAgentConversationId`],
            'cognitiveAgentId': bundle.inputData?.[`${keyPrefix}cognitiveAgentId`],
            'role': bundle.inputData?.[`${keyPrefix}role`],
            'content': bundle.inputData?.[`${keyPrefix}content`],
            'sequence': bundle.inputData?.[`${keyPrefix}sequence`],
            'creationDate': bundle.inputData?.[`${keyPrefix}creationDate`],
            'metadataJson': bundle.inputData?.[`${keyPrefix}metadataJson`],
            'aiRunId': bundle.inputData?.[`${keyPrefix}aiRunId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
        }
    },
}
