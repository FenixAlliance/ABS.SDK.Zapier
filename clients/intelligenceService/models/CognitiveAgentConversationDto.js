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
                key: `${keyPrefix}cognitiveAgentId`,
                label: `[${labelPrefix}cognitiveAgentId]`,
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
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}claimed`,
                label: `[${labelPrefix}claimed]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}current`,
                label: `[${labelPrefix}current]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}channelID`,
                label: `[${labelPrefix}channelID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}conversationID`,
                label: `[${labelPrefix}conversationID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}activityID`,
                label: `[${labelPrefix}activityID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}activityFrom`,
                label: `[${labelPrefix}activityFrom]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}state`,
                label: `[${labelPrefix}state]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastActivity`,
                label: `[${labelPrefix}lastActivity]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accountHolderId`,
                label: `[${labelPrefix}accountHolderId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}individualId`,
                label: `[${labelPrefix}individualId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}organizationId`,
                label: `[${labelPrefix}organizationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}receiverBusinessId`,
                label: `[${labelPrefix}receiverBusinessId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'cognitiveAgentId': bundle.inputData?.[`${keyPrefix}cognitiveAgentId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'claimed': bundle.inputData?.[`${keyPrefix}claimed`],
            'current': bundle.inputData?.[`${keyPrefix}current`],
            'channelID': bundle.inputData?.[`${keyPrefix}channelID`],
            'conversationID': bundle.inputData?.[`${keyPrefix}conversationID`],
            'activityID': bundle.inputData?.[`${keyPrefix}activityID`],
            'activityFrom': bundle.inputData?.[`${keyPrefix}activityFrom`],
            'state': bundle.inputData?.[`${keyPrefix}state`],
            'lastActivity': bundle.inputData?.[`${keyPrefix}lastActivity`],
            'accountHolderId': bundle.inputData?.[`${keyPrefix}accountHolderId`],
            'individualId': bundle.inputData?.[`${keyPrefix}individualId`],
            'organizationId': bundle.inputData?.[`${keyPrefix}organizationId`],
            'receiverBusinessId': bundle.inputData?.[`${keyPrefix}receiverBusinessId`],
        }
    },
}
