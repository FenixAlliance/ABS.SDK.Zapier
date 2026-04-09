const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetType`,
                label: `[${labelPrefix}assetType]`,
                type: 'string',
                choices: [
                    'Fixed',
                    'Stock',
                ],
            },
            {
                key: `${keyPrefix}assetOwner`,
                label: `[${labelPrefix}assetOwner]`,
                type: 'string',
                choices: [
                    'Business',
                    'Organization',
                    'Contact',
                    'Supplier',
                ],
            },
            {
                key: `${keyPrefix}calculateDepreciation`,
                label: `[${labelPrefix}calculateDepreciation]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}allowMonthlyDepreciation`,
                label: `[${labelPrefix}allowMonthlyDepreciation]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}openingDepreciation`,
                label: `[${labelPrefix}openingDepreciation]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}purchaseDate`,
                label: `[${labelPrefix}purchaseDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}purchasePrice`,
                label: `[${labelPrefix}purchasePrice]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyCode`,
                label: `[${labelPrefix}currencyCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemId`,
                label: `[${labelPrefix}itemId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetCategoryId`,
                label: `[${labelPrefix}assetCategoryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}purchaseInvoiceId`,
                label: `[${labelPrefix}purchaseInvoiceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}purchaseReceiptId`,
                label: `[${labelPrefix}purchaseReceiptId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetLocationId`,
                label: `[${labelPrefix}assetLocationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}organizationDepartmentId`,
                label: `[${labelPrefix}organizationDepartmentId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'assetType': bundle.inputData?.[`${keyPrefix}assetType`],
            'assetOwner': bundle.inputData?.[`${keyPrefix}assetOwner`],
            'calculateDepreciation': bundle.inputData?.[`${keyPrefix}calculateDepreciation`],
            'allowMonthlyDepreciation': bundle.inputData?.[`${keyPrefix}allowMonthlyDepreciation`],
            'openingDepreciation': bundle.inputData?.[`${keyPrefix}openingDepreciation`],
            'purchaseDate': bundle.inputData?.[`${keyPrefix}purchaseDate`],
            'purchasePrice': bundle.inputData?.[`${keyPrefix}purchasePrice`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'currencyCode': bundle.inputData?.[`${keyPrefix}currencyCode`],
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
            'assetCategoryId': bundle.inputData?.[`${keyPrefix}assetCategoryId`],
            'purchaseInvoiceId': bundle.inputData?.[`${keyPrefix}purchaseInvoiceId`],
            'purchaseReceiptId': bundle.inputData?.[`${keyPrefix}purchaseReceiptId`],
            'assetLocationId': bundle.inputData?.[`${keyPrefix}assetLocationId`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'organizationDepartmentId': bundle.inputData?.[`${keyPrefix}organizationDepartmentId`],
        }
    },
}
