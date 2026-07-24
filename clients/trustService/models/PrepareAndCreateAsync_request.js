const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}file`,
                label: `[${labelPrefix}file]`,
                type: 'file',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
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
            {
                key: `${keyPrefix}signers`,
                label: `[${labelPrefix}signers]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'file': bundle.inputData?.[`${keyPrefix}file`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'routingMode': bundle.inputData?.[`${keyPrefix}routingMode`],
            'expiresAtUtc': bundle.inputData?.[`${keyPrefix}expiresAtUtc`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'correlationId': bundle.inputData?.[`${keyPrefix}correlationId`],
            'externalReference': bundle.inputData?.[`${keyPrefix}externalReference`],
            'signers': bundle.inputData?.[`${keyPrefix}signers`],
        }
    },
}
