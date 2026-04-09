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
                key: `${keyPrefix}prefix`,
                label: `[${labelPrefix}prefix]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}suffix`,
                label: `[${labelPrefix}suffix]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}identifier`,
                label: `[${labelPrefix}identifier]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}qualifiedName`,
                label: `[${labelPrefix}qualifiedName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currentNumeration`,
                label: `[${labelPrefix}currentNumeration]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}numerationTo`,
                label: `[${labelPrefix}numerationTo]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}numerationFrom`,
                label: `[${labelPrefix}numerationFrom]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}validFrom`,
                label: `[${labelPrefix}validFrom]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}validTo`,
                label: `[${labelPrefix}validTo]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fiscalAuthorityId`,
                label: `[${labelPrefix}fiscalAuthorityId]`,
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
                key: `${keyPrefix}documentType`,
                label: `[${labelPrefix}documentType]`,
                type: 'string',
                choices: [
                    'Standard',
                    'DebitNote',
                    'CreditNote',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'prefix': bundle.inputData?.[`${keyPrefix}prefix`],
            'suffix': bundle.inputData?.[`${keyPrefix}suffix`],
            'identifier': bundle.inputData?.[`${keyPrefix}identifier`],
            'qualifiedName': bundle.inputData?.[`${keyPrefix}qualifiedName`],
            'currentNumeration': bundle.inputData?.[`${keyPrefix}currentNumeration`],
            'numerationTo': bundle.inputData?.[`${keyPrefix}numerationTo`],
            'numerationFrom': bundle.inputData?.[`${keyPrefix}numerationFrom`],
            'validFrom': bundle.inputData?.[`${keyPrefix}validFrom`],
            'validTo': bundle.inputData?.[`${keyPrefix}validTo`],
            'fiscalAuthorityId': bundle.inputData?.[`${keyPrefix}fiscalAuthorityId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'documentType': bundle.inputData?.[`${keyPrefix}documentType`],
        }
    },
}
