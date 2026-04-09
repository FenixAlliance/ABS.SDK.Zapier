const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}logDate`,
                label: `[${labelPrefix}logDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timeSpan`,
                label: `[${labelPrefix}timeSpan]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}comments`,
                label: `[${labelPrefix}comments]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectTaskID`,
                label: `[${labelPrefix}projectTaskID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectPeriodID`,
                label: `[${labelPrefix}projectPeriodID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectTimeLogRecordType`,
                label: `[${labelPrefix}projectTimeLogRecordType]`,
                type: 'string',
                choices: [
                    'RegularHours',
                    'OvertimeToPay',
                    'OvertimeToCompensate',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'logDate': bundle.inputData?.[`${keyPrefix}logDate`],
            'timeSpan': bundle.inputData?.[`${keyPrefix}timeSpan`],
            'comments': bundle.inputData?.[`${keyPrefix}comments`],
            'projectTaskID': bundle.inputData?.[`${keyPrefix}projectTaskID`],
            'projectPeriodID': bundle.inputData?.[`${keyPrefix}projectPeriodID`],
            'projectTimeLogRecordType': bundle.inputData?.[`${keyPrefix}projectTimeLogRecordType`],
        }
    },
}
