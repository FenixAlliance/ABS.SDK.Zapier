const samples = require('../samples/IntelligenceServiceApi');
const utils = require('../utils/utils');

module.exports = {
    invokeAgentSurfaceAsync: {
        key: 'invokeAgentSurfaceAsync',
        noun: 'IntelligenceService',
        display: {
            label: 'Run a governed agent over the AG-UI protocol',
            description: 'Streams a governed agent run as AG-UI server-sent events. Feature-flagged on ABP.Cognitive.AgentSurface.Enable; returns 503 when disabled, 401 when unauthorized and 404 when the agent cannot be resolved. An optional ?projectId&#x3D; binds the run to a project (resolved tenant-scoped): the project id + name are surfaced to the model as context so it can call the governed project-storage tools; it is never auto-filled into a tool&#39;s arguments.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'agentId',
                    label: '',
                    type: 'string',
                    required: true,
                },
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/IntelligenceService/Agents/{agentId}/agui'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        'Content-Type': '',
                        'Accept': '',
                    },
                    params: {
                    },
                    body: {
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'invokeAgentSurfaceAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
