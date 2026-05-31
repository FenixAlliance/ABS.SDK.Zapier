const utils = require('../utils/utils');
const ComputeClause = require('../models/ComputeClause');
const ODataQueryContext = require('../models/ODataQueryContext');
const Type = require('../models/Type');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...ODataQueryContext.fields(`${keyPrefix}context`, isInput),
            ...Type.fields(`${keyPrefix}resultClrType`, isInput),
            ...ComputeClause.fields(`${keyPrefix}computeClause`, isInput),
            {
                key: `${keyPrefix}rawValue`,
                label: `[${labelPrefix}rawValue]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}validator`,
                label: `[${labelPrefix}validator]`,
                dict: true,
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'context': utils.removeIfEmpty(ODataQueryContext.mapping(bundle, `${keyPrefix}context`)),
            'resultClrType': utils.removeIfEmpty(Type.mapping(bundle, `${keyPrefix}resultClrType`)),
            'computeClause': utils.removeIfEmpty(ComputeClause.mapping(bundle, `${keyPrefix}computeClause`)),
            'rawValue': bundle.inputData?.[`${keyPrefix}rawValue`],
            'validator': bundle.inputData?.[`${keyPrefix}validator`],
        }
    },
}
