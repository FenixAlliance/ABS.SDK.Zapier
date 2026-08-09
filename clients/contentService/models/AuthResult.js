const utils = require('../utils/utils');
const ExecutionProvenance = require('../models/ExecutionProvenance');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}userId`,
                label: `[${labelPrefix}userId]`,
                dict: true,
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                dict: true,
            },
            {
                key: `${keyPrefix}portalId`,
                label: `[${labelPrefix}portalId]`,
                dict: true,
            },
            {
                key: `${keyPrefix}applicationId`,
                label: `[${labelPrefix}applicationId]`,
                dict: true,
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                dict: true,
            },
            {
                key: `${keyPrefix}correlationId`,
                label: `[${labelPrefix}correlationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}scopes`,
                label: `[${labelPrefix}scopes]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}error`,
                label: `[${labelPrefix}error]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}runAs`,
                label: `[${labelPrefix}runAs]`,
                type: 'string',
                choices: [
                    'Invoker',
                    'Application',
                    'System',
                    'Service',
                ],
            },
            {
                key: `${keyPrefix}principalKind`,
                label: `[${labelPrefix}principalKind]`,
                type: 'string',
                choices: [
                    'Human',
                    'Agent',
                    'Application',
                    'Service',
                    'System',
                ],
            },
            ...ExecutionProvenance.fields(`${keyPrefix}provenance`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'userId': bundle.inputData?.[`${keyPrefix}userId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'portalId': bundle.inputData?.[`${keyPrefix}portalId`],
            'applicationId': bundle.inputData?.[`${keyPrefix}applicationId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'correlationId': bundle.inputData?.[`${keyPrefix}correlationId`],
            'scopes': bundle.inputData?.[`${keyPrefix}scopes`],
            'error': bundle.inputData?.[`${keyPrefix}error`],
            'runAs': bundle.inputData?.[`${keyPrefix}runAs`],
            'principalKind': bundle.inputData?.[`${keyPrefix}principalKind`],
            'provenance': utils.removeIfEmpty(ExecutionProvenance.mapping(bundle, `${keyPrefix}provenance`)),
        }
    },
}
