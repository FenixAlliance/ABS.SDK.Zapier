const samples = require('../samples/ShipmentsApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ShipmentDtoListEnvelope = require('../models/ShipmentDtoListEnvelope');
const utils = require('../utils/utils');

module.exports = {
    getShipmentsAsync: {
        key: 'getShipmentsAsync',
        noun: 'Shipments',
        display: {
            label: 'Retrieve a list of shipments',
            description: 'Retrieves a list of shipments for the specified tenant.',
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
            ],
            outputFields: [
                ...ShipmentDtoListEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/ShipmentsService/Shipments'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getShipmentsAsync', response.json);
                    return results;
                })
            },
            sample: samples['ShipmentDtoListEnvelopeSample']
        }
    },
}
