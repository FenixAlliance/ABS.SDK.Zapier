const samples = require('../samples/LicensesApi');
const BooleanEnvelope = require('../models/BooleanEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const LicenseAttributesListEnvelope = require('../models/LicenseAttributesListEnvelope');
const LicenseKey = require('../models/LicenseKey');
const LicenseKeyRequest = require('../models/LicenseKeyRequest');
const LicenseValidationErrorListEnvelope = require('../models/LicenseValidationErrorListEnvelope');
const StringEnvelope = require('../models/StringEnvelope');
const utils = require('../utils/utils');

module.exports = {
    apiLicensingLicensesGeneratePost: {
        key: 'apiLicensingLicensesGeneratePost',
        noun: 'Licenses',
        display: {
            label: '',
            description: '',
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
                ...LicenseKeyRequest.fields(),
            ],
            outputFields: [
                ...StringEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/Licensing/Licenses/Generate'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...LicenseKeyRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'apiLicensingLicensesGeneratePost', response.json);
                    return results;
                })
            },
            sample: samples['StringEnvelopeSample']
        }
    },
    apiLicensingLicensesValidateAttributesGet: {
        key: 'apiLicensingLicensesValidateAttributesGet',
        noun: 'Licenses',
        display: {
            label: '',
            description: '',
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
                ...LicenseKey.fields(),
            ],
            outputFields: [
                ...LicenseAttributesListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/Licensing/Licenses/Validate/Attributes'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...LicenseKey.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'apiLicensingLicensesValidateAttributesGet', response.json);
                    return results;
                })
            },
            sample: samples['LicenseAttributesListEnvelopeSample']
        }
    },
    apiLicensingLicensesValidateErrorsGet: {
        key: 'apiLicensingLicensesValidateErrorsGet',
        noun: 'Licenses',
        display: {
            label: '',
            description: '',
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
                ...LicenseKey.fields(),
            ],
            outputFields: [
                ...LicenseValidationErrorListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/Licensing/Licenses/Validate/Errors'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...LicenseKey.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'apiLicensingLicensesValidateErrorsGet', response.json);
                    return results;
                })
            },
            sample: samples['LicenseValidationErrorListEnvelopeSample']
        }
    },
    apiLicensingLicensesValidateGet: {
        key: 'apiLicensingLicensesValidateGet',
        noun: 'Licenses',
        display: {
            label: '',
            description: '',
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
                ...LicenseKey.fields(),
            ],
            outputFields: [
                ...BooleanEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/Licensing/Licenses/Validate'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...LicenseKey.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'apiLicensingLicensesValidateGet', response.json);
                    return results;
                })
            },
            sample: samples['BooleanEnvelopeSample']
        }
    },
}
