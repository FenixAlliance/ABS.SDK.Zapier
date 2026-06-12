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
                key: `${keyPrefix}sku`,
                label: `[${labelPrefix}sku]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}image`,
                label: `[${labelPrefix}image]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}brand`,
                label: `[${labelPrefix}brand]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currency`,
                label: `[${labelPrefix}currency]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}supplier`,
                label: `[${labelPrefix}supplier]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}taxPolicies`,
                label: `[${labelPrefix}taxPolicies]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}supplierCode`,
                label: `[${labelPrefix}supplierCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}googleCategory`,
                label: `[${labelPrefix}googleCategory]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shippingCountry`,
                label: `[${labelPrefix}shippingCountry]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}regularPrice`,
                label: `[${labelPrefix}regularPrice]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}discountPercentage`,
                label: `[${labelPrefix}discountPercentage]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}discountAmount`,
                label: `[${labelPrefix}discountAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}currentStock`,
                label: `[${labelPrefix}currentStock]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}taxable`,
                label: `[${labelPrefix}taxable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}inStock`,
                label: `[${labelPrefix}inStock]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}onDiscount`,
                label: `[${labelPrefix}onDiscount]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}byRequest`,
                label: `[${labelPrefix}byRequest]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isFixedDiscount`,
                label: `[${labelPrefix}isFixedDiscount]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}manageInventory`,
                label: `[${labelPrefix}manageInventory]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isDeadlineDiscount`,
                label: `[${labelPrefix}isDeadlineDiscount]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}deadlineDiscountFromDate`,
                label: `[${labelPrefix}deadlineDiscountFromDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}deadlineDiscountDueDate`,
                label: `[${labelPrefix}deadlineDiscountDueDate]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'sku': bundle.inputData?.[`${keyPrefix}sku`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'image': bundle.inputData?.[`${keyPrefix}image`],
            'brand': bundle.inputData?.[`${keyPrefix}brand`],
            'currency': bundle.inputData?.[`${keyPrefix}currency`],
            'supplier': bundle.inputData?.[`${keyPrefix}supplier`],
            'taxPolicies': bundle.inputData?.[`${keyPrefix}taxPolicies`],
            'supplierCode': bundle.inputData?.[`${keyPrefix}supplierCode`],
            'googleCategory': bundle.inputData?.[`${keyPrefix}googleCategory`],
            'shippingCountry': bundle.inputData?.[`${keyPrefix}shippingCountry`],
            'regularPrice': bundle.inputData?.[`${keyPrefix}regularPrice`],
            'discountPercentage': bundle.inputData?.[`${keyPrefix}discountPercentage`],
            'discountAmount': bundle.inputData?.[`${keyPrefix}discountAmount`],
            'currentStock': bundle.inputData?.[`${keyPrefix}currentStock`],
            'taxable': bundle.inputData?.[`${keyPrefix}taxable`],
            'inStock': bundle.inputData?.[`${keyPrefix}inStock`],
            'onDiscount': bundle.inputData?.[`${keyPrefix}onDiscount`],
            'byRequest': bundle.inputData?.[`${keyPrefix}byRequest`],
            'isFixedDiscount': bundle.inputData?.[`${keyPrefix}isFixedDiscount`],
            'manageInventory': bundle.inputData?.[`${keyPrefix}manageInventory`],
            'isDeadlineDiscount': bundle.inputData?.[`${keyPrefix}isDeadlineDiscount`],
            'deadlineDiscountFromDate': bundle.inputData?.[`${keyPrefix}deadlineDiscountFromDate`],
            'deadlineDiscountDueDate': bundle.inputData?.[`${keyPrefix}deadlineDiscountDueDate`],
        }
    },
}
