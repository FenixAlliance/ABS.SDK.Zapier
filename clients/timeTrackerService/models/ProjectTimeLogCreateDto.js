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
                key: `${keyPrefix}timeSpan`,
                label: `[${labelPrefix}timeSpan]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logDate`,
                label: `[${labelPrefix}logDate]`,
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
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectPeriodID`,
                label: `[${labelPrefix}projectPeriodID]`,
                required: true,
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
            {
                key: `${keyPrefix}projectID`,
                label: `[${labelPrefix}projectID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'timeSpan': bundle.inputData?.[`${keyPrefix}timeSpan`],
            'logDate': bundle.inputData?.[`${keyPrefix}logDate`],
            'comments': bundle.inputData?.[`${keyPrefix}comments`],
            'projectTaskID': bundle.inputData?.[`${keyPrefix}projectTaskID`],
            'projectPeriodID': bundle.inputData?.[`${keyPrefix}projectPeriodID`],
            'projectTimeLogRecordType': bundle.inputData?.[`${keyPrefix}projectTimeLogRecordType`],
            'projectID': bundle.inputData?.[`${keyPrefix}projectID`],
        }
    },
}
