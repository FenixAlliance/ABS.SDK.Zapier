const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
                key: `${keyPrefix}courseUnitId`,
                label: `[${labelPrefix}courseUnitId]`,
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
                key: `${keyPrefix}dueDateTime`,
                label: `[${labelPrefix}dueDateTime]`,
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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'instructions': bundle.inputData?.[`${keyPrefix}instructions`],
            'points': bundle.inputData?.[`${keyPrefix}points`],
            'courseUnitId': bundle.inputData?.[`${keyPrefix}courseUnitId`],
            'courseCohortId': bundle.inputData?.[`${keyPrefix}courseCohortId`],
            'courseAssignmentTypeId': bundle.inputData?.[`${keyPrefix}courseAssignmentTypeId`],
            'dueDateTime': bundle.inputData?.[`${keyPrefix}dueDateTime`],
            'asignToAllCohorts': bundle.inputData?.[`${keyPrefix}asignToAllCohorts`],
            'resources': bundle.inputData?.[`${keyPrefix}resources`],
        }
    },
}
