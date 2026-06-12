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
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isTemplate`,
                label: `[${labelPrefix}isTemplate]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}percentage`,
                label: `[${labelPrefix}percentage]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}creditDays`,
                label: `[${labelPrefix}creditDays]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}creditWeeks`,
                label: `[${labelPrefix}creditWeeks]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}creditMonths`,
                label: `[${labelPrefix}creditMonths]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}creditYears`,
                label: `[${labelPrefix}creditYears]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}paymentModeId`,
                label: `[${labelPrefix}paymentModeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
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
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'isTemplate': bundle.inputData?.[`${keyPrefix}isTemplate`],
            'percentage': bundle.inputData?.[`${keyPrefix}percentage`],
            'creditDays': bundle.inputData?.[`${keyPrefix}creditDays`],
            'creditWeeks': bundle.inputData?.[`${keyPrefix}creditWeeks`],
            'creditMonths': bundle.inputData?.[`${keyPrefix}creditMonths`],
            'creditYears': bundle.inputData?.[`${keyPrefix}creditYears`],
            'paymentModeId': bundle.inputData?.[`${keyPrefix}paymentModeId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
        }
    },
}
