const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
            'employeeLowRangeValue': bundle.inputData?.[`${keyPrefix}employeeLowRangeValue`],
            'employeeHighRangeValue': bundle.inputData?.[`${keyPrefix}employeeHighRangeValue`],
        }
    },
}
