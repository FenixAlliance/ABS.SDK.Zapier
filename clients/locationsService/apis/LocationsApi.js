const samples = require('../samples/LocationsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const LocationCreateDto = require('../models/LocationCreateDto');
const LocationDtoEnvelope = require('../models/LocationDtoEnvelope');
const LocationDtoIReadOnlyListEnvelope = require('../models/LocationDtoIReadOnlyListEnvelope');
const LocationUpdateDto = require('../models/LocationUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    createLocationAsync: {
        key: 'createLocationAsync',
        noun: 'Locations',
        display: {
            label: 'Create Location',
            description: 'Create a new location.',
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
                ...LocationCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LocationsService/Locations'),
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
                        ...LocationCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createLocationAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createWalletLocationAsync: {
        key: 'createWalletLocationAsync',
        noun: 'Locations',
        display: {
            label: 'Create Wallet Location',
            description: 'Create a new location for a specific wallet.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'walletId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...LocationCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LocationsService/Locations/wallet/{walletId}'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                    },
                    body: {
                        ...LocationCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createWalletLocationAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteLocationAsync: {
        key: 'deleteLocationAsync',
        noun: 'Locations',
        display: {
            label: 'Delete Location',
            description: 'Delete a specific location by ID.',
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
                    key: 'locationId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LocationsService/Locations/{locationId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteLocationAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteWalletLocationAsync: {
        key: 'deleteWalletLocationAsync',
        noun: 'Locations',
        display: {
            label: 'Delete Wallet Location',
            description: 'Delete a specific location of a wallet.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'walletId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'locationId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LocationsService/Locations/wallet/{walletId}/{locationId}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteWalletLocationAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getLocationAsync: {
        key: 'getLocationAsync',
        noun: 'Locations',
        display: {
            label: 'Get Location',
            description: 'Get details of a specific location by ID.',
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
                    key: 'locationId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...LocationDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LocationsService/Locations/{locationId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getLocationAsync', response.json);
                    return results;
                })
            },
            sample: samples['LocationDtoEnvelopeSample']
        }
    },
    getLocationsAsync: {
        key: 'getLocationsAsync',
        noun: 'Locations',
        display: {
            label: 'Get Locations',
            description: 'Get all locations with OData query support.',
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
                ...LocationDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LocationsService/Locations'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getLocationsAsync', response.json);
                    return results;
                })
            },
            sample: samples['LocationDtoIReadOnlyListEnvelopeSample']
        }
    },
    getLocationsCountAsync: {
        key: 'getLocationsCountAsync',
        noun: 'Locations',
        display: {
            label: 'Get Locations Count',
            description: 'Get the count of locations with OData query support.',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LocationsService/Locations/count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getLocationsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getWalletLocationAsync: {
        key: 'getWalletLocationAsync',
        noun: 'Locations',
        display: {
            label: 'Get Wallet Location',
            description: 'Get a specific location of a wallet by ID.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'walletId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'locationId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...LocationDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LocationsService/Locations/wallet/{walletId}/{locationId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletLocationAsync', response.json);
                    return results;
                })
            },
            sample: samples['LocationDtoEnvelopeSample']
        }
    },
    getWalletLocationsAsync: {
        key: 'getWalletLocationsAsync',
        noun: 'Locations',
        display: {
            label: 'Get Wallet Locations',
            description: 'Get locations for a specific wallet by ID.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'walletId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...LocationDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LocationsService/Locations/wallet/{walletId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletLocationsAsync', response.json);
                    return results;
                })
            },
            sample: samples['LocationDtoIReadOnlyListEnvelopeSample']
        }
    },
    getWalletLocationsCountAsync: {
        key: 'getWalletLocationsCountAsync',
        noun: 'Locations',
        display: {
            label: 'Get Wallet Locations Count',
            description: 'Get the count of locations for a specific wallet by ID.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'walletId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LocationsService/Locations/wallet/{walletId}/count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletLocationsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    updateLocationAsync: {
        key: 'updateLocationAsync',
        noun: 'Locations',
        display: {
            label: 'Update Location',
            description: 'Update a specific location by ID.',
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
                    key: 'locationId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...LocationUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LocationsService/Locations/{locationId}'),
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
                        ...LocationUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateLocationAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateWalletLocationAsync: {
        key: 'updateWalletLocationAsync',
        noun: 'Locations',
        display: {
            label: 'Update Wallet Location',
            description: 'Update a specific location of a wallet.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'walletId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'locationId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...LocationUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/LocationsService/Locations/wallet/{walletId}/{locationId}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                    },
                    body: {
                        ...LocationUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateWalletLocationAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
