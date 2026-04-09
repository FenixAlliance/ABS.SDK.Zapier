const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}issuer`,
                label: `[${labelPrefix}issuer]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}authorizationEndpoint`,
                label: `[${labelPrefix}authorizationEndpoint]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tokenEndpoint`,
                label: `[${labelPrefix}tokenEndpoint]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}endSessionEndpoint`,
                label: `[${labelPrefix}endSessionEndpoint]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}jwksUri`,
                label: `[${labelPrefix}jwksUri]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}responseModesSupported`,
                label: `[${labelPrefix}responseModesSupported]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}responseTypesSupported`,
                label: `[${labelPrefix}responseTypesSupported]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}scopesSupported`,
                label: `[${labelPrefix}scopesSupported]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}subjectTypesSupported`,
                label: `[${labelPrefix}subjectTypesSupported]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}idTokenSigningAlgValuesSupported`,
                label: `[${labelPrefix}idTokenSigningAlgValuesSupported]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}tokenEndpointAuthMethodsSupported`,
                label: `[${labelPrefix}tokenEndpointAuthMethodsSupported]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}claimsSupported`,
                label: `[${labelPrefix}claimsSupported]`,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'issuer': bundle.inputData?.[`${keyPrefix}issuer`],
            'authorizationEndpoint': bundle.inputData?.[`${keyPrefix}authorizationEndpoint`],
            'tokenEndpoint': bundle.inputData?.[`${keyPrefix}tokenEndpoint`],
            'endSessionEndpoint': bundle.inputData?.[`${keyPrefix}endSessionEndpoint`],
            'jwksUri': bundle.inputData?.[`${keyPrefix}jwksUri`],
            'responseModesSupported': bundle.inputData?.[`${keyPrefix}responseModesSupported`],
            'responseTypesSupported': bundle.inputData?.[`${keyPrefix}responseTypesSupported`],
            'scopesSupported': bundle.inputData?.[`${keyPrefix}scopesSupported`],
            'subjectTypesSupported': bundle.inputData?.[`${keyPrefix}subjectTypesSupported`],
            'idTokenSigningAlgValuesSupported': bundle.inputData?.[`${keyPrefix}idTokenSigningAlgValuesSupported`],
            'tokenEndpointAuthMethodsSupported': bundle.inputData?.[`${keyPrefix}tokenEndpointAuthMethodsSupported`],
            'claimsSupported': bundle.inputData?.[`${keyPrefix}claimsSupported`],
        }
    },
}
