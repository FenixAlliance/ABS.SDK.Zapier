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
                key: `${keyPrefix}licenseString`,
                label: `[${labelPrefix}licenseString]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expirationDate`,
                label: `[${labelPrefix}expirationDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}availableSeats`,
                label: `[${labelPrefix}availableSeats]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}totalSeats`,
                label: `[${labelPrefix}totalSeats]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'licenseString': bundle.inputData?.[`${keyPrefix}licenseString`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'expirationDate': bundle.inputData?.[`${keyPrefix}expirationDate`],
            'availableSeats': bundle.inputData?.[`${keyPrefix}availableSeats`],
            'totalSeats': bundle.inputData?.[`${keyPrefix}totalSeats`],
        }
    },
}
