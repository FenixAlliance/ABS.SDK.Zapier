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
                key: `${keyPrefix}projectTaskId`,
                label: `[${labelPrefix}projectTaskId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectPeriodId`,
                label: `[${labelPrefix}projectPeriodId]`,
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
            'projectTaskId': bundle.inputData?.[`${keyPrefix}projectTaskId`],
            'projectPeriodId': bundle.inputData?.[`${keyPrefix}projectPeriodId`],
            'projectTimeLogRecordType': bundle.inputData?.[`${keyPrefix}projectTimeLogRecordType`],
        }
    },
}
