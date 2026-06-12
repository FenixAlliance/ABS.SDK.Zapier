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
                key: `${keyPrefix}activityFeedId`,
                label: `[${labelPrefix}activityFeedId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}activityTypeId`,
                label: `[${labelPrefix}activityTypeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileId`,
                label: `[${labelPrefix}socialProfileId]`,
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
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'completed': bundle.inputData?.[`${keyPrefix}completed`],
            'dueDate': bundle.inputData?.[`${keyPrefix}dueDate`],
            'activityFeedId': bundle.inputData?.[`${keyPrefix}activityFeedId`],
            'activityTypeId': bundle.inputData?.[`${keyPrefix}activityTypeId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
            'parentActivityId': bundle.inputData?.[`${keyPrefix}parentActivityId`],
            'inChargeEnrollmentId': bundle.inputData?.[`${keyPrefix}inChargeEnrollmentId`],
        }
    },
}
