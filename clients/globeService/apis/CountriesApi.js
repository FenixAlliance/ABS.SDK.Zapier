const samples = require('../samples/CountriesApi');
const CityDtoCollectionQueryParameters = require('../models/CityDtoCollectionQueryParameters');
const CityDtoListEnvelope = require('../models/CityDtoListEnvelope');
const CountryCallingCodeDtoCollectionQueryParameters = require('../models/CountryCallingCodeDtoCollectionQueryParameters');
const CountryCallingCodeDtoListEnvelope = require('../models/CountryCallingCodeDtoListEnvelope');
const CountryDtoCollectionQueryParameters = require('../models/CountryDtoCollectionQueryParameters');
const CountryDtoEnvelope = require('../models/CountryDtoEnvelope');
const CountryDtoListEnvelope = require('../models/CountryDtoListEnvelope');
const CountryStateDtoCollectionQueryParameters = require('../models/CountryStateDtoCollectionQueryParameters');
const CountryStateDtoEnvelope = require('../models/CountryStateDtoEnvelope');
const CountryStateDtoListEnvelope = require('../models/CountryStateDtoListEnvelope');
const CountryTopLevelDomainDtoCollectionQueryParameters = require('../models/CountryTopLevelDomainDtoCollectionQueryParameters');
const CountryTopLevelDomainDtoListEnvelope = require('../models/CountryTopLevelDomainDtoListEnvelope');
const CurrencyDtoCollectionQueryParameters = require('../models/CurrencyDtoCollectionQueryParameters');
const CurrencyDtoListEnvelope = require('../models/CurrencyDtoListEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const Int32Envelope = require('../models/Int32Envelope');
const TimezoneDtoCollectionQueryParameters = require('../models/TimezoneDtoCollectionQueryParameters');
const TimezoneDtoListEnvelope = require('../models/TimezoneDtoListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    countCallingCodesByCountryAsync: {
        key: 'countCallingCodesByCountryAsync',
        noun: 'Countries',
        display: {
            label: 'Count calling codes for a country',
            description: 'Returns the total number of calling codes for the specified country, with optional OData filtering.',
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
                ...CountryCallingCodeDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Countries/{countryId}/CallingCodes/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...CountryCallingCodeDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countCallingCodesByCountryAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    countCitiesByStateAsync: {
        key: 'countCitiesByStateAsync',
        noun: 'Countries',
        display: {
            label: 'Count cities for a state',
            description: 'Returns the total number of cities for the specified state, with optional OData filtering.',
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
                ...CityDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Countries/{countryId}/States/{countryStateId}/Cities/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...CityDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countCitiesByStateAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
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
                ...CountryDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Countries/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...CountryDtoCollectionQueryParameters.mapping(bundle),
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
    countCountryStatesAsync: {
        key: 'countCountryStatesAsync',
        noun: 'Countries',
        display: {
            label: 'Count states for a country',
            description: 'Returns the total number of states or provinces for the specified country, with optional OData filtering.',
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
                ...CountryStateDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Countries/{countryId}/States/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...CountryStateDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countCountryStatesAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    countTimezonesByCountryAsync: {
        key: 'countTimezonesByCountryAsync',
        noun: 'Countries',
        display: {
            label: 'Count timezones for a country',
            description: 'Returns the total number of timezones for the specified country, with optional OData filtering.',
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
                ...TimezoneDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Countries/{countryId}/Timezones/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...TimezoneDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countTimezonesByCountryAsync', response.json);
                    return results;
                })
            },
            sample: samples['Int32EnvelopeSample']
        }
    },
    countTopLevelDomainsByCountryAsync: {
        key: 'countTopLevelDomainsByCountryAsync',
        noun: 'Countries',
        display: {
            label: 'Count top-level domains for a country',
            description: 'Returns the total number of top-level domains for the specified country, with optional OData filtering.',
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
                ...CountryTopLevelDomainDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...Int32Envelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Countries/{countryId}/TopLevelDomains/Count'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...CountryTopLevelDomainDtoCollectionQueryParameters.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'countTopLevelDomainsByCountryAsync', response.json);
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
                ...CountryDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...CountryDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Countries'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...CountryDtoCollectionQueryParameters.mapping(bundle),
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
                ...CountryCallingCodeDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...CountryCallingCodeDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Countries/{countryId}/CallingCodes'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...CountryCallingCodeDtoCollectionQueryParameters.mapping(bundle),
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
                ...CityDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...CityDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Countries/{countryId}/States/{countryStateId}/Cities'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...CityDtoCollectionQueryParameters.mapping(bundle),
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Countries/{countryId}'),
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
                ...CountryStateDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...CountryStateDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Countries/{countryId}/States/{countryStateId}'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...CountryStateDtoCollectionQueryParameters.mapping(bundle),
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
                ...CountryStateDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...CountryStateDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Countries/{countryId}/States'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...CountryStateDtoCollectionQueryParameters.mapping(bundle),
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
                ...CurrencyDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...CurrencyDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Countries/{countryId}/Currencies'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...CurrencyDtoCollectionQueryParameters.mapping(bundle),
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
                ...TimezoneDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...TimezoneDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Countries/{countryId}/Timezones'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...TimezoneDtoCollectionQueryParameters.mapping(bundle),
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
                ...CountryTopLevelDomainDtoCollectionQueryParameters.fields(),
            ],
            outputFields: [
                ...CountryTopLevelDomainDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Countries/{countryId}/TopLevelDomains'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...CountryTopLevelDomainDtoCollectionQueryParameters.mapping(bundle),
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
                    url: utils.replacePathParameters('https://absuite.net/api/v2/GlobeService/Countries/Search'),
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
