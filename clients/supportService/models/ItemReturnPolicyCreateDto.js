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
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shippingCourierID`,
                label: `[${labelPrefix}shippingCourierID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isFree`,
                label: `[${labelPrefix}isFree]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}reduce`,
                label: `[${labelPrefix}reduce]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isEnabled`,
                label: `[${labelPrefix}isEnabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isDefault`,
                label: `[${labelPrefix}isDefault]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}allowInternational`,
                label: `[${labelPrefix}allowInternational]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}hours`,
                label: `[${labelPrefix}hours]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}days`,
                label: `[${labelPrefix}days]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}weeks`,
                label: `[${labelPrefix}weeks]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}months`,
                label: `[${labelPrefix}months]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}years`,
                label: `[${labelPrefix}years]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}value`,
                label: `[${labelPrefix}value]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}percentage`,
                label: `[${labelPrefix}percentage]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}currencyID`,
                label: `[${labelPrefix}currencyID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryID`,
                label: `[${labelPrefix}countryID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}countryStateID`,
                label: `[${labelPrefix}countryStateID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customState`,
                label: `[${labelPrefix}customState]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customCity`,
                label: `[${labelPrefix}customCity]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cityID`,
                label: `[${labelPrefix}cityID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'shippingCourierID': bundle.inputData?.[`${keyPrefix}shippingCourierID`],
            'isFree': bundle.inputData?.[`${keyPrefix}isFree`],
            'reduce': bundle.inputData?.[`${keyPrefix}reduce`],
            'isEnabled': bundle.inputData?.[`${keyPrefix}isEnabled`],
            'isDefault': bundle.inputData?.[`${keyPrefix}isDefault`],
            'allowInternational': bundle.inputData?.[`${keyPrefix}allowInternational`],
            'hours': bundle.inputData?.[`${keyPrefix}hours`],
            'days': bundle.inputData?.[`${keyPrefix}days`],
            'weeks': bundle.inputData?.[`${keyPrefix}weeks`],
            'months': bundle.inputData?.[`${keyPrefix}months`],
            'years': bundle.inputData?.[`${keyPrefix}years`],
            'value': bundle.inputData?.[`${keyPrefix}value`],
            'percentage': bundle.inputData?.[`${keyPrefix}percentage`],
            'currencyID': bundle.inputData?.[`${keyPrefix}currencyID`],
            'countryID': bundle.inputData?.[`${keyPrefix}countryID`],
            'countryStateID': bundle.inputData?.[`${keyPrefix}countryStateID`],
            'customState': bundle.inputData?.[`${keyPrefix}customState`],
            'customCity': bundle.inputData?.[`${keyPrefix}customCity`],
            'cityID': bundle.inputData?.[`${keyPrefix}cityID`],
        }
    },
}
