const utils = require('../utils/utils');
const Account = require('../models/Account');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}verified`,
                label: `[${labelPrefix}verified]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}fileUrl`,
                label: `[${labelPrefix}fileUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}childs`,
                label: `[${labelPrefix}childs]`,
                children: Account.fields(`${keyPrefix}childs${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'verified': bundle.inputData?.[`${keyPrefix}verified`],
            'fileUrl': bundle.inputData?.[`${keyPrefix}fileUrl`],
            'childs': utils.childMapping(bundle.inputData?.[`${keyPrefix}childs`], `${keyPrefix}childs`, Account),
        }
    },
}
