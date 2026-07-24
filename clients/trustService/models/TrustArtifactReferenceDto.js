const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}storageObjectId`,
                label: `[${labelPrefix}storageObjectId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}storageKey`,
                label: `[${labelPrefix}storageKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}storageProviderKey`,
                label: `[${labelPrefix}storageProviderKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sha256`,
                label: `[${labelPrefix}sha256]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contentType`,
                label: `[${labelPrefix}contentType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}length`,
                label: `[${labelPrefix}length]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}mutability`,
                label: `[${labelPrefix}mutability]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'storageObjectId': bundle.inputData?.[`${keyPrefix}storageObjectId`],
            'storageKey': bundle.inputData?.[`${keyPrefix}storageKey`],
            'storageProviderKey': bundle.inputData?.[`${keyPrefix}storageProviderKey`],
            'sha256': bundle.inputData?.[`${keyPrefix}sha256`],
            'contentType': bundle.inputData?.[`${keyPrefix}contentType`],
            'length': bundle.inputData?.[`${keyPrefix}length`],
            'mutability': bundle.inputData?.[`${keyPrefix}mutability`],
        }
    },
}
