const utils = require('../utils/utils');
const CurrencyId = require('../models/CurrencyId');
const Money = require('../models/Money');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}itemId`,
                label: `[${labelPrefix}itemId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}item`,
                label: `[${labelPrefix}item]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}unitId`,
                label: `[${labelPrefix}unitId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}unitGroupId`,
                label: `[${labelPrefix}unitGroupId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}priceId`,
                label: `[${labelPrefix}priceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}priceListId`,
                label: `[${labelPrefix}priceListId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}discountId`,
                label: `[${labelPrefix}discountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}discountListId`,
                label: `[${labelPrefix}discountListId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}roundingPolicyId`,
                label: `[${labelPrefix}roundingPolicyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}effectiveDiscountPercent`,
                label: `[${labelPrefix}effectiveDiscountPercent]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}effectiveTaxPercent`,
                label: `[${labelPrefix}effectiveTaxPercent]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            ...CurrencyId.fields(`${keyPrefix}currency`, isInput),
            ...Money.fields(`${keyPrefix}totalBaseAmount`, isInput),
            ...Money.fields(`${keyPrefix}totalProfitAmount`, isInput),
            ...Money.fields(`${keyPrefix}totalDetailAmount`, isInput),
            ...Money.fields(`${keyPrefix}totalDiscountsAmount`, isInput),
            ...Money.fields(`${keyPrefix}totalSurchargesAmount`, isInput),
            ...Money.fields(`${keyPrefix}totalTaxBaseAmount`, isInput),
            ...Money.fields(`${keyPrefix}totalTaxAmount`, isInput),
            ...Money.fields(`${keyPrefix}totalWTaxAmount`, isInput),
            ...Money.fields(`${keyPrefix}totalShippingCostAmount`, isInput),
            ...Money.fields(`${keyPrefix}totalShippingTaxAmount`, isInput),
            ...Money.fields(`${keyPrefix}totalAmount`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
            'item': bundle.inputData?.[`${keyPrefix}item`],
            'unitId': bundle.inputData?.[`${keyPrefix}unitId`],
            'unitGroupId': bundle.inputData?.[`${keyPrefix}unitGroupId`],
            'priceId': bundle.inputData?.[`${keyPrefix}priceId`],
            'priceListId': bundle.inputData?.[`${keyPrefix}priceListId`],
            'discountId': bundle.inputData?.[`${keyPrefix}discountId`],
            'discountListId': bundle.inputData?.[`${keyPrefix}discountListId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'roundingPolicyId': bundle.inputData?.[`${keyPrefix}roundingPolicyId`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'effectiveDiscountPercent': bundle.inputData?.[`${keyPrefix}effectiveDiscountPercent`],
            'effectiveTaxPercent': bundle.inputData?.[`${keyPrefix}effectiveTaxPercent`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'currency': utils.removeIfEmpty(CurrencyId.mapping(bundle, `${keyPrefix}currency`)),
            'totalBaseAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}totalBaseAmount`)),
            'totalProfitAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}totalProfitAmount`)),
            'totalDetailAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}totalDetailAmount`)),
            'totalDiscountsAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}totalDiscountsAmount`)),
            'totalSurchargesAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}totalSurchargesAmount`)),
            'totalTaxBaseAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}totalTaxBaseAmount`)),
            'totalTaxAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}totalTaxAmount`)),
            'totalWTaxAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}totalWTaxAmount`)),
            'totalShippingCostAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}totalShippingCostAmount`)),
            'totalShippingTaxAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}totalShippingTaxAmount`)),
            'totalAmount': utils.removeIfEmpty(Money.mapping(bundle, `${keyPrefix}totalAmount`)),
        }
    },
}
