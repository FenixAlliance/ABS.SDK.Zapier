const samples = require('../samples/CartsApi');
const BooleanEnvelope = require('../models/BooleanEnvelope');
const CartDtoEnvelope = require('../models/CartDtoEnvelope');
const CartUpdateRequest = require('../models/CartUpdateRequest');
const CountryDtoEnvelope = require('../models/CountryDtoEnvelope');
const CountrySwitchRequest = require('../models/CountrySwitchRequest');
const CurrencyDtoEnvelope = require('../models/CurrencyDtoEnvelope');
const CurrencySwitchRequest = require('../models/CurrencySwitchRequest');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ItemCartRecordDto = require('../models/ItemCartRecordDto');
const ItemCartRecordDtoEnvelope = require('../models/ItemCartRecordDtoEnvelope');
const ItemCartRecordDtoListEnvelope = require('../models/ItemCartRecordDtoListEnvelope');
const ItemCartRecordUpdateDto = require('../models/ItemCartRecordUpdateDto');
const ItemToCompareCartRecordDto = require('../models/ItemToCompareCartRecordDto');
const ItemToCompareCartRecordDtoEnvelope = require('../models/ItemToCompareCartRecordDtoEnvelope');
const ItemToCompareCartRecordDtoListEnvelope = require('../models/ItemToCompareCartRecordDtoListEnvelope');
const NewWishListRequest = require('../models/NewWishListRequest');
const ProductToWishListRequest = require('../models/ProductToWishListRequest');
const WishListDto = require('../models/WishListDto');
const WishListDtoEnvelope = require('../models/WishListDtoEnvelope');
const WishListItemRecordDto = require('../models/WishListItemRecordDto');
const WishListUpdateDto = require('../models/WishListUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    addItemToCartAsync: {
        key: 'addItemToCartAsync',
        noun: 'Carts',
        display: {
            label: 'Add an Item to a cart',
            description: 'Add an Item to a cart',
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
                    key: 'itemId',
                    label: '',
                    type: 'string',
                    required: true,
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Items/{itemId}'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'addItemToCartAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    addItemToCartCompareTable: {
        key: 'addItemToCartCompareTable',
        noun: 'Carts',
        display: {
            label: 'Add an item to the compare table',
            description: 'Add an item to the compare table',
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
                    key: 'itemId',
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
                ...ItemCartRecordDto.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Compare/{itemId}'),
                    method: 'POST',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'addItemToCartCompareTable', response.json);
                    return results;
                })
            },
            sample: samples['ItemCartRecordDtoSample']
        }
    },
    addItemToWishList: {
        key: 'addItemToWishList',
        noun: 'Carts',
        display: {
            label: 'Add a record to a wish list',
            description: 'Add a record to a wish list',
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
                ...ProductToWishListRequest.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Records'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'addItemToWishList', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    cartWishListExistsHead: {
        key: 'cartWishListExistsHead',
        noun: 'Carts',
        display: {
            label: 'Assesses if a WishList exists',
            description: 'Assesses if a WishList exists but does not return the content',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Exists'),
                    method: 'HEAD',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'cartWishListExistsHead', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    clearCartRecords: {
        key: 'clearCartRecords',
        noun: 'Carts',
        display: {
            label: 'Clear all items from a cart',
            description: 'Clear all items from a cart',
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Items'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'clearCartRecords', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createWishListAsync: {
        key: 'createWishListAsync',
        noun: 'Carts',
        display: {
            label: 'Create a new wish list',
            description: 'Create a new wish list',
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
                ...NewWishListRequest.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/WishLists'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createWishListAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    decreaseCartItemQuantity: {
        key: 'decreaseCartItemQuantity',
        noun: 'Carts',
        display: {
            label: 'Decrease an Item in a cart',
            description: 'Decrease an Item in a cart',
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
                    key: 'itemId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Items/{itemId}/Decrease'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'decreaseCartItemQuantity', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    decreaseCartLineAsync: {
        key: 'decreaseCartLineAsync',
        noun: 'Carts',
        display: {
            label: 'Decrease the quantity of a cart line',
            description: 'Decrease the quantity of a cart line',
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
                    key: 'lineId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Lines/{lineId}/Decrease'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'decreaseCartLineAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteCartWishList: {
        key: 'deleteCartWishList',
        noun: 'Carts',
        display: {
            label: 'Delete a wish list',
            description: 'Delete a wish list',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteCartWishList', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteCartWishListRecord: {
        key: 'deleteCartWishListRecord',
        noun: 'Carts',
        display: {
            label: 'Remove a record from a wish list',
            description: 'Remove a record from a wish list',
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
                    key: 'wishListId',
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
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Records/{recordId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteCartWishListRecord', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getActingCart: {
        key: 'getActingCart',
        noun: 'Carts',
        display: {
            label: 'Get the acting cart',
            description: 'Get the acting cart',
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
            ],
            outputFields: [
                ...CartDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/ActingCart'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getActingCart', response.json);
                    return results;
                })
            },
            sample: samples['CartDtoEnvelopeSample']
        }
    },
    getCartByIdAsync: {
        key: 'getCartByIdAsync',
        noun: 'Carts',
        display: {
            label: 'Get all business owned contacts',
            description: 'Get all business owned contacts',
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
                ...CartDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCartByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['CartDtoEnvelopeSample']
        }
    },
    getCartCompareRecord: {
        key: 'getCartCompareRecord',
        noun: 'Carts',
        display: {
            label: 'Get an item from the compare table',
            description: 'Get an item from the compare table',
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
                    key: 'itemId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Compare/{itemId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCartCompareRecord', response.json);
                    return results;
                })
            },
            sample: samples['ItemToCompareCartRecordDtoEnvelopeSample']
        }
    },
    getCartCompareRecords: {
        key: 'getCartCompareRecords',
        noun: 'Carts',
        display: {
            label: 'Get all items in the compare table',
            description: 'Get all items in the compare table',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Compare'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCartCompareRecords', response.json);
                    return results;
                })
            },
            sample: samples['ItemToCompareCartRecordDtoListEnvelopeSample']
        }
    },
    getCartCountryAsync: {
        key: 'getCartCountryAsync',
        noun: 'Carts',
        display: {
            label: 'Get the country of a cart',
            description: 'The country of a cart is used to calculate taxes and shipping costs',
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
                ...CountryDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Country'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCartCountryAsync', response.json);
                    return results;
                })
            },
            sample: samples['CountryDtoEnvelopeSample']
        }
    },
    getCartCurrencyAsync: {
        key: 'getCartCurrencyAsync',
        noun: 'Carts',
        display: {
            label: 'Get the currency of a cart',
            description: 'The currency of a cart used for display purposes',
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
                ...CurrencyDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Currency'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCartCurrencyAsync', response.json);
                    return results;
                })
            },
            sample: samples['CurrencyDtoEnvelopeSample']
        }
    },
    getCartItems: {
        key: 'getCartItems',
        noun: 'Carts',
        display: {
            label: 'Get all cart lines',
            description: 'Get all cart lines',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Items'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCartItems', response.json);
                    return results;
                })
            },
            sample: samples['ItemCartRecordDtoListEnvelopeSample']
        }
    },
    getCartLineAsync: {
        key: 'getCartLineAsync',
        noun: 'Carts',
        display: {
            label: 'Get a cart line by ID',
            description: 'Get a cart line by ID',
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
                    key: 'lineId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Lines/{lineId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCartLineAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getCartLinesAsync: {
        key: 'getCartLinesAsync',
        noun: 'Carts',
        display: {
            label: 'Get all cart lines',
            description: 'Get all cart lines',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Lines'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCartLinesAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemCartRecordDtoListEnvelopeSample']
        }
    },
    getCartWishList: {
        key: 'getCartWishList',
        noun: 'Carts',
        display: {
            label: 'Get all wishlists in a cart',
            description: 'Get all wishlists in a cart',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/WishLists'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCartWishList', response.json);
                    return results;
                })
            },
            sample: samples['WishListDtoSample']
        }
    },
    getCartWishListDetails: {
        key: 'getCartWishListDetails',
        noun: 'Carts',
        display: {
            label: 'Get a wish list by ID',
            description: 'Get a wish list by ID',
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
                ...WishListDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCartWishListDetails', response.json);
                    return results;
                })
            },
            sample: samples['WishListDtoEnvelopeSample']
        }
    },
    getCartWishListItemAsync: {
        key: 'getCartWishListItemAsync',
        noun: 'Carts',
        display: {
            label: 'Get a record in a wish list',
            description: 'Get a record in a wish list',
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
                    key: 'wishListId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Records/{recordId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCartWishListItemAsync', response.json);
                    return results;
                })
            },
            sample: samples['WishListItemRecordDtoSample']
        }
    },
    getCartWishListItems: {
        key: 'getCartWishListItems',
        noun: 'Carts',
        display: {
            label: 'Get all records in a wish list',
            description: 'Get all records in a wish list',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Records'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCartWishListItems', response.json);
                    return results;
                })
            },
            sample: samples['WishListItemRecordDtoSample']
        }
    },
    getGuestCartAsync: {
        key: 'getGuestCartAsync',
        noun: 'Carts',
        display: {
            label: 'Get the guest cart',
            description: 'Get the guest cart',
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
            ],
            outputFields: [
                ...CartDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/GuestCart'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getGuestCartAsync', response.json);
                    return results;
                })
            },
            sample: samples['CartDtoEnvelopeSample']
        }
    },
    getTenantCartAsync: {
        key: 'getTenantCartAsync',
        noun: 'Carts',
        display: {
            label: 'Get the business cart',
            description: 'Get the business cart',
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
                ...CartDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/BusinessCart/{tenantId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTenantCartAsync', response.json);
                    return results;
                })
            },
            sample: samples['CartDtoEnvelopeSample']
        }
    },
    getUserCart: {
        key: 'getUserCart',
        noun: 'Carts',
        display: {
            label: 'Get the current user&#39;s cart',
            description: 'Get the current user&#39;s cart',
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
            ],
            outputFields: [
                ...CartDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/UserCart'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getUserCart', response.json);
                    return results;
                })
            },
            sample: samples['CartDtoEnvelopeSample']
        }
    },
    increaseCartLineAsync: {
        key: 'increaseCartLineAsync',
        noun: 'Carts',
        display: {
            label: 'Increase the quantity of a cart line',
            description: 'Increase the quantity of a cart line',
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
                    key: 'lineId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Lines/{lineId}/Increase'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'increaseCartLineAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    increaseItemCartRecordQuantityAsync: {
        key: 'increaseItemCartRecordQuantityAsync',
        noun: 'Carts',
        display: {
            label: 'Increase an Item in a cart',
            description: 'Increase an Item in a cart',
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
                    key: 'itemId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Items/{itemId}/Increase'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'increaseItemCartRecordQuantityAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    isItemAlreadyInCartAsync: {
        key: 'isItemAlreadyInCartAsync',
        noun: 'Carts',
        display: {
            label: 'Assesses if an Item is already in a cart',
            description: 'Assesses if an Item is already in a cart',
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
                    key: 'itemId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Contains/{itemId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'isItemAlreadyInCartAsync', response.json);
                    return results;
                })
            },
            sample: samples['BooleanEnvelopeSample']
        }
    },
    isItemInCompareTableAsync: {
        key: 'isItemInCompareTableAsync',
        noun: 'Carts',
        display: {
            label: 'Assesses if an Item is already in the compare table',
            description: 'Assesses if an Item is already in the compare table',
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
                    key: 'itemId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Compare/Contains/{itemId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'isItemInCompareTableAsync', response.json);
                    return results;
                })
            },
            sample: samples['BooleanEnvelopeSample']
        }
    },
    isItemInWishLists: {
        key: 'isItemInWishLists',
        noun: 'Carts',
        display: {
            label: 'Assesses if an Item is already in any of the cart&#39;s wishlists',
            description: 'Assesses if an Item is already in any of the cart&#39;s wishlists',
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
                    key: 'itemId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/WishLists/Contains/{itemId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'isItemInWishLists', response.json);
                    return results;
                })
            },
            sample: samples['BooleanEnvelopeSample']
        }
    },
    removeCartLineAsync: {
        key: 'removeCartLineAsync',
        noun: 'Carts',
        display: {
            label: 'Remove a cart line',
            description: 'Remove a cart line',
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
                    key: 'lineId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Lines/{lineId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'removeCartLineAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    removeItemFromCartAsync: {
        key: 'removeItemFromCartAsync',
        noun: 'Carts',
        display: {
            label: 'Remove an Item from a cart',
            description: 'Remove an Item from a cart',
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
                    key: 'itemId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Items/{itemId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'removeItemFromCartAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    removeItemFromCompareTableAsync: {
        key: 'removeItemFromCompareTableAsync',
        noun: 'Carts',
        display: {
            label: 'Remove an item from the compare table',
            description: 'Remove an item from the compare table',
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
                    key: 'itemId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Compare/{itemId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'removeItemFromCompareTableAsync', response.json);
                    return results;
                })
            },
            sample: samples['ItemToCompareCartRecordDtoSample']
        }
    },
    setCartCountryAsync: {
        key: 'setCartCountryAsync',
        noun: 'Carts',
        display: {
            label: 'Set the country of a cart',
            description: 'Set the country of a cart',
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
                ...CountrySwitchRequest.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Country'),
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
                        ...CountrySwitchRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'setCartCountryAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    setCartCurrencyAsync: {
        key: 'setCartCurrencyAsync',
        noun: 'Carts',
        display: {
            label: 'Set the currency of a cart',
            description: 'Set the currency of a cart',
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
                ...CurrencySwitchRequest.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Currency'),
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
                        ...CurrencySwitchRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'setCartCurrencyAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    submitCartAsync: {
        key: 'submitCartAsync',
        noun: 'Carts',
        display: {
            label: 'Submit a cart for processing',
            description: 'Submit a cart for processing',
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
                    key: 'tenantId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Submit'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'submitCartAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateCartAsync: {
        key: 'updateCartAsync',
        noun: 'Carts',
        display: {
            label: 'Update a cart',
            description: 'Update a cart',
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
                ...CartUpdateRequest.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}'),
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
                        ...CartUpdateRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateCartAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateCartLineAsync: {
        key: 'updateCartLineAsync',
        noun: 'Carts',
        display: {
            label: 'Update a cart line',
            description: 'Update a cart line',
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
                    key: 'lineId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Lines/{lineId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateCartLineAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateItemCartRecordAsync: {
        key: 'updateItemCartRecordAsync',
        noun: 'Carts',
        display: {
            label: 'Update an Item in a cart',
            description: 'Update an Item in a cart',
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
                    key: 'itemId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/Items/{itemId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateItemCartRecordAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateItemToWishList: {
        key: 'updateItemToWishList',
        noun: 'Carts',
        display: {
            label: 'Update a wish list',
            description: 'Update a wish list',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateItemToWishList', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    wishListExistsAsync: {
        key: 'wishListExistsAsync',
        noun: 'Carts',
        display: {
            label: 'Assesses if a WishList exists',
            description: 'Assesses if a WishList exists',
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
                ...BooleanEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/CartService/Carts/{cartId}/WishLists/{wishListId}/Exists'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'wishListExistsAsync', response.json);
                    return results;
                })
            },
            sample: samples['BooleanEnvelopeSample']
        }
    },
}
