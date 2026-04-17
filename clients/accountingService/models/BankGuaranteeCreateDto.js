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
                key: `${keyPrefix}margin`,
                label: `[${labelPrefix}margin]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}charges`,
                label: `[${labelPrefix}charges]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}beneficiaryName`,
                label: `[${labelPrefix}beneficiaryName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}guaranteeNumber`,
                label: `[${labelPrefix}guaranteeNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}guaranteeConditions`,
                label: `[${labelPrefix}guaranteeConditions]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fixedDepositNumber`,
                label: `[${labelPrefix}fixedDepositNumber]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}startDate`,
                label: `[${labelPrefix}startDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}endDate`,
                label: `[${labelPrefix}endDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}validityInDays`,
                label: `[${labelPrefix}validityInDays]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}bankGuaranteeType`,
                label: `[${labelPrefix}bankGuaranteeType]`,
                type: 'string',
                choices: [
                    'Receiving',
                    'Providing',
                ],
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectId`,
                label: `[${labelPrefix}projectId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderId`,
                label: `[${labelPrefix}orderId]`,
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
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'margin': bundle.inputData?.[`${keyPrefix}margin`],
            'charges': bundle.inputData?.[`${keyPrefix}charges`],
            'beneficiaryName': bundle.inputData?.[`${keyPrefix}beneficiaryName`],
            'guaranteeNumber': bundle.inputData?.[`${keyPrefix}guaranteeNumber`],
            'guaranteeConditions': bundle.inputData?.[`${keyPrefix}guaranteeConditions`],
            'fixedDepositNumber': bundle.inputData?.[`${keyPrefix}fixedDepositNumber`],
            'startDate': bundle.inputData?.[`${keyPrefix}startDate`],
            'endDate': bundle.inputData?.[`${keyPrefix}endDate`],
            'validityInDays': bundle.inputData?.[`${keyPrefix}validityInDays`],
            'bankGuaranteeType': bundle.inputData?.[`${keyPrefix}bankGuaranteeType`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'projectId': bundle.inputData?.[`${keyPrefix}projectId`],
            'orderId': bundle.inputData?.[`${keyPrefix}orderId`],
            'bankProfileId': bundle.inputData?.[`${keyPrefix}bankProfileId`],
            'bankAccountId': bundle.inputData?.[`${keyPrefix}bankAccountId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
        }
    },
}
