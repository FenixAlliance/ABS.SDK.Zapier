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
                key: `${keyPrefix}signedDocumentId`,
                label: `[${labelPrefix}signedDocumentId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}fileName`,
                label: `[${labelPrefix}fileName]`,
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
            {
                key: `${keyPrefix}hash`,
                label: `[${labelPrefix}hash]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fileUploadUrl`,
                label: `[${labelPrefix}fileUploadUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}storageKey`,
                label: `[${labelPrefix}storageKey]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}storageProviderKey`,
                label: `[${labelPrefix}storageProviderKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}attachmentRole`,
                label: `[${labelPrefix}attachmentRole]`,
                type: 'string',
                choices: [
                    'Unknown',
                    'Source',
                    'SupportingEvidence',
                    'AuthorityResponse',
                    'HumanReadablePdf',
                    'XmlPayload',
                    'ValidationReport',
                    'Other',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'signedDocumentId': bundle.inputData?.[`${keyPrefix}signedDocumentId`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'fileName': bundle.inputData?.[`${keyPrefix}fileName`],
            'contentType': bundle.inputData?.[`${keyPrefix}contentType`],
            'fileLength': bundle.inputData?.[`${keyPrefix}fileLength`],
            'hash': bundle.inputData?.[`${keyPrefix}hash`],
            'fileUploadUrl': bundle.inputData?.[`${keyPrefix}fileUploadUrl`],
            'storageKey': bundle.inputData?.[`${keyPrefix}storageKey`],
            'storageProviderKey': bundle.inputData?.[`${keyPrefix}storageProviderKey`],
            'attachmentRole': bundle.inputData?.[`${keyPrefix}attachmentRole`],
        }
    },
}
