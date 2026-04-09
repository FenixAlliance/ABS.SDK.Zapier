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
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
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
                key: `${keyPrefix}parentFileUploadId`,
                label: `[${labelPrefix}parentFileUploadId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}filePath`,
                label: `[${labelPrefix}filePath]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessID`,
                label: `[${labelPrefix}businessID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessProfileRecordID`,
                label: `[${labelPrefix}businessProfileRecordID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}metadata`,
                label: `[${labelPrefix}metadata]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}supportRequestID`,
                label: `[${labelPrefix}supportRequestID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'author': bundle.inputData?.[`${keyPrefix}author`],
            'isFolder': bundle.inputData?.[`${keyPrefix}isFolder`],
            'fileName': bundle.inputData?.[`${keyPrefix}fileName`],
            'abstract': bundle.inputData?.[`${keyPrefix}abstract`],
            'keyWords': bundle.inputData?.[`${keyPrefix}keyWords`],
            'validResponse': bundle.inputData?.[`${keyPrefix}validResponse`],
            'parentFileUploadId': bundle.inputData?.[`${keyPrefix}parentFileUploadId`],
            'filePath': bundle.inputData?.[`${keyPrefix}filePath`],
            'businessID': bundle.inputData?.[`${keyPrefix}businessID`],
            'businessProfileRecordID': bundle.inputData?.[`${keyPrefix}businessProfileRecordID`],
            'metadata': bundle.inputData?.[`${keyPrefix}metadata`],
            'supportRequestID': bundle.inputData?.[`${keyPrefix}supportRequestID`],
        }
    },
}
