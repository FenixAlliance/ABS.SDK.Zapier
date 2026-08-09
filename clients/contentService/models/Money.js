const utils = require('../utils/utils');
const CurrencyId = require('../models/CurrencyId');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}amount`,
                label: `[${labelPrefix}amount]`,
                type: 'number',
            },
            ...CurrencyId.fields(`${keyPrefix}currency`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'amount': bundle.inputData?.[`${keyPrefix}amount`],
            'currency': utils.removeIfEmpty(CurrencyId.mapping(bundle, `${keyPrefix}currency`)),
        }
    },
}
