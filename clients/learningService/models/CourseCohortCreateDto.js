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
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseID`,
                label: `[${labelPrefix}courseID]`,
                required: true,
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
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'courseID': bundle.inputData?.[`${keyPrefix}courseID`],
            'startDateTime': bundle.inputData?.[`${keyPrefix}startDateTime`],
            'endDateTime': bundle.inputData?.[`${keyPrefix}endDateTime`],
            'expectedStartDateTime': bundle.inputData?.[`${keyPrefix}expectedStartDateTime`],
            'expectedEndDateTime': bundle.inputData?.[`${keyPrefix}expectedEndDateTime`],
        }
    },
}
