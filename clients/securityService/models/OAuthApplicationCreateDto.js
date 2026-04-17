const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}displayName`,
                label: `[${labelPrefix}displayName]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}clientId`,
                label: `[${labelPrefix}clientId]`,
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
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'displayName': bundle.inputData?.[`${keyPrefix}displayName`],
            'clientId': bundle.inputData?.[`${keyPrefix}clientId`],
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
