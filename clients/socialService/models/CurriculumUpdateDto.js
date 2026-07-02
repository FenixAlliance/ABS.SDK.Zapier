const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}jobApplicantProfileId`,
                label: `[${labelPrefix}jobApplicantProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}undergraduate`,
                label: `[${labelPrefix}undergraduate]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}certifiedProfessional`,
                label: `[${labelPrefix}certifiedProfessional]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}sales`,
                label: `[${labelPrefix}sales]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}others`,
                label: `[${labelPrefix}others]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}finance`,
                label: `[${labelPrefix}finance]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}research`,
                label: `[${labelPrefix}research]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}advocate`,
                label: `[${labelPrefix}advocate]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}marketing`,
                label: `[${labelPrefix}marketing]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}education`,
                label: `[${labelPrefix}education]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}executive`,
                label: `[${labelPrefix}executive]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}commercial`,
                label: `[${labelPrefix}commercial]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}graphicDesign`,
                label: `[${labelPrefix}graphicDesign]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}sustainability`,
                label: `[${labelPrefix}sustainability]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}administrative`,
                label: `[${labelPrefix}administrative]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}humanResources`,
                label: `[${labelPrefix}humanResources]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}soundEngineering`,
                label: `[${labelPrefix}soundEngineering]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}cloudEngineering`,
                label: `[${labelPrefix}cloudEngineering]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}firstLevelSupport`,
                label: `[${labelPrefix}firstLevelSupport]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}secondLevelSupport`,
                label: `[${labelPrefix}secondLevelSupport]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}softwareEngineering`,
                label: `[${labelPrefix}softwareEngineering]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}partnerAccountRepresentative`,
                label: `[${labelPrefix}partnerAccountRepresentative]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}startupSuccessRepresentative`,
                label: `[${labelPrefix}startupSuccessRepresentative]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}customerSuccessRepresentative`,
                label: `[${labelPrefix}customerSuccessRepresentative]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'jobApplicantProfileId': bundle.inputData?.[`${keyPrefix}jobApplicantProfileId`],
            'undergraduate': bundle.inputData?.[`${keyPrefix}undergraduate`],
            'certifiedProfessional': bundle.inputData?.[`${keyPrefix}certifiedProfessional`],
            'sales': bundle.inputData?.[`${keyPrefix}sales`],
            'others': bundle.inputData?.[`${keyPrefix}others`],
            'finance': bundle.inputData?.[`${keyPrefix}finance`],
            'research': bundle.inputData?.[`${keyPrefix}research`],
            'advocate': bundle.inputData?.[`${keyPrefix}advocate`],
            'marketing': bundle.inputData?.[`${keyPrefix}marketing`],
            'education': bundle.inputData?.[`${keyPrefix}education`],
            'executive': bundle.inputData?.[`${keyPrefix}executive`],
            'commercial': bundle.inputData?.[`${keyPrefix}commercial`],
            'graphicDesign': bundle.inputData?.[`${keyPrefix}graphicDesign`],
            'sustainability': bundle.inputData?.[`${keyPrefix}sustainability`],
            'administrative': bundle.inputData?.[`${keyPrefix}administrative`],
            'humanResources': bundle.inputData?.[`${keyPrefix}humanResources`],
            'soundEngineering': bundle.inputData?.[`${keyPrefix}soundEngineering`],
            'cloudEngineering': bundle.inputData?.[`${keyPrefix}cloudEngineering`],
            'firstLevelSupport': bundle.inputData?.[`${keyPrefix}firstLevelSupport`],
            'secondLevelSupport': bundle.inputData?.[`${keyPrefix}secondLevelSupport`],
            'softwareEngineering': bundle.inputData?.[`${keyPrefix}softwareEngineering`],
            'partnerAccountRepresentative': bundle.inputData?.[`${keyPrefix}partnerAccountRepresentative`],
            'startupSuccessRepresentative': bundle.inputData?.[`${keyPrefix}startupSuccessRepresentative`],
            'customerSuccessRepresentative': bundle.inputData?.[`${keyPrefix}customerSuccessRepresentative`],
        }
    },
}
