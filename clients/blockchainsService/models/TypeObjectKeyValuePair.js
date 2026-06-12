const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const Type = require('../models/Type');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...Type.fields(`${keyPrefix}key`, isInput),
            ....fields(`${keyPrefix}value`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'key': utils.removeIfEmpty(Type.mapping(bundle, `${keyPrefix}key`)),
            'value': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}value`)),
        }
    },
}
