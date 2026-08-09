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
                key: `${keyPrefix}state`,
                label: `[${labelPrefix}state]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}current`,
                label: `[${labelPrefix}current]`,
                type: 'boolean',
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
            'channelID': bundle.inputData?.[`${keyPrefix}channelID`],
            'conversationID': bundle.inputData?.[`${keyPrefix}conversationID`],
            'state': bundle.inputData?.[`${keyPrefix}state`],
            'current': bundle.inputData?.[`${keyPrefix}current`],
            'accountHolderId': bundle.inputData?.[`${keyPrefix}accountHolderId`],
            'individualId': bundle.inputData?.[`${keyPrefix}individualId`],
            'organizationId': bundle.inputData?.[`${keyPrefix}organizationId`],
            'receiverBusinessId': bundle.inputData?.[`${keyPrefix}receiverBusinessId`],
        }
    },
}
