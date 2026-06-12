const utils = require('../utils/utils');
const IEdmEntityType = require('../models/IEdmEntityType');
const IEdmNavigationPropertyBinding = require('../models/IEdmNavigationPropertyBinding');
const IEdmPathExpression = require('../models/IEdmPathExpression');
const IEdmType = require('../models/IEdmType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}navigationPropertyBindings`,
                label: `[${labelPrefix}navigationPropertyBindings]`,
                children: IEdmNavigationPropertyBinding.fields(`${keyPrefix}navigationPropertyBindings${!isInput ? '[]' : ''}`, isInput, true), 
            },
            ...IEdmPathExpression.fields(`${keyPrefix}path`, isInput),
            ...IEdmType.fields(`${keyPrefix}type`, isInput),
            ...IEdmEntityType.fields(`${keyPrefix}entityType`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'navigationPropertyBindings': utils.childMapping(bundle.inputData?.[`${keyPrefix}navigationPropertyBindings`], `${keyPrefix}navigationPropertyBindings`, IEdmNavigationPropertyBinding),
            'path': utils.removeIfEmpty(IEdmPathExpression.mapping(bundle, `${keyPrefix}path`)),
            'type': utils.removeIfEmpty(IEdmType.mapping(bundle, `${keyPrefix}type`)),
            'entityType': utils.removeIfEmpty(IEdmEntityType.mapping(bundle, `${keyPrefix}entityType`)),
        }
    },
}
