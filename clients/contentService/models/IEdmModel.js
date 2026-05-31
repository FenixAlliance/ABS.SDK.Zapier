const utils = require('../utils/utils');
const IEdmEntityContainer = require('../models/IEdmEntityContainer');
const IEdmSchemaElement = require('../models/IEdmSchemaElement');
const IEdmVocabularyAnnotation = require('../models/IEdmVocabularyAnnotation');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}schemaElements`,
                label: `[${labelPrefix}schemaElements]`,
                children: IEdmSchemaElement.fields(`${keyPrefix}schemaElements${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}vocabularyAnnotations`,
                label: `[${labelPrefix}vocabularyAnnotations]`,
                children: IEdmVocabularyAnnotation.fields(`${keyPrefix}vocabularyAnnotations${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}referencedModels`,
                label: `[${labelPrefix}referencedModels]`,
                children: IEdmModel.fields(`${keyPrefix}referencedModels${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}declaredNamespaces`,
                label: `[${labelPrefix}declaredNamespaces]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}directValueAnnotationsManager`,
                label: `[${labelPrefix}directValueAnnotationsManager]`,
                dict: true,
            },
            ...IEdmEntityContainer.fields(`${keyPrefix}entityContainer`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'schemaElements': utils.childMapping(bundle.inputData?.[`${keyPrefix}schemaElements`], `${keyPrefix}schemaElements`, IEdmSchemaElement),
            'vocabularyAnnotations': utils.childMapping(bundle.inputData?.[`${keyPrefix}vocabularyAnnotations`], `${keyPrefix}vocabularyAnnotations`, IEdmVocabularyAnnotation),
            'referencedModels': utils.childMapping(bundle.inputData?.[`${keyPrefix}referencedModels`], `${keyPrefix}referencedModels`, IEdmModel),
            'declaredNamespaces': bundle.inputData?.[`${keyPrefix}declaredNamespaces`],
            'directValueAnnotationsManager': bundle.inputData?.[`${keyPrefix}directValueAnnotationsManager`],
            'entityContainer': utils.removeIfEmpty(IEdmEntityContainer.mapping(bundle, `${keyPrefix}entityContainer`)),
        }
    },
}
