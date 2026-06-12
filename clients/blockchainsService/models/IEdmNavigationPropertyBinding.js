const utils = require('../utils/utils');
const IEdmNavigationProperty = require('../models/IEdmNavigationProperty');
const IEdmNavigationSource = require('../models/IEdmNavigationSource');
const IEdmPathExpression = require('../models/IEdmPathExpression');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...IEdmNavigationProperty.fields(`${keyPrefix}navigationProperty`, isInput),
            ...IEdmNavigationSource.fields(`${keyPrefix}target`, isInput),
            ...IEdmPathExpression.fields(`${keyPrefix}path`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'navigationProperty': utils.removeIfEmpty(IEdmNavigationProperty.mapping(bundle, `${keyPrefix}navigationProperty`)),
            'target': utils.removeIfEmpty(IEdmNavigationSource.mapping(bundle, `${keyPrefix}target`)),
            'path': utils.removeIfEmpty(IEdmPathExpression.mapping(bundle, `${keyPrefix}path`)),
        }
    },
}
