const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}userName`,
                label: `[${labelPrefix}userName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}handler`,
                label: `[${labelPrefix}handler]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastName`,
                label: `[${labelPrefix}lastName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}publicName`,
                label: `[${labelPrefix}publicName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}about`,
                label: `[${labelPrefix}about]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}twoFactorEnabled`,
                label: `[${labelPrefix}twoFactorEnabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}lockoutEnabled`,
                label: `[${labelPrefix}lockoutEnabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}lockoutEnd`,
                label: `[${labelPrefix}lockoutEnd]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'userName': bundle.inputData?.[`${keyPrefix}userName`],
            'handler': bundle.inputData?.[`${keyPrefix}handler`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'lastName': bundle.inputData?.[`${keyPrefix}lastName`],
            'publicName': bundle.inputData?.[`${keyPrefix}publicName`],
            'about': bundle.inputData?.[`${keyPrefix}about`],
            'twoFactorEnabled': bundle.inputData?.[`${keyPrefix}twoFactorEnabled`],
            'lockoutEnabled': bundle.inputData?.[`${keyPrefix}lockoutEnabled`],
            'lockoutEnd': bundle.inputData?.[`${keyPrefix}lockoutEnd`],
        }
    },
}
