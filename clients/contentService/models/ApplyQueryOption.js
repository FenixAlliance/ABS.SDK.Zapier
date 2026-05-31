const utils = require('../utils/utils');
const ApplyClause = require('../models/ApplyClause');
const ODataQueryContext = require('../models/ODataQueryContext');
const Type = require('../models/Type');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...ODataQueryContext.fields(`${keyPrefix}context`, isInput),
            ...Type.fields(`${keyPrefix}resultClrType`, isInput),
            ...ApplyClause.fields(`${keyPrefix}applyClause`, isInput),
            {
                key: `${keyPrefix}rawValue`,
                label: `[${labelPrefix}rawValue]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'context': utils.removeIfEmpty(ODataQueryContext.mapping(bundle, `${keyPrefix}context`)),
            'resultClrType': utils.removeIfEmpty(Type.mapping(bundle, `${keyPrefix}resultClrType`)),
            'applyClause': utils.removeIfEmpty(ApplyClause.mapping(bundle, `${keyPrefix}applyClause`)),
            'rawValue': bundle.inputData?.[`${keyPrefix}rawValue`],
        }
    },
}
