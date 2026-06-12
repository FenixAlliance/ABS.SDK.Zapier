const utils = require('../utils/utils');
const ComputeQueryOption = require('../models/ComputeQueryOption');
const ODataQueryContext = require('../models/ODataQueryContext');
const SelectExpandClause = require('../models/SelectExpandClause');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...ODataQueryContext.fields(`${keyPrefix}context`, isInput),
            {
                key: `${keyPrefix}rawSelect`,
                label: `[${labelPrefix}rawSelect]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}rawExpand`,
                label: `[${labelPrefix}rawExpand]`,
                type: 'string',
            },
            ...ComputeQueryOption.fields(`${keyPrefix}compute`, isInput),
            {
                key: `${keyPrefix}validator`,
                label: `[${labelPrefix}validator]`,
                dict: true,
            },
            ...SelectExpandClause.fields(`${keyPrefix}selectExpandClause`, isInput),
            {
                key: `${keyPrefix}levelsMaxLiteralExpansionDepth`,
                label: `[${labelPrefix}levelsMaxLiteralExpansionDepth]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'context': utils.removeIfEmpty(ODataQueryContext.mapping(bundle, `${keyPrefix}context`)),
            'rawSelect': bundle.inputData?.[`${keyPrefix}rawSelect`],
            'rawExpand': bundle.inputData?.[`${keyPrefix}rawExpand`],
            'compute': utils.removeIfEmpty(ComputeQueryOption.mapping(bundle, `${keyPrefix}compute`)),
            'validator': bundle.inputData?.[`${keyPrefix}validator`],
            'selectExpandClause': utils.removeIfEmpty(SelectExpandClause.mapping(bundle, `${keyPrefix}selectExpandClause`)),
            'levelsMaxLiteralExpansionDepth': bundle.inputData?.[`${keyPrefix}levelsMaxLiteralExpansionDepth`],
        }
    },
}
