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
                key: `${keyPrefix}expectedStartDateTime`,
                label: `[${labelPrefix}expectedStartDateTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expectedEndDateTime`,
                label: `[${labelPrefix}expectedEndDateTime]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'startDateTime': bundle.inputData?.[`${keyPrefix}startDateTime`],
            'endDateTime': bundle.inputData?.[`${keyPrefix}endDateTime`],
            'expectedStartDateTime': bundle.inputData?.[`${keyPrefix}expectedStartDateTime`],
            'expectedEndDateTime': bundle.inputData?.[`${keyPrefix}expectedEndDateTime`],
        }
    },
}
