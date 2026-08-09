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
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}kind`,
                label: `[${labelPrefix}kind]`,
                type: 'string',
                choices: [
                    'Event',
                    'Command',
                ],
            },
            {
                key: `${keyPrefix}messageType`,
                label: `[${labelPrefix}messageType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
                choices: [
                    'Pending',
                    'Processing',
                    'Succeeded',
                    'Failed',
                    'DeadLettered',
                    'Cancelled',
                ],
            },
            {
                key: `${keyPrefix}attempts`,
                label: `[${labelPrefix}attempts]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}maxAttempts`,
                label: `[${labelPrefix}maxAttempts]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}failureCode`,
                label: `[${labelPrefix}failureCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}failureReason`,
                label: `[${labelPrefix}failureReason]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}idempotencyKey`,
                label: `[${labelPrefix}idempotencyKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}correlationId`,
                label: `[${labelPrefix}correlationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lockedBy`,
                label: `[${labelPrefix}lockedBy]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lockedUntilUtc`,
                label: `[${labelPrefix}lockedUntilUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}availableAtUtc`,
                label: `[${labelPrefix}availableAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}createdAtUtc`,
                label: `[${labelPrefix}createdAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastAttemptAtUtc`,
                label: `[${labelPrefix}lastAttemptAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}processedAtUtc`,
                label: `[${labelPrefix}processedAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}failedAtUtc`,
                label: `[${labelPrefix}failedAtUtc]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'kind': bundle.inputData?.[`${keyPrefix}kind`],
            'messageType': bundle.inputData?.[`${keyPrefix}messageType`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'attempts': bundle.inputData?.[`${keyPrefix}attempts`],
            'maxAttempts': bundle.inputData?.[`${keyPrefix}maxAttempts`],
            'failureCode': bundle.inputData?.[`${keyPrefix}failureCode`],
            'failureReason': bundle.inputData?.[`${keyPrefix}failureReason`],
            'idempotencyKey': bundle.inputData?.[`${keyPrefix}idempotencyKey`],
            'correlationId': bundle.inputData?.[`${keyPrefix}correlationId`],
            'lockedBy': bundle.inputData?.[`${keyPrefix}lockedBy`],
            'lockedUntilUtc': bundle.inputData?.[`${keyPrefix}lockedUntilUtc`],
            'availableAtUtc': bundle.inputData?.[`${keyPrefix}availableAtUtc`],
            'createdAtUtc': bundle.inputData?.[`${keyPrefix}createdAtUtc`],
            'lastAttemptAtUtc': bundle.inputData?.[`${keyPrefix}lastAttemptAtUtc`],
            'processedAtUtc': bundle.inputData?.[`${keyPrefix}processedAtUtc`],
            'failedAtUtc': bundle.inputData?.[`${keyPrefix}failedAtUtc`],
        }
    },
}
