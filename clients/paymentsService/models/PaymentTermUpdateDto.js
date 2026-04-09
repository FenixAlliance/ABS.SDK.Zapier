const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
                key: `${keyPrefix}paymentModeID`,
                label: `[${labelPrefix}paymentModeID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'isTemplate': bundle.inputData?.[`${keyPrefix}isTemplate`],
            'percentage': bundle.inputData?.[`${keyPrefix}percentage`],
            'creditDays': bundle.inputData?.[`${keyPrefix}creditDays`],
            'creditWeeks': bundle.inputData?.[`${keyPrefix}creditWeeks`],
            'creditMonths': bundle.inputData?.[`${keyPrefix}creditMonths`],
            'creditYears': bundle.inputData?.[`${keyPrefix}creditYears`],
            'paymentModeID': bundle.inputData?.[`${keyPrefix}paymentModeID`],
        }
    },
}
