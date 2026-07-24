const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}displayName`,
                label: `[${labelPrefix}displayName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}mode`,
                label: `[${labelPrefix}mode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}canRecordOutcome`,
                label: `[${labelPrefix}canRecordOutcome]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'displayName': bundle.inputData?.[`${keyPrefix}displayName`],
            'mode': bundle.inputData?.[`${keyPrefix}mode`],
            'canRecordOutcome': bundle.inputData?.[`${keyPrefix}canRecordOutcome`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
        }
    },
}
