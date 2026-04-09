const samples = require('../samples/FilesApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const FileUploadDtoEnvelope = require('../models/FileUploadDtoEnvelope');
const utils = require('../utils/utils');
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
                    key: 'id',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'timestamp',
                    label: '',
                    type: 'string',
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
                    key: 'file',
                    label: '',
                    type: 'file',
                },
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                formData.append('id', bundle.inputData?.['id'])
                formData.append('timestamp', bundle.inputData?.['timestamp'])
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
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['file'].split('/').slice(-1)[0]
                formData.append('file', (await (await z.request({url: bundle.inputData?.['file'], method: 'GET', raw: true})).buffer()), { filename: filename })
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/StorageService/Files'),
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
                ...FileUploadDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/StorageService/Files/{fileId}'),
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
            sample: samples['FileUploadDtoEnvelopeSample']
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
                    url: utils.replacePathParameters('http://localhost/api/v2/StorageService/Files/{fileId}/Raw'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/StorageService/Files/{fileId}'),
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
            ],
            outputFields: [
                ...FileUploadDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/StorageService/Files'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getFilesAsync', response.json);
                    return results;
                })
            },
            sample: samples['FileUploadDtoEnvelopeSample']
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
                    key: 'file',
                    label: '',
                    type: 'file',
                },
            ],
            outputFields: [
                ...FileUploadDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
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
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['file'].split('/').slice(-1)[0]
                formData.append('file', (await (await z.request({url: bundle.inputData?.['file'], method: 'GET', raw: true})).buffer()), { filename: filename })
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/StorageService/Files/{fileId}'),
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
            sample: samples['FileUploadDtoEnvelopeSample']
        }
    },
}
