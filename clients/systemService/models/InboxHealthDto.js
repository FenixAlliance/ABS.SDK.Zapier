const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enabled`,
                label: `[${labelPrefix}enabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}receivedCount`,
                label: `[${labelPrefix}receivedCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}acceptedCount`,
                label: `[${labelPrefix}acceptedCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}processingCount`,
                label: `[${labelPrefix}processingCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}retryScheduledCount`,
                label: `[${labelPrefix}retryScheduledCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}rejectedCount`,
                label: `[${labelPrefix}rejectedCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}quarantinedCount`,
                label: `[${labelPrefix}quarantinedCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}deadLetterCount`,
                label: `[${labelPrefix}deadLetterCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}cancelledCount`,
                label: `[${labelPrefix}cancelledCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}oldestAcceptedAgeSeconds`,
                label: `[${labelPrefix}oldestAcceptedAgeSeconds]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}lastSuccessfulProcessingUtc`,
                label: `[${labelPrefix}lastSuccessfulProcessingUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}successfulProcessingTracked`,
                label: `[${labelPrefix}successfulProcessingTracked]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enabled': bundle.inputData?.[`${keyPrefix}enabled`],
            'receivedCount': bundle.inputData?.[`${keyPrefix}receivedCount`],
            'acceptedCount': bundle.inputData?.[`${keyPrefix}acceptedCount`],
            'processingCount': bundle.inputData?.[`${keyPrefix}processingCount`],
            'retryScheduledCount': bundle.inputData?.[`${keyPrefix}retryScheduledCount`],
            'rejectedCount': bundle.inputData?.[`${keyPrefix}rejectedCount`],
            'quarantinedCount': bundle.inputData?.[`${keyPrefix}quarantinedCount`],
            'deadLetterCount': bundle.inputData?.[`${keyPrefix}deadLetterCount`],
            'cancelledCount': bundle.inputData?.[`${keyPrefix}cancelledCount`],
            'oldestAcceptedAgeSeconds': bundle.inputData?.[`${keyPrefix}oldestAcceptedAgeSeconds`],
            'lastSuccessfulProcessingUtc': bundle.inputData?.[`${keyPrefix}lastSuccessfulProcessingUtc`],
            'successfulProcessingTracked': bundle.inputData?.[`${keyPrefix}successfulProcessingTracked`],
        }
    },
}
