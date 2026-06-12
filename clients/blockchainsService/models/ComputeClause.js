const utils = require('../utils/utils');
const ComputeExpression = require('../models/ComputeExpression');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}computedItems`,
                label: `[${labelPrefix}computedItems]`,
                children: ComputeExpression.fields(`${keyPrefix}computedItems${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'computedItems': utils.childMapping(bundle.inputData?.[`${keyPrefix}computedItems`], `${keyPrefix}computedItems`, ComputeExpression),
        }
    },
}
