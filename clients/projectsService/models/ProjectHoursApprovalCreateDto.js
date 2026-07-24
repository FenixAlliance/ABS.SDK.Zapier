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
                key: `${keyPrefix}requesterContactId`,
                label: `[${labelPrefix}requesterContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}approverContactId`,
                label: `[${labelPrefix}approverContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectPeriodId`,
                label: `[${labelPrefix}projectPeriodId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}comments`,
                label: `[${labelPrefix}comments]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'requesterContactId': bundle.inputData?.[`${keyPrefix}requesterContactId`],
            'approverContactId': bundle.inputData?.[`${keyPrefix}approverContactId`],
            'projectPeriodId': bundle.inputData?.[`${keyPrefix}projectPeriodId`],
            'comments': bundle.inputData?.[`${keyPrefix}comments`],
        }
    },
}
