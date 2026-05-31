const utils = require('../utils/utils');
const IEdmTypeReference = require('../models/IEdmTypeReference');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            ...IEdmTypeReference.fields(`${keyPrefix}typeReference`, isInput),
            {
                key: `${keyPrefix}kind`,
                label: `[${labelPrefix}kind]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'typeReference': utils.removeIfEmpty(IEdmTypeReference.mapping(bundle, `${keyPrefix}typeReference`)),
            'kind': bundle.inputData?.[`${keyPrefix}kind`],
        }
    },
}
