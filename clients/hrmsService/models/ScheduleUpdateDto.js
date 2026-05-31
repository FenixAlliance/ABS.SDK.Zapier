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
                key: `${keyPrefix}disabled`,
                label: `[${labelPrefix}disabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}sunday`,
                label: `[${labelPrefix}sunday]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}monday`,
                label: `[${labelPrefix}monday]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}tuesday`,
                label: `[${labelPrefix}tuesday]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}wednesday`,
                label: `[${labelPrefix}wednesday]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}thursday`,
                label: `[${labelPrefix}thursday]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}friday`,
                label: `[${labelPrefix}friday]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}saturday`,
                label: `[${labelPrefix}saturday]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}uniqueInterval`,
                label: `[${labelPrefix}uniqueInterval]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}is24x7Interval`,
                label: `[${labelPrefix}is24x7Interval]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}start`,
                label: `[${labelPrefix}start]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}end`,
                label: `[${labelPrefix}end]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timezoneId`,
                label: `[${labelPrefix}timezoneId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fiscalYearId`,
                label: `[${labelPrefix}fiscalYearId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}holidayScheduleId`,
                label: `[${labelPrefix}holidayScheduleId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'disabled': bundle.inputData?.[`${keyPrefix}disabled`],
            'sunday': bundle.inputData?.[`${keyPrefix}sunday`],
            'monday': bundle.inputData?.[`${keyPrefix}monday`],
            'tuesday': bundle.inputData?.[`${keyPrefix}tuesday`],
            'wednesday': bundle.inputData?.[`${keyPrefix}wednesday`],
            'thursday': bundle.inputData?.[`${keyPrefix}thursday`],
            'friday': bundle.inputData?.[`${keyPrefix}friday`],
            'saturday': bundle.inputData?.[`${keyPrefix}saturday`],
            'uniqueInterval': bundle.inputData?.[`${keyPrefix}uniqueInterval`],
            'is24x7Interval': bundle.inputData?.[`${keyPrefix}is24x7Interval`],
            'start': bundle.inputData?.[`${keyPrefix}start`],
            'end': bundle.inputData?.[`${keyPrefix}end`],
            'timezoneId': bundle.inputData?.[`${keyPrefix}timezoneId`],
            'fiscalYearId': bundle.inputData?.[`${keyPrefix}fiscalYearId`],
            'holidayScheduleId': bundle.inputData?.[`${keyPrefix}holidayScheduleId`],
        }
    },
}
