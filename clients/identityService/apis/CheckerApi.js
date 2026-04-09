const samples = require('../samples/CheckerApi');
const utils = require('../utils/utils');

module.exports = {
    isAuthenticated: {
        key: 'isAuthenticated',
        noun: 'Checker',
        display: {
            label: 'Check if user is authenticated',
            description: 'Returns whether the current user is authenticated.',
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
                    url: utils.replacePathParameters('http://localhost/api/v2/Auth/Checker/IsAuthenticated'),
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
                    const results = utils.responseOptionsMiddleware(z, bundle, 'isAuthenticated', response.json);
                    return { data: results };
                })
            },
            sample: { data: {} }
        }
    },
}
