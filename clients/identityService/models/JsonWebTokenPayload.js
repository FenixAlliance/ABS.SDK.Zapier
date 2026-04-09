const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}aud`,
                label: `[${labelPrefix}aud]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cid`,
                label: `[${labelPrefix}cid]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}iss`,
                label: `[${labelPrefix}iss]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}aid`,
                label: `[${labelPrefix}aid]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sub`,
                label: `[${labelPrefix}sub]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}act`,
                label: `[${labelPrefix}act]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}iat`,
                label: `[${labelPrefix}iat]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}nbf`,
                label: `[${labelPrefix}nbf]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}exp`,
                label: `[${labelPrefix}exp]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}scopes`,
                label: `[${labelPrefix}scopes]`,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'aud': bundle.inputData?.[`${keyPrefix}aud`],
            'cid': bundle.inputData?.[`${keyPrefix}cid`],
            'iss': bundle.inputData?.[`${keyPrefix}iss`],
            'aid': bundle.inputData?.[`${keyPrefix}aid`],
            'sub': bundle.inputData?.[`${keyPrefix}sub`],
            'act': bundle.inputData?.[`${keyPrefix}act`],
            'iat': bundle.inputData?.[`${keyPrefix}iat`],
            'nbf': bundle.inputData?.[`${keyPrefix}nbf`],
            'exp': bundle.inputData?.[`${keyPrefix}exp`],
            'scopes': bundle.inputData?.[`${keyPrefix}scopes`],
        }
    },
}
