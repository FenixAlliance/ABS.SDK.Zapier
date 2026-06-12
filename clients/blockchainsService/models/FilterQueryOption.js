const utils = require('../utils/utils');
const ComputeQueryOption = require('../models/ComputeQueryOption');
const FilterClause = require('../models/FilterClause');
const ODataQueryContext = require('../models/ODataQueryContext');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...ODataQueryContext.fields(`${keyPrefix}context`, isInput),
            {
                key: `${keyPrefix}validator`,
                label: `[${labelPrefix}validator]`,
                dict: true,
            },
            ...ComputeQueryOption.fields(`${keyPrefix}compute`, isInput),
            ...FilterClause.fields(`${keyPrefix}filterClause`, isInput),
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
            'validator': bundle.inputData?.[`${keyPrefix}validator`],
            'compute': utils.removeIfEmpty(ComputeQueryOption.mapping(bundle, `${keyPrefix}compute`)),
            'filterClause': utils.removeIfEmpty(FilterClause.mapping(bundle, `${keyPrefix}filterClause`)),
            'rawValue': bundle.inputData?.[`${keyPrefix}rawValue`],
        }
    },
}
