const samples = require('../samples/SignedDocumentsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const PatchOperation = require('../models/PatchOperation');
const QuickSignSignedDocumentDto = require('../models/QuickSignSignedDocumentDto');
const SignatureVerificationDto = require('../models/SignatureVerificationDto');
const SignedDocumentCreateDto = require('../models/SignedDocumentCreateDto');
const SignedDocumentDto = require('../models/SignedDocumentDto');
const SignedDocumentDtoCollectionQueryParameters = require('../models/SignedDocumentDtoCollectionQueryParameters');
const SignedDocumentDtoListEnvelope = require('../models/SignedDocumentDtoListEnvelope');
const SignedDocumentUpdateDto = require('../models/SignedDocumentUpdateDto');
const utils = require('../utils/utils');
const FormData = require('form-data');

module.exports = {
    createSignedDocumentAsync: {
        key: 'createSignedDocumentAsync',
        noun: 'SignedDocuments',
        display: {
            label: 'Create a new signed document',
            description: 'Creates a new signed document for the specified tenant.',
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
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
                ...SignedDocumentCreateDto.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SignedDocuments'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...SignedDocumentCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createSignedDocumentAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    deleteSignedDocumentAsync: {
        key: 'deleteSignedDocumentAsync',
        noun: 'SignedDocuments',
        display: {
            label: 'Delete a signed document',
            description: 'Deletes a signed document for the specified tenant.',
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
                    key: 'id',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SignedDocuments/{id}'),
                    method: 'DELETE',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteSignedDocumentAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getSignedDocumentByIdAsync: {
        key: 'getSignedDocumentByIdAsync',
        noun: 'SignedDocuments',
        display: {
            label: 'Get signed document by ID',
            description: 'Retrieves a specific signed document by its identifier.',
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
                    key: 'id',
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
                ...SignedDocumentDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SignedDocuments/{id}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSignedDocumentByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['SignedDocumentDtoSample']
        }
    },
    getSignedDocumentsAsync: {
        key: 'getSignedDocumentsAsync',
        noun: 'SignedDocuments',
        display: {
            label: 'Get all signed documents',
            description: 'Retrieves all signed documents for the specified tenant.',
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
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
                ...SignedDocumentDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...SignedDocumentDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SignedDocuments'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...SignedDocumentDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSignedDocumentsAsync', response.json);
                    return results;
                })
            },
            sample: samples['SignedDocumentDtoListEnvelopeSample']
        }
    },
    getSignedDocumentsCountAsync: {
        key: 'getSignedDocumentsCountAsync',
        noun: 'SignedDocuments',
        display: {
            label: 'Get signed documents count',
            description: 'Returns the count of signed documents for the specified tenant.',
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
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
                ...SignedDocumentDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SignedDocuments/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...SignedDocumentDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getSignedDocumentsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    patchSignedDocumentAsync: {
        key: 'patchSignedDocumentAsync',
        noun: 'SignedDocuments',
        display: {
            label: 'Patch a signed document',
            description: 'Patch a signed document',
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
                    key: 'id',
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
                {
                    key: 'PatchOperation',
                    label: '',
                    type: 'string',
                }
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SignedDocuments/{id}'),
                    method: 'PATCH',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...PatchOperation.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchSignedDocumentAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    prepareAndQuickSignAsync: {
        key: 'prepareAndQuickSignAsync',
        noun: 'SignedDocuments',
        display: {
            label: 'Create, freeze, and quick-sign a document in one call',
            description: 'Server-side single-signer flow: creates a SignedDocument from the uploaded source, stores it, freezes it, signs it with the chosen certificate + provider, and seals it — all in one unit of work. Returns the sealed document. Evidence truth (signed/status/hashes/artifact ids) is server-produced and cannot be supplied by the caller.',
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
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'id',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'file',
                    label: '',
                    type: 'file',
                },
                {
                    key: 'title',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'contactId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'signingCertificateId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'signingProfileId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'providerName',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...SignedDocumentDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                formData.append('id', bundle.inputData?.['id'])
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['file'].split('/').slice(-1)[0]
                formData.append('file', (await (await z.request({url: bundle.inputData?.['file'], method: 'GET', raw: true})).buffer()), { filename: filename })
                formData.append('title', bundle.inputData?.['title'])
                formData.append('contactId', bundle.inputData?.['contactId'])
                formData.append('signingCertificateId', bundle.inputData?.['signingCertificateId'])
                formData.append('signingProfileId', bundle.inputData?.['signingProfileId'])
                formData.append('providerName', bundle.inputData?.['providerName'])
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SignedDocuments/prepare-and-quick-sign'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: formData,
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'prepareAndQuickSignAsync', response.json);
                    return results;
                })
            },
            sample: samples['SignedDocumentDtoSample']
        }
    },
    quickSignSignedDocumentAsync: {
        key: 'quickSignSignedDocumentAsync',
        noun: 'SignedDocuments',
        display: {
            label: 'Quick-sign a frozen document',
            description: 'Signs a frozen signed document directly with a chosen certificate + provider (no signing-request workflow) and seals it. Returns the sealed document.',
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
                    key: 'id',
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
                ...QuickSignSignedDocumentDto.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SignedDocuments/{id}/quick-sign'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...QuickSignSignedDocumentDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'quickSignSignedDocumentAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    updateSignedDocumentAsync: {
        key: 'updateSignedDocumentAsync',
        noun: 'SignedDocuments',
        display: {
            label: 'Update a signed document',
            description: 'Updates an existing signed document for the specified tenant.',
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
                    key: 'id',
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
                ...SignedDocumentUpdateDto.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SignedDocuments/{id}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...SignedDocumentUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateSignedDocumentAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    verifySignedDocumentSignatureAsync: {
        key: 'verifySignedDocumentSignatureAsync',
        noun: 'SignedDocuments',
        display: {
            label: 'Verify a signed document&#39;s signature',
            description: 'Re-verifies the document&#39;s signature against its stored signed artifact (bytes intact + signed by the embedded certificate; certificate trust is a separate concern).',
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
                    key: 'id',
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
                ...SignatureVerificationDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TrustService/SignedDocuments/{id}/verify-signature'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'verifySignedDocumentSignatureAsync', response.json);
                    return results;
                })
            },
            sample: samples['SignatureVerificationDtoSample']
        }
    },
}
