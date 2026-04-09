const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}metadata`,
                label: `[${labelPrefix}metadata]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}author`,
                label: `[${labelPrefix}author]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isFolder`,
                label: `[${labelPrefix}isFolder]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}fileName`,
                label: `[${labelPrefix}fileName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}abstract`,
                label: `[${labelPrefix}abstract]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}keyWords`,
                label: `[${labelPrefix}keyWords]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}validResponse`,
                label: `[${labelPrefix}validResponse]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}parentFileUploadID`,
                label: `[${labelPrefix}parentFileUploadID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}filePath`,
                label: `[${labelPrefix}filePath]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'metadata': bundle.inputData?.[`${keyPrefix}metadata`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'author': bundle.inputData?.[`${keyPrefix}author`],
            'isFolder': bundle.inputData?.[`${keyPrefix}isFolder`],
            'fileName': bundle.inputData?.[`${keyPrefix}fileName`],
            'abstract': bundle.inputData?.[`${keyPrefix}abstract`],
            'keyWords': bundle.inputData?.[`${keyPrefix}keyWords`],
            'validResponse': bundle.inputData?.[`${keyPrefix}validResponse`],
            'parentFileUploadID': bundle.inputData?.[`${keyPrefix}parentFileUploadID`],
            'filePath': bundle.inputData?.[`${keyPrefix}filePath`],
        }
    },
}
