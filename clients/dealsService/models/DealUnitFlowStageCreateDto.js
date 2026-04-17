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
                key: `${keyPrefix}dealUnitFlowId`,
                label: `[${labelPrefix}dealUnitFlowId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
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
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'order': bundle.inputData?.[`${keyPrefix}order`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'dealUnitFlowId': bundle.inputData?.[`${keyPrefix}dealUnitFlowId`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'parentBusinessProcessStageId': bundle.inputData?.[`${keyPrefix}parentBusinessProcessStageId`],
        }
    },
}
