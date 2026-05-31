const utils = require('../utils/utils');
const SingleValueNode = require('../models/SingleValueNode');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...SingleValueNode.fields(`${keyPrefix}expression`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'expression': utils.removeIfEmpty(SingleValueNode.mapping(bundle, `${keyPrefix}expression`)),
        }
    },
}
