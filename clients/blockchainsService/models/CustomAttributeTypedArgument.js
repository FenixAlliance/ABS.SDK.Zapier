const utils = require('../utils/utils');
const AnyType = require('../models/AnyType');
const Type = require('../models/Type');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...Type.fields(`${keyPrefix}argumentType`, isInput),
            ....fields(`${keyPrefix}value`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'argumentType': utils.removeIfEmpty(Type.mapping(bundle, `${keyPrefix}argumentType`)),
            'value': utils.removeIfEmpty(.mapping(bundle, `${keyPrefix}value`)),
        }
    },
}
