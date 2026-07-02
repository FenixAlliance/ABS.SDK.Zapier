const samples = require('../samples/ResourceApi');
const utils = require('../utils/utils');

module.exports = {
    getMessage: {
        key: 'getMessage',
        noun: 'Resource',
        display: {
            label: 'Get authenticated resource message',
            description: 'Returns a message confirming the authenticated user&#39;s identity. Requires the &#39;abs_api&#39; scope.',
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
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/IdentityService/Resource/message'),
                    method: 'GET',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'getMessage', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
