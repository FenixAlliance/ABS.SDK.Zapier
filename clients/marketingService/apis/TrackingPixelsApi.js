const samples = require('../samples/TrackingPixelsApi');
const OrderDtoEnvelope = require('../models/OrderDtoEnvelope');
const utils = require('../utils/utils');

module.exports = {
    getTrackingPixelAsync: {
        key: 'getTrackingPixelAsync',
        noun: 'TrackingPixels',
        display: {
            label: 'Get a tracking pixel',
            description: 'Retrieves a tracking pixel by its ID.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'pixelId',
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
                ...OrderDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('http://localhost/api/v2/MarketingService/TrackingPixels/{pixelId}'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getTrackingPixelAsync', response.json);
                    return results;
                })
            },
            sample: samples['OrderDtoEnvelopeSample']
        }
    },
}
