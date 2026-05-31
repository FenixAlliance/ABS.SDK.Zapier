const samples = require('../samples/InvoicesApi');
const EmailDispatchRequest = require('../models/EmailDispatchRequest');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const Envelope = require('../models/Envelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ExtendedInvoiceDtoListEnvelope = require('../models/ExtendedInvoiceDtoListEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const InvoiceAdjustmentCreateDto = require('../models/InvoiceAdjustmentCreateDto');
const InvoiceAdjustmentDtoEnvelope = require('../models/InvoiceAdjustmentDtoEnvelope');
const InvoiceAdjustmentDtoIReadOnlyListEnvelope = require('../models/InvoiceAdjustmentDtoIReadOnlyListEnvelope');
const InvoiceAdjustmentUpdateDto = require('../models/InvoiceAdjustmentUpdateDto');
const InvoiceCreateDto = require('../models/InvoiceCreateDto');
const InvoiceDtoEnvelope = require('../models/InvoiceDtoEnvelope');
const InvoiceDtoListEnvelope = require('../models/InvoiceDtoListEnvelope');
const InvoiceLineAppliedTaxCreateDto = require('../models/InvoiceLineAppliedTaxCreateDto');
const InvoiceLineAppliedTaxDtoIReadOnlyListEnvelope = require('../models/InvoiceLineAppliedTaxDtoIReadOnlyListEnvelope');
const InvoiceLineAppliedTaxUpdateDto = require('../models/InvoiceLineAppliedTaxUpdateDto');
const InvoiceLineCreateDto = require('../models/InvoiceLineCreateDto');
const InvoiceLineDtoEnvelope = require('../models/InvoiceLineDtoEnvelope');
const InvoiceLineDtoIReadOnlyListEnvelope = require('../models/InvoiceLineDtoIReadOnlyListEnvelope');
const InvoiceLineDtoListEnvelope = require('../models/InvoiceLineDtoListEnvelope');
const InvoiceLineUpdateDto = require('../models/InvoiceLineUpdateDto');
const InvoiceReferenceCreateDto = require('../models/InvoiceReferenceCreateDto');
const InvoiceReferenceDtoEnvelope = require('../models/InvoiceReferenceDtoEnvelope');
const InvoiceReferenceDtoIReadOnlyListEnvelope = require('../models/InvoiceReferenceDtoIReadOnlyListEnvelope');
const InvoiceReferenceUpdateDto = require('../models/InvoiceReferenceUpdateDto');
const InvoiceUpdateDto = require('../models/InvoiceUpdateDto');
const MoneyEnvelope = require('../models/MoneyEnvelope');
const PaymentDtoIReadOnlyListEnvelope = require('../models/PaymentDtoIReadOnlyListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    aggregateInvoiceDiscounts: {
        key: 'aggregateInvoiceDiscounts',
        noun: 'Invoices',
        display: {
            label: 'Aggregate invoice discounts.',
            description: 'Aggregates the discounts for the specified invoices.',
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
                    key: 'request_body',
                    label: '',
                    type: 'string',
                }
                {
                    key: 'currencyId',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...MoneyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/DiscountsAggregate'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'currencyId': bundle.inputData?.['currencyId'],
                    },
                    body: {
                        ...request_body.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'aggregateInvoiceDiscounts', response.json);
                    return results;
                })
            },
            sample: samples['MoneyEnvelopeSample']
        }
    },
    aggregateInvoiceGlobalSurcharges: {
        key: 'aggregateInvoiceGlobalSurcharges',
        noun: 'Invoices',
        display: {
            label: 'Aggregate invoice global surcharges.',
            description: 'Aggregates the global surcharges for the specified invoices.',
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
                    key: 'request_body',
                    label: '',
                    type: 'string',
                }
                {
                    key: 'currencyId',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...MoneyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/GlobalSurchargesAggregate'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'currencyId': bundle.inputData?.['currencyId'],
                    },
                    body: {
                        ...request_body.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'aggregateInvoiceGlobalSurcharges', response.json);
                    return results;
                })
            },
            sample: samples['MoneyEnvelopeSample']
        }
    },
    aggregateInvoiceTaxBases: {
        key: 'aggregateInvoiceTaxBases',
        noun: 'Invoices',
        display: {
            label: 'Aggregate invoice tax bases.',
            description: 'Aggregates the tax bases for the specified invoices.',
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
                    key: 'request_body',
                    label: '',
                    type: 'string',
                }
                {
                    key: 'currencyId',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...MoneyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/TaxBasesAggregate'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'currencyId': bundle.inputData?.['currencyId'],
                    },
                    body: {
                        ...request_body.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'aggregateInvoiceTaxBases', response.json);
                    return results;
                })
            },
            sample: samples['MoneyEnvelopeSample']
        }
    },
    aggregateInvoiceTaxes: {
        key: 'aggregateInvoiceTaxes',
        noun: 'Invoices',
        display: {
            label: 'Aggregate invoice taxes.',
            description: 'Aggregates the taxes for the specified invoices.',
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
                    key: 'request_body',
                    label: '',
                    type: 'string',
                }
                {
                    key: 'currencyId',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...MoneyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/TaxesAggregate'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'currencyId': bundle.inputData?.['currencyId'],
                    },
                    body: {
                        ...request_body.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'aggregateInvoiceTaxes', response.json);
                    return results;
                })
            },
            sample: samples['MoneyEnvelopeSample']
        }
    },
    aggregateInvoiceTotals: {
        key: 'aggregateInvoiceTotals',
        noun: 'Invoices',
        display: {
            label: 'Aggregate invoice totals.',
            description: 'Aggregates the totals for the specified invoices.',
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
                    key: 'request_body',
                    label: '',
                    type: 'string',
                }
                {
                    key: 'currencyId',
                    label: '',
                    type: 'string',
                },
            ],
            outputFields: [
                ...MoneyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/TotalsAggregate'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'currencyId': bundle.inputData?.['currencyId'],
                    },
                    body: {
                        ...request_body.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'aggregateInvoiceTotals', response.json);
                    return results;
                })
            },
            sample: samples['MoneyEnvelopeSample']
        }
    },
    calculateInvoice: {
        key: 'calculateInvoice',
        noun: 'Invoices',
        display: {
            label: 'Calculate an invoice.',
            description: 'Calculates the totals and taxes for the specified invoice.',
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
                    key: 'invoiceId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Calculate'),
                    method: 'PUT',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'calculateInvoice', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    calculateInvoiceLine: {
        key: 'calculateInvoiceLine',
        noun: 'Invoices',
        display: {
            label: 'Calculate an invoice line.',
            description: 'Calculates the totals and taxes for the specified invoice line.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceLineId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Calculate'),
                    method: 'PUT',
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'calculateInvoiceLine', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createInvoice: {
        key: 'createInvoice',
        noun: 'Invoices',
        display: {
            label: 'Create a new invoice.',
            description: 'Creates a new invoice for the specified tenant.',
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
                ...InvoiceCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices'),
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
                        ...InvoiceCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createInvoice', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createInvoiceAdjustment: {
        key: 'createInvoiceAdjustment',
        noun: 'Invoices',
        display: {
            label: 'Create a new invoice adjustment.',
            description: 'Creates a new adjustment for the specified invoice.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...InvoiceAdjustmentCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments'),
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
                        ...InvoiceAdjustmentCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createInvoiceAdjustment', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createInvoiceLine: {
        key: 'createInvoiceLine',
        noun: 'Invoices',
        display: {
            label: 'Create a new invoice line.',
            description: 'Creates a new invoice line for the specified invoice.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...InvoiceLineCreateDto.fields(),
            ],
            outputFields: [
                ...InvoiceLineDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Lines'),
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
                        ...InvoiceLineCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createInvoiceLine', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceLineDtoIReadOnlyListEnvelopeSample']
        }
    },
    createInvoiceLineTax: {
        key: 'createInvoiceLineTax',
        noun: 'Invoices',
        display: {
            label: 'Create a new tax for an invoice line.',
            description: 'Creates a new tax entry for the specified invoice line.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceLineId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...InvoiceLineAppliedTaxCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes'),
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
                        ...InvoiceLineAppliedTaxCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createInvoiceLineTax', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createInvoiceReference: {
        key: 'createInvoiceReference',
        noun: 'Invoices',
        display: {
            label: 'Create a new invoice reference.',
            description: 'Creates a new reference for the specified invoice.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...InvoiceReferenceCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/References'),
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
                        ...InvoiceReferenceCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createInvoiceReference', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteInvoice: {
        key: 'deleteInvoice',
        noun: 'Invoices',
        display: {
            label: 'Delete an invoice.',
            description: 'Deletes the specified invoice for the tenant.',
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
                    key: 'invoiceId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteInvoice', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteInvoiceAdjustment: {
        key: 'deleteInvoiceAdjustment',
        noun: 'Invoices',
        display: {
            label: 'Delete an invoice adjustment.',
            description: 'Deletes the specified adjustment from the invoice.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceAdjustmentId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/{invoiceAdjustmentId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteInvoiceAdjustment', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteInvoiceLine: {
        key: 'deleteInvoiceLine',
        noun: 'Invoices',
        display: {
            label: 'Delete an invoice line.',
            description: 'Deletes the specified invoice line.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceLineId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteInvoiceLine', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteInvoiceLineTax: {
        key: 'deleteInvoiceLineTax',
        noun: 'Invoices',
        display: {
            label: 'Delete a tax from an invoice line.',
            description: 'Deletes the specified tax entry from the invoice line.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceLineId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceLineTaxId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes/{invoiceLineTaxId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteInvoiceLineTax', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteInvoiceReference: {
        key: 'deleteInvoiceReference',
        noun: 'Invoices',
        display: {
            label: 'Delete an invoice reference.',
            description: 'Deletes the specified reference from the invoice.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceReferenceId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/References/{invoiceReferenceId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteInvoiceReference', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getExtendedInvoice: {
        key: 'getExtendedInvoice',
        noun: 'Invoices',
        display: {
            label: 'Get an extended invoice by ID.',
            description: 'Retrieves the extended invoice details for the specified invoice ID.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...InvoiceDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Extended'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getExtendedInvoice', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceDtoEnvelopeSample']
        }
    },
    getExtendedInvoices: {
        key: 'getExtendedInvoices',
        noun: 'Invoices',
        display: {
            label: 'Get a list of extended invoices.',
            description: 'Retrieves a list of extended invoice details for the specified tenant.',
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
                ...ExtendedInvoiceDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/Extended'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getExtendedInvoices', response.json);
                    return results;
                })
            },
            sample: samples['ExtendedInvoiceDtoListEnvelopeSample']
        }
    },
    getExtendedInvoicesCount: {
        key: 'getExtendedInvoicesCount',
        noun: 'Invoices',
        display: {
            label: 'Get the count of extended invoices.',
            description: 'Retrieves the total count of extended invoices for the specified tenant.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/Extended/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getExtendedInvoicesCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getInvoice: {
        key: 'getInvoice',
        noun: 'Invoices',
        display: {
            label: 'Get an invoice by ID.',
            description: 'Retrieves the invoice details for the specified invoice ID.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...InvoiceDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoice', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceDtoEnvelopeSample']
        }
    },
    getInvoiceAdjustment: {
        key: 'getInvoiceAdjustment',
        noun: 'Invoices',
        display: {
            label: 'Get an invoice adjustment by ID.',
            description: 'Retrieves the adjustment details for the specified invoice adjustment ID.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceAdjustmentId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...InvoiceAdjustmentDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/{invoiceAdjustmentId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoiceAdjustment', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceAdjustmentDtoEnvelopeSample']
        }
    },
    getInvoiceAdjustments: {
        key: 'getInvoiceAdjustments',
        noun: 'Invoices',
        display: {
            label: 'Get invoice adjustments.',
            description: 'Retrieves the adjustments for the specified invoice.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...InvoiceAdjustmentDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoiceAdjustments', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceAdjustmentDtoIReadOnlyListEnvelopeSample']
        }
    },
    getInvoiceAdjustmentsCount: {
        key: 'getInvoiceAdjustmentsCount',
        noun: 'Invoices',
        display: {
            label: 'Get the count of invoice adjustments.',
            description: 'Retrieves the total count of adjustments for the specified invoice.',
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
                    key: 'invoiceId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoiceAdjustmentsCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getInvoiceLine: {
        key: 'getInvoiceLine',
        noun: 'Invoices',
        display: {
            label: 'Get an invoice line by ID.',
            description: 'Retrieves the invoice line details for the specified invoice line ID.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceLineId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...InvoiceLineDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoiceLine', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceLineDtoEnvelopeSample']
        }
    },
    getInvoiceLineTaxes: {
        key: 'getInvoiceLineTaxes',
        noun: 'Invoices',
        display: {
            label: 'Get taxes for an invoice line.',
            description: 'Retrieves the taxes applied to the specified invoice line.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceLineId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...InvoiceLineAppliedTaxDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoiceLineTaxes', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceLineAppliedTaxDtoIReadOnlyListEnvelopeSample']
        }
    },
    getInvoiceLineTaxesCount: {
        key: 'getInvoiceLineTaxesCount',
        noun: 'Invoices',
        display: {
            label: 'Get the count of taxes for an invoice line.',
            description: 'Retrieves the total count of taxes applied to the specified invoice line.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceLineId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoiceLineTaxesCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getInvoiceLines: {
        key: 'getInvoiceLines',
        noun: 'Invoices',
        display: {
            label: 'Get invoice lines.',
            description: 'Retrieves the invoice lines for the specified invoice.',
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
                    key: 'invoiceId',
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
                ...InvoiceLineDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Lines'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoiceLines', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceLineDtoListEnvelopeSample']
        }
    },
    getInvoiceLinesCount: {
        key: 'getInvoiceLinesCount',
        noun: 'Invoices',
        display: {
            label: 'Get the count of invoice lines.',
            description: 'Retrieves the total count of invoice lines for the specified invoice.',
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
                    key: 'invoiceId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoiceLinesCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getInvoicePayments: {
        key: 'getInvoicePayments',
        noun: 'Invoices',
        display: {
            label: 'Get payments for an invoice.',
            description: 'Retrieves the list of payments related to the specified invoice.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...PaymentDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Payments'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoicePayments', response.json);
                    return results;
                })
            },
            sample: samples['PaymentDtoIReadOnlyListEnvelopeSample']
        }
    },
    getInvoicePaymentsCount: {
        key: 'getInvoicePaymentsCount',
        noun: 'Invoices',
        display: {
            label: 'Get the count of payments for an invoice.',
            description: 'Retrieves the total count of payments for the specified invoice.',
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
                    key: 'invoiceId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Payments/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoicePaymentsCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getInvoiceReference: {
        key: 'getInvoiceReference',
        noun: 'Invoices',
        display: {
            label: 'Get an invoice reference by ID.',
            description: 'Retrieves the reference details for the specified invoice reference ID.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceReferenceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...InvoiceReferenceDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/References/{invoiceReferenceId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoiceReference', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceReferenceDtoEnvelopeSample']
        }
    },
    getInvoiceReferences: {
        key: 'getInvoiceReferences',
        noun: 'Invoices',
        display: {
            label: 'Get invoice references.',
            description: 'Retrieves the references for the specified invoice.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...InvoiceReferenceDtoIReadOnlyListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/References'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoiceReferences', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceReferenceDtoIReadOnlyListEnvelopeSample']
        }
    },
    getInvoiceReferencesCount: {
        key: 'getInvoiceReferencesCount',
        noun: 'Invoices',
        display: {
            label: 'Get the count of invoice references.',
            description: 'Retrieves the total count of references for the specified invoice.',
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
                    key: 'invoiceId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/References/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoiceReferencesCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getInvoices: {
        key: 'getInvoices',
        noun: 'Invoices',
        display: {
            label: 'Get a list of invoices.',
            description: 'Retrieves a list of invoices for the specified tenant.',
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
                ...InvoiceDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoices', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceDtoListEnvelopeSample']
        }
    },
    getInvoicesCount: {
        key: 'getInvoicesCount',
        noun: 'Invoices',
        display: {
            label: 'Get the count of invoices.',
            description: 'Retrieves the total count of invoices for the specified tenant.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getInvoicesCount', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    previewInvoiceEmail: {
        key: 'previewInvoiceEmail',
        noun: 'Invoices',
        display: {
            label: 'Preview the rendered email for an invoice.',
            description: 'This action is only available for users with the &#39;send_email&#39; permission.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'tenantId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...EmailDispatchRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Emails/Preview'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': '',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...EmailDispatchRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'previewInvoiceEmail', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    sendInvoiceEmail: {
        key: 'sendInvoiceEmail',
        noun: 'Invoices',
        display: {
            label: 'Send an invoice transactional email to recipients.',
            description: 'This action is only available for users with the &#39;send_email&#39; permission.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...EmailDispatchRequest.fields(),
            ],
            outputFields: [
                ...Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Emails/Send'),
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
                        ...EmailDispatchRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'sendInvoiceEmail', response.json);
                    return results;
                })
            },
            sample: samples['EnvelopeSample']
        }
    },
    updateInvoice: {
        key: 'updateInvoice',
        noun: 'Invoices',
        display: {
            label: 'Update an invoice.',
            description: 'Updates the specified invoice for the tenant.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...InvoiceUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}'),
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
                        ...InvoiceUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateInvoice', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateInvoiceAdjustment: {
        key: 'updateInvoiceAdjustment',
        noun: 'Invoices',
        display: {
            label: 'Update an invoice adjustment.',
            description: 'Updates the specified adjustment for the invoice.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceAdjustmentId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...InvoiceAdjustmentUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Adjustments/{invoiceAdjustmentId}'),
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
                        ...InvoiceAdjustmentUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateInvoiceAdjustment', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateInvoiceLine: {
        key: 'updateInvoiceLine',
        noun: 'Invoices',
        display: {
            label: 'Update an invoice line.',
            description: 'Updates the specified invoice line.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceLineId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...InvoiceLineUpdateDto.fields(),
            ],
            outputFields: [
                ...InvoiceLineDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}'),
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
                        ...InvoiceLineUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateInvoiceLine', response.json);
                    return results;
                })
            },
            sample: samples['InvoiceLineDtoEnvelopeSample']
        }
    },
    updateInvoiceLineTax: {
        key: 'updateInvoiceLineTax',
        noun: 'Invoices',
        display: {
            label: 'Update a tax for an invoice line.',
            description: 'Updates the specified tax entry for the invoice line.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceLineId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceLineTaxId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...InvoiceLineAppliedTaxUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/Lines/{invoiceLineId}/Taxes/{invoiceLineTaxId}'),
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
                        ...InvoiceLineAppliedTaxUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateInvoiceLineTax', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateInvoiceReference: {
        key: 'updateInvoiceReference',
        noun: 'Invoices',
        display: {
            label: 'Update an invoice reference.',
            description: 'Updates the specified reference for the invoice.',
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
                    key: 'invoiceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'invoiceReferenceId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...InvoiceReferenceUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/InvoicingService/Invoices/{invoiceId}/References/{invoiceReferenceId}'),
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
                        ...InvoiceReferenceUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateInvoiceReference', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
