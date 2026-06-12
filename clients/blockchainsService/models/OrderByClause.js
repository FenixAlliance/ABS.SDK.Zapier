const utils = require('../utils/utils');
const IEdmTypeReference = require('../models/IEdmTypeReference');
const RangeVariable = require('../models/RangeVariable');
const SingleValueNode = require('../models/SingleValueNode');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...OrderByClause.fields(`${keyPrefix}thenBy`, isInput),
            ...SingleValueNode.fields(`${keyPrefix}expression`, isInput),
            {
                key: `${keyPrefix}direction`,
                label: `[${labelPrefix}direction]`,
                type: 'string',
                choices: [
                    'Ascending',
                    'Descending',
                ],
            },
            ...RangeVariable.fields(`${keyPrefix}rangeVariable`, isInput),
            ...IEdmTypeReference.fields(`${keyPrefix}itemType`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'thenBy': utils.removeIfEmpty(OrderByClause.mapping(bundle, `${keyPrefix}thenBy`)),
            'expression': utils.removeIfEmpty(SingleValueNode.mapping(bundle, `${keyPrefix}expression`)),
            'direction': bundle.inputData?.[`${keyPrefix}direction`],
            'rangeVariable': utils.removeIfEmpty(RangeVariable.mapping(bundle, `${keyPrefix}rangeVariable`)),
            'itemType': utils.removeIfEmpty(IEdmTypeReference.mapping(bundle, `${keyPrefix}itemType`)),
        }
    },
}
