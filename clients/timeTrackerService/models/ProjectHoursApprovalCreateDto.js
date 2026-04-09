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
                key: `${keyPrefix}requesterContactID`,
                label: `[${labelPrefix}requesterContactID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}approverContactID`,
                label: `[${labelPrefix}approverContactID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectPeriodID`,
                label: `[${labelPrefix}projectPeriodID]`,
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
            'requesterContactID': bundle.inputData?.[`${keyPrefix}requesterContactID`],
            'approverContactID': bundle.inputData?.[`${keyPrefix}approverContactID`],
            'projectPeriodID': bundle.inputData?.[`${keyPrefix}projectPeriodID`],
            'comments': bundle.inputData?.[`${keyPrefix}comments`],
        }
    },
}
