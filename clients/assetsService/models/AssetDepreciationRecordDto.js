const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                dict: true,
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessId`,
                label: `[${labelPrefix}businessId]`,
                dict: true,
            },
            {
                key: `${keyPrefix}businessProfileRecordId`,
                label: `[${labelPrefix}businessProfileRecordId]`,
                dict: true,
            },
            {
                key: `${keyPrefix}assetId`,
                label: `[${labelPrefix}assetId]`,
                dict: true,
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
            'businessId': bundle.inputData?.[`${keyPrefix}businessId`],
            'businessProfileRecordId': bundle.inputData?.[`${keyPrefix}businessProfileRecordId`],
            'assetId': bundle.inputData?.[`${keyPrefix}assetId`],
            'assetName': bundle.inputData?.[`${keyPrefix}assetName`],
            'assetDepreciationPolicyId': bundle.inputData?.[`${keyPrefix}assetDepreciationPolicyId`],
            'assetDepreciationPolicyName': bundle.inputData?.[`${keyPrefix}assetDepreciationPolicyName`],
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
