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
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessName`,
                label: `[${labelPrefix}businessName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
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
                key: `${keyPrefix}assetClass`,
                label: `[${labelPrefix}assetClass]`,
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
                key: `${keyPrefix}isExistingAsset`,
                label: `[${labelPrefix}isExistingAsset]`,
                type: 'boolean',
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
                key: `${keyPrefix}itemName`,
                label: `[${labelPrefix}itemName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetTypeId`,
                label: `[${labelPrefix}assetTypeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetTypeName`,
                label: `[${labelPrefix}assetTypeName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetCategoryId`,
                label: `[${labelPrefix}assetCategoryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetCategoryName`,
                label: `[${labelPrefix}assetCategoryName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}purchaseInvoiceId`,
                label: `[${labelPrefix}purchaseInvoiceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}purchaseInvoiceNumber`,
                label: `[${labelPrefix}purchaseInvoiceNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetLocationId`,
                label: `[${labelPrefix}assetLocationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}assetLocationName`,
                label: `[${labelPrefix}assetLocationName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactName`,
                label: `[${labelPrefix}contactName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}organizationDepartmentId`,
                label: `[${labelPrefix}organizationDepartmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}organizationDepartmentName`,
                label: `[${labelPrefix}organizationDepartmentName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}purchaseReceiptId`,
                label: `[${labelPrefix}purchaseReceiptId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'businessName': bundle.inputData?.[`${keyPrefix}businessName`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'assetClass': bundle.inputData?.[`${keyPrefix}assetClass`],
            'assetOwner': bundle.inputData?.[`${keyPrefix}assetOwner`],
            'isExistingAsset': bundle.inputData?.[`${keyPrefix}isExistingAsset`],
            'calculateDepreciation': bundle.inputData?.[`${keyPrefix}calculateDepreciation`],
            'allowMonthlyDepreciation': bundle.inputData?.[`${keyPrefix}allowMonthlyDepreciation`],
            'openingDepreciation': bundle.inputData?.[`${keyPrefix}openingDepreciation`],
            'purchaseDate': bundle.inputData?.[`${keyPrefix}purchaseDate`],
            'purchasePrice': bundle.inputData?.[`${keyPrefix}purchasePrice`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'currencyCode': bundle.inputData?.[`${keyPrefix}currencyCode`],
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
            'itemName': bundle.inputData?.[`${keyPrefix}itemName`],
            'assetTypeId': bundle.inputData?.[`${keyPrefix}assetTypeId`],
            'assetTypeName': bundle.inputData?.[`${keyPrefix}assetTypeName`],
            'assetCategoryId': bundle.inputData?.[`${keyPrefix}assetCategoryId`],
            'assetCategoryName': bundle.inputData?.[`${keyPrefix}assetCategoryName`],
            'purchaseInvoiceId': bundle.inputData?.[`${keyPrefix}purchaseInvoiceId`],
            'purchaseInvoiceNumber': bundle.inputData?.[`${keyPrefix}purchaseInvoiceNumber`],
            'assetLocationId': bundle.inputData?.[`${keyPrefix}assetLocationId`],
            'assetLocationName': bundle.inputData?.[`${keyPrefix}assetLocationName`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'contactName': bundle.inputData?.[`${keyPrefix}contactName`],
            'organizationDepartmentId': bundle.inputData?.[`${keyPrefix}organizationDepartmentId`],
            'organizationDepartmentName': bundle.inputData?.[`${keyPrefix}organizationDepartmentName`],
            'purchaseReceiptId': bundle.inputData?.[`${keyPrefix}purchaseReceiptId`],
        }
    },
}
