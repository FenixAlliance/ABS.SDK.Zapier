const utils = require('../utils/utils');
const ODataQueryContext = require('../models/ODataQueryContext');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}rawValue`,
                label: `[${labelPrefix}rawValue]`,
                type: 'string',
            },
            ...ODataQueryContext.fields(`${keyPrefix}context`, isInput),
            {
                key: `${keyPrefix}validator`,
                label: `[${labelPrefix}validator]`,
                dict: true,
            },
            {
                key: `${keyPrefix}handler`,
                label: `[${labelPrefix}handler]`,
                dict: true,
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'rawValue': bundle.inputData?.[`${keyPrefix}rawValue`],
            'context': utils.removeIfEmpty(ODataQueryContext.mapping(bundle, `${keyPrefix}context`)),
            'validator': bundle.inputData?.[`${keyPrefix}validator`],
            'handler': bundle.inputData?.[`${keyPrefix}handler`],
        }
    },
}
