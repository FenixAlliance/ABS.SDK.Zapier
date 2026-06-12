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
                key: `${keyPrefix}instructions`,
                label: `[${labelPrefix}instructions]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}points`,
                label: `[${labelPrefix}points]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}dueDateTime`,
                label: `[${labelPrefix}dueDateTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseId`,
                label: `[${labelPrefix}courseId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseUnitId`,
                label: `[${labelPrefix}courseUnitId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseSectionId`,
                label: `[${labelPrefix}courseSectionId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseCohortId`,
                label: `[${labelPrefix}courseCohortId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseAssignmentTypeId`,
                label: `[${labelPrefix}courseAssignmentTypeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}asignToAllCohorts`,
                label: `[${labelPrefix}asignToAllCohorts]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}resources`,
                label: `[${labelPrefix}resources]`,
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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'instructions': bundle.inputData?.[`${keyPrefix}instructions`],
            'points': bundle.inputData?.[`${keyPrefix}points`],
            'dueDateTime': bundle.inputData?.[`${keyPrefix}dueDateTime`],
            'courseId': bundle.inputData?.[`${keyPrefix}courseId`],
            'courseUnitId': bundle.inputData?.[`${keyPrefix}courseUnitId`],
            'courseSectionId': bundle.inputData?.[`${keyPrefix}courseSectionId`],
            'courseCohortId': bundle.inputData?.[`${keyPrefix}courseCohortId`],
            'courseAssignmentTypeId': bundle.inputData?.[`${keyPrefix}courseAssignmentTypeId`],
            'asignToAllCohorts': bundle.inputData?.[`${keyPrefix}asignToAllCohorts`],
            'resources': bundle.inputData?.[`${keyPrefix}resources`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
        }
    },
}
