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
                key: `${keyPrefix}courseID`,
                label: `[${labelPrefix}courseID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseUnitID`,
                label: `[${labelPrefix}courseUnitID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseSectionID`,
                label: `[${labelPrefix}courseSectionID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
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
            'courseID': bundle.inputData?.[`${keyPrefix}courseID`],
            'courseUnitID': bundle.inputData?.[`${keyPrefix}courseUnitID`],
            'courseSectionID': bundle.inputData?.[`${keyPrefix}courseSectionID`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
        }
    },
}
