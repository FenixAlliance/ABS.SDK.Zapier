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
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}iban`,
                label: `[${labelPrefix}iban]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}swift`,
                label: `[${labelPrefix}swift]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}branchCode`,
                label: `[${labelPrefix}branchCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bankAccountNumber`,
                label: `[${labelPrefix}bankAccountNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}qualifiedName`,
                label: `[${labelPrefix}qualifiedName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bankId`,
                label: `[${labelPrefix}bankId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bankProfileId`,
                label: `[${labelPrefix}bankProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}walletId`,
                label: `[${labelPrefix}walletId]`,
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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'iban': bundle.inputData?.[`${keyPrefix}iban`],
            'swift': bundle.inputData?.[`${keyPrefix}swift`],
            'branchCode': bundle.inputData?.[`${keyPrefix}branchCode`],
            'bankAccountNumber': bundle.inputData?.[`${keyPrefix}bankAccountNumber`],
            'qualifiedName': bundle.inputData?.[`${keyPrefix}qualifiedName`],
            'bankId': bundle.inputData?.[`${keyPrefix}bankId`],
            'bankProfileId': bundle.inputData?.[`${keyPrefix}bankProfileId`],
            'walletId': bundle.inputData?.[`${keyPrefix}walletId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
        }
    },
}
