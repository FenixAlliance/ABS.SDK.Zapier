const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}order`,
                label: `[${labelPrefix}order]`,
                type: 'integer',
            },
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
                key: `${keyPrefix}dealUnitFlowId`,
                label: `[${labelPrefix}dealUnitFlowId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentBusinessProcessStageId`,
                label: `[${labelPrefix}parentBusinessProcessStageId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'order': bundle.inputData?.[`${keyPrefix}order`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'dealUnitFlowId': bundle.inputData?.[`${keyPrefix}dealUnitFlowId`],
            'parentBusinessProcessStageId': bundle.inputData?.[`${keyPrefix}parentBusinessProcessStageId`],
        }
    },
}
