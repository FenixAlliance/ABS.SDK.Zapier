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
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}sku`,
                label: `[${labelPrefix}sku]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}summary`,
                label: `[${labelPrefix}summary]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}version`,
                label: `[${labelPrefix}version]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseCategoryId`,
                label: `[${labelPrefix}courseCategoryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}instructorProfileId`,
                label: `[${labelPrefix}instructorProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}regularPrice`,
                label: `[${labelPrefix}regularPrice]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}maxCourseEnrollments`,
                label: `[${labelPrefix}maxCourseEnrollments]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}totalEffortInWeeks`,
                label: `[${labelPrefix}totalEffortInWeeks]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}totalHoursPerWeek`,
                label: `[${labelPrefix}totalHoursPerWeek]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}totalEffortInHours`,
                label: `[${labelPrefix}totalEffortInHours]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}startDateTime`,
                label: `[${labelPrefix}startDateTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}endDateTime`,
                label: `[${labelPrefix}endDateTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}inscriptionsStartDateTime`,
                label: `[${labelPrefix}inscriptionsStartDateTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}inscriptionsEndDateTime`,
                label: `[${labelPrefix}inscriptionsEndDateTime]`,
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
            'sku': bundle.inputData?.[`${keyPrefix}sku`],
            'summary': bundle.inputData?.[`${keyPrefix}summary`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'version': bundle.inputData?.[`${keyPrefix}version`],
            'courseCategoryId': bundle.inputData?.[`${keyPrefix}courseCategoryId`],
            'instructorProfileId': bundle.inputData?.[`${keyPrefix}instructorProfileId`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'regularPrice': bundle.inputData?.[`${keyPrefix}regularPrice`],
            'maxCourseEnrollments': bundle.inputData?.[`${keyPrefix}maxCourseEnrollments`],
            'totalEffortInWeeks': bundle.inputData?.[`${keyPrefix}totalEffortInWeeks`],
            'totalHoursPerWeek': bundle.inputData?.[`${keyPrefix}totalHoursPerWeek`],
            'totalEffortInHours': bundle.inputData?.[`${keyPrefix}totalEffortInHours`],
            'startDateTime': bundle.inputData?.[`${keyPrefix}startDateTime`],
            'endDateTime': bundle.inputData?.[`${keyPrefix}endDateTime`],
            'inscriptionsStartDateTime': bundle.inputData?.[`${keyPrefix}inscriptionsStartDateTime`],
            'inscriptionsEndDateTime': bundle.inputData?.[`${keyPrefix}inscriptionsEndDateTime`],
        }
    },
}
