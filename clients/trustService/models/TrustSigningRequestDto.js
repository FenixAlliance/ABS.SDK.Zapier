const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}signedDocumentId`,
                label: `[${labelPrefix}signedDocumentId]`,
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
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}requestedFormat`,
                label: `[${labelPrefix}requestedFormat]`,
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
                key: `${keyPrefix}requestedPurpose`,
                label: `[${labelPrefix}requestedPurpose]`,
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
                key: `${keyPrefix}correlationId`,
                label: `[${labelPrefix}correlationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceStorageObjectId`,
                label: `[${labelPrefix}sourceStorageObjectId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sourceSha256`,
                label: `[${labelPrefix}sourceSha256]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}externalReference`,
                label: `[${labelPrefix}externalReference]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dryRun`,
                label: `[${labelPrefix}dryRun]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'signedDocumentId': bundle.inputData?.[`${keyPrefix}signedDocumentId`],
            'signingProfileId': bundle.inputData?.[`${keyPrefix}signingProfileId`],
            'signingCertificateId': bundle.inputData?.[`${keyPrefix}signingCertificateId`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'requestedFormat': bundle.inputData?.[`${keyPrefix}requestedFormat`],
            'requestedPurpose': bundle.inputData?.[`${keyPrefix}requestedPurpose`],
            'correlationId': bundle.inputData?.[`${keyPrefix}correlationId`],
            'sourceStorageObjectId': bundle.inputData?.[`${keyPrefix}sourceStorageObjectId`],
            'sourceSha256': bundle.inputData?.[`${keyPrefix}sourceSha256`],
            'externalReference': bundle.inputData?.[`${keyPrefix}externalReference`],
            'dryRun': bundle.inputData?.[`${keyPrefix}dryRun`],
        }
    },
}
