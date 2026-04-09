const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enableGuestCart`,
                label: `[${labelPrefix}enableGuestCart]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}productPlaceholderImage`,
                label: `[${labelPrefix}productPlaceholderImage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}redirectToCartPageAfterAddingProducts`,
                label: `[${labelPrefix}redirectToCartPageAfterAddingProducts]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enableGuestCart': bundle.inputData?.[`${keyPrefix}enableGuestCart`],
            'productPlaceholderImage': bundle.inputData?.[`${keyPrefix}productPlaceholderImage`],
            'redirectToCartPageAfterAddingProducts': bundle.inputData?.[`${keyPrefix}redirectToCartPageAfterAddingProducts`],
        }
    },
}
