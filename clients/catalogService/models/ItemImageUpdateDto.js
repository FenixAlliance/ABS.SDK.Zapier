const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}itemId`,
                label: `[${labelPrefix}itemId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}isItemMozaicBG`,
                label: `[${labelPrefix}isItemMozaicBG]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}mD5Hash`,
                label: `[${labelPrefix}mD5Hash]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}metadata`,
                label: `[${labelPrefix}metadata]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fileUploadURL`,
                label: `[${labelPrefix}fileUploadURL]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}fileName`,
                label: `[${labelPrefix}fileName]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}abstract`,
                label: `[${labelPrefix}abstract]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}author`,
                label: `[${labelPrefix}author]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}keyWords`,
                label: `[${labelPrefix}keyWords]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contentType`,
                label: `[${labelPrefix}contentType]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}fileLength`,
                label: `[${labelPrefix}fileLength]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}validResponse`,
                label: `[${labelPrefix}validResponse]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}parentFileUploadId`,
                label: `[${labelPrefix}parentFileUploadId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
            'isItemMozaicBG': bundle.inputData?.[`${keyPrefix}isItemMozaicBG`],
            'mD5Hash': bundle.inputData?.[`${keyPrefix}mD5Hash`],
            'metadata': bundle.inputData?.[`${keyPrefix}metadata`],
            'fileUploadURL': bundle.inputData?.[`${keyPrefix}fileUploadURL`],
            'fileName': bundle.inputData?.[`${keyPrefix}fileName`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'abstract': bundle.inputData?.[`${keyPrefix}abstract`],
            'author': bundle.inputData?.[`${keyPrefix}author`],
            'keyWords': bundle.inputData?.[`${keyPrefix}keyWords`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'contentType': bundle.inputData?.[`${keyPrefix}contentType`],
            'fileLength': bundle.inputData?.[`${keyPrefix}fileLength`],
            'validResponse': bundle.inputData?.[`${keyPrefix}validResponse`],
            'parentFileUploadId': bundle.inputData?.[`${keyPrefix}parentFileUploadId`],
        }
    },
}
