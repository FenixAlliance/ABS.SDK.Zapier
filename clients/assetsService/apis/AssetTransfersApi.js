const samples = require('../samples/AssetTransfersApi');
const AssetTransferCreateDto = require('../models/AssetTransferCreateDto');
const AssetTransferDtoEnvelope = require('../models/AssetTransferDtoEnvelope');
const AssetTransferDtoListEnvelope = require('../models/AssetTransferDtoListEnvelope');
const AssetTransferUpdateDto = require('../models/AssetTransferUpdateDto');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const utils = require('../utils/utils');

module.exports = {
    createAssetTransferAsync: {
        key: 'createAssetTransferAsync',
        noun: 'AssetTransfers',
        display: {
            label: 'Creates a new asset transfer',
            description: 'Creates a new asset transfer for the authenticated tenant.',
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
                ...AssetTransferCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/AssetTransfers'),
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
                        ...AssetTransferCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createAssetTransferAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteAssetTransferAsync: {
        key: 'deleteAssetTransferAsync',
        noun: 'AssetTransfers',
        display: {
            label: 'Deletes an asset transfer',
            description: 'Deletes an asset transfer for the authenticated tenant.',
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
                    key: 'transferId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/AssetTransfers/{transferId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteAssetTransferAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getAssetTransferAsync: {
        key: 'getAssetTransferAsync',
        noun: 'AssetTransfers',
        display: {
            label: 'Gets a single asset transfer by ID',
            description: 'Retrieves a specific asset transfer by its ID for the authenticated tenant.',
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
                    key: 'transferId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...AssetTransferDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/AssetTransfers/{transferId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetTransferAsync', response.json);
                    return results;
                })
            },
            sample: samples['AssetTransferDtoEnvelopeSample']
        }
    },
    getAssetTransfersAsync: {
        key: 'getAssetTransfersAsync',
        noun: 'AssetTransfers',
        display: {
            label: 'Gets a list of asset transfers',
            description: 'Retrieves all asset transfers for the authenticated tenant.',
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
                ...AssetTransferDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/AssetTransfers'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetTransfersAsync', response.json);
                    return results;
                })
            },
            sample: samples['AssetTransferDtoListEnvelopeSample']
        }
    },
    getAssetTransfersCountAsync: {
        key: 'getAssetTransfersCountAsync',
        noun: 'AssetTransfers',
        display: {
            label: 'Gets the count of asset transfers',
            description: 'Returns the total number of asset transfers for the authenticated tenant.',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/AssetTransfers/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetTransfersCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    updateAssetTransferAsync: {
        key: 'updateAssetTransferAsync',
        noun: 'AssetTransfers',
        display: {
            label: 'Updates an existing asset transfer',
            description: 'Updates an existing asset transfer for the authenticated tenant.',
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
                    key: 'transferId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...AssetTransferUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/AssetTransfers/{transferId}'),
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
                        ...AssetTransferUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateAssetTransferAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
