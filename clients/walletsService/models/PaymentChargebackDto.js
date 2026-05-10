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
                key: `${keyPrefix}requestDate`,
                label: `[${labelPrefix}requestDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}paymentId`,
                label: `[${labelPrefix}paymentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bankProfileId`,
                label: `[${labelPrefix}bankProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bankProfileName`,
                label: `[${labelPrefix}bankProfileName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}totalFees`,
                label: `[${labelPrefix}totalFees]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'requestDate': bundle.inputData?.[`${keyPrefix}requestDate`],
            'paymentId': bundle.inputData?.[`${keyPrefix}paymentId`],
            'bankProfileId': bundle.inputData?.[`${keyPrefix}bankProfileId`],
            'bankProfileName': bundle.inputData?.[`${keyPrefix}bankProfileName`],
            'totalFees': bundle.inputData?.[`${keyPrefix}totalFees`],
        }
    },
}
