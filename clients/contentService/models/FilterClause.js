const utils = require('../utils/utils');
const IEdmTypeReference = require('../models/IEdmTypeReference');
const RangeVariable = require('../models/RangeVariable');
const SingleValueNode = require('../models/SingleValueNode');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...SingleValueNode.fields(`${keyPrefix}expression`, isInput),
            ...RangeVariable.fields(`${keyPrefix}rangeVariable`, isInput),
            ...IEdmTypeReference.fields(`${keyPrefix}itemType`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'expression': utils.removeIfEmpty(SingleValueNode.mapping(bundle, `${keyPrefix}expression`)),
            'rangeVariable': utils.removeIfEmpty(RangeVariable.mapping(bundle, `${keyPrefix}rangeVariable`)),
            'itemType': utils.removeIfEmpty(IEdmTypeReference.mapping(bundle, `${keyPrefix}itemType`)),
        }
    },
}
