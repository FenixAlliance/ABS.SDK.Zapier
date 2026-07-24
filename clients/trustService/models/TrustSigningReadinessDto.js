const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}canProceed`,
                label: `[${labelPrefix}canProceed]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}blockingReasons`,
                label: `[${labelPrefix}blockingReasons]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}warnings`,
                label: `[${labelPrefix}warnings]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}resolvedDocumentTitle`,
                label: `[${labelPrefix}resolvedDocumentTitle]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}resolvedProfileDisplayName`,
                label: `[${labelPrefix}resolvedProfileDisplayName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}resolvedCertificateTitle`,
                label: `[${labelPrefix}resolvedCertificateTitle]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expectedSignatureFormat`,
                label: `[${labelPrefix}expectedSignatureFormat]`,
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
                key: `${keyPrefix}expectedSignaturePurpose`,
                label: `[${labelPrefix}expectedSignaturePurpose]`,
                type: 'string',
                choices: [
                    'Unknown',
                    'RegulatorySubmission',
                    'ContractExecution',
                    'EmailSigning',
                    'InternalApproval',
                    'EvidenceSealing',
                    'AgentCredential',
                    'Other',
                ],
            },
            {
                key: `${keyPrefix}expectedDigestAlgorithm`,
                label: `[${labelPrefix}expectedDigestAlgorithm]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expectedSignatureAlgorithm`,
                label: `[${labelPrefix}expectedSignatureAlgorithm]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expectedCanonicalizationAlgorithm`,
                label: `[${labelPrefix}expectedCanonicalizationAlgorithm]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}policyIdentifier`,
                label: `[${labelPrefix}policyIdentifier]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}authorityProfile`,
                label: `[${labelPrefix}authorityProfile]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}requiresCustodyProvider`,
                label: `[${labelPrefix}requiresCustodyProvider]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}requiresSourceArtifact`,
                label: `[${labelPrefix}requiresSourceArtifact]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}requiresCertificate`,
                label: `[${labelPrefix}requiresCertificate]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}correlationId`,
                label: `[${labelPrefix}correlationId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'canProceed': bundle.inputData?.[`${keyPrefix}canProceed`],
            'blockingReasons': bundle.inputData?.[`${keyPrefix}blockingReasons`],
            'warnings': bundle.inputData?.[`${keyPrefix}warnings`],
            'resolvedDocumentTitle': bundle.inputData?.[`${keyPrefix}resolvedDocumentTitle`],
            'resolvedProfileDisplayName': bundle.inputData?.[`${keyPrefix}resolvedProfileDisplayName`],
            'resolvedCertificateTitle': bundle.inputData?.[`${keyPrefix}resolvedCertificateTitle`],
            'expectedSignatureFormat': bundle.inputData?.[`${keyPrefix}expectedSignatureFormat`],
            'expectedSignaturePurpose': bundle.inputData?.[`${keyPrefix}expectedSignaturePurpose`],
            'expectedDigestAlgorithm': bundle.inputData?.[`${keyPrefix}expectedDigestAlgorithm`],
            'expectedSignatureAlgorithm': bundle.inputData?.[`${keyPrefix}expectedSignatureAlgorithm`],
            'expectedCanonicalizationAlgorithm': bundle.inputData?.[`${keyPrefix}expectedCanonicalizationAlgorithm`],
            'policyIdentifier': bundle.inputData?.[`${keyPrefix}policyIdentifier`],
            'authorityProfile': bundle.inputData?.[`${keyPrefix}authorityProfile`],
            'requiresCustodyProvider': bundle.inputData?.[`${keyPrefix}requiresCustodyProvider`],
            'requiresSourceArtifact': bundle.inputData?.[`${keyPrefix}requiresSourceArtifact`],
            'requiresCertificate': bundle.inputData?.[`${keyPrefix}requiresCertificate`],
            'correlationId': bundle.inputData?.[`${keyPrefix}correlationId`],
        }
    },
}
