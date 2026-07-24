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
                key: `${keyPrefix}signedDocumentId`,
                label: `[${labelPrefix}signedDocumentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signedDocumentTitle`,
                label: `[${labelPrefix}signedDocumentTitle]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}frozenSourceFileUploadId`,
                label: `[${labelPrefix}frozenSourceFileUploadId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceSha256`,
                label: `[${labelPrefix}sourceSha256]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
                choices: [
                    'Draft',
                    'Ready',
                    'Sent',
                    'InProgress',
                    'Completed',
                    'Declined',
                    'Voided',
                    'Expired',
                    'Failed',
                ],
            },
            {
                key: `${keyPrefix}routingMode`,
                label: `[${labelPrefix}routingMode]`,
                type: 'string',
                choices: [
                    'Parallel',
                    'Sequential',
                ],
            },
            {
                key: `${keyPrefix}createdAtUtc`,
                label: `[${labelPrefix}createdAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sentAtUtc`,
                label: `[${labelPrefix}sentAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}completedAtUtc`,
                label: `[${labelPrefix}completedAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expiresAtUtc`,
                label: `[${labelPrefix}expiresAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}voidedAtUtc`,
                label: `[${labelPrefix}voidedAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}voidedReason`,
                label: `[${labelPrefix}voidedReason]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
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
            'signedDocumentId': bundle.inputData?.[`${keyPrefix}signedDocumentId`],
            'signedDocumentTitle': bundle.inputData?.[`${keyPrefix}signedDocumentTitle`],
            'frozenSourceFileUploadId': bundle.inputData?.[`${keyPrefix}frozenSourceFileUploadId`],
            'sourceSha256': bundle.inputData?.[`${keyPrefix}sourceSha256`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'routingMode': bundle.inputData?.[`${keyPrefix}routingMode`],
            'createdAtUtc': bundle.inputData?.[`${keyPrefix}createdAtUtc`],
            'sentAtUtc': bundle.inputData?.[`${keyPrefix}sentAtUtc`],
            'completedAtUtc': bundle.inputData?.[`${keyPrefix}completedAtUtc`],
            'expiresAtUtc': bundle.inputData?.[`${keyPrefix}expiresAtUtc`],
            'voidedAtUtc': bundle.inputData?.[`${keyPrefix}voidedAtUtc`],
            'voidedReason': bundle.inputData?.[`${keyPrefix}voidedReason`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'correlationId': bundle.inputData?.[`${keyPrefix}correlationId`],
            'externalReference': bundle.inputData?.[`${keyPrefix}externalReference`],
        }
    },
}
