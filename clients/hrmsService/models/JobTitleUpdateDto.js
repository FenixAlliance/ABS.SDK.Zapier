const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}grossPay`,
                label: `[${labelPrefix}grossPay]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}netSalary`,
                label: `[${labelPrefix}netSalary]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryId`,
                label: `[${labelPrefix}countryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryStateId`,
                label: `[${labelPrefix}countryStateId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cityId`,
                label: `[${labelPrefix}cityId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'grossPay': bundle.inputData?.[`${keyPrefix}grossPay`],
            'netSalary': bundle.inputData?.[`${keyPrefix}netSalary`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'countryStateId': bundle.inputData?.[`${keyPrefix}countryStateId`],
            'cityId': bundle.inputData?.[`${keyPrefix}cityId`],
        }
    },
}
