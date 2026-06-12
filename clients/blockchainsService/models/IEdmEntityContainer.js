const utils = require('../utils/utils');
const IEdmEntityContainerElement = require('../models/IEdmEntityContainerElement');

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
                key: `${keyPrefix}elements`,
                label: `[${labelPrefix}elements]`,
                children: IEdmEntityContainerElement.fields(`${keyPrefix}elements${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'schemaElementKind': bundle.inputData?.[`${keyPrefix}schemaElementKind`],
            'namespace': bundle.inputData?.[`${keyPrefix}namespace`],
            'elements': utils.childMapping(bundle.inputData?.[`${keyPrefix}elements`], `${keyPrefix}elements`, IEdmEntityContainerElement),
        }
    },
}
