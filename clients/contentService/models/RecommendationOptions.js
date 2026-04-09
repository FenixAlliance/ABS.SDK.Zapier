const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}viewWeight`,
                label: `[${labelPrefix}viewWeight]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}addToCartWeight`,
                label: `[${labelPrefix}addToCartWeight]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}removedFromCartWeight`,
                label: `[${labelPrefix}removedFromCartWeight]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}addedToWishlistWeight`,
                label: `[${labelPrefix}addedToWishlistWeight]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}alreadyPurchasedWeight`,
                label: `[${labelPrefix}alreadyPurchasedWeight]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}removedToWishlistWeight`,
                label: `[${labelPrefix}removedToWishlistWeight]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}addedToCompareTableWeight`,
                label: `[${labelPrefix}addedToCompareTableWeight]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}removedToCompareTableWeight`,
                label: `[${labelPrefix}removedToCompareTableWeight]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}enableCrossSelling`,
                label: `[${labelPrefix}enableCrossSelling]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableBundledProducts`,
                label: `[${labelPrefix}enableBundledProducts]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableRecentlyViewedProducts`,
                label: `[${labelPrefix}enableRecentlyViewedProducts]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'viewWeight': bundle.inputData?.[`${keyPrefix}viewWeight`],
            'addToCartWeight': bundle.inputData?.[`${keyPrefix}addToCartWeight`],
            'removedFromCartWeight': bundle.inputData?.[`${keyPrefix}removedFromCartWeight`],
            'addedToWishlistWeight': bundle.inputData?.[`${keyPrefix}addedToWishlistWeight`],
            'alreadyPurchasedWeight': bundle.inputData?.[`${keyPrefix}alreadyPurchasedWeight`],
            'removedToWishlistWeight': bundle.inputData?.[`${keyPrefix}removedToWishlistWeight`],
            'addedToCompareTableWeight': bundle.inputData?.[`${keyPrefix}addedToCompareTableWeight`],
            'removedToCompareTableWeight': bundle.inputData?.[`${keyPrefix}removedToCompareTableWeight`],
            'enableCrossSelling': bundle.inputData?.[`${keyPrefix}enableCrossSelling`],
            'enableBundledProducts': bundle.inputData?.[`${keyPrefix}enableBundledProducts`],
            'enableRecentlyViewedProducts': bundle.inputData?.[`${keyPrefix}enableRecentlyViewedProducts`],
        }
    },
}
