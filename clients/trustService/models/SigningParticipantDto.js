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
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signingRequestId`,
                label: `[${labelPrefix}signingRequestId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactName`,
                label: `[${labelPrefix}contactName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}role`,
                label: `[${labelPrefix}role]`,
                type: 'string',
                choices: [
                    'Signer',
                    'Approver',
                    'Viewer',
                    'Witness',
                    'CarbonCopy',
                    'System',
                ],
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
                choices: [
                    'Pending',
                    'Sent',
                    'Viewed',
                    'Signed',
                    'Approved',
                    'Declined',
                    'Skipped',
                    'Expired',
                    'Failed',
                ],
            },
            {
                key: `${keyPrefix}routingOrder`,
                label: `[${labelPrefix}routingOrder]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}sentAtUtc`,
                label: `[${labelPrefix}sentAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}viewedAtUtc`,
                label: `[${labelPrefix}viewedAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signedAtUtc`,
                label: `[${labelPrefix}signedAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}approvedAtUtc`,
                label: `[${labelPrefix}approvedAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}declinedAtUtc`,
                label: `[${labelPrefix}declinedAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}declineReason`,
                label: `[${labelPrefix}declineReason]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signatureId`,
                label: `[${labelPrefix}signatureId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accessTokenExpiresAtUtc`,
                label: `[${labelPrefix}accessTokenExpiresAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}correlationId`,
                label: `[${labelPrefix}correlationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}externalReference`,
                label: `[${labelPrefix}externalReference]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'signingRequestId': bundle.inputData?.[`${keyPrefix}signingRequestId`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'contactName': bundle.inputData?.[`${keyPrefix}contactName`],
            'role': bundle.inputData?.[`${keyPrefix}role`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'routingOrder': bundle.inputData?.[`${keyPrefix}routingOrder`],
            'sentAtUtc': bundle.inputData?.[`${keyPrefix}sentAtUtc`],
            'viewedAtUtc': bundle.inputData?.[`${keyPrefix}viewedAtUtc`],
            'signedAtUtc': bundle.inputData?.[`${keyPrefix}signedAtUtc`],
            'approvedAtUtc': bundle.inputData?.[`${keyPrefix}approvedAtUtc`],
            'declinedAtUtc': bundle.inputData?.[`${keyPrefix}declinedAtUtc`],
            'declineReason': bundle.inputData?.[`${keyPrefix}declineReason`],
            'signatureId': bundle.inputData?.[`${keyPrefix}signatureId`],
            'accessTokenExpiresAtUtc': bundle.inputData?.[`${keyPrefix}accessTokenExpiresAtUtc`],
            'correlationId': bundle.inputData?.[`${keyPrefix}correlationId`],
            'externalReference': bundle.inputData?.[`${keyPrefix}externalReference`],
        }
    },
}
