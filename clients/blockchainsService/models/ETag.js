const utils = require('../utils/utils');
const Type = require('../models/Type');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}isWellFormed`,
                label: `[${labelPrefix}isWellFormed]`,
                type: 'boolean',
            },
            ...Type.fields(`${keyPrefix}entityType`, isInput),
            {
                key: `${keyPrefix}isAny`,
                label: `[${labelPrefix}isAny]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isIfNoneMatch`,
                label: `[${labelPrefix}isIfNoneMatch]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'isWellFormed': bundle.inputData?.[`${keyPrefix}isWellFormed`],
            'entityType': utils.removeIfEmpty(Type.mapping(bundle, `${keyPrefix}entityType`)),
            'isAny': bundle.inputData?.[`${keyPrefix}isAny`],
            'isIfNoneMatch': bundle.inputData?.[`${keyPrefix}isIfNoneMatch`],
        }
    },
}
