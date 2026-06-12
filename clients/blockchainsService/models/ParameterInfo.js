const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const CustomAttributeData = require('../models/CustomAttributeData');
const MemberInfo = require('../models/MemberInfo');
const Type = require('../models/Type');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}attributes`,
                label: `[${labelPrefix}attributes]`,
                type: 'string',
                choices: [
                    'None',
                    'In',
                    'Out',
                    'Lcid',
                    'Retval',
                    'Optional',
                    'HasDefault',
                    'HasFieldMarshal',
                    'Reserved3',
                    'Reserved4',
                    'ReservedMask',
                ],
            },
            ...MemberInfo.fields(`${keyPrefix}member`, isInput),
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            ...Type.fields(`${keyPrefix}parameterType`, isInput),
            {
                key: `${keyPrefix}position`,
                label: `[${labelPrefix}position]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}isIn`,
                label: `[${labelPrefix}isIn]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isLcid`,
                label: `[${labelPrefix}isLcid]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isOptional`,
                label: `[${labelPrefix}isOptional]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isOut`,
                label: `[${labelPrefix}isOut]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isRetval`,
                label: `[${labelPrefix}isRetval]`,
                type: 'boolean',
            },
            ....fields(`${keyPrefix}defaultValue`, isInput),
            ....fields(`${keyPrefix}rawDefaultValue`, isInput),
            {
                key: `${keyPrefix}hasDefaultValue`,
                label: `[${labelPrefix}hasDefaultValue]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}customAttributes`,
                label: `[${labelPrefix}customAttributes]`,
                children: CustomAttributeData.fields(`${keyPrefix}customAttributes${!isInput ? '[]' : ''}`, isInput, true), 
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
            'attributes': bundle.inputData?.[`${keyPrefix}attributes`],
            'member': utils.removeIfEmpty(MemberInfo.mapping(bundle, `${keyPrefix}member`)),
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'parameterType': utils.removeIfEmpty(Type.mapping(bundle, `${keyPrefix}parameterType`)),
            'position': bundle.inputData?.[`${keyPrefix}position`],
            'isIn': bundle.inputData?.[`${keyPrefix}isIn`],
            'isLcid': bundle.inputData?.[`${keyPrefix}isLcid`],
            'isOptional': bundle.inputData?.[`${keyPrefix}isOptional`],
            'isOut': bundle.inputData?.[`${keyPrefix}isOut`],
            'isRetval': bundle.inputData?.[`${keyPrefix}isRetval`],
            'defaultValue': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}defaultValue`)),
            'rawDefaultValue': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}rawDefaultValue`)),
            'hasDefaultValue': bundle.inputData?.[`${keyPrefix}hasDefaultValue`],
            'customAttributes': utils.childMapping(bundle.inputData?.[`${keyPrefix}customAttributes`], `${keyPrefix}customAttributes`, CustomAttributeData),
            'metadataToken': bundle.inputData?.[`${keyPrefix}metadataToken`],
        }
    },
}
