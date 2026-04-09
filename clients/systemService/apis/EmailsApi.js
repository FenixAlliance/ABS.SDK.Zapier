const samples = require('../samples/EmailsApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ObjectEmailDispatchRequest = require('../models/ObjectEmailDispatchRequest');
const TenantDtoListEnvelope = require('../models/TenantDtoListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    adminPreviewBasicEmailTemplate: {
        key: 'adminPreviewBasicEmailTemplate',
        noun: 'Emails',
        display: {
            label: 'Preview a rendered basic email template.',
            description: 'This action is only available for global administrators (business_owner role).',
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
                ...ObjectEmailDispatchRequest.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/Emails/Preview'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': 'application/json, application/xml',
                        'Accept': '',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                        ...ObjectEmailDispatchRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'adminPreviewBasicEmailTemplate', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    adminSendBasicEmail: {
        key: 'adminSendBasicEmail',
        noun: 'Emails',
        display: {
            label: 'Send a basic transactional email to recipients.',
            description: 'This action is only available for global administrators (business_owner role).',
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
                ...ObjectEmailDispatchRequest.fields(),
            ],
            outputFields: [
                ...TenantDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/SystemService/Emails/SendBasic'),
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
                        ...ObjectEmailDispatchRequest.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'adminSendBasicEmail', response.json);
                    return results;
                })
            },
            sample: samples['TenantDtoListEnvelopeSample']
        }
    },
}
