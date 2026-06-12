const utils = require('../utils/utils');
const CustomAttributeData = require('../models/CustomAttributeData');
const MethodInfo = require('../models/MethodInfo');
const Module = require('../models/Module');
const Type = require('../models/Type');
const TypeInfo = require('../models/TypeInfo');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}definedTypes`,
                label: `[${labelPrefix}definedTypes]`,
                children: TypeInfo.fields(`${keyPrefix}definedTypes${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}exportedTypes`,
                label: `[${labelPrefix}exportedTypes]`,
                children: Type.fields(`${keyPrefix}exportedTypes${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}codeBase`,
                label: `[${labelPrefix}codeBase]`,
                type: 'string',
            },
            ...MethodInfo.fields(`${keyPrefix}entryPoint`, isInput),
            {
                key: `${keyPrefix}fullName`,
                label: `[${labelPrefix}fullName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}imageRuntimeVersion`,
                label: `[${labelPrefix}imageRuntimeVersion]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isDynamic`,
                label: `[${labelPrefix}isDynamic]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}location`,
                label: `[${labelPrefix}location]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}reflectionOnly`,
                label: `[${labelPrefix}reflectionOnly]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isCollectible`,
                label: `[${labelPrefix}isCollectible]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isFullyTrusted`,
                label: `[${labelPrefix}isFullyTrusted]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}customAttributes`,
                label: `[${labelPrefix}customAttributes]`,
                children: CustomAttributeData.fields(`${keyPrefix}customAttributes${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}escapedCodeBase`,
                label: `[${labelPrefix}escapedCodeBase]`,
                type: 'string',
            },
            ...Module.fields(`${keyPrefix}manifestModule`, isInput),
            {
                key: `${keyPrefix}modules`,
                label: `[${labelPrefix}modules]`,
                children: Module.fields(`${keyPrefix}modules${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}globalAssemblyCache`,
                label: `[${labelPrefix}globalAssemblyCache]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}hostContext`,
                label: `[${labelPrefix}hostContext]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}securityRuleSet`,
                label: `[${labelPrefix}securityRuleSet]`,
                type: 'string',
                choices: [
                    'None',
                    'Level1',
                    'Level2',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'definedTypes': utils.childMapping(bundle.inputData?.[`${keyPrefix}definedTypes`], `${keyPrefix}definedTypes`, TypeInfo),
            'exportedTypes': utils.childMapping(bundle.inputData?.[`${keyPrefix}exportedTypes`], `${keyPrefix}exportedTypes`, Type),
            'codeBase': bundle.inputData?.[`${keyPrefix}codeBase`],
            'entryPoint': utils.removeIfEmpty(MethodInfo.mapping(bundle, `${keyPrefix}entryPoint`)),
            'fullName': bundle.inputData?.[`${keyPrefix}fullName`],
            'imageRuntimeVersion': bundle.inputData?.[`${keyPrefix}imageRuntimeVersion`],
            'isDynamic': bundle.inputData?.[`${keyPrefix}isDynamic`],
            'location': bundle.inputData?.[`${keyPrefix}location`],
            'reflectionOnly': bundle.inputData?.[`${keyPrefix}reflectionOnly`],
            'isCollectible': bundle.inputData?.[`${keyPrefix}isCollectible`],
            'isFullyTrusted': bundle.inputData?.[`${keyPrefix}isFullyTrusted`],
            'customAttributes': utils.childMapping(bundle.inputData?.[`${keyPrefix}customAttributes`], `${keyPrefix}customAttributes`, CustomAttributeData),
            'escapedCodeBase': bundle.inputData?.[`${keyPrefix}escapedCodeBase`],
            'manifestModule': utils.removeIfEmpty(Module.mapping(bundle, `${keyPrefix}manifestModule`)),
            'modules': utils.childMapping(bundle.inputData?.[`${keyPrefix}modules`], `${keyPrefix}modules`, Module),
            'globalAssemblyCache': bundle.inputData?.[`${keyPrefix}globalAssemblyCache`],
            'hostContext': bundle.inputData?.[`${keyPrefix}hostContext`],
            'securityRuleSet': bundle.inputData?.[`${keyPrefix}securityRuleSet`],
        }
    },
}
