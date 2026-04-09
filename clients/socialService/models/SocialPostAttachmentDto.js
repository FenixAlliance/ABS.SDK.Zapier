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
                key: `${keyPrefix}hash`,
                label: `[${labelPrefix}hash]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fileUrl`,
                label: `[${labelPrefix}fileUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}filePath`,
                label: `[${labelPrefix}filePath]`,
                type: 'string',
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
                key: `${keyPrefix}metadata`,
                label: `[${labelPrefix}metadata]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fileLength`,
                label: `[${labelPrefix}fileLength]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}contentType`,
                label: `[${labelPrefix}contentType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentFileId`,
                label: `[${labelPrefix}parentFileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}validResponse`,
                label: `[${labelPrefix}validResponse]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}userId`,
                label: `[${labelPrefix}userId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileId`,
                label: `[${labelPrefix}socialProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}folderPath`,
                label: `[${labelPrefix}folderPath]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialPostId`,
                label: `[${labelPrefix}socialPostId]`,
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
            'hash': bundle.inputData?.[`${keyPrefix}hash`],
            'fileUrl': bundle.inputData?.[`${keyPrefix}fileUrl`],
            'filePath': bundle.inputData?.[`${keyPrefix}filePath`],
            'fileName': bundle.inputData?.[`${keyPrefix}fileName`],
            'abstract': bundle.inputData?.[`${keyPrefix}abstract`],
            'keyWords': bundle.inputData?.[`${keyPrefix}keyWords`],
            'metadata': bundle.inputData?.[`${keyPrefix}metadata`],
            'fileLength': bundle.inputData?.[`${keyPrefix}fileLength`],
            'contentType': bundle.inputData?.[`${keyPrefix}contentType`],
            'parentFileId': bundle.inputData?.[`${keyPrefix}parentFileId`],
            'validResponse': bundle.inputData?.[`${keyPrefix}validResponse`],
            'userId': bundle.inputData?.[`${keyPrefix}userId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
            'folderPath': bundle.inputData?.[`${keyPrefix}folderPath`],
            'socialPostId': bundle.inputData?.[`${keyPrefix}socialPostId`],
        }
    },
}
