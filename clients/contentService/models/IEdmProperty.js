const utils = require('../utils/utils');
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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'propertyKind': bundle.inputData?.[`${keyPrefix}propertyKind`],
            'type': utils.removeIfEmpty(IEdmTypeReference.mapping(bundle, `${keyPrefix}type`)),
            'declaringType': utils.removeIfEmpty(IEdmStructuredType.mapping(bundle, `${keyPrefix}declaringType`)),
        }
    },
}
