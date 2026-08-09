const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}initiation`,
                label: `[${labelPrefix}initiation]`,
                type: 'string',
                choices: [
                    'Unknown',
                    'Http',
                    'Workflow',
                    'ScheduledJob',
                    'Event',
                    'AiTool',
                    'Mcp',
                    'Integration',
                    'System',
                    'Manual',
                ],
            },
            {
                key: `${keyPrefix}onBehalfOfActorId`,
                label: `[${labelPrefix}onBehalfOfActorId]`,
                dict: true,
            },
            {
                key: `${keyPrefix}onBehalfOfActorKind`,
                label: `[${labelPrefix}onBehalfOfActorKind]`,
                type: 'string',
                choices: [
                    'Human',
                    'Agent',
                    'Application',
                    'Service',
                    'System',
                ],
            },
            {
                key: `${keyPrefix}causationId`,
                label: `[${labelPrefix}causationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}originatingWorkflowInstanceId`,
                label: `[${labelPrefix}originatingWorkflowInstanceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}eventDepth`,
                label: `[${labelPrefix}eventDepth]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'initiation': bundle.inputData?.[`${keyPrefix}initiation`],
            'onBehalfOfActorId': bundle.inputData?.[`${keyPrefix}onBehalfOfActorId`],
            'onBehalfOfActorKind': bundle.inputData?.[`${keyPrefix}onBehalfOfActorKind`],
            'causationId': bundle.inputData?.[`${keyPrefix}causationId`],
            'originatingWorkflowInstanceId': bundle.inputData?.[`${keyPrefix}originatingWorkflowInstanceId`],
            'eventDepth': bundle.inputData?.[`${keyPrefix}eventDepth`],
        }
    },
}
