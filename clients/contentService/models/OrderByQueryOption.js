const utils = require('../utils/utils');
const ComputeQueryOption = require('../models/ComputeQueryOption');
const ODataQueryContext = require('../models/ODataQueryContext');
const OrderByClause = require('../models/OrderByClause');
const OrderByNode = require('../models/OrderByNode');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...ODataQueryContext.fields(`${keyPrefix}context`, isInput),
            {
                key: `${keyPrefix}orderByNodes`,
                label: `[${labelPrefix}orderByNodes]`,
                children: OrderByNode.fields(`${keyPrefix}orderByNodes${!isInput ? '[]' : ''}`, isInput, true), 
            },
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
            ...ComputeQueryOption.fields(`${keyPrefix}compute`, isInput),
            ...OrderByClause.fields(`${keyPrefix}orderByClause`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'context': utils.removeIfEmpty(ODataQueryContext.mapping(bundle, `${keyPrefix}context`)),
            'orderByNodes': utils.childMapping(bundle.inputData?.[`${keyPrefix}orderByNodes`], `${keyPrefix}orderByNodes`, OrderByNode),
            'rawValue': bundle.inputData?.[`${keyPrefix}rawValue`],
            'validator': bundle.inputData?.[`${keyPrefix}validator`],
            'compute': utils.removeIfEmpty(ComputeQueryOption.mapping(bundle, `${keyPrefix}compute`)),
            'orderByClause': utils.removeIfEmpty(OrderByClause.mapping(bundle, `${keyPrefix}orderByClause`)),
        }
    },
}
