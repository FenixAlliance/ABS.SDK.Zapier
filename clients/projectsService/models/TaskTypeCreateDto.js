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
                key: `${keyPrefix}taskCategoryId`,
                label: `[${labelPrefix}taskCategoryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}displayInTimeTracker`,
                label: `[${labelPrefix}displayInTimeTracker]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}requiresDescription`,
                label: `[${labelPrefix}requiresDescription]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'taskCategoryId': bundle.inputData?.[`${keyPrefix}taskCategoryId`],
            'displayInTimeTracker': bundle.inputData?.[`${keyPrefix}displayInTimeTracker`],
            'requiresDescription': bundle.inputData?.[`${keyPrefix}requiresDescription`],
        }
    },
}
