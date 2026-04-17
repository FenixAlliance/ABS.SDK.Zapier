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
                key: `${keyPrefix}assetId`,
                label: `[${labelPrefix}assetId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetDepreciationPolicyId`,
                label: `[${labelPrefix}assetDepreciationPolicyId]`,
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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'assetId': bundle.inputData?.[`${keyPrefix}assetId`],
            'assetDepreciationPolicyId': bundle.inputData?.[`${keyPrefix}assetDepreciationPolicyId`],
            'depreciationAmount': bundle.inputData?.[`${keyPrefix}depreciationAmount`],
            'accumulatedDepreciation': bundle.inputData?.[`${keyPrefix}accumulatedDepreciation`],
            'bookValue': bundle.inputData?.[`${keyPrefix}bookValue`],
            'depreciationDate': bundle.inputData?.[`${keyPrefix}depreciationDate`],
            'year': bundle.inputData?.[`${keyPrefix}year`],
            'month': bundle.inputData?.[`${keyPrefix}month`],
        }
    },
}
