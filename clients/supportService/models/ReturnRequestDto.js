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
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}approved`,
                label: `[${labelPrefix}approved]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}approvedTimestamp`,
                label: `[${labelPrefix}approvedTimestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessProfileRecordId`,
                label: `[${labelPrefix}businessProfileRecordId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}supportEntitlementId`,
                label: `[${labelPrefix}supportEntitlementId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}accountHolderId`,
                label: `[${labelPrefix}accountHolderId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}returnPolicyId`,
                label: `[${labelPrefix}returnPolicyId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'approved': bundle.inputData?.[`${keyPrefix}approved`],
            'approvedTimestamp': bundle.inputData?.[`${keyPrefix}approvedTimestamp`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'businessProfileRecordId': bundle.inputData?.[`${keyPrefix}businessProfileRecordId`],
            'supportEntitlementId': bundle.inputData?.[`${keyPrefix}supportEntitlementId`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'accountHolderId': bundle.inputData?.[`${keyPrefix}accountHolderId`],
            'returnPolicyId': bundle.inputData?.[`${keyPrefix}returnPolicyId`],
        }
    },
}
