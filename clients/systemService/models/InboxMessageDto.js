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
                key: `${keyPrefix}sourceSystem`,
                label: `[${labelPrefix}sourceSystem]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceRegistrationId`,
                label: `[${labelPrefix}sourceRegistrationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}externalMessageId`,
                label: `[${labelPrefix}externalMessageId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}deduplicationKey`,
                label: `[${labelPrefix}deduplicationKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}deduplicationSignature`,
                label: `[${labelPrefix}deduplicationSignature]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}payloadDigest`,
                label: `[${labelPrefix}payloadDigest]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}deliveryCount`,
                label: `[${labelPrefix}deliveryCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}lastDuplicateReceivedAtUtc`,
                label: `[${labelPrefix}lastDuplicateReceivedAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}messageType`,
                label: `[${labelPrefix}messageType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}version`,
                label: `[${labelPrefix}version]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contentType`,
                label: `[${labelPrefix}contentType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
                choices: [
                    'Received',
                    'AuthenticityPending',
                    'Accepted',
                    'Processing',
                    'Succeeded',
                    'RetryScheduled',
                    'Rejected',
                    'Quarantined',
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
                key: `${keyPrefix}verificationStatus`,
                label: `[${labelPrefix}verificationStatus]`,
                type: 'string',
                choices: [
                    'Unverified',
                    'Verified',
                    'Failed',
                    'Untrusted',
                    'NotRequired',
                ],
            },
            {
                key: `${keyPrefix}verificationProfile`,
                label: `[${labelPrefix}verificationProfile]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}verificationAlgorithm`,
                label: `[${labelPrefix}verificationAlgorithm]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}verifiedAtUtc`,
                label: `[${labelPrefix}verifiedAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}generation`,
                label: `[${labelPrefix}generation]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}replayCount`,
                label: `[${labelPrefix}replayCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}originalInboxMessageId`,
                label: `[${labelPrefix}originalInboxMessageId]`,
                type: 'string',
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
                key: `${keyPrefix}correlationId`,
                label: `[${labelPrefix}correlationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}causationId`,
                label: `[${labelPrefix}causationId]`,
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
                key: `${keyPrefix}receivedAtUtc`,
                label: `[${labelPrefix}receivedAtUtc]`,
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
            'sourceSystem': bundle.inputData?.[`${keyPrefix}sourceSystem`],
            'sourceRegistrationId': bundle.inputData?.[`${keyPrefix}sourceRegistrationId`],
            'externalMessageId': bundle.inputData?.[`${keyPrefix}externalMessageId`],
            'deduplicationKey': bundle.inputData?.[`${keyPrefix}deduplicationKey`],
            'deduplicationSignature': bundle.inputData?.[`${keyPrefix}deduplicationSignature`],
            'payloadDigest': bundle.inputData?.[`${keyPrefix}payloadDigest`],
            'deliveryCount': bundle.inputData?.[`${keyPrefix}deliveryCount`],
            'lastDuplicateReceivedAtUtc': bundle.inputData?.[`${keyPrefix}lastDuplicateReceivedAtUtc`],
            'messageType': bundle.inputData?.[`${keyPrefix}messageType`],
            'version': bundle.inputData?.[`${keyPrefix}version`],
            'contentType': bundle.inputData?.[`${keyPrefix}contentType`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'attempts': bundle.inputData?.[`${keyPrefix}attempts`],
            'maxAttempts': bundle.inputData?.[`${keyPrefix}maxAttempts`],
            'verificationStatus': bundle.inputData?.[`${keyPrefix}verificationStatus`],
            'verificationProfile': bundle.inputData?.[`${keyPrefix}verificationProfile`],
            'verificationAlgorithm': bundle.inputData?.[`${keyPrefix}verificationAlgorithm`],
            'verifiedAtUtc': bundle.inputData?.[`${keyPrefix}verifiedAtUtc`],
            'generation': bundle.inputData?.[`${keyPrefix}generation`],
            'replayCount': bundle.inputData?.[`${keyPrefix}replayCount`],
            'originalInboxMessageId': bundle.inputData?.[`${keyPrefix}originalInboxMessageId`],
            'failureCode': bundle.inputData?.[`${keyPrefix}failureCode`],
            'failureReason': bundle.inputData?.[`${keyPrefix}failureReason`],
            'correlationId': bundle.inputData?.[`${keyPrefix}correlationId`],
            'causationId': bundle.inputData?.[`${keyPrefix}causationId`],
            'lockedBy': bundle.inputData?.[`${keyPrefix}lockedBy`],
            'lockedUntilUtc': bundle.inputData?.[`${keyPrefix}lockedUntilUtc`],
            'availableAtUtc': bundle.inputData?.[`${keyPrefix}availableAtUtc`],
            'receivedAtUtc': bundle.inputData?.[`${keyPrefix}receivedAtUtc`],
            'createdAtUtc': bundle.inputData?.[`${keyPrefix}createdAtUtc`],
            'lastAttemptAtUtc': bundle.inputData?.[`${keyPrefix}lastAttemptAtUtc`],
            'processedAtUtc': bundle.inputData?.[`${keyPrefix}processedAtUtc`],
            'failedAtUtc': bundle.inputData?.[`${keyPrefix}failedAtUtc`],
        }
    },
}
