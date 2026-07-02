const samples = require('../samples/CompareApi');
const AddProductToCompareRequest = require('../models/AddProductToCompareRequest');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ItemCartRecordDto = require('../models/ItemCartRecordDto');
const ItemToCompareCartRecordDto = require('../models/ItemToCompareCartRecordDto');
const ItemToCompareCartRecordDtoEnvelope = require('../models/ItemToCompareCartRecordDtoEnvelope');
const ItemToCompareCartRecordDtoListEnvelope = require('../models/ItemToCompareCartRecordDtoListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    addItemToCompareTableAsync: {
        key: 'addItemToCompareTableAsync',
        noun: 'Compare',
        display: {
            label: 'Add an item to the compare table',
            description: 'Adds a product to the compare table for the specified cart with tracking.',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                ...AddProductToCompareRequest.fields(),
            ],
            outputFields: [
                ...ItemCartRecordDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Compare'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...AddProductToCompareRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'addItemToCompareTableAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemCartRecordDtoSample']
        }
    },
    getItemToCompareRecord: {
        key: 'getItemToCompareRecord',
        noun: 'Compare',
        display: {
            label: 'Get compare record details',
            description: 'Retrieves the details of a specific item-to-compare cart record.',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                ...ItemToCompareCartRecordDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Compare/{recordId}/Details'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getItemToCompareRecord', response.json);
                    return results;
                })
            },
            sample: samples['ItemToCompareCartRecordDtoEnvelopeSample']
        }
    },
    getItemToCompareRecords: {
        key: 'getItemToCompareRecords',
        noun: 'Compare',
        display: {
            label: 'Get items to compare in a cart',
            description: 'Retrieves all items added to the compare table for the specified cart.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'cartId',
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
                ...ItemToCompareCartRecordDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Compare/{cartId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getItemToCompareRecords', response.json);
                    return results;
                })
            },
            sample: samples['ItemToCompareCartRecordDtoListEnvelopeSample']
        }
    },
    removeItemFromCompareTable: {
        key: 'removeItemFromCompareTable',
        noun: 'Compare',
        display: {
            label: 'Remove an item from the compare table',
            description: 'Removes a specific record from the compare table by its record ID.',
            hidden: false,
        },
        operation: {
            inputFields: [
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
                ...ItemToCompareCartRecordDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Compare/{recordId}'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'removeItemFromCompareTable', response.json);
                    return results;
                })
            },
            sample: samples['ItemToCompareCartRecordDtoSample']
        }
    },
}
