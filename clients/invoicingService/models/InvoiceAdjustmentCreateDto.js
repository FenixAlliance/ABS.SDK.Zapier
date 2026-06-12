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
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}priority`,
                label: `[${labelPrefix}priority]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}surchargePercent`,
                label: `[${labelPrefix}surchargePercent]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}surchargeAmount`,
                label: `[${labelPrefix}surchargeAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}discountPercent`,
                label: `[${labelPrefix}discountPercent]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}discountAmount`,
                label: `[${labelPrefix}discountAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}totalSurcharge`,
                label: `[${labelPrefix}totalSurcharge]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}totalDiscount`,
                label: `[${labelPrefix}totalDiscount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
                choices: [
                    'Discount',
                    'Surcharge',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'priority': bundle.inputData?.[`${keyPrefix}priority`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'surchargePercent': bundle.inputData?.[`${keyPrefix}surchargePercent`],
            'surchargeAmount': bundle.inputData?.[`${keyPrefix}surchargeAmount`],
            'discountPercent': bundle.inputData?.[`${keyPrefix}discountPercent`],
            'discountAmount': bundle.inputData?.[`${keyPrefix}discountAmount`],
            'totalSurcharge': bundle.inputData?.[`${keyPrefix}totalSurcharge`],
            'totalDiscount': bundle.inputData?.[`${keyPrefix}totalDiscount`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
        }
    },
}
