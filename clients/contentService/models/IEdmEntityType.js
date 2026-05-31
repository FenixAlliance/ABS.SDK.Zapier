const utils = require('../utils/utils');
const IEdmProperty = require('../models/IEdmProperty');
const IEdmStructuralProperty = require('../models/IEdmStructuralProperty');
const IEdmStructuredType = require('../models/IEdmStructuredType');

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
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
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
            {
                key: `${keyPrefix}schemaElementKind`,
                label: `[${labelPrefix}schemaElementKind]`,
                type: 'string',
                choices: [
                    'None',
                    'TypeDefinition',
                    'Term',
                    'Action',
                    'EntityContainer',
                    'Function',
                ],
            },
            {
                key: `${keyPrefix}namespace`,
                label: `[${labelPrefix}namespace]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}declaredKey`,
                label: `[${labelPrefix}declaredKey]`,
                children: IEdmStructuralProperty.fields(`${keyPrefix}declaredKey${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}hasStream`,
                label: `[${labelPrefix}hasStream]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'typeKind': bundle.inputData?.[`${keyPrefix}typeKind`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'isAbstract': bundle.inputData?.[`${keyPrefix}isAbstract`],
            'isOpen': bundle.inputData?.[`${keyPrefix}isOpen`],
            'baseType': utils.removeIfEmpty(IEdmStructuredType.mapping(bundle, `${keyPrefix}baseType`)),
            'declaredProperties': utils.childMapping(bundle.inputData?.[`${keyPrefix}declaredProperties`], `${keyPrefix}declaredProperties`, IEdmProperty),
            'schemaElementKind': bundle.inputData?.[`${keyPrefix}schemaElementKind`],
            'namespace': bundle.inputData?.[`${keyPrefix}namespace`],
            'declaredKey': utils.childMapping(bundle.inputData?.[`${keyPrefix}declaredKey`], `${keyPrefix}declaredKey`, IEdmStructuralProperty),
            'hasStream': bundle.inputData?.[`${keyPrefix}hasStream`],
        }
    },
}
