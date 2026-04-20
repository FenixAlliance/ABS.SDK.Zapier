const samples = require('../samples/AssetsApi');
const AssetCategoryCreateDto = require('../models/AssetCategoryCreateDto');
const AssetCategoryDtoEnvelope = require('../models/AssetCategoryDtoEnvelope');
const AssetCategoryDtoListEnvelope = require('../models/AssetCategoryDtoListEnvelope');
const AssetCategoryUpdateDto = require('../models/AssetCategoryUpdateDto');
const AssetCreateDto = require('../models/AssetCreateDto');
const AssetDepreciationRecordCreateDto = require('../models/AssetDepreciationRecordCreateDto');
const AssetDepreciationRecordDtoEnvelope = require('../models/AssetDepreciationRecordDtoEnvelope');
const AssetDepreciationRecordDtoListEnvelope = require('../models/AssetDepreciationRecordDtoListEnvelope');
const AssetDepreciationRecordUpdateDto = require('../models/AssetDepreciationRecordUpdateDto');
const AssetDtoEnvelope = require('../models/AssetDtoEnvelope');
const AssetDtoListEnvelope = require('../models/AssetDtoListEnvelope');
const AssetRepairCreateDto = require('../models/AssetRepairCreateDto');
const AssetRepairDtoEnvelope = require('../models/AssetRepairDtoEnvelope');
const AssetRepairDtoListEnvelope = require('../models/AssetRepairDtoListEnvelope');
const AssetRepairUpdateDto = require('../models/AssetRepairUpdateDto');
const AssetTransferCreateDto = require('../models/AssetTransferCreateDto');
const AssetTransferDtoEnvelope = require('../models/AssetTransferDtoEnvelope');
const AssetTransferDtoListEnvelope = require('../models/AssetTransferDtoListEnvelope');
const AssetTransferUpdateDto = require('../models/AssetTransferUpdateDto');
const AssetUpdateDto = require('../models/AssetUpdateDto');
const AssetValueAmendCreateDto = require('../models/AssetValueAmendCreateDto');
const AssetValueAmendDtoEnvelope = require('../models/AssetValueAmendDtoEnvelope');
const AssetValueAmendDtoListEnvelope = require('../models/AssetValueAmendDtoListEnvelope');
const AssetValueAmendUpdateDto = require('../models/AssetValueAmendUpdateDto');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const utils = require('../utils/utils');

module.exports = {
    createAsset: {
        key: 'createAsset',
        noun: 'Assets',
        display: {
            label: 'Creates a new asset',
            description: 'Creates a new asset for the authenticated tenant.',
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
                ...AssetCreateDto.fields(),
            ],
            outputFields: [
                ...AssetDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets'),
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
                        ...AssetCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createAsset', response.json);
                    return results;
                })
            },
            sample: samples['AssetDtoEnvelopeSample']
        }
    },
    createAssetAssetCategory: {
        key: 'createAssetAssetCategory',
        noun: 'Assets',
        display: {
            label: 'Creates a new asset category',
            description: 'Creates a new asset category for the authenticated tenant.',
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
                ...AssetCategoryCreateDto.fields(),
            ],
            outputFields: [
                ...AssetCategoryDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/Categories'),
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
                        ...AssetCategoryCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createAssetAssetCategory', response.json);
                    return results;
                })
            },
            sample: samples['AssetCategoryDtoEnvelopeSample']
        }
    },
    createAssetDepreciationRecord: {
        key: 'createAssetDepreciationRecord',
        noun: 'Assets',
        display: {
            label: 'Creates a new depreciation record for an asset',
            description: 'Creates a new depreciation record for the specified asset.',
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
                    key: 'assetId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...AssetDepreciationRecordCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/DepreciationRecords'),
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
                        ...AssetDepreciationRecordCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createAssetDepreciationRecord', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createAssetRepair: {
        key: 'createAssetRepair',
        noun: 'Assets',
        display: {
            label: 'Creates a new repair for an asset',
            description: 'Creates a new repair record for the specified asset.',
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
                    key: 'assetId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...AssetRepairCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/Repairs'),
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
                        ...AssetRepairCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createAssetRepair', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createAssetTransfer: {
        key: 'createAssetTransfer',
        noun: 'Assets',
        display: {
            label: 'Creates a new transfer for an asset',
            description: 'Creates a new transfer record for the specified asset.',
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
                    key: 'assetId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/Transfers'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createAssetTransfer', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createAssetValueAmend: {
        key: 'createAssetValueAmend',
        noun: 'Assets',
        display: {
            label: 'Creates a new value amendment for an asset',
            description: 'Creates a new value amendment record for the specified asset.',
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
                    key: 'assetId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...AssetValueAmendCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/ValueAmends'),
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
                        ...AssetValueAmendCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createAssetValueAmend', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteAsset: {
        key: 'deleteAsset',
        noun: 'Assets',
        display: {
            label: 'Deletes an existing asset',
            description: 'Deletes an existing asset for the authenticated tenant.',
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
                    key: 'assetId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteAsset', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    deleteAssetAssetCategory: {
        key: 'deleteAssetAssetCategory',
        noun: 'Assets',
        display: {
            label: 'Deletes an existing asset category',
            description: 'Deletes an existing asset category for the authenticated tenant.',
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
                    key: 'categoryId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/Categories/{categoryId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteAssetAssetCategory', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    deleteAssetDepreciationRecord: {
        key: 'deleteAssetDepreciationRecord',
        noun: 'Assets',
        display: {
            label: 'Deletes a depreciation record for an asset',
            description: 'Deletes a depreciation record for the specified asset.',
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
                    key: 'assetId',
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
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/DepreciationRecords/{recordId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteAssetDepreciationRecord', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteAssetRepair: {
        key: 'deleteAssetRepair',
        noun: 'Assets',
        display: {
            label: 'Deletes a repair for an asset',
            description: 'Deletes a repair record for the specified asset.',
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
                    key: 'assetId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'repairId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/Repairs/{repairId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteAssetRepair', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteAssetTransfer: {
        key: 'deleteAssetTransfer',
        noun: 'Assets',
        display: {
            label: 'Deletes a transfer for an asset',
            description: 'Deletes a transfer record for the specified asset.',
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
                    key: 'assetId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/Transfers/{transferId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteAssetTransfer', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteAssetValueAmend: {
        key: 'deleteAssetValueAmend',
        noun: 'Assets',
        display: {
            label: 'Deletes a value amendment for an asset',
            description: 'Deletes a value amendment record for the specified asset.',
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
                    key: 'assetId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'amendId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/ValueAmends/{amendId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteAssetValueAmend', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getAsset: {
        key: 'getAsset',
        noun: 'Assets',
        display: {
            label: 'Gets a specific asset by ID',
            description: 'Retrieves a specific asset for the authenticated tenant.',
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
                    key: 'assetId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...AssetDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAsset', response.json);
                    return results;
                })
            },
            sample: samples['AssetDtoEnvelopeSample']
        }
    },
    getAssetAssetCategories: {
        key: 'getAssetAssetCategories',
        noun: 'Assets',
        display: {
            label: 'Gets all asset categories',
            description: 'Retrieves all asset categories for the authenticated tenant.',
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
                ...AssetCategoryDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/Categories'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetAssetCategories', response.json);
                    return results;
                })
            },
            sample: samples['AssetCategoryDtoListEnvelopeSample']
        }
    },
    getAssetAssetCategoriesCount: {
        key: 'getAssetAssetCategoriesCount',
        noun: 'Assets',
        display: {
            label: 'Gets the count of asset categories',
            description: 'Returns the total number of asset categories for the authenticated tenant.',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/Categories/count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetAssetCategoriesCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getAssetAssetCategory: {
        key: 'getAssetAssetCategory',
        noun: 'Assets',
        display: {
            label: 'Gets a specific asset category',
            description: 'Retrieves a specific asset category for the authenticated tenant.',
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
                    key: 'categoryId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...AssetCategoryDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/Categories/{categoryId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetAssetCategory', response.json);
                    return results;
                })
            },
            sample: samples['AssetCategoryDtoEnvelopeSample']
        }
    },
    getAssetDepreciationRecord: {
        key: 'getAssetDepreciationRecord',
        noun: 'Assets',
        display: {
            label: 'Gets a specific depreciation record for an asset',
            description: 'Retrieves a specific depreciation record by ID for the specified asset.',
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
                    key: 'assetId',
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
            ],
            outputFields: [
                ...AssetDepreciationRecordDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/DepreciationRecords/{recordId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetDepreciationRecord', response.json);
                    return results;
                })
            },
            sample: samples['AssetDepreciationRecordDtoEnvelopeSample']
        }
    },
    getAssetDepreciationRecords: {
        key: 'getAssetDepreciationRecords',
        noun: 'Assets',
        display: {
            label: 'Gets depreciation records for a specific asset',
            description: 'Retrieves all depreciation records for the specified asset.',
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
                    key: 'assetId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...AssetDepreciationRecordDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/DepreciationRecords'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetDepreciationRecords', response.json);
                    return results;
                })
            },
            sample: samples['AssetDepreciationRecordDtoListEnvelopeSample']
        }
    },
    getAssetDepreciationRecordsCount: {
        key: 'getAssetDepreciationRecordsCount',
        noun: 'Assets',
        display: {
            label: 'Gets count of depreciation records for a specific asset',
            description: 'Returns the total number of depreciation records for the specified asset.',
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
                    key: 'assetId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/DepreciationRecords/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetDepreciationRecordsCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getAssetRepair: {
        key: 'getAssetRepair',
        noun: 'Assets',
        display: {
            label: 'Gets a specific repair for an asset',
            description: 'Retrieves a specific repair record by ID for the specified asset.',
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
                    key: 'assetId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'repairId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...AssetRepairDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/Repairs/{repairId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetRepair', response.json);
                    return results;
                })
            },
            sample: samples['AssetRepairDtoEnvelopeSample']
        }
    },
    getAssetRepairs: {
        key: 'getAssetRepairs',
        noun: 'Assets',
        display: {
            label: 'Gets repairs for a specific asset',
            description: 'Retrieves all repair records for the specified asset.',
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
                    key: 'assetId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...AssetRepairDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/Repairs'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetRepairs', response.json);
                    return results;
                })
            },
            sample: samples['AssetRepairDtoListEnvelopeSample']
        }
    },
    getAssetRepairsCount: {
        key: 'getAssetRepairsCount',
        noun: 'Assets',
        display: {
            label: 'Gets count of repairs for a specific asset',
            description: 'Returns the total number of repair records for the specified asset.',
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
                    key: 'assetId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/Repairs/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetRepairsCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getAssetTransfer: {
        key: 'getAssetTransfer',
        noun: 'Assets',
        display: {
            label: 'Gets a specific transfer for an asset',
            description: 'Retrieves a specific transfer record by ID for the specified asset.',
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
                    key: 'assetId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/Transfers/{transferId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetTransfer', response.json);
                    return results;
                })
            },
            sample: samples['AssetTransferDtoEnvelopeSample']
        }
    },
    getAssetTransfers: {
        key: 'getAssetTransfers',
        noun: 'Assets',
        display: {
            label: 'Gets transfers for a specific asset',
            description: 'Retrieves all transfer records for the specified asset.',
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
                    key: 'assetId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/Transfers'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetTransfers', response.json);
                    return results;
                })
            },
            sample: samples['AssetTransferDtoListEnvelopeSample']
        }
    },
    getAssetTransfersCount: {
        key: 'getAssetTransfersCount',
        noun: 'Assets',
        display: {
            label: 'Gets count of transfers for a specific asset',
            description: 'Returns the total number of transfer records for the specified asset.',
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
                    key: 'assetId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/Transfers/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetTransfersCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getAssetValueAmend: {
        key: 'getAssetValueAmend',
        noun: 'Assets',
        display: {
            label: 'Gets a specific value amendment for an asset',
            description: 'Retrieves a specific value amendment record by ID for the specified asset.',
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
                    key: 'assetId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'amendId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...AssetValueAmendDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/ValueAmends/{amendId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetValueAmend', response.json);
                    return results;
                })
            },
            sample: samples['AssetValueAmendDtoEnvelopeSample']
        }
    },
    getAssetValueAmends: {
        key: 'getAssetValueAmends',
        noun: 'Assets',
        display: {
            label: 'Gets value amendments for a specific asset',
            description: 'Retrieves all value amendment records for the specified asset.',
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
                    key: 'assetId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...AssetValueAmendDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/ValueAmends'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetValueAmends', response.json);
                    return results;
                })
            },
            sample: samples['AssetValueAmendDtoListEnvelopeSample']
        }
    },
    getAssetValueAmendsCount: {
        key: 'getAssetValueAmendsCount',
        noun: 'Assets',
        display: {
            label: 'Gets count of value amendments for a specific asset',
            description: 'Returns the total number of value amendment records for the specified asset.',
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
                    key: 'assetId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/ValueAmends/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetValueAmendsCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getAssets: {
        key: 'getAssets',
        noun: 'Assets',
        display: {
            label: 'Gets all assets for the current tenant',
            description: 'Retrieves all assets for the authenticated tenant with optional filtering.',
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
                ...AssetDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssets', response.json);
                    return results;
                })
            },
            sample: samples['AssetDtoListEnvelopeSample']
        }
    },
    getAssetsCount: {
        key: 'getAssetsCount',
        noun: 'Assets',
        display: {
            label: 'Gets the count of assets',
            description: 'Returns the total number of assets for the authenticated tenant.',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAssetsCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    updateAsset: {
        key: 'updateAsset',
        noun: 'Assets',
        display: {
            label: 'Updates an existing asset',
            description: 'Updates an existing asset for the authenticated tenant.',
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
                    key: 'assetId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...AssetUpdateDto.fields(),
            ],
            outputFields: [
                ...AssetDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}'),
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
                        ...AssetUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateAsset', response.json);
                    return results;
                })
            },
            sample: samples['AssetDtoEnvelopeSample']
        }
    },
    updateAssetAssetCategory: {
        key: 'updateAssetAssetCategory',
        noun: 'Assets',
        display: {
            label: 'Updates an existing asset category',
            description: 'Updates an existing asset category for the authenticated tenant.',
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
                    key: 'categoryId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...AssetCategoryUpdateDto.fields(),
            ],
            outputFields: [
                ...AssetCategoryDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/Categories/{categoryId}'),
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
                        ...AssetCategoryUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateAssetAssetCategory', response.json);
                    return results;
                })
            },
            sample: samples['AssetCategoryDtoEnvelopeSample']
        }
    },
    updateAssetDepreciationRecord: {
        key: 'updateAssetDepreciationRecord',
        noun: 'Assets',
        display: {
            label: 'Updates a depreciation record for an asset',
            description: 'Updates an existing depreciation record for the specified asset.',
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
                    key: 'assetId',
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
                ...AssetDepreciationRecordUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/DepreciationRecords/{recordId}'),
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
                        ...AssetDepreciationRecordUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateAssetDepreciationRecord', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateAssetRepair: {
        key: 'updateAssetRepair',
        noun: 'Assets',
        display: {
            label: 'Updates a repair for an asset',
            description: 'Updates an existing repair record for the specified asset.',
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
                    key: 'assetId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'repairId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...AssetRepairUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/Repairs/{repairId}'),
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
                        ...AssetRepairUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateAssetRepair', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateAssetTransfer: {
        key: 'updateAssetTransfer',
        noun: 'Assets',
        display: {
            label: 'Updates a transfer for an asset',
            description: 'Updates an existing transfer record for the specified asset.',
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
                    key: 'assetId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/Transfers/{transferId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateAssetTransfer', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateAssetValueAmend: {
        key: 'updateAssetValueAmend',
        noun: 'Assets',
        display: {
            label: 'Updates a value amendment for an asset',
            description: 'Updates an existing value amendment record for the specified asset.',
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
                    key: 'assetId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'amendId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...AssetValueAmendUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/AssetsService/Assets/{assetId}/ValueAmends/{amendId}'),
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
                        ...AssetValueAmendUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateAssetValueAmend', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
