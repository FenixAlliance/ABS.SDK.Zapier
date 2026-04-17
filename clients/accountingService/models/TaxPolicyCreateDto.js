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
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                type: 'string',
            },
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
                key: `${keyPrefix}cityId`,
                label: `[${labelPrefix}cityId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}zero`,
                label: `[${labelPrefix}zero]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}reduced`,
                label: `[${labelPrefix}reduced]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}withholding`,
                label: `[${labelPrefix}withholding]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}fiscalAuthorityId`,
                label: `[${labelPrefix}fiscalAuthorityId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
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
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'countryId': bundle.inputData?.[`${keyPrefix}countryId`],
            'countryStateId': bundle.inputData?.[`${keyPrefix}countryStateId`],
            'customState': bundle.inputData?.[`${keyPrefix}customState`],
            'customCity': bundle.inputData?.[`${keyPrefix}customCity`],
            'cityId': bundle.inputData?.[`${keyPrefix}cityId`],
            'zero': bundle.inputData?.[`${keyPrefix}zero`],
            'reduced': bundle.inputData?.[`${keyPrefix}reduced`],
            'withholding': bundle.inputData?.[`${keyPrefix}withholding`],
            'fiscalAuthorityId': bundle.inputData?.[`${keyPrefix}fiscalAuthorityId`],
        }
    },
}
