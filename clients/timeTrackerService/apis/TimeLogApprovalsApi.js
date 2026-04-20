const samples = require('../samples/TimeLogApprovalsApi');
const ErrorEnvelope = require('../models/ErrorEnvelope');
const ProjectHoursApprovalApproverUpdateDto = require('../models/ProjectHoursApprovalApproverUpdateDto');
const ProjectHoursApprovalCreateDto = require('../models/ProjectHoursApprovalCreateDto');
const ProjectHoursApprovalStatusUpdateDto = require('../models/ProjectHoursApprovalStatusUpdateDto');
const utils = require('../utils/utils');

module.exports = {
    requestProjectHoursApprovalAsync: {
        key: 'requestProjectHoursApprovalAsync',
        noun: 'TimeLogApprovals',
        display: {
            label: 'Request project hours approval',
            description: 'Creates a new project hours approval request.',
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
                ...ProjectHoursApprovalCreateDto.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TimeTrackerService/TimeLogApprovals'),
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
                        ...ProjectHoursApprovalCreateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'requestProjectHoursApprovalAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    updateProjectHoursApprovalApproverAsync: {
        key: 'updateProjectHoursApprovalApproverAsync',
        noun: 'TimeLogApprovals',
        display: {
            label: 'Update approval approver',
            description: 'Updates the approver of an existing project hours approval.',
            hidden: false,
        },
        operation: {
            inputFields: [
                {
                    key: 'approvalId',
                    label: '',
                    type: 'string',
                    required: true,
                },
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
                ...ProjectHoursApprovalApproverUpdateDto.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TimeTrackerService/TimeLogApprovals/{approvalId}/Approver'),
                    method: 'PUT',
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
                        ...ProjectHoursApprovalApproverUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateProjectHoursApprovalApproverAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
    updateProjectHoursApprovalStatusAsync: {
        key: 'updateProjectHoursApprovalStatusAsync',
        noun: 'TimeLogApprovals',
        display: {
            label: 'Update approval status',
            description: 'Updates the status of an existing project hours approval.',
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
                    key: 'approvalId',
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
                ...ProjectHoursApprovalStatusUpdateDto.fields(),
            ],
            outputFields: [
            ],
            perform: async (z, bundle) => {
                const options = {
                    url: utils.replacePathParameters('https://absuite.net/api/v2/TimeTrackerService/TimeLogApprovals/{approvalId}/Status'),
                    method: 'PUT',
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
                        ...ProjectHoursApprovalStatusUpdateDto.mapping(bundle),
                    },
                }
                return z.request(utils.requestOptionsMiddleware(z, bundle, options)).then((response) => {
                    response.throwForStatus();
                    const results = utils.responseOptionsMiddleware(z, bundle, 'updateProjectHoursApprovalStatusAsync', response.json);
                    return results;
                })
            },
            sample: { data: {} }
        }
    },
}
