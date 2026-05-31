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
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
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
                key: `${keyPrefix}repeatEvery`,
                label: `[${labelPrefix}repeatEvery]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}scheduleId`,
                label: `[${labelPrefix}scheduleId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentTimeIntervalId`,
                label: `[${labelPrefix}parentTimeIntervalId]`,
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
            'isBreak': bundle.inputData?.[`${keyPrefix}isBreak`],
            'occustOnMonday': bundle.inputData?.[`${keyPrefix}occustOnMonday`],
            'occustOnTuesday': bundle.inputData?.[`${keyPrefix}occustOnTuesday`],
            'occustOnWednesday': bundle.inputData?.[`${keyPrefix}occustOnWednesday`],
            'occustOnThursday': bundle.inputData?.[`${keyPrefix}occustOnThursday`],
            'occustOnFriday': bundle.inputData?.[`${keyPrefix}occustOnFriday`],
            'occustOnSaturday': bundle.inputData?.[`${keyPrefix}occustOnSaturday`],
            'occustOnSunday': bundle.inputData?.[`${keyPrefix}occustOnSunday`],
            'start': bundle.inputData?.[`${keyPrefix}start`],
            'end': bundle.inputData?.[`${keyPrefix}end`],
            'repeatEvery': bundle.inputData?.[`${keyPrefix}repeatEvery`],
            'scheduleId': bundle.inputData?.[`${keyPrefix}scheduleId`],
            'parentTimeIntervalId': bundle.inputData?.[`${keyPrefix}parentTimeIntervalId`],
        }
    },
}
