const utils = require('../utils/utils');
const CustomAttributeData = require('../models/CustomAttributeData');
const Module = require('../models/Module');
const Type = require('../models/Type');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'memberType': bundle.inputData?.[`${keyPrefix}memberType`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'declaringType': utils.removeIfEmpty(Type.mapping(bundle, `${keyPrefix}declaringType`)),
            'reflectedType': utils.removeIfEmpty(Type.mapping(bundle, `${keyPrefix}reflectedType`)),
            'module': utils.removeIfEmpty(Module.mapping(bundle, `${keyPrefix}module`)),
            'customAttributes': utils.childMapping(bundle.inputData?.[`${keyPrefix}customAttributes`], `${keyPrefix}customAttributes`, CustomAttributeData),
            'isCollectible': bundle.inputData?.[`${keyPrefix}isCollectible`],
            'metadataToken': bundle.inputData?.[`${keyPrefix}metadataToken`],
        }
    },
}
