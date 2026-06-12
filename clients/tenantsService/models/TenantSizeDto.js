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
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}employeeLowRangeValue`,
                label: `[${labelPrefix}employeeLowRangeValue]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}employeeHighRangeValue`,
                label: `[${labelPrefix}employeeHighRangeValue]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'employeeLowRangeValue': bundle.inputData?.[`${keyPrefix}employeeLowRangeValue`],
            'employeeHighRangeValue': bundle.inputData?.[`${keyPrefix}employeeHighRangeValue`],
        }
    },
}
