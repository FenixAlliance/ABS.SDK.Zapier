const utils = require('../utils/utils');
const IEdmType = require('../models/IEdmType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}isNullable`,
                label: `[${labelPrefix}isNullable]`,
                type: 'boolean',
            },
            ...IEdmType.fields(`${keyPrefix}definition`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'isNullable': bundle.inputData?.[`${keyPrefix}isNullable`],
            'definition': utils.removeIfEmpty(IEdmType.mapping(bundle, `${keyPrefix}definition`)),
        }
    },
}
