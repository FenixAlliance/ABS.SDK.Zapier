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
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}revenue`,
                label: `[${labelPrefix}revenue]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}minEmployees`,
                label: `[${labelPrefix}minEmployees]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}maxEmployees`,
                label: `[${labelPrefix}maxEmployees]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'revenue': bundle.inputData?.[`${keyPrefix}revenue`],
            'minEmployees': bundle.inputData?.[`${keyPrefix}minEmployees`],
            'maxEmployees': bundle.inputData?.[`${keyPrefix}maxEmployees`],
        }
    },
}
