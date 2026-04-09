const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}email1`,
                label: `[${labelPrefix}email1]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}email2`,
                label: `[${labelPrefix}email2]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}phoneNumber1`,
                label: `[${labelPrefix}phoneNumber1]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}phoneNumber2`,
                label: `[${labelPrefix}phoneNumber2]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}addressLine1`,
                label: `[${labelPrefix}addressLine1]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}addressLine2`,
                label: `[${labelPrefix}addressLine2]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cityID`,
                label: `[${labelPrefix}cityID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryStateID`,
                label: `[${labelPrefix}countryStateID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryID`,
                label: `[${labelPrefix}countryID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}postalCode`,
                label: `[${labelPrefix}postalCode]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'email1': bundle.inputData?.[`${keyPrefix}email1`],
            'email2': bundle.inputData?.[`${keyPrefix}email2`],
            'phoneNumber1': bundle.inputData?.[`${keyPrefix}phoneNumber1`],
            'phoneNumber2': bundle.inputData?.[`${keyPrefix}phoneNumber2`],
            'addressLine1': bundle.inputData?.[`${keyPrefix}addressLine1`],
            'addressLine2': bundle.inputData?.[`${keyPrefix}addressLine2`],
            'cityID': bundle.inputData?.[`${keyPrefix}cityID`],
            'countryStateID': bundle.inputData?.[`${keyPrefix}countryStateID`],
            'countryID': bundle.inputData?.[`${keyPrefix}countryID`],
            'postalCode': bundle.inputData?.[`${keyPrefix}postalCode`],
        }
    },
}
