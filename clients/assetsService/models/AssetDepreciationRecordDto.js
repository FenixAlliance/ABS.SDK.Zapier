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
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetId`,
                label: `[${labelPrefix}assetId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetName`,
                label: `[${labelPrefix}assetName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetDepreciationPolicyId`,
                label: `[${labelPrefix}assetDepreciationPolicyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetDepreciationPolicyName`,
                label: `[${labelPrefix}assetDepreciationPolicyName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}financialBookId`,
                label: `[${labelPrefix}financialBookId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}startDate`,
                label: `[${labelPrefix}startDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}totalDepreciations`,
                label: `[${labelPrefix}totalDepreciations]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}depreciationFrequency`,
                label: `[${labelPrefix}depreciationFrequency]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}depreciationRate`,
                label: `[${labelPrefix}depreciationRate]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}expectedValueAUL`,
                label: `[${labelPrefix}expectedValueAUL]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}depreciationAmount`,
                label: `[${labelPrefix}depreciationAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}accumulatedDepreciation`,
                label: `[${labelPrefix}accumulatedDepreciation]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}bookValue`,
                label: `[${labelPrefix}bookValue]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}depreciationDate`,
                label: `[${labelPrefix}depreciationDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}year`,
                label: `[${labelPrefix}year]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}month`,
                label: `[${labelPrefix}month]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}period`,
                label: `[${labelPrefix}period]`,
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
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'assetId': bundle.inputData?.[`${keyPrefix}assetId`],
            'assetName': bundle.inputData?.[`${keyPrefix}assetName`],
            'assetDepreciationPolicyId': bundle.inputData?.[`${keyPrefix}assetDepreciationPolicyId`],
            'assetDepreciationPolicyName': bundle.inputData?.[`${keyPrefix}assetDepreciationPolicyName`],
            'financialBookId': bundle.inputData?.[`${keyPrefix}financialBookId`],
            'startDate': bundle.inputData?.[`${keyPrefix}startDate`],
            'totalDepreciations': bundle.inputData?.[`${keyPrefix}totalDepreciations`],
            'depreciationFrequency': bundle.inputData?.[`${keyPrefix}depreciationFrequency`],
            'depreciationRate': bundle.inputData?.[`${keyPrefix}depreciationRate`],
            'expectedValueAUL': bundle.inputData?.[`${keyPrefix}expectedValueAUL`],
            'depreciationAmount': bundle.inputData?.[`${keyPrefix}depreciationAmount`],
            'accumulatedDepreciation': bundle.inputData?.[`${keyPrefix}accumulatedDepreciation`],
            'bookValue': bundle.inputData?.[`${keyPrefix}bookValue`],
            'depreciationDate': bundle.inputData?.[`${keyPrefix}depreciationDate`],
            'year': bundle.inputData?.[`${keyPrefix}year`],
            'month': bundle.inputData?.[`${keyPrefix}month`],
            'period': bundle.inputData?.[`${keyPrefix}period`],
        }
    },
}
