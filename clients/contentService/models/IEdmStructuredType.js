const utils = require('../utils/utils');
const IEdmProperty = require('../models/IEdmProperty');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}typeKind`,
                label: `[${labelPrefix}typeKind]`,
                type: 'string',
                choices: [
                    'None',
                    'Primitive',
                    'Entity',
                    'Complex',
                    'Collection',
                    'EntityReference',
                    'Enum',
                    'TypeDefinition',
                    'Untyped',
                    'Path',
                ],
            },
            {
                key: `${keyPrefix}isAbstract`,
                label: `[${labelPrefix}isAbstract]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isOpen`,
                label: `[${labelPrefix}isOpen]`,
                type: 'boolean',
            },
            ...IEdmStructuredType.fields(`${keyPrefix}baseType`, isInput),
            {
                key: `${keyPrefix}declaredProperties`,
                label: `[${labelPrefix}declaredProperties]`,
                children: IEdmProperty.fields(`${keyPrefix}declaredProperties${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'typeKind': bundle.inputData?.[`${keyPrefix}typeKind`],
            'isAbstract': bundle.inputData?.[`${keyPrefix}isAbstract`],
            'isOpen': bundle.inputData?.[`${keyPrefix}isOpen`],
            'baseType': utils.removeIfEmpty(IEdmStructuredType.mapping(bundle, `${keyPrefix}baseType`)),
            'declaredProperties': utils.childMapping(bundle.inputData?.[`${keyPrefix}declaredProperties`], `${keyPrefix}declaredProperties`, IEdmProperty),
        }
    },
}
