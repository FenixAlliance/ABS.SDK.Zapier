const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cartId`,
                label: `[${labelPrefix}cartId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemId`,
                label: `[${labelPrefix}itemId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemTitle`,
                label: `[${labelPrefix}itemTitle]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemShortDescription`,
                label: `[${labelPrefix}itemShortDescription]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemPrimaryImageUrl`,
                label: `[${labelPrefix}itemPrimaryImageUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}brandId`,
                label: `[${labelPrefix}brandId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}brandName`,
                label: `[${labelPrefix}brandName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}categoryName`,
                label: `[${labelPrefix}categoryName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}categoryId`,
                label: `[${labelPrefix}categoryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}googleCategoryId`,
                label: `[${labelPrefix}googleCategoryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}googleCategoryName`,
                label: `[${labelPrefix}googleCategoryName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}totalTaxesInUsd`,
                label: `[${labelPrefix}totalTaxesInUsd]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}totalPriceInUsd`,
                label: `[${labelPrefix}totalPriceInUsd]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}shippingCountryId`,
                label: `[${labelPrefix}shippingCountryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'cartId': bundle.inputData?.[`${keyPrefix}cartId`],
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
            'itemTitle': bundle.inputData?.[`${keyPrefix}itemTitle`],
            'itemShortDescription': bundle.inputData?.[`${keyPrefix}itemShortDescription`],
            'itemPrimaryImageUrl': bundle.inputData?.[`${keyPrefix}itemPrimaryImageUrl`],
            'brandId': bundle.inputData?.[`${keyPrefix}brandId`],
            'brandName': bundle.inputData?.[`${keyPrefix}brandName`],
            'categoryName': bundle.inputData?.[`${keyPrefix}categoryName`],
            'categoryId': bundle.inputData?.[`${keyPrefix}categoryId`],
            'googleCategoryId': bundle.inputData?.[`${keyPrefix}googleCategoryId`],
            'googleCategoryName': bundle.inputData?.[`${keyPrefix}googleCategoryName`],
            'totalTaxesInUsd': bundle.inputData?.[`${keyPrefix}totalTaxesInUsd`],
            'totalPriceInUsd': bundle.inputData?.[`${keyPrefix}totalPriceInUsd`],
            'shippingCountryId': bundle.inputData?.[`${keyPrefix}shippingCountryId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
        }
    },
}
