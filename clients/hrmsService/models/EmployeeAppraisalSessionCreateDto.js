const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}employeeProfileId`,
                label: `[${labelPrefix}employeeProfileId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}appraisalWorkflowId`,
                label: `[${labelPrefix}appraisalWorkflowId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}appraisalStageId`,
                label: `[${labelPrefix}appraisalStageId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'employeeProfileId': bundle.inputData?.[`${keyPrefix}employeeProfileId`],
            'appraisalWorkflowId': bundle.inputData?.[`${keyPrefix}appraisalWorkflowId`],
            'appraisalStageId': bundle.inputData?.[`${keyPrefix}appraisalStageId`],
        }
    },
}
