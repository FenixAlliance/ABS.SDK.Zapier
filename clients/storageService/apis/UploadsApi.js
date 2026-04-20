const samples = require('../samples/UploadsApi');
const ByteArray = require('../models/ByteArray');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const utils = require('../utils/utils');
const FormData = require('form-data');

module.exports = {
    saveFileAsync: {
        key: 'saveFileAsync',
        noun: 'Uploads',
        display: {
            label: 'Upload a file',
            description: 'Uploads a file to tenant or user storage.',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/StorageService/Uploads'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'saveFileAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
