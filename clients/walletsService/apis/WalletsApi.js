const samples = require('../samples/WalletsApi');
const BankAccountCreateDto = require('../models/BankAccountCreateDto');
const BankAccountDtoEnvelope = require('../models/BankAccountDtoEnvelope');
const BankAccountDtoListEnvelope = require('../models/BankAccountDtoListEnvelope');
const BankAccountUpdateDto = require('../models/BankAccountUpdateDto');
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
const PaymentChargebackDtoListEnvelope = require('../models/PaymentChargebackDtoListEnvelope');
const PaymentCreateDto = require('../models/PaymentCreateDto');
const PaymentDtoListEnvelope = require('../models/PaymentDtoListEnvelope');
const PaymentRefundDtoListEnvelope = require('../models/PaymentRefundDtoListEnvelope');
const PaymentTokenCreateDto = require('../models/PaymentTokenCreateDto');
const PaymentTokenDtoEnvelope = require('../models/PaymentTokenDtoEnvelope');
const PaymentTokenDtoListEnvelope = require('../models/PaymentTokenDtoListEnvelope');
const PaymentTokenUpdateDto = require('../models/PaymentTokenUpdateDto');
const QuoteDtoListEnvelope = require('../models/QuoteDtoListEnvelope');
const WalletDtoEnvelope = require('../models/WalletDtoEnvelope');
const WalletWithdrawDtoListEnvelope = require('../models/WalletWithdrawDtoListEnvelope');
const WalletWithdrawRequestCreateDto = require('../models/WalletWithdrawRequestCreateDto');
const WalletWithdrawRequestDtoListEnvelope = require('../models/WalletWithdrawRequestDtoListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    createWalletBankAccountAsync: {
        key: 'createWalletBankAccountAsync',
        noun: 'Wallets',
        display: {
            label: 'Create Wallet Bank Account',
            description: 'Create a new bank account for a specific wallet by ID.',
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
                ...BankAccountCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/BankAccounts'),
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
                        ...BankAccountCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createWalletBankAccountAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Locations'),
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
    createWalletPaymentAsync: {
        key: 'createWalletPaymentAsync',
        noun: 'Wallets',
        display: {
            label: 'Create Wallet Payment',
            description: 'Create a new payment for a specific wallet by ID.',
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
                ...PaymentCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Payments'),
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
                        ...PaymentCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createWalletPaymentAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createWalletTokenAsync: {
        key: 'createWalletTokenAsync',
        noun: 'Wallets',
        display: {
            label: 'Create Wallet Token',
            description: 'Create a new payment token for a specific wallet by ID.',
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
                ...PaymentTokenCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Tokens'),
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
                        ...PaymentTokenCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createWalletTokenAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createWalletWithdrawRequestAsync: {
        key: 'createWalletWithdrawRequestAsync',
        noun: 'Wallets',
        display: {
            label: 'Create Wallet Withdraw Request',
            description: 'Create a new withdraw request for a specific wallet by ID.',
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
                ...WalletWithdrawRequestCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Withdraws'),
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
                        ...WalletWithdrawRequestCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createWalletWithdrawRequestAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteWalletBankAccountAsync: {
        key: 'deleteWalletBankAccountAsync',
        noun: 'Wallets',
        display: {
            label: 'Delete Wallet Bank Account',
            description: 'Delete a specific bank account of a specific wallet by ID.',
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
                    key: 'bankAccountId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/BankAccounts/{bankAccountId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteWalletBankAccountAsync', response.json);
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Locations/{locationId}'),
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
    deleteWalletTokenAsync: {
        key: 'deleteWalletTokenAsync',
        noun: 'Wallets',
        display: {
            label: 'Delete Wallet Token',
            description: 'Delete a specific payment token of a specific wallet by ID.',
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
                    key: 'tokenId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Tokens/{tokenId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteWalletTokenAsync', response.json);
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Payments/Incoming'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Payments/Incoming/Count'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Invoices/Incoming'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Invoices/Incoming/Count'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Payments/Outgoing'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Payments/Outgoing/Count'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Invoices/Outgoing'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Invoices/Outgoing/Count'),
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
    getWalletBankAccountAsync: {
        key: 'getWalletBankAccountAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Bank Account',
            description: 'Get a specific bank account of a specific wallet by ID.',
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
                    key: 'bankAccountId',
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
                ...BankAccountDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/BankAccounts/{bankAccountId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletBankAccountAsync', response.json);
                    return results;
                })
            },
            sample: samples['BankAccountDtoEnvelopeSample']
        }
    },
    getWalletBankAccountsAsync: {
        key: 'getWalletBankAccountsAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Bank Accounts',
            description: 'Get bank accounts of a specific wallet by ID.',
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
                ...BankAccountDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/BankAccounts'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletBankAccountsAsync', response.json);
                    return results;
                })
            },
            sample: samples['BankAccountDtoListEnvelopeSample']
        }
    },
    getWalletBankAccountsCountAsync: {
        key: 'getWalletBankAccountsCountAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Bank Accounts Count',
            description: 'Get bank accounts count of a specific wallet by ID.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/BankAccounts/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletBankAccountsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getWalletChargebacksAsync: {
        key: 'getWalletChargebacksAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Chargebacks',
            description: 'Get chargebacks of a specific wallet by ID.',
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
                ...PaymentChargebackDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Chargebacks'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletChargebacksAsync', response.json);
                    return results;
                })
            },
            sample: samples['PaymentChargebackDtoListEnvelopeSample']
        }
    },
    getWalletChargebacksCountAsync: {
        key: 'getWalletChargebacksCountAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Chargebacks Count',
            description: 'Get chargebacks count of a specific wallet by ID.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Chargebacks/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletChargebacksCountAsync', response.json);
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Orders/Extended'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Invoices'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Invoices/Count'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Locations/{locationId}'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Locations'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Locations/Count'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Orders'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Orders/Count'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Payments'),
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Payments/Count'),
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
    getWalletQuotesAsync: {
        key: 'getWalletQuotesAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Quotes',
            description: 'Get quotes of a specific wallet by ID.',
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
                ...QuoteDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Quotes'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletQuotesAsync', response.json);
                    return results;
                })
            },
            sample: samples['QuoteDtoListEnvelopeSample']
        }
    },
    getWalletQuotesCountAsync: {
        key: 'getWalletQuotesCountAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Quotes Count',
            description: 'Get quotes count of a specific wallet by ID.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Quotes/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletQuotesCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getWalletRefundsAsync: {
        key: 'getWalletRefundsAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Refunds',
            description: 'Get refunds of a specific wallet by ID.',
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
                ...PaymentRefundDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Refunds'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletRefundsAsync', response.json);
                    return results;
                })
            },
            sample: samples['PaymentRefundDtoListEnvelopeSample']
        }
    },
    getWalletRefundsCountAsync: {
        key: 'getWalletRefundsCountAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Refunds Count',
            description: 'Get refunds count of a specific wallet by ID.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Refunds/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletRefundsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getWalletTokenAsync: {
        key: 'getWalletTokenAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Token',
            description: 'Get a specific payment token of a specific wallet by ID.',
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
                    key: 'tokenId',
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
                ...PaymentTokenDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Tokens/{tokenId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletTokenAsync', response.json);
                    return results;
                })
            },
            sample: samples['PaymentTokenDtoEnvelopeSample']
        }
    },
    getWalletTokensAsync: {
        key: 'getWalletTokensAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Tokens',
            description: 'Get payment tokens of a specific wallet by ID.',
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
                ...PaymentTokenDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Tokens'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletTokensAsync', response.json);
                    return results;
                })
            },
            sample: samples['PaymentTokenDtoListEnvelopeSample']
        }
    },
    getWalletTokensCountAsync: {
        key: 'getWalletTokensCountAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Tokens Count',
            description: 'Get payment tokens count of a specific wallet by ID.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Tokens/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletTokensCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getWalletWithdrawRequestsAsync: {
        key: 'getWalletWithdrawRequestsAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Withdraw Requests',
            description: 'Get withdraw requests of a specific wallet by ID.',
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
                ...WalletWithdrawRequestDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/WithdrawRequests'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletWithdrawRequestsAsync', response.json);
                    return results;
                })
            },
            sample: samples['WalletWithdrawRequestDtoListEnvelopeSample']
        }
    },
    getWalletWithdrawRequestsCountAsync: {
        key: 'getWalletWithdrawRequestsCountAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Withdraw Requests Count',
            description: 'Get withdraw requests count of a specific wallet by ID.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/WithdrawRequests/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletWithdrawRequestsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getWalletWithdrawsAsync: {
        key: 'getWalletWithdrawsAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Withdraws',
            description: 'Get withdraws of a specific wallet by ID.',
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
                ...WalletWithdrawDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Withdraws'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletWithdrawsAsync', response.json);
                    return results;
                })
            },
            sample: samples['WalletWithdrawDtoListEnvelopeSample']
        }
    },
    getWalletWithdrawsCountAsync: {
        key: 'getWalletWithdrawsCountAsync',
        noun: 'Wallets',
        display: {
            label: 'Get Wallet Withdraws Count',
            description: 'Get withdraws count of a specific wallet by ID.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Withdraws/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getWalletWithdrawsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    updateWalletBankAccountAsync: {
        key: 'updateWalletBankAccountAsync',
        noun: 'Wallets',
        display: {
            label: 'Update Wallet Bank Account',
            description: 'Update a specific bank account of a specific wallet by ID.',
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
                    key: 'bankAccountId',
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
                ...BankAccountUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/BankAccounts/{bankAccountId}'),
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
                        ...BankAccountUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateWalletBankAccountAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
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
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Locations/{locationId}'),
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
    updateWalletTokenAsync: {
        key: 'updateWalletTokenAsync',
        noun: 'Wallets',
        display: {
            label: 'Update Wallet Token',
            description: 'Update a specific payment token of a specific wallet by ID.',
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
                    key: 'tokenId',
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
                ...PaymentTokenUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/WalletsService/Wallets/{walletId}/Tokens/{tokenId}'),
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
                        ...PaymentTokenUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateWalletTokenAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
