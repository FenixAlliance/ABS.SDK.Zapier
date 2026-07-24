const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}signedFileUploadId`,
                label: `[${labelPrefix}signedFileUploadId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}evidenceFileUploadId`,
                label: `[${labelPrefix}evidenceFileUploadId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}externalReference`,
                label: `[${labelPrefix}externalReference]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}providerName`,
                label: `[${labelPrefix}providerName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}outcomeNotes`,
                label: `[${labelPrefix}outcomeNotes]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'signedFileUploadId': bundle.inputData?.[`${keyPrefix}signedFileUploadId`],
            'evidenceFileUploadId': bundle.inputData?.[`${keyPrefix}evidenceFileUploadId`],
            'externalReference': bundle.inputData?.[`${keyPrefix}externalReference`],
            'providerName': bundle.inputData?.[`${keyPrefix}providerName`],
            'outcomeNotes': bundle.inputData?.[`${keyPrefix}outcomeNotes`],
        }
    },
}
