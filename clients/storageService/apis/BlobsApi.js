const samples = require('../samples/BlobsApi');
const BlobEnvelope = require('../models/BlobEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const utils = require('../utils/utils');

module.exports = {
    getBlobAsync: {
        key: 'getBlobAsync',
        noun: 'Blobs',
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
                    key: 'filePath',
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
                ...BlobEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/StorageService/Blobs/Single'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, image/png',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'filePath': bundle.inputData?.['filePath'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getBlobAsync', response.json);
                    return results;
                })
            },
            sample: samples['BlobEnvelopeSample']
        }
    },
    getBlobsAsync: {
        key: 'getBlobsAsync',
        noun: 'Blobs',
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
                    key: 'folderPath',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'browseFilter',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'filePrefix',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'recurse',
                    label: '',
                    type: 'boolean',
                },
                {
                    key: 'maxResults',
                    label: '',
                    type: 'integer',
                },
                {
                    key: 'includeAttributes',
                    label: '',
                    type: 'boolean',
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
                ...BlobEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/StorageService/Blobs'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, image/png',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'folderPath': bundle.inputData?.['folderPath'],
                        'browseFilter': bundle.inputData?.['browseFilter'],
                        'filePrefix': bundle.inputData?.['filePrefix'],
                        'recurse': bundle.inputData?.['recurse'],
                        'maxResults': bundle.inputData?.['maxResults'],
                        'includeAttributes': bundle.inputData?.['includeAttributes'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getBlobsAsync', response.json);
                    return results;
                })
            },
            sample: samples['BlobEnvelopeSample']
        }
    },
}
