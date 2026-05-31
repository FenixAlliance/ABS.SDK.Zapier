const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}appraisalWorkflowId`,
                label: `[${labelPrefix}appraisalWorkflowId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}stageOrder`,
                label: `[${labelPrefix}stageOrder]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'appraisalWorkflowId': bundle.inputData?.[`${keyPrefix}appraisalWorkflowId`],
            'stageOrder': bundle.inputData?.[`${keyPrefix}stageOrder`],
        }
    },
}
