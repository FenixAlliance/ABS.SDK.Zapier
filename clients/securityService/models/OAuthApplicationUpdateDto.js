const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}displayName`,
                label: `[${labelPrefix}displayName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}clientSecret`,
                label: `[${labelPrefix}clientSecret]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}consentType`,
                label: `[${labelPrefix}consentType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}permissions`,
                label: `[${labelPrefix}permissions]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}requirements`,
                label: `[${labelPrefix}requirements]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}redirectUris`,
                label: `[${labelPrefix}redirectUris]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}postLogoutRedirectUris`,
                label: `[${labelPrefix}postLogoutRedirectUris]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logo`,
                label: `[${labelPrefix}logo]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'displayName': bundle.inputData?.[`${keyPrefix}displayName`],
            'clientSecret': bundle.inputData?.[`${keyPrefix}clientSecret`],
            'consentType': bundle.inputData?.[`${keyPrefix}consentType`],
            'permissions': bundle.inputData?.[`${keyPrefix}permissions`],
            'requirements': bundle.inputData?.[`${keyPrefix}requirements`],
            'redirectUris': bundle.inputData?.[`${keyPrefix}redirectUris`],
            'postLogoutRedirectUris': bundle.inputData?.[`${keyPrefix}postLogoutRedirectUris`],
            'logo': bundle.inputData?.[`${keyPrefix}logo`],
        }
    },
}
