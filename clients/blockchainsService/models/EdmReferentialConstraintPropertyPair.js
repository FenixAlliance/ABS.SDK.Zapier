const utils = require('../utils/utils');
const IEdmStructuralProperty = require('../models/IEdmStructuralProperty');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...IEdmStructuralProperty.fields(`${keyPrefix}dependentProperty`, isInput),
            ...IEdmStructuralProperty.fields(`${keyPrefix}principalProperty`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'dependentProperty': utils.removeIfEmpty(IEdmStructuralProperty.mapping(bundle, `${keyPrefix}dependentProperty`)),
            'principalProperty': utils.removeIfEmpty(IEdmStructuralProperty.mapping(bundle, `${keyPrefix}principalProperty`)),
        }
    },
}
