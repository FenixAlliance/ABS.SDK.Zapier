const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
            'depreciationAmount': bundle.inputData?.[`${keyPrefix}depreciationAmount`],
            'accumulatedDepreciation': bundle.inputData?.[`${keyPrefix}accumulatedDepreciation`],
            'bookValue': bundle.inputData?.[`${keyPrefix}bookValue`],
            'depreciationDate': bundle.inputData?.[`${keyPrefix}depreciationDate`],
            'year': bundle.inputData?.[`${keyPrefix}year`],
            'month': bundle.inputData?.[`${keyPrefix}month`],
        }
    },
}
