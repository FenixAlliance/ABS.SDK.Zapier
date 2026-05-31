const utils = require('../utils/utils');
const IEdmExpression = require('../models/IEdmExpression');
const IEdmTerm = require('../models/IEdmTerm');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}qualifier`,
                label: `[${labelPrefix}qualifier]`,
                type: 'string',
            },
            ...IEdmTerm.fields(`${keyPrefix}term`, isInput),
            {
                key: `${keyPrefix}target`,
                label: `[${labelPrefix}target]`,
                dict: true,
            },
            ...IEdmExpression.fields(`${keyPrefix}value`, isInput),
            {
                key: `${keyPrefix}usesDefault`,
                label: `[${labelPrefix}usesDefault]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'qualifier': bundle.inputData?.[`${keyPrefix}qualifier`],
            'term': utils.removeIfEmpty(IEdmTerm.mapping(bundle, `${keyPrefix}term`)),
            'target': bundle.inputData?.[`${keyPrefix}target`],
            'value': utils.removeIfEmpty(IEdmExpression.mapping(bundle, `${keyPrefix}value`)),
            'usesDefault': bundle.inputData?.[`${keyPrefix}usesDefault`],
        }
    },
}
