const utils = require('../utils/utils');
const PostingBookResultDto = require('../models/PostingBookResultDto');

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
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}postingIntentId`,
                label: `[${labelPrefix}postingIntentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}postingIdempotencyKey`,
                label: `[${labelPrefix}postingIdempotencyKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}intentType`,
                label: `[${labelPrefix}intentType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}postingOperation`,
                label: `[${labelPrefix}postingOperation]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceDocumentType`,
                label: `[${labelPrefix}sourceDocumentType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceDocumentId`,
                label: `[${labelPrefix}sourceDocumentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
                choices: [
                    'Received',
                    'Processing',
                    'Posted',
                    'Duplicate',
                    'PendingMapping',
                    'PendingPeriod',
                    'PendingRate',
                    'Rejected',
                ],
            },
            {
                key: `${keyPrefix}failureKind`,
                label: `[${labelPrefix}failureKind]`,
                type: 'string',
                choices: [
                    'UnknownOperation',
                    'UnknownRole',
                    'AmbiguousPolicy',
                    'MissingAccountMapping',
                    'MissingFinancialBook',
                    'MissingJournal',
                    'ClosedPeriod',
                    'MissingFxRate',
                    'InvalidFxEvidence',
                    'UnbalancedPlan',
                    'DuplicateIntent',
                    'DuplicateBookPosting',
                    'InvalidPartyReference',
                    'InvalidCustodyContext',
                    'PolicyConfigurationError',
                ],
            },
            {
                key: `${keyPrefix}failureCode`,
                label: `[${labelPrefix}failureCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}retryable`,
                label: `[${labelPrefix}retryable]`,
                type: 'boolean',
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
                key: `${keyPrefix}receivedAtUtc`,
                label: `[${labelPrefix}receivedAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}processingStartedAtUtc`,
                label: `[${labelPrefix}processingStartedAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}completedAtUtc`,
                label: `[${labelPrefix}completedAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bookResults`,
                label: `[${labelPrefix}bookResults]`,
                children: PostingBookResultDto.fields(`${keyPrefix}bookResults${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}failureClass`,
                label: `[${labelPrefix}failureClass]`,
                type: 'string',
                choices: [
                    'Retryable',
                    'OperatorActionRequired',
                    'ConfigurationError',
                    'ProducerError',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'postingIntentId': bundle.inputData?.[`${keyPrefix}postingIntentId`],
            'postingIdempotencyKey': bundle.inputData?.[`${keyPrefix}postingIdempotencyKey`],
            'intentType': bundle.inputData?.[`${keyPrefix}intentType`],
            'postingOperation': bundle.inputData?.[`${keyPrefix}postingOperation`],
            'sourceDocumentType': bundle.inputData?.[`${keyPrefix}sourceDocumentType`],
            'sourceDocumentId': bundle.inputData?.[`${keyPrefix}sourceDocumentId`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'failureKind': bundle.inputData?.[`${keyPrefix}failureKind`],
            'failureCode': bundle.inputData?.[`${keyPrefix}failureCode`],
            'retryable': bundle.inputData?.[`${keyPrefix}retryable`],
            'correlationId': bundle.inputData?.[`${keyPrefix}correlationId`],
            'causationId': bundle.inputData?.[`${keyPrefix}causationId`],
            'receivedAtUtc': bundle.inputData?.[`${keyPrefix}receivedAtUtc`],
            'processingStartedAtUtc': bundle.inputData?.[`${keyPrefix}processingStartedAtUtc`],
            'completedAtUtc': bundle.inputData?.[`${keyPrefix}completedAtUtc`],
            'bookResults': utils.childMapping(bundle.inputData?.[`${keyPrefix}bookResults`], `${keyPrefix}bookResults`, PostingBookResultDto),
            'failureClass': bundle.inputData?.[`${keyPrefix}failureClass`],
        }
    },
}
