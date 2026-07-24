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
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}validationCode`,
                label: `[${labelPrefix}validationCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signatureImage`,
                label: `[${labelPrefix}signatureImage]`,
                type: 'string',
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
                key: `${keyPrefix}signingProfileId`,
                label: `[${labelPrefix}signingProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signingCertificateId`,
                label: `[${labelPrefix}signingCertificateId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signedDocumentId`,
                label: `[${labelPrefix}signedDocumentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signedAtUtc`,
                label: `[${labelPrefix}signedAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signingStatus`,
                label: `[${labelPrefix}signingStatus]`,
                type: 'string',
                choices: [
                    'Unknown',
                    'Draft',
                    'Signed',
                    'Failed',
                    'Revoked',
                ],
            },
            {
                key: `${keyPrefix}verificationStatus`,
                label: `[${labelPrefix}verificationStatus]`,
                type: 'string',
                choices: [
                    'Unknown',
                    'NotVerified',
                    'Valid',
                    'Invalid',
                    'Expired',
                ],
            },
            {
                key: `${keyPrefix}signatureFormat`,
                label: `[${labelPrefix}signatureFormat]`,
                type: 'string',
                choices: [
                    'Unknown',
                    'XAdES',
                    'PAdES',
                    'CAdES',
                    'SMIME',
                    'DetachedXmlDSig',
                    'Enveloped',
                    'Other',
                ],
            },
            {
                key: `${keyPrefix}digestAlgorithm`,
                label: `[${labelPrefix}digestAlgorithm]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signatureAlgorithm`,
                label: `[${labelPrefix}signatureAlgorithm]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}canonicalizationAlgorithm`,
                label: `[${labelPrefix}canonicalizationAlgorithm]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}policyIdentifier`,
                label: `[${labelPrefix}policyIdentifier]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}correlationId`,
                label: `[${labelPrefix}correlationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}digestValue`,
                label: `[${labelPrefix}digestValue]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signatureValueHash`,
                label: `[${labelPrefix}signatureValueHash]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactName`,
                label: `[${labelPrefix}contactName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signingProfileDisplayName`,
                label: `[${labelPrefix}signingProfileDisplayName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signingCertificateTitle`,
                label: `[${labelPrefix}signingCertificateTitle]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signedDocumentTitle`,
                label: `[${labelPrefix}signedDocumentTitle]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'validationCode': bundle.inputData?.[`${keyPrefix}validationCode`],
            'signatureImage': bundle.inputData?.[`${keyPrefix}signatureImage`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'userId': bundle.inputData?.[`${keyPrefix}userId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'signingProfileId': bundle.inputData?.[`${keyPrefix}signingProfileId`],
            'signingCertificateId': bundle.inputData?.[`${keyPrefix}signingCertificateId`],
            'signedDocumentId': bundle.inputData?.[`${keyPrefix}signedDocumentId`],
            'signedAtUtc': bundle.inputData?.[`${keyPrefix}signedAtUtc`],
            'signingStatus': bundle.inputData?.[`${keyPrefix}signingStatus`],
            'verificationStatus': bundle.inputData?.[`${keyPrefix}verificationStatus`],
            'signatureFormat': bundle.inputData?.[`${keyPrefix}signatureFormat`],
            'digestAlgorithm': bundle.inputData?.[`${keyPrefix}digestAlgorithm`],
            'signatureAlgorithm': bundle.inputData?.[`${keyPrefix}signatureAlgorithm`],
            'canonicalizationAlgorithm': bundle.inputData?.[`${keyPrefix}canonicalizationAlgorithm`],
            'policyIdentifier': bundle.inputData?.[`${keyPrefix}policyIdentifier`],
            'correlationId': bundle.inputData?.[`${keyPrefix}correlationId`],
            'digestValue': bundle.inputData?.[`${keyPrefix}digestValue`],
            'signatureValueHash': bundle.inputData?.[`${keyPrefix}signatureValueHash`],
            'contactName': bundle.inputData?.[`${keyPrefix}contactName`],
            'signingProfileDisplayName': bundle.inputData?.[`${keyPrefix}signingProfileDisplayName`],
            'signingCertificateTitle': bundle.inputData?.[`${keyPrefix}signingCertificateTitle`],
            'signedDocumentTitle': bundle.inputData?.[`${keyPrefix}signedDocumentTitle`],
        }
    },
}
