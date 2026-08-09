const samples = require('../samples/CognitiveAgentConversationAttachmentsApi');
const ConversationAttachmentUploadResultDtoEnvelope = require('../models/ConversationAttachmentUploadResultDtoEnvelope');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const utils = require('../utils/utils');
const FormData = require('form-data');

module.exports = {
    uploadCognitiveAgentConversationAttachmentAsync: {
        key: 'uploadCognitiveAgentConversationAttachmentAsync',
        noun: 'CognitiveAgentConversationAttachments',
        display: {
            label: 'Upload an attachment to a cognitive agent conversation',
            description: 'Uploads a file into the acting user&#39;s OWN conversation attachment store, scanned and catalogued through the storage spine. A conversation the caller does not own returns 404. The response carries the new file&#39;s id, name, content type and length; the chat UI passes that id as an AttachmentFileIds entry when it sends the referencing user turn.',
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
                    key: 'agentId',
                    label: '',
                    type: 'string',
                    required: true,
                },
                {
                    key: 'conversationId',
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
                {
                    key: 'file',
                    label: '',
                    type: 'file',
                },
            ],
            outputFields: [
                ...ConversationAttachmentUploadResultDtoEnvelope.fields('', false),
            ],
            perform: async (z, bundle) => {
                const formData = new FormData()
                const filename = bundle.inputData?.['filename'] || bundle.inputData?.['file'].split('/').slice(-1)[0]
                formData.append('file', (await (await z.request({url: bundle.inputData?.['file'], method: 'GET', raw: true})).buffer()), { filename: filename })
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/IntelligenceService/CognitiveAgents/{agentId}/Conversations/{conversationId}/Attachments'),
                    method: 'POST',
                    removeMissingValuesFrom: { params: true, body: true },
                    headers: {
                        
                        'Accept': 'application/json, application/xml',
                    },
                    params: {
                        'tenantId': bundle.inputData?.['tenantId'],
                        'api-version': bundle.inputData?.['api-version'],
                    },
                    body: formData,
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'uploadCognitiveAgentConversationAttachmentAsync', response.json);
                    return results;
                })
            },
            sample: samples['ConversationAttachmentUploadResultDtoEnvelopeSample']
        }
    },
}
