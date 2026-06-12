const utils = require('../utils/utils');
const CustomAttributeData = require('../models/CustomAttributeData');
const MethodInfo = require('../models/MethodInfo');
const Module = require('../models/Module');
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
                    'None',
                    'SpecialName',
                    'RTSpecialName',
                ],
            },
            {
                key: `${keyPrefix}isSpecialName`,
                label: `[${labelPrefix}isSpecialName]`,
                type: 'boolean',
            },
            ...MethodInfo.fields(`${keyPrefix}addMethod`, isInput),
            ...MethodInfo.fields(`${keyPrefix}removeMethod`, isInput),
            ...MethodInfo.fields(`${keyPrefix}raiseMethod`, isInput),
            {
                key: `${keyPrefix}isMulticast`,
                label: `[${labelPrefix}isMulticast]`,
                type: 'boolean',
            },
            ...Type.fields(`${keyPrefix}eventHandlerType`, isInput),
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
            'isSpecialName': bundle.inputData?.[`${keyPrefix}isSpecialName`],
            'addMethod': utils.removeIfEmpty(MethodInfo.mapping(bundle, `${keyPrefix}addMethod`)),
            'removeMethod': utils.removeIfEmpty(MethodInfo.mapping(bundle, `${keyPrefix}removeMethod`)),
            'raiseMethod': utils.removeIfEmpty(MethodInfo.mapping(bundle, `${keyPrefix}raiseMethod`)),
            'isMulticast': bundle.inputData?.[`${keyPrefix}isMulticast`],
            'eventHandlerType': utils.removeIfEmpty(Type.mapping(bundle, `${keyPrefix}eventHandlerType`)),
        }
    },
}
