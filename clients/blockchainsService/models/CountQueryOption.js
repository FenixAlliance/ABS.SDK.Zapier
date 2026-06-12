const utils = require('../utils/utils');
const ODataQueryContext = require('../models/ODataQueryContext');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...ODataQueryContext.fields(`${keyPrefix}context`, isInput),
            {
                key: `${keyPrefix}rawValue`,
                label: `[${labelPrefix}rawValue]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}value`,
                label: `[${labelPrefix}value]`,
                type: 'boolean',
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
            'rawValue': bundle.inputData?.[`${keyPrefix}rawValue`],
            'value': bundle.inputData?.[`${keyPrefix}value`],
            'validator': bundle.inputData?.[`${keyPrefix}validator`],
        }
    },
}
