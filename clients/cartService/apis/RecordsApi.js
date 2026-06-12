const samples = require('../samples/RecordsApi');
const BooleanEnvelope = require('../models/BooleanEnvelope');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ItemCartRecordCreateDto = require('../models/ItemCartRecordCreateDto');
const ItemCartRecordDtoEnvelope = require('../models/ItemCartRecordDtoEnvelope');
const ItemCartRecordDtoListEnvelope = require('../models/ItemCartRecordDtoListEnvelope');
const ItemCartRecordUpdateDto = require('../models/ItemCartRecordUpdateDto');
const Operation = require('../models/Operation');
const utils = require('../utils/utils');

module.exports = {
    addItemToCart: {
        key: 'addItemToCart',
        noun: 'Records',
        display: {
            label: 'Add an item to a cart',
            description: 'Adds an item with the specified quantity to the given cart.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'cartId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'itemId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'quantity',
                    label: '',
                    type: 'integer',
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/Records/AddItem'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'cartId': bundle.inputData?.['cartId'],
                        'itemId': bundle.inputData?.['itemId'],
                        'quantity': bundle.inputData?.['quantity'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'addItemToCart', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    addProductToCartAsync: {
        key: 'addProductToCartAsync',
        noun: 'Records',
        display: {
            label: 'Add a product to a cart with tracking',
            description: 'Adds a product to the cart using a request body with cart ID, product ID, and quantity.',
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
                ...ItemCartRecordCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/Records'),
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
                        ...ItemCartRecordCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'addProductToCartAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    clearCartAsync: {
        key: 'clearCartAsync',
        noun: 'Records',
        display: {
            label: 'Clear all items from a cart',
            description: 'Removes all item records from the specified cart.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'cartID',
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/Records/ClearCart'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'cartID': bundle.inputData?.['cartID'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'clearCartAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    decreaseItemCartRecord: {
        key: 'decreaseItemCartRecord',
        noun: 'Records',
        display: {
            label: 'Decrease cart record quantity',
            description: 'Decreases the quantity of the specified item cart record by the given amount.',
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
                    key: 'quantity',
                    label: '',
                    type: 'number',
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/Records/{recordId}/Decrease'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'quantity': bundle.inputData?.['quantity'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'decreaseItemCartRecord', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getItemCartRecord: {
        key: 'getItemCartRecord',
        noun: 'Records',
        display: {
            label: 'Get a cart record by ID',
            description: 'Retrieves the details of a specific item cart record.',
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/Records/{recordId}/Details'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getItemCartRecord', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getItemsInCartAsync: {
        key: 'getItemsInCartAsync',
        noun: 'Records',
        display: {
            label: 'Get all items in a cart',
            description: 'Retrieves all item cart records for the specified cart.',
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
                ...ItemCartRecordDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/Records/{cartId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getItemsInCartAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemCartRecordDtoListEnvelopeSample']
        }
    },
    increaseItemCartRecord: {
        key: 'increaseItemCartRecord',
        noun: 'Records',
        display: {
            label: 'Increase cart record quantity',
            description: 'Increases the quantity of the specified item cart record by the given amount.',
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
                    key: 'quantity',
                    label: '',
                    type: 'number',
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/Records/{recordId}/Increase'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'quantity': bundle.inputData?.['quantity'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'increaseItemCartRecord', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    isItemAlreadyInCart: {
        key: 'isItemAlreadyInCart',
        noun: 'Records',
        display: {
            label: 'Check if an item is in a cart',
            description: 'Returns a boolean indicating whether the specified item is already in the given cart.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'itemID',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'cartID',
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
                ...BooleanEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/Records/IsInCart'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'itemID': bundle.inputData?.['itemID'],
                        'cartID': bundle.inputData?.['cartID'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'isItemAlreadyInCart', response.json);
                    return results;
                })
            },
            sample: samples['BooleanEnvelopeSample']
        }
    },
    patchItemCartRecord: {
        key: 'patchItemCartRecord',
        noun: 'Records',
        display: {
            label: 'Patch a cart record',
            description: 'Partially updates the specified item cart record using a JSON Patch document.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/Records/{recordId}'),
                    method: 'PATCH',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...Operation.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchItemCartRecord', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    removeProductFromCartByParams: {
        key: 'removeProductFromCartByParams',
        noun: 'Records',
        display: {
            label: 'Remove a product from a cart',
            description: 'Removes a product from the cart using cart ID and product ID query parameters.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'cartId',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'productId',
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/Records'),
                    method: 'DELETE',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'cartId': bundle.inputData?.['cartId'],
                        'productId': bundle.inputData?.['productId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'removeProductFromCartByParams', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    removeProductFromCartByRecordId: {
        key: 'removeProductFromCartByRecordId',
        noun: 'Records',
        display: {
            label: 'Remove a product from a cart by record ID',
            description: 'Removes a specific item record from the cart by its record ID.',
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/Records/{recordId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'removeProductFromCartByRecordId', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateItemCartRecord: {
        key: 'updateItemCartRecord',
        noun: 'Records',
        display: {
            label: 'Update a cart record',
            description: 'Updates the specified item cart record with the provided data.',
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
                ...ItemCartRecordUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/Records/{recordId}'),
                    method: 'PUT',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...ItemCartRecordUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateItemCartRecord', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
