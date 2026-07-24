const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}providerName`,
                label: `[${labelPrefix}providerName]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}signingCertificateId`,
                label: `[${labelPrefix}signingCertificateId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}signingProfileId`,
                label: `[${labelPrefix}signingProfileId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'providerName': bundle.inputData?.[`${keyPrefix}providerName`],
            'signingCertificateId': bundle.inputData?.[`${keyPrefix}signingCertificateId`],
            'signingProfileId': bundle.inputData?.[`${keyPrefix}signingProfileId`],
        }
    },
}
