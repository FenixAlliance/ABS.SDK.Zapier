const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}clientId`,
                label: `[${labelPrefix}clientId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectId`,
                label: `[${labelPrefix}projectId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}authString`,
                label: `[${labelPrefix}authString]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tokenString`,
                label: `[${labelPrefix}tokenString]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}clientSecret`,
                label: `[${labelPrefix}clientSecret]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}authProviderX509CertUrl`,
                label: `[${labelPrefix}authProviderX509CertUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}redirectStrings`,
                label: `[${labelPrefix}redirectStrings]`,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'clientId': bundle.inputData?.[`${keyPrefix}clientId`],
            'projectId': bundle.inputData?.[`${keyPrefix}projectId`],
            'authString': bundle.inputData?.[`${keyPrefix}authString`],
            'tokenString': bundle.inputData?.[`${keyPrefix}tokenString`],
            'clientSecret': bundle.inputData?.[`${keyPrefix}clientSecret`],
            'authProviderX509CertUrl': bundle.inputData?.[`${keyPrefix}authProviderX509CertUrl`],
            'redirectStrings': bundle.inputData?.[`${keyPrefix}redirectStrings`],
        }
    },
}
