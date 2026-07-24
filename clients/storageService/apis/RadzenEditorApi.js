const samples = require('../samples/RadzenEditorApi');
const utils = require('../utils/utils');
const FormData = require('form-data');
const FormData = require('form-data');
const FormData = require('form-data');
const FormData = require('form-data');
const FormData = require('form-data');
const FormData = require('form-data');

module.exports = {
    radzenUploadImage: {
        key: 'radzenUploadImage',
        noun: 'RadzenEditor',
        display: {
            label: 'Upload an editor image to tenant storage.',
            description: '',
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
                    key: 'visibility',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'socialProfileId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'purpose',
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
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['file'].split('/').slice(-1)[0]
                formData.append('file', (await (await z.request({url: bundle.inputData?.['file'], method: 'GET', raw: true})).buffer()), { filename: filename })
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/fs/radzen/tenants/{tenantId}/upload/image'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        
                        'Accept': '',
                    },
                    params: {
                        'visibility': bundle.inputData?.['visibility'],
                        'socialProfileId': bundle.inputData?.['socialProfileId'],
                        'purpose': bundle.inputData?.['purpose'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: formData,
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'radzenUploadImage', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    radzenUploadImageScoped: {
        key: 'radzenUploadImageScoped',
        noun: 'RadzenEditor',
        display: {
            label: 'Upload an editor image scoped to a record.',
            description: '',
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
                    key: 'recordType',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'recordId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'visibility',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'socialProfileId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'purpose',
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
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['file'].split('/').slice(-1)[0]
                formData.append('file', (await (await z.request({url: bundle.inputData?.['file'], method: 'GET', raw: true})).buffer()), { filename: filename })
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/fs/radzen/tenants/{tenantId}/{recordType}/{recordId}/upload/image'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        
                        'Accept': '',
                    },
                    params: {
                        'visibility': bundle.inputData?.['visibility'],
                        'socialProfileId': bundle.inputData?.['socialProfileId'],
                        'purpose': bundle.inputData?.['purpose'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: formData,
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'radzenUploadImageScoped', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    radzenUploadSingle: {
        key: 'radzenUploadSingle',
        noun: 'RadzenEditor',
        display: {
            label: 'Upload a single editor file to tenant storage.',
            description: '',
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
                    key: 'file',
                    label: '',
                    type: 'file',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['file'].split('/').slice(-1)[0]
                formData.append('file', (await (await z.request({url: bundle.inputData?.['file'], method: 'GET', raw: true})).buffer()), { filename: filename })
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/fs/radzen/tenants/{tenantId}/upload/single'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        
                        'Accept': '',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: formData,
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'radzenUploadSingle', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    radzenUploadSingleScoped: {
        key: 'radzenUploadSingleScoped',
        noun: 'RadzenEditor',
        display: {
            label: 'Upload a single editor file scoped to a record.',
            description: '',
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
                    key: 'recordType',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'recordId',
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
                    key: 'file',
                    label: '',
                    type: 'file',
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['file'].split('/').slice(-1)[0]
                formData.append('file', (await (await z.request({url: bundle.inputData?.['file'], method: 'GET', raw: true})).buffer()), { filename: filename })
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/fs/radzen/tenants/{tenantId}/{recordType}/{recordId}/upload/single'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        
                        'Accept': '',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: formData,
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'radzenUploadSingleScoped', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    radzenUploadStream: {
        key: 'radzenUploadStream',
        noun: 'RadzenEditor',
        display: {
            label: 'Chunked editor upload (not implemented).',
            description: '',
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
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/fs/radzen/tenants/{tenantId}/upload/stream'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'radzenUploadStream', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    radzenUploadStreamScoped: {
        key: 'radzenUploadStreamScoped',
        noun: 'RadzenEditor',
        display: {
            label: 'Chunked editor upload scoped to a record (not implemented).',
            description: '',
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
                    key: 'recordType',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'recordId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/fs/radzen/tenants/{tenantId}/{recordType}/{recordId}/upload/stream'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'radzenUploadStreamScoped', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    radzenUploadUserImage: {
        key: 'radzenUploadUserImage',
        noun: 'RadzenEditor',
        display: {
            label: 'Upload an editor image to user storage.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'visibility',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'socialProfileId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'purpose',
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
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['file'].split('/').slice(-1)[0]
                formData.append('file', (await (await z.request({url: bundle.inputData?.['file'], method: 'GET', raw: true})).buffer()), { filename: filename })
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/fs/radzen/users/upload/image'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        
                        'Accept': '',
                    },
                    params: {
                        'visibility': bundle.inputData?.['visibility'],
                        'socialProfileId': bundle.inputData?.['socialProfileId'],
                        'purpose': bundle.inputData?.['purpose'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: formData,
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'radzenUploadUserImage', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    radzenUploadUserImageScoped: {
        key: 'radzenUploadUserImageScoped',
        noun: 'RadzenEditor',
        display: {
            label: 'Upload a user editor image scoped to a record.',
            description: '',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'recordType',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'recordId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'visibility',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'socialProfileId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'purpose',
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
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['file'].split('/').slice(-1)[0]
                formData.append('file', (await (await z.request({url: bundle.inputData?.['file'], method: 'GET', raw: true})).buffer()), { filename: filename })
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/fs/radzen/users/{recordType}/{recordId}/upload/image'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        
                        'Accept': '',
                    },
                    params: {
                        'visibility': bundle.inputData?.['visibility'],
                        'socialProfileId': bundle.inputData?.['socialProfileId'],
                        'purpose': bundle.inputData?.['purpose'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: formData,
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'radzenUploadUserImageScoped', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
