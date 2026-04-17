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
                type: 'string',
            },
            {
                key: `${keyPrefix}fromDate`,
                label: `[${labelPrefix}fromDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}toDate`,
                label: `[${labelPrefix}toDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fiscalYearId`,
                label: `[${labelPrefix}fiscalYearId]`,
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
            'fromDate': bundle.inputData?.[`${keyPrefix}fromDate`],
            'toDate': bundle.inputData?.[`${keyPrefix}toDate`],
            'fiscalYearId': bundle.inputData?.[`${keyPrefix}fiscalYearId`],
        }
    },
}
