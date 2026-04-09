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
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoiceId`,
                label: `[${labelPrefix}invoiceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoiceLineId`,
                label: `[${labelPrefix}invoiceLineId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxPolicyId`,
                label: `[${labelPrefix}taxPolicyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemPriceId`,
                label: `[${labelPrefix}itemPriceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemId`,
                label: `[${labelPrefix}itemId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxAmountInUsd`,
                label: `[${labelPrefix}taxAmountInUsd]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}taxBaseAmountInUsd`,
                label: `[${labelPrefix}taxBaseAmountInUsd]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}taxPolicyName`,
                label: `[${labelPrefix}taxPolicyName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxPolicyDescription`,
                label: `[${labelPrefix}taxPolicyDescription]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'invoiceId': bundle.inputData?.[`${keyPrefix}invoiceId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'invoiceLineId': bundle.inputData?.[`${keyPrefix}invoiceLineId`],
            'taxPolicyId': bundle.inputData?.[`${keyPrefix}taxPolicyId`],
            'itemPriceId': bundle.inputData?.[`${keyPrefix}itemPriceId`],
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
            'taxAmountInUsd': bundle.inputData?.[`${keyPrefix}taxAmountInUsd`],
            'taxBaseAmountInUsd': bundle.inputData?.[`${keyPrefix}taxBaseAmountInUsd`],
            'taxPolicyName': bundle.inputData?.[`${keyPrefix}taxPolicyName`],
            'taxPolicyDescription': bundle.inputData?.[`${keyPrefix}taxPolicyDescription`],
        }
    },
}
