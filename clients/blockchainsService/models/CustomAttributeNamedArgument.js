const utils = require('../utils/utils');
const CustomAttributeTypedArgument = require('../models/CustomAttributeTypedArgument');
const MemberInfo = require('../models/MemberInfo');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...MemberInfo.fields(`${keyPrefix}memberInfo`, isInput),
            ...CustomAttributeTypedArgument.fields(`${keyPrefix}typedValue`, isInput),
            {
                key: `${keyPrefix}memberName`,
                label: `[${labelPrefix}memberName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isField`,
                label: `[${labelPrefix}isField]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'memberInfo': utils.removeIfEmpty(MemberInfo.mapping(bundle, `${keyPrefix}memberInfo`)),
            'typedValue': utils.removeIfEmpty(CustomAttributeTypedArgument.mapping(bundle, `${keyPrefix}typedValue`)),
            'memberName': bundle.inputData?.[`${keyPrefix}memberName`],
            'isField': bundle.inputData?.[`${keyPrefix}isField`],
        }
    },
}
