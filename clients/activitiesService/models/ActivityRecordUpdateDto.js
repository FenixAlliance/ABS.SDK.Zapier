const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
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
                key: `${keyPrefix}completed`,
                label: `[${labelPrefix}completed]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}dueDate`,
                label: `[${labelPrefix}dueDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}activityTypeId`,
                label: `[${labelPrefix}activityTypeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentActivityId`,
                label: `[${labelPrefix}parentActivityId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}inChargeEnrollmentId`,
                label: `[${labelPrefix}inChargeEnrollmentId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'completed': bundle.inputData?.[`${keyPrefix}completed`],
            'dueDate': bundle.inputData?.[`${keyPrefix}dueDate`],
            'activityTypeId': bundle.inputData?.[`${keyPrefix}activityTypeId`],
            'parentActivityId': bundle.inputData?.[`${keyPrefix}parentActivityId`],
            'inChargeEnrollmentId': bundle.inputData?.[`${keyPrefix}inChargeEnrollmentId`],
        }
    },
}
