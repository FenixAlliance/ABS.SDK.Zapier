const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}providerCode`,
                label: `[${labelPrefix}providerCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}externalAccountId`,
                label: `[${labelPrefix}externalAccountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}webhookSigningSecret`,
                label: `[${labelPrefix}webhookSigningSecret]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}credentialMode`,
                label: `[${labelPrefix}credentialMode]`,
                type: 'string',
                choices: [
                    'TenantManaged',
                    'PlatformManaged',
                    'ExternalReference',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'providerCode': bundle.inputData?.[`${keyPrefix}providerCode`],
            'externalAccountId': bundle.inputData?.[`${keyPrefix}externalAccountId`],
            'webhookSigningSecret': bundle.inputData?.[`${keyPrefix}webhookSigningSecret`],
            'credentialMode': bundle.inputData?.[`${keyPrefix}credentialMode`],
        }
    },
}
