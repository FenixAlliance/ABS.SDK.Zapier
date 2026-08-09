const samples = require('../samples/FilesApi');
const ByteArray = require('../models/ByteArray');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const FileUploadDtoEnvelope = require('../models/FileUploadDtoEnvelope');
const utils = require('../utils/utils');
const FormData = require('form-data');
const FormData = require('form-data');
const FormData = require('form-data');
const FormData = require('form-data');

module.exports = {
    createFileAsync: {
        key: 'createFileAsync',
        noun: 'Files',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
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
                    key: 'file',
                    label: '',
                    type: 'file',
                },
                {
                    key: 'notes',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'title',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'author',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'isFolder',
                    label: '',
                    type: 'boolean',
                },
                {
                    key: 'fileName',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'abstract',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'keyWords',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'validResponse',
                    label: '',
                    type: 'boolean',
                },
                {
                    key: 'parentFileUploadId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'filePath',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'publicAccessType',
                    label: '',
                    type: 'string',
                    choices: [
                        'false',
                        'Container',
                        'Blob',
                        'Unknown',
                    ],
                },
                {
                    key: 'purpose',
                    label: '',
                    type: 'string',
                    choices: [
                        'Unknown',
                        'IdentityAvatar',
                        'IdentityBanner',
                        'ProfileAsset',
                        'EngagementInline',
                        'EngagementAttachment',
                        'MessageAttachment',
                        'SocialPost',
                        'RecordAttachment',
                        'AiGenerated',
                        'SystemArtifact',
                        'Temporary',
                    ],
                },
                {
                    key: 'socialProfileId.value',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.content',
                    label: '',
                    type: 'ByteArray',
                },
                {
                    key: 'appFile.sha256',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.createdAtUtc',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.userId.value',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.tenantId.value',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.enrollmentId.value',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.source',
                    label: '',
                    type: 'string',
                    choices: [
                        'Unknown',
                        'HttpUpload',
                        'Integration',
                        'InternalProcess',
                        'ApiClient',
                        'WorkflowEngine',
                    ],
                },
                {
                    key: 'appFile.length',
                    label: '',
                    type: 'number',
                },
                {
                    key: 'appFile.name',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.fileName',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.lastModified',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.size',
                    label: '',
                    type: 'number',
                },
                {
                    key: 'appFile.contentType',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.contentDisposition',
                    label: '',
                    type: 'string',
                },
                ...object.fields(),
                {
                    key: 'id',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'timestamp',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['file'].split('/').slice(-1)[0]
                formData.append('file', (await (await z.request({url: bundle.inputData?.['file'], method: 'GET', raw: true})).buffer()), { filename: filename })
                formData.append('notes', bundle.inputData?.['notes'])
                formData.append('title', bundle.inputData?.['title'])
                formData.append('author', bundle.inputData?.['author'])
                formData.append('isFolder', bundle.inputData?.['isFolder'])
                formData.append('fileName', bundle.inputData?.['fileName'])
                formData.append('abstract', bundle.inputData?.['abstract'])
                formData.append('keyWords', bundle.inputData?.['keyWords'])
                formData.append('validResponse', bundle.inputData?.['validResponse'])
                formData.append('parentFileUploadId', bundle.inputData?.['parentFileUploadId'])
                formData.append('filePath', bundle.inputData?.['filePath'])
                formData.append('publicAccessType', bundle.inputData?.['publicAccessType'])
                formData.append('purpose', bundle.inputData?.['purpose'])
                formData.append('socialProfileId.value', bundle.inputData?.['socialProfileId.value'])
                formData.append('appFile.content', bundle.inputData?.['appFile.content'])
                formData.append('appFile.sha256', bundle.inputData?.['appFile.sha256'])
                formData.append('appFile.createdAtUtc', bundle.inputData?.['appFile.createdAtUtc'])
                formData.append('appFile.userId.value', bundle.inputData?.['appFile.userId.value'])
                formData.append('appFile.tenantId.value', bundle.inputData?.['appFile.tenantId.value'])
                formData.append('appFile.enrollmentId.value', bundle.inputData?.['appFile.enrollmentId.value'])
                formData.append('appFile.source', bundle.inputData?.['appFile.source'])
                formData.append('appFile.length', bundle.inputData?.['appFile.length'])
                formData.append('appFile.name', bundle.inputData?.['appFile.name'])
                formData.append('appFile.fileName', bundle.inputData?.['appFile.fileName'])
                formData.append('appFile.lastModified', bundle.inputData?.['appFile.lastModified'])
                formData.append('appFile.size', bundle.inputData?.['appFile.size'])
                formData.append('appFile.contentType', bundle.inputData?.['appFile.contentType'])
                formData.append('appFile.contentDisposition', bundle.inputData?.['appFile.contentDisposition'])
                formData.append('appFile.headers', bundle.inputData?.['appFile.headers'])
                formData.append('id', bundle.inputData?.['id'])
                formData.append('timestamp', bundle.inputData?.['timestamp'])
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/StorageService/Files'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        
                        'Accept': 'application/json, image/png',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: formData,
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createFileAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteFileAsync: {
        key: 'deleteFileAsync',
        noun: 'Files',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'fileId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/StorageService/Files/{fileId}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, image/png',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteFileAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    downloadFileAsync: {
        key: 'downloadFileAsync',
        noun: 'Files',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'fileId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/StorageService/Files/{fileId}/Raw'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, image/png',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'downloadFileAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getFileAsync: {
        key: 'getFileAsync',
        noun: 'Files',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'fileId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
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
                ...FileUploadDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/StorageService/Files/{fileId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, image/png',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFileAsync', response.json);
                    return results;
                })
            },
            sample: samples['FileUploadDtoEnvelopeSample']
        }
    },
    getFileThumbnailAsync: {
        key: 'getFileThumbnailAsync',
        noun: 'Files',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'fileId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/StorageService/Files/{fileId}/Thumbnail'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, image/png',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFileThumbnailAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    getFilesAsync: {
        key: 'getFilesAsync',
        noun: 'Files',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
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
                    key: 'top',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'skip',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'count',
                    label: '',
                    type: 'boolean',
                },
                {
                    key: 'filter',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'orderBy',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'search',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'select',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'expand',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'isEmpty',
                    label: '',
                    type: 'boolean',
                },
            ],
            outputFields: [
                ...FileUploadDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                formData.append('top', bundle.inputData?.['top'])
                formData.append('skip', bundle.inputData?.['skip'])
                formData.append('count', bundle.inputData?.['count'])
                formData.append('filter', bundle.inputData?.['filter'])
                formData.append('orderBy', bundle.inputData?.['orderBy'])
                formData.append('search', bundle.inputData?.['search'])
                formData.append('select', bundle.inputData?.['select'])
                formData.append('expand', bundle.inputData?.['expand'])
                formData.append('isEmpty', bundle.inputData?.['isEmpty'])
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/StorageService/Files'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        
                        'Accept': 'application/json, image/png',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: formData,
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFilesAsync', response.json);
                    return results;
                })
            },
            sample: samples['FileUploadDtoEnvelopeSample']
        }
    },
    getFilesCountAsync: {
        key: 'getFilesCountAsync',
        noun: 'Files',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
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
                    key: 'top',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'skip',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'count',
                    label: '',
                    type: 'boolean',
                },
                {
                    key: 'filter',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'orderBy',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'search',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'select',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'expand',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'isEmpty',
                    label: '',
                    type: 'boolean',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                formData.append('top', bundle.inputData?.['top'])
                formData.append('skip', bundle.inputData?.['skip'])
                formData.append('count', bundle.inputData?.['count'])
                formData.append('filter', bundle.inputData?.['filter'])
                formData.append('orderBy', bundle.inputData?.['orderBy'])
                formData.append('search', bundle.inputData?.['search'])
                formData.append('select', bundle.inputData?.['select'])
                formData.append('expand', bundle.inputData?.['expand'])
                formData.append('isEmpty', bundle.inputData?.['isEmpty'])
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/StorageService/Files/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        
                        'Accept': 'application/json, image/png',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: formData,
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFilesCountAsync', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
    updateFileAsync: {
        key: 'updateFileAsync',
        noun: 'Files',
        display: {
            label: '',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'fileId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
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
                    key: 'file',
                    label: '',
                    type: 'file',
                },
                {
                    key: 'notes',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'metadata',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'title',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'author',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'isFolder',
                    label: '',
                    type: 'boolean',
                },
                {
                    key: 'fileName',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'abstract',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'keyWords',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'validResponse',
                    label: '',
                    type: 'boolean',
                },
                {
                    key: 'parentFileUploadID',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'filePath',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.content',
                    label: '',
                    type: 'ByteArray',
                },
                {
                    key: 'appFile.sha256',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.createdAtUtc',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.userId.value',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.tenantId.value',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.enrollmentId.value',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.source',
                    label: '',
                    type: 'string',
                    choices: [
                        'Unknown',
                        'HttpUpload',
                        'Integration',
                        'InternalProcess',
                        'ApiClient',
                        'WorkflowEngine',
                    ],
                },
                {
                    key: 'appFile.length',
                    label: '',
                    type: 'number',
                },
                {
                    key: 'appFile.name',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.fileName',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.lastModified',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.size',
                    label: '',
                    type: 'number',
                },
                {
                    key: 'appFile.contentType',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'appFile.contentDisposition',
                    label: '',
                    type: 'string',
                },
                ...object.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['file'].split('/').slice(-1)[0]
                formData.append('file', (await (await z.request({url: bundle.inputData?.['file'], method: 'GET', raw: true})).buffer()), { filename: filename })
                formData.append('notes', bundle.inputData?.['notes'])
                formData.append('metadata', bundle.inputData?.['metadata'])
                formData.append('title', bundle.inputData?.['title'])
                formData.append('author', bundle.inputData?.['author'])
                formData.append('isFolder', bundle.inputData?.['isFolder'])
                formData.append('fileName', bundle.inputData?.['fileName'])
                formData.append('abstract', bundle.inputData?.['abstract'])
                formData.append('keyWords', bundle.inputData?.['keyWords'])
                formData.append('validResponse', bundle.inputData?.['validResponse'])
                formData.append('parentFileUploadID', bundle.inputData?.['parentFileUploadID'])
                formData.append('filePath', bundle.inputData?.['filePath'])
                formData.append('appFile.content', bundle.inputData?.['appFile.content'])
                formData.append('appFile.sha256', bundle.inputData?.['appFile.sha256'])
                formData.append('appFile.createdAtUtc', bundle.inputData?.['appFile.createdAtUtc'])
                formData.append('appFile.userId.value', bundle.inputData?.['appFile.userId.value'])
                formData.append('appFile.tenantId.value', bundle.inputData?.['appFile.tenantId.value'])
                formData.append('appFile.enrollmentId.value', bundle.inputData?.['appFile.enrollmentId.value'])
                formData.append('appFile.source', bundle.inputData?.['appFile.source'])
                formData.append('appFile.length', bundle.inputData?.['appFile.length'])
                formData.append('appFile.name', bundle.inputData?.['appFile.name'])
                formData.append('appFile.fileName', bundle.inputData?.['appFile.fileName'])
                formData.append('appFile.lastModified', bundle.inputData?.['appFile.lastModified'])
                formData.append('appFile.size', bundle.inputData?.['appFile.size'])
                formData.append('appFile.contentType', bundle.inputData?.['appFile.contentType'])
                formData.append('appFile.contentDisposition', bundle.inputData?.['appFile.contentDisposition'])
                formData.append('appFile.headers', bundle.inputData?.['appFile.headers'])
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/StorageService/Files/{fileId}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        
                        'Accept': 'application/json, image/png',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: formData,
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateFileAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
