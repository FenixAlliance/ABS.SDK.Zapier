const utils = require('../utils/utils');
const EdmReferentialConstraintPropertyPair = require('../models/EdmReferentialConstraintPropertyPair');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}propertyPairs`,
                label: `[${labelPrefix}propertyPairs]`,
                children: EdmReferentialConstraintPropertyPair.fields(`${keyPrefix}propertyPairs${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'propertyPairs': utils.childMapping(bundle.inputData?.[`${keyPrefix}propertyPairs`], `${keyPrefix}propertyPairs`, EdmReferentialConstraintPropertyPair),
        }
    },
}
