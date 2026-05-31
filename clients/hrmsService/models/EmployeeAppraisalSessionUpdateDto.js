const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}employeeProfileId`,
                label: `[${labelPrefix}employeeProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}appraisalWorkflowId`,
                label: `[${labelPrefix}appraisalWorkflowId]`,
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
            'employeeProfileId': bundle.inputData?.[`${keyPrefix}employeeProfileId`],
            'appraisalWorkflowId': bundle.inputData?.[`${keyPrefix}appraisalWorkflowId`],
            'appraisalStageId': bundle.inputData?.[`${keyPrefix}appraisalStageId`],
        }
    },
}
