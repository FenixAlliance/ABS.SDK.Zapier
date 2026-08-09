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
                key: `${keyPrefix}createdAtUtc`,
                label: `[${labelPrefix}createdAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastModifiedUtc`,
                label: `[${labelPrefix}lastModifiedUtc]`,
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
                key: `${keyPrefix}providerCode`,
                label: `[${labelPrefix}providerCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}credentialSetReference`,
                label: `[${labelPrefix}credentialSetReference]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}hasCredential`,
                label: `[${labelPrefix}hasCredential]`,
                type: 'boolean',
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
            {
                key: `${keyPrefix}externalAccountId`,
                label: `[${labelPrefix}externalAccountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enabledCapabilities`,
                label: `[${labelPrefix}enabledCapabilities]`,
                type: 'string',
                choices: [
                    'None',
                    'Collection',
                    'Authorization',
                    'Capture',
                    'Refund',
                    'Void',
                    'SplitPayment',
                    'Transfer',
                    'Payout',
                    'RecipientOnboarding',
                    'BalanceInquiry',
                ],
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
                choices: [
                    'Draft',
                    'Active',
                    'Disabled',
                    'Suspended',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'createdAtUtc': bundle.inputData?.[`${keyPrefix}createdAtUtc`],
            'lastModifiedUtc': bundle.inputData?.[`${keyPrefix}lastModifiedUtc`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'providerCode': bundle.inputData?.[`${keyPrefix}providerCode`],
            'credentialSetReference': bundle.inputData?.[`${keyPrefix}credentialSetReference`],
            'hasCredential': bundle.inputData?.[`${keyPrefix}hasCredential`],
            'credentialMode': bundle.inputData?.[`${keyPrefix}credentialMode`],
            'externalAccountId': bundle.inputData?.[`${keyPrefix}externalAccountId`],
            'enabledCapabilities': bundle.inputData?.[`${keyPrefix}enabledCapabilities`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
        }
    },
}
