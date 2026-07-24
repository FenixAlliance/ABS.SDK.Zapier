const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}outcome`,
                label: `[${labelPrefix}outcome]`,
                required: true,
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
                key: `${keyPrefix}outcomeAtUtc`,
                label: `[${labelPrefix}outcomeAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}declineReason`,
                label: `[${labelPrefix}declineReason]`,
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
            'outcome': bundle.inputData?.[`${keyPrefix}outcome`],
            'outcomeAtUtc': bundle.inputData?.[`${keyPrefix}outcomeAtUtc`],
            'declineReason': bundle.inputData?.[`${keyPrefix}declineReason`],
            'externalReference': bundle.inputData?.[`${keyPrefix}externalReference`],
        }
    },
}
