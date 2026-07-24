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
                key: `${keyPrefix}providerMode`,
                label: `[${labelPrefix}providerMode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signingProfileId`,
                label: `[${labelPrefix}signingProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signingCertificateId`,
                label: `[${labelPrefix}signingCertificateId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'providerName': bundle.inputData?.[`${keyPrefix}providerName`],
            'providerMode': bundle.inputData?.[`${keyPrefix}providerMode`],
            'signingProfileId': bundle.inputData?.[`${keyPrefix}signingProfileId`],
            'signingCertificateId': bundle.inputData?.[`${keyPrefix}signingCertificateId`],
        }
    },
}
