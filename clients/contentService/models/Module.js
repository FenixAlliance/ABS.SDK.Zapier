const utils = require('../utils/utils');
const Assembly = require('../models/Assembly');
const CustomAttributeData = require('../models/CustomAttributeData');
const ModuleHandle = require('../models/ModuleHandle');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...Assembly.fields(`${keyPrefix}assembly`, isInput),
            {
                key: `${keyPrefix}fullyQualifiedName`,
                label: `[${labelPrefix}fullyQualifiedName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}mdStreamVersion`,
                label: `[${labelPrefix}mdStreamVersion]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}moduleVersionId`,
                label: `[${labelPrefix}moduleVersionId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}scopeName`,
                label: `[${labelPrefix}scopeName]`,
                type: 'string',
            },
            ...ModuleHandle.fields(`${keyPrefix}moduleHandle`, isInput),
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
            'assembly': utils.removeIfEmpty(Assembly.mapping(bundle, `${keyPrefix}assembly`)),
            'fullyQualifiedName': bundle.inputData?.[`${keyPrefix}fullyQualifiedName`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'mdStreamVersion': bundle.inputData?.[`${keyPrefix}mdStreamVersion`],
            'moduleVersionId': bundle.inputData?.[`${keyPrefix}moduleVersionId`],
            'scopeName': bundle.inputData?.[`${keyPrefix}scopeName`],
            'moduleHandle': utils.removeIfEmpty(ModuleHandle.mapping(bundle, `${keyPrefix}moduleHandle`)),
            'customAttributes': utils.childMapping(bundle.inputData?.[`${keyPrefix}customAttributes`], `${keyPrefix}customAttributes`, CustomAttributeData),
            'metadataToken': bundle.inputData?.[`${keyPrefix}metadataToken`],
        }
    },
}
