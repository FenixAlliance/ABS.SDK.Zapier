const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
                key: `${keyPrefix}expiresAtUtc`,
                label: `[${labelPrefix}expiresAtUtc]`,
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
            'routingMode': bundle.inputData?.[`${keyPrefix}routingMode`],
            'expiresAtUtc': bundle.inputData?.[`${keyPrefix}expiresAtUtc`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'correlationId': bundle.inputData?.[`${keyPrefix}correlationId`],
            'externalReference': bundle.inputData?.[`${keyPrefix}externalReference`],
        }
    },
}
