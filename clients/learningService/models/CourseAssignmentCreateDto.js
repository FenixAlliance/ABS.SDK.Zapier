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
                key: `${keyPrefix}courseID`,
                label: `[${labelPrefix}courseID]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseUnitID`,
                label: `[${labelPrefix}courseUnitID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseCohortID`,
                label: `[${labelPrefix}courseCohortID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseAssignmentTypeID`,
                label: `[${labelPrefix}courseAssignmentTypeID]`,
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
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'instructions': bundle.inputData?.[`${keyPrefix}instructions`],
            'points': bundle.inputData?.[`${keyPrefix}points`],
            'courseID': bundle.inputData?.[`${keyPrefix}courseID`],
            'courseUnitID': bundle.inputData?.[`${keyPrefix}courseUnitID`],
            'courseCohortID': bundle.inputData?.[`${keyPrefix}courseCohortID`],
            'courseAssignmentTypeID': bundle.inputData?.[`${keyPrefix}courseAssignmentTypeID`],
            'dueDateTime': bundle.inputData?.[`${keyPrefix}dueDateTime`],
            'asignToAllCohorts': bundle.inputData?.[`${keyPrefix}asignToAllCohorts`],
            'resources': bundle.inputData?.[`${keyPrefix}resources`],
        }
    },
}
