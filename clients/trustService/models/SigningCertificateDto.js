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
                key: `${keyPrefix}signature`,
                label: `[${labelPrefix}signature]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fileLengthInBits`,
                label: `[${labelPrefix}fileLengthInBits]`,
                type: 'number',
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
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}userId`,
                label: `[${labelPrefix}userId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}securityCertificateId`,
                label: `[${labelPrefix}securityCertificateId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}certificateStatus`,
                label: `[${labelPrefix}certificateStatus]`,
                type: 'string',
                choices: [
                    'Unknown',
                    'Active',
                    'Expiring',
                    'Expired',
                    'Revoked',
                    'Disabled',
                ],
            },
            {
                key: `${keyPrefix}thumbprint`,
                label: `[${labelPrefix}thumbprint]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subjectName`,
                label: `[${labelPrefix}subjectName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}issuerName`,
                label: `[${labelPrefix}issuerName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}serialNumber`,
                label: `[${labelPrefix}serialNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notBeforeUtc`,
                label: `[${labelPrefix}notBeforeUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notAfterUtc`,
                label: `[${labelPrefix}notAfterUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactName`,
                label: `[${labelPrefix}contactName]`,
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
            'signature': bundle.inputData?.[`${keyPrefix}signature`],
            'fileLengthInBits': bundle.inputData?.[`${keyPrefix}fileLengthInBits`],
            'certificateType': bundle.inputData?.[`${keyPrefix}certificateType`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'userId': bundle.inputData?.[`${keyPrefix}userId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'securityCertificateId': bundle.inputData?.[`${keyPrefix}securityCertificateId`],
            'certificateStatus': bundle.inputData?.[`${keyPrefix}certificateStatus`],
            'thumbprint': bundle.inputData?.[`${keyPrefix}thumbprint`],
            'subjectName': bundle.inputData?.[`${keyPrefix}subjectName`],
            'issuerName': bundle.inputData?.[`${keyPrefix}issuerName`],
            'serialNumber': bundle.inputData?.[`${keyPrefix}serialNumber`],
            'notBeforeUtc': bundle.inputData?.[`${keyPrefix}notBeforeUtc`],
            'notAfterUtc': bundle.inputData?.[`${keyPrefix}notAfterUtc`],
            'contactName': bundle.inputData?.[`${keyPrefix}contactName`],
        }
    },
}
