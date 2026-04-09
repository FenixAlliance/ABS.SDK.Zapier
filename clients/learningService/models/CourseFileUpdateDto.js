const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fileName`,
                label: `[${labelPrefix}fileName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fileUploadURL`,
                label: `[${labelPrefix}fileUploadURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contentType`,
                label: `[${labelPrefix}contentType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fileLength`,
                label: `[${labelPrefix}fileLength]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'fileName': bundle.inputData?.[`${keyPrefix}fileName`],
            'fileUploadURL': bundle.inputData?.[`${keyPrefix}fileUploadURL`],
            'contentType': bundle.inputData?.[`${keyPrefix}contentType`],
            'fileLength': bundle.inputData?.[`${keyPrefix}fileLength`],
        }
    },
}
