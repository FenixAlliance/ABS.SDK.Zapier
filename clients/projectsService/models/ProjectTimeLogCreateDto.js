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
                key: `${keyPrefix}projectTaskId`,
                label: `[${labelPrefix}projectTaskId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectPeriodId`,
                label: `[${labelPrefix}projectPeriodId]`,
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
                key: `${keyPrefix}projectId`,
                label: `[${labelPrefix}projectId]`,
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
            'projectTaskId': bundle.inputData?.[`${keyPrefix}projectTaskId`],
            'projectPeriodId': bundle.inputData?.[`${keyPrefix}projectPeriodId`],
            'projectTimeLogRecordType': bundle.inputData?.[`${keyPrefix}projectTimeLogRecordType`],
            'projectId': bundle.inputData?.[`${keyPrefix}projectId`],
        }
    },
}
