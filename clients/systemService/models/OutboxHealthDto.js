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
                key: `${keyPrefix}pendingCount`,
                label: `[${labelPrefix}pendingCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}processingCount`,
                label: `[${labelPrefix}processingCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}failedCount`,
                label: `[${labelPrefix}failedCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}deadLetterCount`,
                label: `[${labelPrefix}deadLetterCount]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}oldestPendingAgeSeconds`,
                label: `[${labelPrefix}oldestPendingAgeSeconds]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}lastSuccessfulDispatchUtc`,
                label: `[${labelPrefix}lastSuccessfulDispatchUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}successfulDispatchTracked`,
                label: `[${labelPrefix}successfulDispatchTracked]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enabled': bundle.inputData?.[`${keyPrefix}enabled`],
            'pendingCount': bundle.inputData?.[`${keyPrefix}pendingCount`],
            'processingCount': bundle.inputData?.[`${keyPrefix}processingCount`],
            'failedCount': bundle.inputData?.[`${keyPrefix}failedCount`],
            'deadLetterCount': bundle.inputData?.[`${keyPrefix}deadLetterCount`],
            'oldestPendingAgeSeconds': bundle.inputData?.[`${keyPrefix}oldestPendingAgeSeconds`],
            'lastSuccessfulDispatchUtc': bundle.inputData?.[`${keyPrefix}lastSuccessfulDispatchUtc`],
            'successfulDispatchTracked': bundle.inputData?.[`${keyPrefix}successfulDispatchTracked`],
        }
    },
}
