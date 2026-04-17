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
                key: `${keyPrefix}rate`,
                label: `[${labelPrefix}rate]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}value`,
                label: `[${labelPrefix}value]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}um`,
                label: `[${labelPrefix}um]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}unitId`,
                label: `[${labelPrefix}unitId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}unitGroupId`,
                label: `[${labelPrefix}unitGroupId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}priority`,
                label: `[${labelPrefix}priority]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}compound`,
                label: `[${labelPrefix}compound]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}shipping`,
                label: `[${labelPrefix}shipping]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}withholding`,
                label: `[${labelPrefix}withholding]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}singleTransactionThreshold`,
                label: `[${labelPrefix}singleTransactionThreshold]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}cumulativeTransactionThreshold`,
                label: `[${labelPrefix}cumulativeTransactionThreshold]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}fiscalAuthorityId`,
                label: `[${labelPrefix}fiscalAuthorityId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fiscalYearId`,
                label: `[${labelPrefix}fiscalYearId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryId`,
                label: `[${labelPrefix}countryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxClassId`,
                label: `[${labelPrefix}taxClassId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxPolicyId`,
                label: `[${labelPrefix}taxPolicyId]`,
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
            'rate': bundle.inputData?.[`${keyPrefix}rate`],
            'value': bundle.inputData?.[`${keyPrefix}value`],
            'um': bundle.inputData?.[`${keyPrefix}um`],
            'unitId': bundle.inputData?.[`${keyPrefix}unitId`],
            'unitGroupId': bundle.inputData?.[`${keyPrefix}unitGroupId`],
            'priority': bundle.inputData?.[`${keyPrefix}priority`],
            'compound': bundle.inputData?.[`${keyPrefix}compound`],
            'shipping': bundle.inputData?.[`${keyPrefix}shipping`],
            'withholding': bundle.inputData?.[`${keyPrefix}withholding`],
            'singleTransactionThreshold': bundle.inputData?.[`${keyPrefix}singleTransactionThreshold`],
            'cumulativeTransactionThreshold': bundle.inputData?.[`${keyPrefix}cumulativeTransactionThreshold`],
            'fiscalAuthorityId': bundle.inputData?.[`${keyPrefix}fiscalAuthorityId`],
            'fiscalYearId': bundle.inputData?.[`${keyPrefix}fiscalYearId`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'taxClassId': bundle.inputData?.[`${keyPrefix}taxClassId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'taxPolicyId': bundle.inputData?.[`${keyPrefix}taxPolicyId`],
        }
    },
}
