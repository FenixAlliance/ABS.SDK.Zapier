const samples = require('../samples/WalletsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ExtendedOrderDtoListEnvelope = require('../models/ExtendedOrderDtoListEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const InvoiceDtoListEnvelope = require('../models/InvoiceDtoListEnvelope');
const LocationCreateDto = require('../models/LocationCreateDto');
const LocationDtoEnvelope = require('../models/LocationDtoEnvelope');
const LocationDtoListEnvelope = require('../models/LocationDtoListEnvelope');
const LocationUpdateDto = require('../models/LocationUpdateDto');
const OrderDtoListEnvelope = require('../models/OrderDtoListEnvelope');
const PaymentDtoListEnvelope = require('../models/PaymentDtoListEnvelope');
const WalletDtoEnvelope = require('../models/WalletDtoEnvelope');
const utils = require('../utils/utils');

module.exports = {
    createWalletLocationAsync: {
        key: 'createWalletLocationAsync',
        noun: 'Wallets',
        display: {
            label: 'Create Wallet Location',
            description: 'Create a new location for a specific wallet by ID.',
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
                    key: 'api-version',
                    label: '',
                    type: 'string',
                },
                {
                    key: 'x-api-version',
                    label: '',
                    type: 'string',
                },
                ...LocationCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Locations'),
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
    deleteWalletLocationAsync: {
        key: 'deleteWalletLocationAsync',
        noun: 'Wallets',
        display: {
            label: 'Delete Wallet Location',
            description: 'Delete a specific location of a specific wallet by ID.',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Locations/{locationId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteWalletLocationAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getIncomingPaymentsAsync: {
        key: 'getIncomingPaymentsAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Incoming Payments',
            description: 'Get incoming payments of a specific wallet by ID.',
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
                ...PaymentDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Payments/Incoming'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getIncomingPaymentsAsync', response.json);
                    return results;
                })
            },
            sample: samples['PaymentDtoListEnvelopeSample']
        }
    },
    getIncomingPaymentsCountAsync: {
        key: 'getIncomingPaymentsCountAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Incoming Payments Count',
            description: 'Get incoming payments count of a specific wallet by ID.',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Payments/Incoming/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getIncomingPaymentsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getIncomingWalletInvoicesAsync: {
        key: 'getIncomingWalletInvoicesAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Incoming Wallet Invoices',
            description: 'Get incoming invoices of a specific wallet by ID.',
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
                ...InvoiceDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Invoices/Incoming'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getIncomingWalletInvoicesAsync', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceDtoListEnvelopeSample']
        }
    },
    getIncomingWalletInvoicesCountAsync: {
        key: 'getIncomingWalletInvoicesCountAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Incoming Wallet Invoices Count',
            description: 'Get incoming invoices count of a specific wallet by ID.',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Invoices/Incoming/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getIncomingWalletInvoicesCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getOutgoingPaymentsAsync: {
        key: 'getOutgoingPaymentsAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Outgoing Payments',
            description: 'Get outgoing payments of a specific wallet by ID.',
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
                ...PaymentDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Payments/Outgoing'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getOutgoingPaymentsAsync', response.json);
                    return results;
                })
            },
            sample: samples['PaymentDtoListEnvelopeSample']
        }
    },
    getOutgoingPaymentsCountAsync: {
        key: 'getOutgoingPaymentsCountAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Outgoing Payments Count',
            description: 'Get outgoing payments count of a specific wallet by ID.',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Payments/Outgoing/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getOutgoingPaymentsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getOutgoingWalletInvoicesAsync: {
        key: 'getOutgoingWalletInvoicesAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Outgoing Wallet Invoices',
            description: 'Get outgoing invoices of a specific wallet by ID.',
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
                ...InvoiceDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Invoices/Outgoing'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getOutgoingWalletInvoicesAsync', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceDtoListEnvelopeSample']
        }
    },
    getOutgoingWalletInvoicesCountAsync: {
        key: 'getOutgoingWalletInvoicesCountAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Outgoing Wallet Invoices Count',
            description: 'Get outgoing invoices count of a specific wallet by ID.',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Invoices/Outgoing/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getOutgoingWalletInvoicesCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getWalletDetailsAsync: {
        key: 'getWalletDetailsAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Details',
            description: 'Get details of a specific wallet by ID.',
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
                ...WalletDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletDetailsAsync', response.json);
                    return results;
                })
            },
            sample: samples['WalletDtoEnvelopeSample']
        }
    },
    getWalletExtendedOrdersAsync: {
        key: 'getWalletExtendedOrdersAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Extended Orders',
            description: 'Get extended orders of a specific wallet by ID.',
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
                ...ExtendedOrderDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Orders/Extended'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletExtendedOrdersAsync', response.json);
                    return results;
                })
            },
            sample: samples['ExtendedOrderDtoListEnvelopeSample']
        }
    },
    getWalletInvoicesAsync: {
        key: 'getWalletInvoicesAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Invoices',
            description: 'Get invoices of a specific wallet by ID.',
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
                ...InvoiceDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Invoices'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletInvoicesAsync', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceDtoListEnvelopeSample']
        }
    },
    getWalletInvoicesCountAsync: {
        key: 'getWalletInvoicesCountAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Invoices Count',
            description: 'Get invoices count of a specific wallet by ID.',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Invoices/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletInvoicesCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getWalletLocationAsync: {
        key: 'getWalletLocationAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Location',
            description: 'Get a specific location of a specific wallet by ID.',
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
                ...LocationDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Locations/{locationId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletLocationAsync', response.json);
                    return results;
                })
            },
            sample: samples['LocationDtoEnvelopeSample']
        }
    },
    getWalletLocationsAsync: {
        key: 'getWalletLocationsAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Locations',
            description: 'Get locations of a specific wallet by ID.',
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
                ...LocationDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Locations'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletLocationsAsync', response.json);
                    return results;
                })
            },
            sample: samples['LocationDtoListEnvelopeSample']
        }
    },
    getWalletLocationsCountAsync: {
        key: 'getWalletLocationsCountAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Locations Count',
            description: 'Get locations count of a specific wallet by ID.',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Locations/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletLocationsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getWalletOrdersAsync: {
        key: 'getWalletOrdersAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Orders',
            description: 'Get orders of a specific wallet by ID.',
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
                ...OrderDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Orders'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletOrdersAsync', response.json);
                    return results;
                })
            },
            sample: samples['OrderDtoListEnvelopeSample']
        }
    },
    getWalletOrdersCountAsync: {
        key: 'getWalletOrdersCountAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Orders Count',
            description: 'Get orders count of a specific wallet by ID.',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Orders/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletOrdersCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getWalletPaymentsAsync: {
        key: 'getWalletPaymentsAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Payments',
            description: 'Get payments of a specific wallet by ID.',
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
                ...PaymentDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Payments'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletPaymentsAsync', response.json);
                    return results;
                })
            },
            sample: samples['PaymentDtoListEnvelopeSample']
        }
    },
    getWalletPaymentsCountAsync: {
        key: 'getWalletPaymentsCountAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Payments Count',
            description: 'Get payments count of a specific wallet by ID.',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Payments/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletPaymentsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    updateWalletLocationAsync: {
        key: 'updateWalletLocationAsync',
        noun: 'Wallets',
        display: {
            label: 'Update Wallet Location',
            description: 'Update a specific location of a specific wallet by ID.',
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
                ...LocationUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/WalletsService/Wallets/{walletId}/Locations/{locationId}'),
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
