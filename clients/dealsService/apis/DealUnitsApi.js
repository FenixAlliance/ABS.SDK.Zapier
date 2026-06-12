const samples = require('../samples/DealUnitsApi');
const DealUnitCreateDto = require('../models/DealUnitCreateDto');
const DealUnitDtoEnvelope = require('../models/DealUnitDtoEnvelope');
const DealUnitDtoListEnvelope = require('../models/DealUnitDtoListEnvelope');
const DealUnitLineCreateDto = require('../models/DealUnitLineCreateDto');
const DealUnitLineDtoEnvelope = require('../models/DealUnitLineDtoEnvelope');
const DealUnitLineDtoListEnvelope = require('../models/DealUnitLineDtoListEnvelope');
const DealUnitLineUpdateDto = require('../models/DealUnitLineUpdateDto');
const DealUnitUpdateDto = require('../models/DealUnitUpdateDto');
const EmptyEnvelope = require('../models/EmptyEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ExtendedDealUnitDtoEnvelope = require('../models/ExtendedDealUnitDtoEnvelope');
const ExtendedDealUnitDtoListEnvelope = require('../models/ExtendedDealUnitDtoListEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const Operation = require('../models/Operation');
const utils = require('../utils/utils');

module.exports = {
    calculateDealUnitAsync: {
        key: 'calculateDealUnitAsync',
        noun: 'DealUnits',
        display: {
            label: 'Calculate a deal unit',
            description: 'Triggers recalculation of totals and derived values for a specific deal unit.',
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
                    key: 'dealUnitId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits/{dealUnitId}/Calculate'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'calculateDealUnitAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    calculateDealUnitLineAsync: {
        key: 'calculateDealUnitLineAsync',
        noun: 'DealUnits',
        display: {
            label: 'Calculate a deal unit line',
            description: 'Triggers recalculation of totals and derived values for a specific deal unit line.',
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
                    key: 'dealUnitId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'dealUnitLineId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}/Calculate'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'calculateDealUnitLineAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createDealUnitAsync: {
        key: 'createDealUnitAsync',
        noun: 'DealUnits',
        display: {
            label: 'Create a deal unit',
            description: 'Creates a new deal unit for the specified tenant.',
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
                ...DealUnitCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits'),
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
                        ...DealUnitCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createDealUnitAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    createGetDealUnitLinesAsync: {
        key: 'createGetDealUnitLinesAsync',
        noun: 'DealUnits',
        display: {
            label: 'Create a deal unit line',
            description: 'Creates a new line within a specific deal unit.',
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
                    key: 'dealUnitId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...DealUnitLineCreateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits/{dealUnitId}/Lines'),
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
                        ...DealUnitLineCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'createGetDealUnitLinesAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteDealUnitAsync: {
        key: 'deleteDealUnitAsync',
        noun: 'DealUnits',
        display: {
            label: 'Delete a deal unit',
            description: 'Deletes an existing deal unit by its unique identifier.',
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
                    key: 'dealUnitId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits/{dealUnitId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteDealUnitAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    deleteDealUnitPriceAsync: {
        key: 'deleteDealUnitPriceAsync',
        noun: 'DealUnits',
        display: {
            label: 'Delete a deal unit line',
            description: 'Deletes an existing line from a specific deal unit.',
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
                    key: 'dealUnitId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'dealUnitLineId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'deleteDealUnitPriceAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    getDealUnitAsync: {
        key: 'getDealUnitAsync',
        noun: 'DealUnits',
        display: {
            label: 'Get deal unit by ID',
            description: 'Retrieves a single deal unit by its unique identifier.',
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
                    key: 'dealUnitId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...DealUnitDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits/{dealUnitId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDealUnitAsync', response.json);
                    return results;
                })
            },
            sample: samples['DealUnitDtoEnvelopeSample']
        }
    },
    getDealUnitLinesAsync: {
        key: 'getDealUnitLinesAsync',
        noun: 'DealUnits',
        display: {
            label: 'Get deal unit lines',
            description: 'Retrieves a list of lines for a specific deal unit with OData query support.',
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
                    key: 'dealUnitId',
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
                ...DealUnitLineDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits/{dealUnitId}/Lines'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDealUnitLinesAsync', response.json);
                    return results;
                })
            },
            sample: samples['DealUnitLineDtoListEnvelopeSample']
        }
    },
    getDealUnitLinesCountAsync: {
        key: 'getDealUnitLinesCountAsync',
        noun: 'DealUnits',
        display: {
            label: 'Get deal unit lines count',
            description: 'Returns the total count of lines for a specific deal unit with OData filter support.',
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
                    key: 'dealUnitId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDealUnitLinesCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getDealUnitPriceAsync: {
        key: 'getDealUnitPriceAsync',
        noun: 'DealUnits',
        display: {
            label: 'Get a deal unit line by ID',
            description: 'Retrieves a single deal unit line by its unique identifier.',
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
                    key: 'dealUnitId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'dealUnitLineId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...DealUnitLineDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDealUnitPriceAsync', response.json);
                    return results;
                })
            },
            sample: samples['DealUnitLineDtoEnvelopeSample']
        }
    },
    getDealUnitsAsync: {
        key: 'getDealUnitsAsync',
        noun: 'DealUnits',
        display: {
            label: 'Get deal units',
            description: 'Retrieves a list of deal units for the specified tenant with OData query support.',
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
                ...DealUnitDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDealUnitsAsync', response.json);
                    return results;
                })
            },
            sample: samples['DealUnitDtoListEnvelopeSample']
        }
    },
    getDealUnitsCountAsync: {
        key: 'getDealUnitsCountAsync',
        noun: 'DealUnits',
        display: {
            label: 'Get deal units count',
            description: 'Returns the total count of deal units for the specified tenant with OData filter support.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getDealUnitsCountAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getExtendedDealUnitAsync: {
        key: 'getExtendedDealUnitAsync',
        noun: 'DealUnits',
        display: {
            label: 'Get extended deal unit by ID',
            description: 'Retrieves a single deal unit with extended details by its unique identifier.',
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
                    key: 'dealUnitId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
                ...ExtendedDealUnitDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits/{dealUnitId}/Extended'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getExtendedDealUnitAsync', response.json);
                    return results;
                })
            },
            sample: samples['ExtendedDealUnitDtoEnvelopeSample']
        }
    },
    getExtendedDealUnitsAsync: {
        key: 'getExtendedDealUnitsAsync',
        noun: 'DealUnits',
        display: {
            label: 'Get extended deal units',
            description: 'Retrieves a list of deal units with extended details for the specified tenant with OData query support.',
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
                ...ExtendedDealUnitDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits/Extended'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getExtendedDealUnitsAsync', response.json);
                    return results;
                })
            },
            sample: samples['ExtendedDealUnitDtoListEnvelopeSample']
        }
    },
    patchDealUnitAsync: {
        key: 'patchDealUnitAsync',
        noun: 'DealUnits',
        display: {
            label: 'Patch a deal unit',
            description: 'Partially updates an existing deal unit by its unique identifier using a JSON Patch document.',
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
                    key: 'dealUnitId',
                    label: '',
                    type: 'string',
                    required: true,
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
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits/{dealUnitId}'),
                    method: 'PATCH',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...Operation.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchDealUnitAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    patchDealUnitLineAsync: {
        key: 'patchDealUnitLineAsync',
        noun: 'DealUnits',
        display: {
            label: 'Patch a deal unit line',
            description: 'Partially updates an existing line within a specific deal unit using a JSON Patch document.',
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
                    key: 'dealUnitId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'dealUnitLineId',
                    label: '',
                    type: 'string',
                    required: true,
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
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}'),
                    method: 'PATCH',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                    },
                    body: {
                        ...Operation.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'patchDealUnitLineAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateDealUnitAsync: {
        key: 'updateDealUnitAsync',
        noun: 'DealUnits',
        display: {
            label: 'Update a deal unit',
            description: 'Updates an existing deal unit by its unique identifier.',
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
                    key: 'dealUnitId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...DealUnitUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits/{dealUnitId}'),
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
                        ...DealUnitUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateDealUnitAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
    updateDealUnitPriceAsync: {
        key: 'updateDealUnitPriceAsync',
        noun: 'DealUnits',
        display: {
            label: 'Update a deal unit line',
            description: 'Updates an existing line within a specific deal unit.',
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
                    key: 'dealUnitId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'dealUnitLineId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                ...DealUnitLineUpdateDto.fields(),
            ],
            outputFields: [
                ...EmptyEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/DealsService/DealUnits/{dealUnitId}/Lines/{dealUnitLineId}'),
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
                        ...DealUnitLineUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateDealUnitPriceAsync', response.json);
                    return results;
                })
            },
            sample: samples['EmptyEnvelopeSample']
        }
    },
}
