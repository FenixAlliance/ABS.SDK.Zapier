const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}price`,
                label: `[${labelPrefix}price]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}externalDescription`,
                label: `[${labelPrefix}externalDescription]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}basisQuantity`,
                label: `[${labelPrefix}basisQuantity]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}basisAmount`,
                label: `[${labelPrefix}basisAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}percent`,
                label: `[${labelPrefix}percent]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}unitGroupId`,
                label: `[${labelPrefix}unitGroupId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}unitId`,
                label: `[${labelPrefix}unitId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}transactionCategoryId`,
                label: `[${labelPrefix}transactionCategoryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
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
                key: `${keyPrefix}bankProfileId`,
                label: `[${labelPrefix}bankProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bankAccountId`,
                label: `[${labelPrefix}bankAccountId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'price': bundle.inputData?.[`${keyPrefix}price`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'externalDescription': bundle.inputData?.[`${keyPrefix}externalDescription`],
            'basisQuantity': bundle.inputData?.[`${keyPrefix}basisQuantity`],
            'basisAmount': bundle.inputData?.[`${keyPrefix}basisAmount`],
            'percent': bundle.inputData?.[`${keyPrefix}percent`],
            'unitGroupId': bundle.inputData?.[`${keyPrefix}unitGroupId`],
            'unitId': bundle.inputData?.[`${keyPrefix}unitId`],
            'transactionCategoryId': bundle.inputData?.[`${keyPrefix}transactionCategoryId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'bankProfileId': bundle.inputData?.[`${keyPrefix}bankProfileId`],
            'bankAccountId': bundle.inputData?.[`${keyPrefix}bankAccountId`],
        }
    },
}
