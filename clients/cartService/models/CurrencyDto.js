const utils = require('../utils/utils');
const CountryDto = require('../models/CountryDto');

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
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}symbol`,
                label: `[${labelPrefix}symbol]`,
                type: 'string',
            },
            ...CountryDto.fields(`${keyPrefix}country`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'symbol': bundle.inputData?.[`${keyPrefix}symbol`],
            'country': utils.removeIfEmpty(CountryDto.mapping(bundle, `${keyPrefix}country`)),
        }
    },
}
