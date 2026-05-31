const utils = require('../utils/utils');
const IEdmType = require('../models/IEdmType');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            ...IEdmType.fields(`${keyPrefix}edmType`, isInput),
            {
                key: `${keyPrefix}identifier`,
                label: `[${labelPrefix}identifier]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'edmType': utils.removeIfEmpty(IEdmType.mapping(bundle, `${keyPrefix}edmType`)),
            'identifier': bundle.inputData?.[`${keyPrefix}identifier`],
        }
    },
}
