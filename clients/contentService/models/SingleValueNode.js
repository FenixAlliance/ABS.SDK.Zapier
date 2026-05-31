const utils = require('../utils/utils');
const IEdmTypeReference = require('../models/IEdmTypeReference');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...IEdmTypeReference.fields(`${keyPrefix}typeReference`, isInput),
            {
                key: `${keyPrefix}kind`,
                label: `[${labelPrefix}kind]`,
                type: 'string',
                choices: [
                    'None',
                    'Constant',
                    'Convert',
                    'NonResourceRangeVariableReference',
                    'BinaryOperator',
                    'UnaryOperator',
                    'SingleValuePropertyAccess',
                    'CollectionPropertyAccess',
                    'SingleValueFunctionCall',
                    'Any',
                    'CollectionNavigationNode',
                    'SingleNavigationNode',
                    'SingleValueOpenPropertyAccess',
                    'SingleResourceCast',
                    'All',
                    'CollectionResourceCast',
                    'ResourceRangeVariableReference',
                    'SingleResourceFunctionCall',
                    'CollectionFunctionCall',
                    'CollectionResourceFunctionCall',
                    'NamedFunctionParameter',
                    'ParameterAlias',
                    'EntitySet',
                    'KeyLookup',
                    'SearchTerm',
                    'CollectionOpenPropertyAccess',
                    'CollectionComplexNode',
                    'SingleComplexNode',
                    'Count',
                    'SingleValueCast',
                    'CollectionPropertyNode',
                    'AggregatedCollectionPropertyNode',
                    'In',
                    'CollectionConstant',
                    'RootPath',
                    'CustomQueryOption',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'typeReference': utils.removeIfEmpty(IEdmTypeReference.mapping(bundle, `${keyPrefix}typeReference`)),
            'kind': bundle.inputData?.[`${keyPrefix}kind`],
        }
    },
}
