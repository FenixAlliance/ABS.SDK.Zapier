const samples = require('../samples/PaymentsApi');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const PaymentCreateDto = require('../models/PaymentCreateDto');
const PaymentDtoListEnvelope = require('../models/PaymentDtoListEnvelope');
const PaymentUpdateDto = require('../models/PaymentUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    createPaymentAsync: {
        key: 'createPaymentAsync',
        noun: 'Payments',
        display: {
            label: 'Creates a new payment',
            description: 'Creates a new payment for the current tenant.',
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
                ...PaymentCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PaymentsService/Payments'),
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
                        ...PaymentCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createPaymentAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deletePaymentAsync: {
        key: 'deletePaymentAsync',
        noun: 'Payments',
        display: {
            label: 'Deletes a payment',
            description: 'Deletes the specified payment.',
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
                    key: 'paymentId',
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PaymentsService/Payments/{paymentId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deletePaymentAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getPaymentAsync: {
        key: 'getPaymentAsync',
        noun: 'Payments',
        display: {
            label: 'Gets a payment by ID (deprecated)',
            description: 'Retrieves a payment using the deprecated /Details route. Use GET {paymentId} instead.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'paymentId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...PaymentDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PaymentsService/Payments/{paymentId}/Details'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPaymentAsync', response.json);
                    return results;
                })
            },
            sample: samples['PaymentDtoListEnvelopeSample']
        }
    },
    getPaymentAsyncV2: {
        key: 'getPaymentAsyncV2',
        noun: 'Payments',
        display: {
            label: 'Gets a payment by ID',
            description: 'Retrieves the details of a payment using its unique identifier.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'paymentId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...PaymentDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PaymentsService/Payments/{paymentId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPaymentAsyncV2', response.json);
                    return results;
                })
            },
            sample: samples['PaymentDtoListEnvelopeSample']
        }
    },
    getPaymentsAsync: {
        key: 'getPaymentsAsync',
        noun: 'Payments',
        display: {
            label: 'Retrieves all payments',
            description: 'Gets all payments for the current tenant with OData support.',
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
                ...PaymentDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PaymentsService/Payments'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getPaymentsAsync', response.json);
                    return results;
                })
            },
            sample: samples['PaymentDtoListEnvelopeSample']
        }
    },
    updatePaymentAsync: {
        key: 'updatePaymentAsync',
        noun: 'Payments',
        display: {
            label: 'Updates a payment',
            description: 'Updates the specified payment.',
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
                    key: 'paymentId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...PaymentUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/PaymentsService/Payments/{paymentId}'),
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
                        ...PaymentUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updatePaymentAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
