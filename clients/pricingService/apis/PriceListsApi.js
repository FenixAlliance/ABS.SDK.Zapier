const samples = require('../samples/PriceListsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const ItemPriceCreateDto = require('../models/ItemPriceCreateDto');
const ItemPriceDtoEnvelope = require('../models/ItemPriceDtoEnvelope');
const ItemPriceDtoListEnvelope = require('../models/ItemPriceDtoListEnvelope');
const ItemPriceUpdateDto = require('../models/ItemPriceUpdateDto');
const PriceListCreateDto = require('../models/PriceListCreateDto');
const PriceListDtoEnvelope = require('../models/PriceListDtoEnvelope');
const PriceListDtoListEnvelope = require('../models/PriceListDtoListEnvelope');
const PriceListUpdateDto = require('../models/PriceListUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    createPriceListAsync: {
        key: 'createPriceListAsync',
        noun: 'PriceLists',
        display: {
            label: 'Creates a new price list',
            description: 'Creates a new price list for the current tenant.',
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
                ...PriceListCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PricingService/PriceLists'),
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
                        ...PriceListCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createPriceListAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createPriceListPricesAsync: {
        key: 'createPriceListPricesAsync',
        noun: 'PriceLists',
        display: {
            label: 'Creates a price list entry',
            description: 'Creates a new price entry in the specified price list.',
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
                    key: 'priceListId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...ItemPriceCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PricingService/PriceLists/{priceListId}/Prices'),
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
                        ...ItemPriceCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createPriceListPricesAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deletePriceListAsync: {
        key: 'deletePriceListAsync',
        noun: 'PriceLists',
        display: {
            label: 'Deletes a price list',
            description: 'Deletes the specified price list.',
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
                    key: 'priceListId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PricingService/PriceLists/{priceListId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deletePriceListAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deletePriceListPriceAsync: {
        key: 'deletePriceListPriceAsync',
        noun: 'PriceLists',
        display: {
            label: 'Deletes a price list entry',
            description: 'Deletes the specified price entry from a price list.',
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
                    key: 'priceListId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'priceId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PricingService/PriceLists/{priceListId}/Prices/{priceId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deletePriceListPriceAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getPriceListAsync: {
        key: 'getPriceListAsync',
        noun: 'PriceLists',
        display: {
            label: 'Gets a price list by ID',
            description: 'Retrieves the details of a price list using its unique identifier.',
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
                    key: 'priceListId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...PriceListDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PricingService/PriceLists/{priceListId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPriceListAsync', response.json);
                    return results;
                })
            },
            sample: samples['PriceListDtoEnvelopeSample']
        }
    },
    getPriceListPriceAsync: {
        key: 'getPriceListPriceAsync',
        noun: 'PriceLists',
        display: {
            label: 'Gets a price list entry by ID',
            description: 'Retrieves a specific price entry from a price list.',
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
                    key: 'priceListId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'priceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...ItemPriceDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PricingService/PriceLists/{priceListId}/Prices/{priceId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPriceListPriceAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemPriceDtoEnvelopeSample']
        }
    },
    getPriceListPricesAsync: {
        key: 'getPriceListPricesAsync',
        noun: 'PriceLists',
        display: {
            label: 'Retrieves prices in a price list',
            description: 'Gets all price entries for a specific price list with OData support.',
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
                    key: 'priceListId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'itemId',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...ItemPriceDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PricingService/PriceLists/{priceListId}/Prices'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'itemId': bundle.inputData?.['itemId'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPriceListPricesAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemPriceDtoListEnvelopeSample']
        }
    },
    getPriceListsAsync: {
        key: 'getPriceListsAsync',
        noun: 'PriceLists',
        display: {
            label: 'Retrieves all price lists',
            description: 'Gets all price lists for the current tenant with OData support.',
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
                ...PriceListDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PricingService/PriceLists'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPriceListsAsync', response.json);
                    return results;
                })
            },
            sample: samples['PriceListDtoListEnvelopeSample']
        }
    },
    getPriceListsCountAsync: {
        key: 'getPriceListsCountAsync',
        noun: 'PriceLists',
        display: {
            label: 'Counts price lists',
            description: 'Gets the count of price lists for the current tenant.',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PricingService/PriceLists/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPriceListsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    updatePriceListAsync: {
        key: 'updatePriceListAsync',
        noun: 'PriceLists',
        display: {
            label: 'Updates a price list',
            description: 'Updates the specified price list.',
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
                    key: 'priceListId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...PriceListUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PricingService/PriceLists/{priceListId}'),
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
                        ...PriceListUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updatePriceListAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updatePriceListPriceAsync: {
        key: 'updatePriceListPriceAsync',
        noun: 'PriceLists',
        display: {
            label: 'Updates a price list entry',
            description: 'Updates the specified price entry in a price list.',
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
                    key: 'priceListId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'priceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...ItemPriceUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PricingService/PriceLists/{priceListId}/Prices/{priceId}'),
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
                        ...ItemPriceUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updatePriceListPriceAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
