const samples = require('../samples/WishListsApi');
const BooleanEnvelope = require('../models/BooleanEnvelope');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const NewWishListRequest = require('../models/NewWishListRequest');
const Operation = require('../models/Operation');
const ProductToWishListRequest = require('../models/ProductToWishListRequest');
const WishListDto = require('../models/WishListDto');
const WishListItemRecordDto = require('../models/WishListItemRecordDto');
const WishListUpdateDto = require('../models/WishListUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    addProductToWishList: {
        key: 'addProductToWishList',
        noun: 'WishLists',
        display: {
            label: 'Add a product to a wish list',
            description: 'Adds the specified product to the given wish list.',
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
                ...ProductToWishListRequest.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/WishLists/Records'),
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
                        ...ProductToWishListRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'addProductToWishList', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createWishList: {
        key: 'createWishList',
        noun: 'WishLists',
        display: {
            label: 'Create a wish list',
            description: 'Creates a new wish list from the provided request data.',
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
                ...NewWishListRequest.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/WishLists'),
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
                        ...NewWishListRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createWishList', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteWishList: {
        key: 'deleteWishList',
        noun: 'WishLists',
        display: {
            label: 'Delete a wish list',
            description: 'Deletes the specified wish list.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'wishListId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/WishLists/{wishListId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteWishList', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteWishListRecord: {
        key: 'deleteWishListRecord',
        noun: 'WishLists',
        display: {
            label: 'Delete a wish list record',
            description: 'Removes a specific item record from a wish list by its record ID.',
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
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/WishLists/Records/{recordId}'),
                    method: 'DELETE',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteWishListRecord', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    getCartWishListDetailsAsync: {
        key: 'getCartWishListDetailsAsync',
        noun: 'WishLists',
        display: {
            label: 'Get wish list details',
            description: 'Retrieves the full details of the specified wish list.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'wishListId',
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
                ...WishListDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/WishLists/{wishListId}/Details'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCartWishListDetailsAsync', response.json);
                    return results;
                })
            },
            sample: samples['WishListDtoSample']
        }
    },
    getCartWishListItemsAsync: {
        key: 'getCartWishListItemsAsync',
        noun: 'WishLists',
        display: {
            label: 'Get wish list item records',
            description: 'Retrieves all item records in the specified wish list.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'wishListId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/WishLists/{wishListId}/Records'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCartWishListItemsAsync', response.json);
                    return results;
                })
            },
            sample: samples['WishListItemRecordDtoSample']
        }
    },
    getWishListAsync: {
        key: 'getWishListAsync',
        noun: 'WishLists',
        display: {
            label: 'Get wish lists for a cart',
            description: 'Retrieves all wish lists associated with the specified cart.',
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
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/WishLists/{cartId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWishListAsync', response.json);
                    return results;
                })
            },
            sample: samples['WishListDtoSample']
        }
    },
    isProductInWishLists: {
        key: 'isProductInWishLists',
        noun: 'WishLists',
        display: {
            label: 'Check if a product is in any wish list',
            description: 'Returns a boolean indicating whether the specified product exists in any wish list of the given cart.',
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
                ...BooleanEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/WishLists/Contains'),
                    method: 'GET',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'isProductInWishLists', response.json);
                    return results;
                })
            },
            sample: samples['BooleanEnvelopeSample']
        }
    },
    patchWishList: {
        key: 'patchWishList',
        noun: 'WishLists',
        display: {
            label: 'Patch a wish list',
            description: 'Partially updates the specified wish list using a JSON Patch document.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'wishListId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/WishLists/{wishListId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchWishList', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateProductToWishList: {
        key: 'updateProductToWishList',
        noun: 'WishLists',
        display: {
            label: 'Update a wish list',
            description: 'Updates the specified wish list with the provided data.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'wishListId',
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
                ...WishListUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/WishLists/{wishListId}'),
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
                        ...WishListUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateProductToWishList', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    wishListExists: {
        key: 'wishListExists',
        noun: 'WishLists',
        display: {
            label: 'Check if a wish list exists',
            description: 'Returns a boolean indicating whether the specified wish list exists.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'wishListId',
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
                ...BooleanEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/WishLists/Exists'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'wishListId': bundle.inputData?.['wishListId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'wishListExists', response.json);
                    return results;
                })
            },
            sample: samples['BooleanEnvelopeSample']
        }
    },
    wishListExistsHeadAsync: {
        key: 'wishListExistsHeadAsync',
        noun: 'WishLists',
        display: {
            label: 'Check if a wish list exists (HEAD)',
            description: 'HEAD request to check whether the specified wish list exists without returning a response body.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'wishListId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/CartService/WishLists/Exists'),
                    method: 'HEAD',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'wishListId': bundle.inputData?.['wishListId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'wishListExistsHeadAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
