const samples = require('../samples/SignedDocumentArtifactsApi');
const BooleanEnvelope = require('../models/BooleanEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const TrustArtifactReferenceDtoEnvelope = require('../models/TrustArtifactReferenceDtoEnvelope');
const utils = require('../utils/utils');

module.exports = {
    freezeAsync: {
        key: 'freezeAsync',
        noun: 'SignedDocumentArtifacts',
        display: {
            label: 'Freeze the source for signature',
            description: 'Copies the primary authoring artifact into a new Sealed frozen-source artifact, hashes it, and binds it to the document (LockState &#x3D; FrozenForSignature).',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'signedDocumentId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...TrustArtifactReferenceDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SignedDocumentArtifacts/{signedDocumentId}/freeze'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'freezeAsync', response.json);
                    return results;
                })
            },
            sample: samples['TrustArtifactReferenceDtoEnvelopeSample']
        }
    },
    getReferenceAsync: {
        key: 'getReferenceAsync',
        noun: 'SignedDocumentArtifacts',
        display: {
            label: 'Get an artifact reference',
            description: 'Resolves a stored artifact&#39;s reference (FileUpload id + key + hash + media hints).',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'fileUploadId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...TrustArtifactReferenceDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SignedDocumentArtifacts/reference/{fileUploadId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getReferenceAsync', response.json);
                    return results;
                })
            },
            sample: samples['TrustArtifactReferenceDtoEnvelopeSample']
        }
    },
    setPrimaryAuthoringFileAsync: {
        key: 'setPrimaryAuthoringFileAsync',
        noun: 'SignedDocumentArtifacts',
        display: {
            label: 'Set the primary authoring file',
            description: 'Links an existing scan-gated FileUpload as the document&#39;s mutable authoring artifact (only while editable).',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'signedDocumentId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'fileUploadId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SignedDocumentArtifacts/{signedDocumentId}/primary-file/{fileUploadId}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'setPrimaryAuthoringFileAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    verifyAsync: {
        key: 'verifyAsync',
        noun: 'SignedDocumentArtifacts',
        display: {
            label: 'Verify an artifact hash',
            description: 'Re-reads the artifact bytes and verifies them against the recorded SHA-256. Returns true on match.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'fileUploadId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...BooleanEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SignedDocumentArtifacts/reference/{fileUploadId}/verify'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'verifyAsync', response.json);
                    return results;
                })
            },
            sample: samples['BooleanEnvelopeSample']
        }
    },
}
