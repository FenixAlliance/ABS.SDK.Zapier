const samples = require('../samples/AssetTypesApi');
const AssetTypeCreateDto = require('../models/AssetTypeCreateDto');
const AssetTypeDtoEnvelope = require('../models/AssetTypeDtoEnvelope');
const AssetTypeDtoListEnvelope = require('../models/AssetTypeDtoListEnvelope');
const AssetTypeUpdateDto = require('../models/AssetTypeUpdateDto');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const Operation = require('../models/Operation');
const utils = require('../utils/utils');

module.exports = {
    createAssetType: {
        key: 'createAssetType',
        noun: 'AssetTypes',
        display: {
            label: 'Creates a new asset type',
            description: 'Creates a new asset type for the authenticated tenant.',
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
                ...AssetTypeCreateDto.fields(),
            ],
            outputFields: [
                ...AssetTypeDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/AssetsService/AssetTypes'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...AssetTypeCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createAssetType', response.json);
                    return results;
                })
            },
            sample: samples['AssetTypeDtoEnvelopeSample']
        }
    },
    deleteAssetType: {
        key: 'deleteAssetType',
        noun: 'AssetTypes',
        display: {
            label: 'Deletes an asset type',
            description: 'Deletes an asset type for the authenticated tenant.',
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
                    key: 'typeId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/AssetsService/AssetTypes/{typeId}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteAssetType', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getAssetType: {
        key: 'getAssetType',
        noun: 'AssetTypes',
        display: {
            label: 'Gets a specific asset type',
            description: 'Retrieves a specific asset type by ID.',
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
                    key: 'typeId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...AssetTypeDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/AssetsService/AssetTypes/{typeId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetType', response.json);
                    return results;
                })
            },
            sample: samples['AssetTypeDtoEnvelopeSample']
        }
    },
    getAssetTypes: {
        key: 'getAssetTypes',
        noun: 'AssetTypes',
        display: {
            label: 'Gets all asset types for the current tenant',
            description: 'Retrieves all asset types for the authenticated tenant.',
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
            ],
            outputFields: [
                ...AssetTypeDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/AssetsService/AssetTypes'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetTypes', response.json);
                    return results;
                })
            },
            sample: samples['AssetTypeDtoListEnvelopeSample']
        }
    },
    getAssetTypesCount: {
        key: 'getAssetTypesCount',
        noun: 'AssetTypes',
        display: {
            label: 'Gets the count of asset types',
            description: 'Returns the total number of asset types for the authenticated tenant.',
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
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/AssetsService/AssetTypes/count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetTypesCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    patchAssetType: {
        key: 'patchAssetType',
        noun: 'AssetTypes',
        display: {
            label: 'Partially updates an existing asset type',
            description: 'Applies a JSON Patch document to an existing asset type for the authenticated tenant.',
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
                    key: 'typeId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'Operation',
                    label: '',
                    type: 'string',
                }
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/AssetsService/AssetTypes/{typeId}'),
                    method: 'PATCH',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...Operation.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchAssetType', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateAssetType: {
        key: 'updateAssetType',
        noun: 'AssetTypes',
        display: {
            label: 'Updates an existing asset type',
            description: 'Updates an existing asset type for the authenticated tenant.',
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
                    key: 'typeId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...AssetTypeUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/AssetsService/AssetTypes/{typeId}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...AssetTypeUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateAssetType', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
