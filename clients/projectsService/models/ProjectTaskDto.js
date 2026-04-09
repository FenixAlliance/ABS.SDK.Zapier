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
                key: `${keyPrefix}startDate`,
                label: `[${labelPrefix}startDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dueLine`,
                label: `[${labelPrefix}dueLine]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectID`,
                label: `[${labelPrefix}projectID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectTaskBucketID`,
                label: `[${labelPrefix}projectTaskBucketID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'startDate': bundle.inputData?.[`${keyPrefix}startDate`],
            'dueLine': bundle.inputData?.[`${keyPrefix}dueLine`],
            'projectID': bundle.inputData?.[`${keyPrefix}projectID`],
            'projectTaskBucketID': bundle.inputData?.[`${keyPrefix}projectTaskBucketID`],
        }
    },
}
