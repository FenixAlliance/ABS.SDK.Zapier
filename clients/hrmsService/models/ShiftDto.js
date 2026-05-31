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
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
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
                key: `${keyPrefix}isBreak`,
                label: `[${labelPrefix}isBreak]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}occustOnMonday`,
                label: `[${labelPrefix}occustOnMonday]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}occustOnTuesday`,
                label: `[${labelPrefix}occustOnTuesday]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}occustOnWednesday`,
                label: `[${labelPrefix}occustOnWednesday]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}occustOnThursday`,
                label: `[${labelPrefix}occustOnThursday]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}occustOnFriday`,
                label: `[${labelPrefix}occustOnFriday]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}occustOnSaturday`,
                label: `[${labelPrefix}occustOnSaturday]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}occustOnSunday`,
                label: `[${labelPrefix}occustOnSunday]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}repeatEvery`,
                label: `[${labelPrefix}repeatEvery]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}repetitionCriteria`,
                label: `[${labelPrefix}repetitionCriteria]`,
                type: 'string',
                choices: [
                    'NotRepeat',
                    'WorkWeek',
                    'Day',
                    'Month',
                    'Year',
                ],
            },
            {
                key: `${keyPrefix}recurrenceStart`,
                label: `[${labelPrefix}recurrenceStart]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}recurrenceEnd`,
                label: `[${labelPrefix}recurrenceEnd]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dayOfTheWeek`,
                label: `[${labelPrefix}dayOfTheWeek]`,
                type: 'string',
                choices: [
                    'All',
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                ],
            },
            {
                key: `${keyPrefix}scheduleId`,
                label: `[${labelPrefix}scheduleId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentTimeIntervalId`,
                label: `[${labelPrefix}parentTimeIntervalId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}employeeProfileId`,
                label: `[${labelPrefix}employeeProfileId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'start': bundle.inputData?.[`${keyPrefix}start`],
            'end': bundle.inputData?.[`${keyPrefix}end`],
            'isBreak': bundle.inputData?.[`${keyPrefix}isBreak`],
            'occustOnMonday': bundle.inputData?.[`${keyPrefix}occustOnMonday`],
            'occustOnTuesday': bundle.inputData?.[`${keyPrefix}occustOnTuesday`],
            'occustOnWednesday': bundle.inputData?.[`${keyPrefix}occustOnWednesday`],
            'occustOnThursday': bundle.inputData?.[`${keyPrefix}occustOnThursday`],
            'occustOnFriday': bundle.inputData?.[`${keyPrefix}occustOnFriday`],
            'occustOnSaturday': bundle.inputData?.[`${keyPrefix}occustOnSaturday`],
            'occustOnSunday': bundle.inputData?.[`${keyPrefix}occustOnSunday`],
            'repeatEvery': bundle.inputData?.[`${keyPrefix}repeatEvery`],
            'repetitionCriteria': bundle.inputData?.[`${keyPrefix}repetitionCriteria`],
            'recurrenceStart': bundle.inputData?.[`${keyPrefix}recurrenceStart`],
            'recurrenceEnd': bundle.inputData?.[`${keyPrefix}recurrenceEnd`],
            'dayOfTheWeek': bundle.inputData?.[`${keyPrefix}dayOfTheWeek`],
            'scheduleId': bundle.inputData?.[`${keyPrefix}scheduleId`],
            'parentTimeIntervalId': bundle.inputData?.[`${keyPrefix}parentTimeIntervalId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'employeeProfileId': bundle.inputData?.[`${keyPrefix}employeeProfileId`],
        }
    },
}
