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
                key: `${keyPrefix}periodStartDate`,
                label: `[${labelPrefix}periodStartDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}periodEndDate`,
                label: `[${labelPrefix}periodEndDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectID`,
                label: `[${labelPrefix}projectID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'periodStartDate': bundle.inputData?.[`${keyPrefix}periodStartDate`],
            'periodEndDate': bundle.inputData?.[`${keyPrefix}periodEndDate`],
            'projectID': bundle.inputData?.[`${keyPrefix}projectID`],
        }
    },
}
