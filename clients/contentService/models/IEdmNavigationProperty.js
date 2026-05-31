const utils = require('../utils/utils');
const IEdmReferentialConstraint = require('../models/IEdmReferentialConstraint');
const IEdmStructuredType = require('../models/IEdmStructuredType');
const IEdmTypeReference = require('../models/IEdmTypeReference');

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
                key: `${keyPrefix}propertyKind`,
                label: `[${labelPrefix}propertyKind]`,
                type: 'string',
                choices: [
                    'None',
                    'Structural',
                    'Navigation',
                ],
            },
            ...IEdmTypeReference.fields(`${keyPrefix}type`, isInput),
            ...IEdmStructuredType.fields(`${keyPrefix}declaringType`, isInput),
            ...IEdmNavigationProperty.fields(`${keyPrefix}partner`, isInput),
            {
                key: `${keyPrefix}onDelete`,
                label: `[${labelPrefix}onDelete]`,
                type: 'string',
                choices: [
                    'None',
                    'Cascade',
                ],
            },
            {
                key: `${keyPrefix}containsTarget`,
                label: `[${labelPrefix}containsTarget]`,
                type: 'boolean',
            },
            ...IEdmReferentialConstraint.fields(`${keyPrefix}referentialConstraint`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'propertyKind': bundle.inputData?.[`${keyPrefix}propertyKind`],
            'type': utils.removeIfEmpty(IEdmTypeReference.mapping(bundle, `${keyPrefix}type`)),
            'declaringType': utils.removeIfEmpty(IEdmStructuredType.mapping(bundle, `${keyPrefix}declaringType`)),
            'partner': utils.removeIfEmpty(IEdmNavigationProperty.mapping(bundle, `${keyPrefix}partner`)),
            'onDelete': bundle.inputData?.[`${keyPrefix}onDelete`],
            'containsTarget': bundle.inputData?.[`${keyPrefix}containsTarget`],
            'referentialConstraint': utils.removeIfEmpty(IEdmReferentialConstraint.mapping(bundle, `${keyPrefix}referentialConstraint`)),
        }
    },
}
