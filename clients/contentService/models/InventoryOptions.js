const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enableStockManagement`,
                label: `[${labelPrefix}enableStockManagement]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}hideOutOfStockProducts`,
                label: `[${labelPrefix}hideOutOfStockProducts]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableLowStockNotifications`,
                label: `[${labelPrefix}enableLowStockNotifications]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableOutOfStockNotifications`,
                label: `[${labelPrefix}enableOutOfStockNotifications]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}stockNotificationRecipients`,
                label: `[${labelPrefix}stockNotificationRecipients]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}holdStock`,
                label: `[${labelPrefix}holdStock]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}lowStockThreshold`,
                label: `[${labelPrefix}lowStockThreshold]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}outOfStockThreshold`,
                label: `[${labelPrefix}outOfStockThreshold]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}stockDisplayFormat`,
                label: `[${labelPrefix}stockDisplayFormat]`,
                type: 'string',
                choices: [
                    'AlwaysDisplayRemainingQuantity',
                    'OnlyDisplayRemainingQuantityWhenStockIsLow',
                    'NeverDisplayRemainingQuantity',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enableStockManagement': bundle.inputData?.[`${keyPrefix}enableStockManagement`],
            'hideOutOfStockProducts': bundle.inputData?.[`${keyPrefix}hideOutOfStockProducts`],
            'enableLowStockNotifications': bundle.inputData?.[`${keyPrefix}enableLowStockNotifications`],
            'enableOutOfStockNotifications': bundle.inputData?.[`${keyPrefix}enableOutOfStockNotifications`],
            'stockNotificationRecipients': bundle.inputData?.[`${keyPrefix}stockNotificationRecipients`],
            'holdStock': bundle.inputData?.[`${keyPrefix}holdStock`],
            'lowStockThreshold': bundle.inputData?.[`${keyPrefix}lowStockThreshold`],
            'outOfStockThreshold': bundle.inputData?.[`${keyPrefix}outOfStockThreshold`],
            'stockDisplayFormat': bundle.inputData?.[`${keyPrefix}stockDisplayFormat`],
        }
    },
}
