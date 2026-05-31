const utils = require('../utils/utils');
const ConstructorInfo = require('../models/ConstructorInfo');
const CustomAttributeNamedArgument = require('../models/CustomAttributeNamedArgument');
const CustomAttributeTypedArgument = require('../models/CustomAttributeTypedArgument');
const Type = require('../models/Type');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...Type.fields(`${keyPrefix}attributeType`, isInput),
            ...ConstructorInfo.fields(`${keyPrefix}constructor`, isInput),
            {
                key: `${keyPrefix}constructorArguments`,
                label: `[${labelPrefix}constructorArguments]`,
                children: CustomAttributeTypedArgument.fields(`${keyPrefix}constructorArguments${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}namedArguments`,
                label: `[${labelPrefix}namedArguments]`,
                children: CustomAttributeNamedArgument.fields(`${keyPrefix}namedArguments${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'attributeType': utils.removeIfEmpty(Type.mapping(bundle, `${keyPrefix}attributeType`)),
            'constructor': utils.removeIfEmpty(ConstructorInfo.mapping(bundle, `${keyPrefix}constructor`)),
            'constructorArguments': utils.childMapping(bundle.inputData?.[`${keyPrefix}constructorArguments`], `${keyPrefix}constructorArguments`, CustomAttributeTypedArgument),
            'namedArguments': utils.childMapping(bundle.inputData?.[`${keyPrefix}namedArguments`], `${keyPrefix}namedArguments`, CustomAttributeNamedArgument),
        }
    },
}
