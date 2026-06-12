const utils = require('../utils/utils');
const TransformationNode = require('../models/TransformationNode');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}transformations`,
                label: `[${labelPrefix}transformations]`,
                children: TransformationNode.fields(`${keyPrefix}transformations${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'transformations': utils.childMapping(bundle.inputData?.[`${keyPrefix}transformations`], `${keyPrefix}transformations`, TransformationNode),
        }
    },
}
