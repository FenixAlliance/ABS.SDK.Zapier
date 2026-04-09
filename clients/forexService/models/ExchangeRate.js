const utils = require('../utils/utils');
const Money = require('../models/Money');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...Money.fields(`${keyPrefix}source`, isInput),
            ...Money.fields(`${keyPrefix}target`, isInput),
            ...Money.fields(`${keyPrefix}rate`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'source': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}source`)),
            'target': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}target`)),
            'rate': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}rate`)),
        }
    },
}
