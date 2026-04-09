const samples = require('../samples/CountriesApi');
const CityDtoListEnvelope = require('../models/CityDtoListEnvelope');
const CountryCallingCodeDtoListEnvelope = require('../models/CountryCallingCodeDtoListEnvelope');
const CountryDtoEnvelope = require('../models/CountryDtoEnvelope');
const CountryDtoListEnvelope = require('../models/CountryDtoListEnvelope');
const CountryStateDtoEnvelope = require('../models/CountryStateDtoEnvelope');
const CountryStateDtoListEnvelope = require('../models/CountryStateDtoListEnvelope');
const CountryTopLevelDomainDtoListEnvelope = require('../models/CountryTopLevelDomainDtoListEnvelope');
const CurrencyDtoListEnvelope = require('../models/CurrencyDtoListEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const TimezoneDtoListEnvelope = require('../models/TimezoneDtoListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    countCountries: {
        key: 'countCountries',
        noun: 'Countries',
        display: {
            label: 'Count countries',
            description: 'Returns the total number of countries, with optional OData filtering.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/GlobeService/Countries/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countCountries', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    getAllCountries: {
        key: 'getAllCountries',
        noun: 'Countries',
        display: {
            label: 'Get all countries',
            description: 'Retrieves a list of all countries with optional OData pagination and filtering.',
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
                ...CountryDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/GlobeService/Countries'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getAllCountries', response.json);
                    return results;
                })
            },
            sample: samples['CountryDtoListEnvelopeSample']
        }
    },
    getCallingCodesByCountryIdAsync: {
        key: 'getCallingCodesByCountryIdAsync',
        noun: 'Countries',
        display: {
            label: 'Get calling codes for a country',
            description: 'Retrieves the list of international telephone calling codes associated with the specified country.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'countryId',
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
                ...CountryCallingCodeDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/GlobeService/Countries/{countryId}/CallingCodes'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCallingCodesByCountryIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['CountryCallingCodeDtoListEnvelopeSample']
        }
    },
    getCitiesByCountryStateIdAsync: {
        key: 'getCitiesByCountryStateIdAsync',
        noun: 'Countries',
        display: {
            label: 'Get cities for a state',
            description: 'Retrieves the list of cities belonging to the specified state or province.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'countryStateId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'countryId',
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
                ...CityDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/GlobeService/Countries/{countryId}/States/{countryStateId}/Cities'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCitiesByCountryStateIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['CityDtoListEnvelopeSample']
        }
    },
    getCountryById: {
        key: 'getCountryById',
        noun: 'Countries',
        display: {
            label: 'Get country by ID',
            description: 'Retrieves a single country by its unique identifier.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'countryId',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/GlobeService/Countries/{countryId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCountryById', response.json);
                    return results;
                })
            },
            sample: samples['CountryDtoEnvelopeSample']
        }
    },
    getCountryStateByIdAsync: {
        key: 'getCountryStateByIdAsync',
        noun: 'Countries',
        display: {
            label: 'Get state by ID',
            description: 'Retrieves a single state or province by its unique identifier within a country.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'countryStateId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'countryId',
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
                ...CountryStateDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/GlobeService/Countries/{countryId}/States/{countryStateId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCountryStateByIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['CountryStateDtoEnvelopeSample']
        }
    },
    getCountryStatesAsync: {
        key: 'getCountryStatesAsync',
        noun: 'Countries',
        display: {
            label: 'Get states for a country',
            description: 'Retrieves the list of states or provinces belonging to the specified country.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'countryId',
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
                ...CountryStateDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/GlobeService/Countries/{countryId}/States'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getCountryStatesAsync', response.json);
                    return results;
                })
            },
            sample: samples['CountryStateDtoListEnvelopeSample']
        }
    },
    getEnabledCurrenciesByCountryIdAsync: {
        key: 'getEnabledCurrenciesByCountryIdAsync',
        noun: 'Countries',
        display: {
            label: 'Get currencies for a country',
            description: 'Retrieves the list of enabled currencies for the specified country.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'countryId',
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
                ...CurrencyDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/GlobeService/Countries/{countryId}/Currencies'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getEnabledCurrenciesByCountryIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['CurrencyDtoListEnvelopeSample']
        }
    },
    getTimeZonesByCountryIdAsync: {
        key: 'getTimeZonesByCountryIdAsync',
        noun: 'Countries',
        display: {
            label: 'Get timezones for a country',
            description: 'Retrieves the list of timezones associated with the specified country.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'countryId',
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
                ...TimezoneDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/GlobeService/Countries/{countryId}/Timezones'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTimeZonesByCountryIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['TimezoneDtoListEnvelopeSample']
        }
    },
    getTopLevelDomainsByCountryIdAsync: {
        key: 'getTopLevelDomainsByCountryIdAsync',
        noun: 'Countries',
        display: {
            label: 'Get top-level domains for a country',
            description: 'Retrieves the list of internet top-level domains (TLDs) associated with the specified country.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'countryId',
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
                ...CountryTopLevelDomainDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/GlobeService/Countries/{countryId}/TopLevelDomains'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTopLevelDomainsByCountryIdAsync', response.json);
                    return results;
                })
            },
            sample: samples['CountryTopLevelDomainDtoListEnvelopeSample']
        }
    },
    searchCountriesByNameAsync: {
        key: 'searchCountriesByNameAsync',
        noun: 'Countries',
        display: {
            label: 'Search countries by name',
            description: 'Searches for countries whose name matches the specified search term.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'countryName',
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
                ...CountryDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/GlobeService/Countries/Search'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json',
                    },
                    params: {
                        'countryName': bundle.inputData?.['countryName'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'searchCountriesByNameAsync', response.json);
                    return results;
                })
            },
            sample: samples['CountryDtoListEnvelopeSample']
        }
    },
}
