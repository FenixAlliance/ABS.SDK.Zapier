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
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'displayInTimeTracker': bundle.inputData?.[`${keyPrefix}displayInTimeTracker`],
            'requiresDescription': bundle.inputData?.[`${keyPrefix}requiresDescription`],
        }
    },
}
