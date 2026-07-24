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
                key: `${keyPrefix}file`,
                label: `[${labelPrefix}file]`,
                type: 'file',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signingCertificateId`,
                label: `[${labelPrefix}signingCertificateId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signingProfileId`,
                label: `[${labelPrefix}signingProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}providerName`,
                label: `[${labelPrefix}providerName]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'file': bundle.inputData?.[`${keyPrefix}file`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'signingCertificateId': bundle.inputData?.[`${keyPrefix}signingCertificateId`],
            'signingProfileId': bundle.inputData?.[`${keyPrefix}signingProfileId`],
            'providerName': bundle.inputData?.[`${keyPrefix}providerName`],
        }
    },
}
