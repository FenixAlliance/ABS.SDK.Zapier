const samples = require('../samples/TimezonesApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const TimezoneDtoEnvelope = require('../models/TimezoneDtoEnvelope');
const TimezoneDtoListEnvelope = require('../models/TimezoneDtoListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    countTimezonesAsync: {
        key: 'countTimezonesAsync',
        noun: 'Timezones',
        display: {
            label: 'Count timezones',
            description: 'Returns the total number of supported timezones, with optional OData filtering.',
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
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Timezones/Count'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countTimezonesAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getTimeZoneByIdAsync: {
        key: 'getTimeZoneByIdAsync',
        noun: 'Timezones',
        display: {
            label: 'Get timezone by ID',
            description: 'Retrieves a single timezone by its unique identifier.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'timeZoneId',
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
                ...TimezoneDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Timezones/{timeZoneId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTimeZoneByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['TimezoneDtoEnvelopeSample']
        }
    },
    getTimeZonesAsync: {
        key: 'getTimeZonesAsync',
        noun: 'Timezones',
        display: {
            label: 'Get all timezones',
            description: 'Retrieves the list of all supported timezones with optional OData pagination and filtering.',
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
                ...TimezoneDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Timezones'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTimeZonesAsync', response.json);
                    return results;
                })
            },
            sample: samples['TimezoneDtoListEnvelopeSample']
        }
    },
}
