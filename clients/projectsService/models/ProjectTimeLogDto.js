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
                key: `${keyPrefix}projectId`,
                label: `[${labelPrefix}projectId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectTaskId`,
                label: `[${labelPrefix}projectTaskId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taskCategoryId`,
                label: `[${labelPrefix}taskCategoryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectPeriodId`,
                label: `[${labelPrefix}projectPeriodId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}responsibleContactId`,
                label: `[${labelPrefix}responsibleContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}creatorContactId`,
                label: `[${labelPrefix}creatorContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}recordType`,
                label: `[${labelPrefix}recordType]`,
                type: 'string',
                choices: [
                    'RegularHours',
                    'OvertimeToPay',
                    'OvertimeToCompensate',
                ],
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
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'projectId': bundle.inputData?.[`${keyPrefix}projectId`],
            'projectTaskId': bundle.inputData?.[`${keyPrefix}projectTaskId`],
            'taskCategoryId': bundle.inputData?.[`${keyPrefix}taskCategoryId`],
            'projectPeriodId': bundle.inputData?.[`${keyPrefix}projectPeriodId`],
            'responsibleContactId': bundle.inputData?.[`${keyPrefix}responsibleContactId`],
            'creatorContactId': bundle.inputData?.[`${keyPrefix}creatorContactId`],
            'recordType': bundle.inputData?.[`${keyPrefix}recordType`],
            'timeSpan': bundle.inputData?.[`${keyPrefix}timeSpan`],
            'logDate': bundle.inputData?.[`${keyPrefix}logDate`],
            'comments': bundle.inputData?.[`${keyPrefix}comments`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
        }
    },
}
