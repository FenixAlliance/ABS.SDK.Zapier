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
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}url`,
                label: `[${labelPrefix}url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}csr`,
                label: `[${labelPrefix}csr]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}publicKey`,
                label: `[${labelPrefix}publicKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}certificateType`,
                label: `[${labelPrefix}certificateType]`,
                type: 'string',
                choices: [
                    'AuthSignedCertificate',
                    'SelfSignedCertificate',
                    'AllianceSignedCertificate',
                ],
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}securityCertificateId`,
                label: `[${labelPrefix}securityCertificateId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'url': bundle.inputData?.[`${keyPrefix}url`],
            'csr': bundle.inputData?.[`${keyPrefix}csr`],
            'publicKey': bundle.inputData?.[`${keyPrefix}publicKey`],
            'certificateType': bundle.inputData?.[`${keyPrefix}certificateType`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'securityCertificateId': bundle.inputData?.[`${keyPrefix}securityCertificateId`],
        }
    },
}
