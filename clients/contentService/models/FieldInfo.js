const utils = require('../utils/utils');
const CustomAttributeData = require('../models/CustomAttributeData');
const Module = require('../models/Module');
const RuntimeFieldHandle = require('../models/RuntimeFieldHandle');
const Type = require('../models/Type');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            ...Type.fields(`${keyPrefix}declaringType`, isInput),
            ...Type.fields(`${keyPrefix}reflectedType`, isInput),
            ...Module.fields(`${keyPrefix}module`, isInput),
            {
                key: `${keyPrefix}customAttributes`,
                label: `[${labelPrefix}customAttributes]`,
                children: CustomAttributeData.fields(`${keyPrefix}customAttributes${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}isCollectible`,
                label: `[${labelPrefix}isCollectible]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}metadataToken`,
                label: `[${labelPrefix}metadataToken]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}memberType`,
                label: `[${labelPrefix}memberType]`,
                type: 'string',
                choices: [
                    'Constructor',
                    'Event',
                    'Field',
                    'Method',
                    'Property',
                    'TypeInfo',
                    'Custom',
                    'NestedType',
                    'All',
                ],
            },
            {
                key: `${keyPrefix}attributes`,
                label: `[${labelPrefix}attributes]`,
                type: 'string',
                choices: [
                    'PrivateScope',
                    'Private',
                    'FamANDAssem',
                    'Assembly',
                    'Family',
                    'FamORAssem',
                    'Public',
                    'FieldAccessMask',
                    'Static',
                    'InitOnly',
                    'Literal',
                    'NotSerialized',
                    'HasFieldRVA',
                    'SpecialName',
                    'RTSpecialName',
                    'HasFieldMarshal',
                    'PinvokeImpl',
                    'HasDefault',
                    'ReservedMask',
                ],
            },
            ...Type.fields(`${keyPrefix}fieldType`, isInput),
            {
                key: `${keyPrefix}isInitOnly`,
                label: `[${labelPrefix}isInitOnly]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isLiteral`,
                label: `[${labelPrefix}isLiteral]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isNotSerialized`,
                label: `[${labelPrefix}isNotSerialized]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isPinvokeImpl`,
                label: `[${labelPrefix}isPinvokeImpl]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isSpecialName`,
                label: `[${labelPrefix}isSpecialName]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isStatic`,
                label: `[${labelPrefix}isStatic]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isAssembly`,
                label: `[${labelPrefix}isAssembly]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isFamily`,
                label: `[${labelPrefix}isFamily]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isFamilyAndAssembly`,
                label: `[${labelPrefix}isFamilyAndAssembly]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isFamilyOrAssembly`,
                label: `[${labelPrefix}isFamilyOrAssembly]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isPrivate`,
                label: `[${labelPrefix}isPrivate]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isPublic`,
                label: `[${labelPrefix}isPublic]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isSecurityCritical`,
                label: `[${labelPrefix}isSecurityCritical]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isSecuritySafeCritical`,
                label: `[${labelPrefix}isSecuritySafeCritical]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isSecurityTransparent`,
                label: `[${labelPrefix}isSecurityTransparent]`,
                type: 'boolean',
            },
            ...RuntimeFieldHandle.fields(`${keyPrefix}fieldHandle`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'declaringType': utils.removeIfEmpty(Type.mapping(bundle, `${keyPrefix}declaringType`)),
            'reflectedType': utils.removeIfEmpty(Type.mapping(bundle, `${keyPrefix}reflectedType`)),
            'module': utils.removeIfEmpty(Module.mapping(bundle, `${keyPrefix}module`)),
            'customAttributes': utils.childMapping(bundle.inputData?.[`${keyPrefix}customAttributes`], `${keyPrefix}customAttributes`, CustomAttributeData),
            'isCollectible': bundle.inputData?.[`${keyPrefix}isCollectible`],
            'metadataToken': bundle.inputData?.[`${keyPrefix}metadataToken`],
            'memberType': bundle.inputData?.[`${keyPrefix}memberType`],
            'attributes': bundle.inputData?.[`${keyPrefix}attributes`],
            'fieldType': utils.removeIfEmpty(Type.mapping(bundle, `${keyPrefix}fieldType`)),
            'isInitOnly': bundle.inputData?.[`${keyPrefix}isInitOnly`],
            'isLiteral': bundle.inputData?.[`${keyPrefix}isLiteral`],
            'isNotSerialized': bundle.inputData?.[`${keyPrefix}isNotSerialized`],
            'isPinvokeImpl': bundle.inputData?.[`${keyPrefix}isPinvokeImpl`],
            'isSpecialName': bundle.inputData?.[`${keyPrefix}isSpecialName`],
            'isStatic': bundle.inputData?.[`${keyPrefix}isStatic`],
            'isAssembly': bundle.inputData?.[`${keyPrefix}isAssembly`],
            'isFamily': bundle.inputData?.[`${keyPrefix}isFamily`],
            'isFamilyAndAssembly': bundle.inputData?.[`${keyPrefix}isFamilyAndAssembly`],
            'isFamilyOrAssembly': bundle.inputData?.[`${keyPrefix}isFamilyOrAssembly`],
            'isPrivate': bundle.inputData?.[`${keyPrefix}isPrivate`],
            'isPublic': bundle.inputData?.[`${keyPrefix}isPublic`],
            'isSecurityCritical': bundle.inputData?.[`${keyPrefix}isSecurityCritical`],
            'isSecuritySafeCritical': bundle.inputData?.[`${keyPrefix}isSecuritySafeCritical`],
            'isSecurityTransparent': bundle.inputData?.[`${keyPrefix}isSecurityTransparent`],
            'fieldHandle': utils.removeIfEmpty(RuntimeFieldHandle.mapping(bundle, `${keyPrefix}fieldHandle`)),
        }
    },
}
