const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}principalId`,
                label: `[${labelPrefix}principalId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}principalCreated`,
                label: `[${labelPrefix}principalCreated]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enrollmentCreated`,
                label: `[${labelPrefix}enrollmentCreated]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'principalId': bundle.inputData?.[`${keyPrefix}principalId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'principalCreated': bundle.inputData?.[`${keyPrefix}principalCreated`],
            'enrollmentCreated': bundle.inputData?.[`${keyPrefix}enrollmentCreated`],
        }
    },
}
