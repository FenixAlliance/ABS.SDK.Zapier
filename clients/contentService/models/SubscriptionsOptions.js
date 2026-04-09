const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}dripDownloadableContent`,
                label: `[${labelPrefix}dripDownloadableContent]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}retryFailedPayments`,
                label: `[${labelPrefix}retryFailedPayments]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}allow0InitialCheckout`,
                label: `[${labelPrefix}allow0InitialCheckout]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}allowMixedCheckout`,
                label: `[${labelPrefix}allowMixedCheckout]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}synchroniseRenewals`,
                label: `[${labelPrefix}synchroniseRenewals]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}addToCartButtonText`,
                label: `[${labelPrefix}addToCartButtonText]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}placeOrderButtonText`,
                label: `[${labelPrefix}placeOrderButtonText]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}newSubscriberRole`,
                label: `[${labelPrefix}newSubscriberRole]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}inactiveSubscriberRole`,
                label: `[${labelPrefix}inactiveSubscriberRole]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enableAutomaticPayments`,
                label: `[${labelPrefix}enableAutomaticPayments]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}enableManualRenewals`,
                label: `[${labelPrefix}enableManualRenewals]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}displayAutoRenewalToggle`,
                label: `[${labelPrefix}displayAutoRenewalToggle]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}acceptEarlyRenewals`,
                label: `[${labelPrefix}acceptEarlyRenewals]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}customerSuspensions`,
                label: `[${labelPrefix}customerSuspensions]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}enableSubscriptionSwitchingBetweenGroups`,
                label: `[${labelPrefix}enableSubscriptionSwitchingBetweenGroups]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}enableSubscriptionSwitchingBetweenVariations`,
                label: `[${labelPrefix}enableSubscriptionSwitchingBetweenVariations]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}prorateFirstRenewal`,
                label: `[${labelPrefix}prorateFirstRenewal]`,
                type: 'string',
                choices: [
                    'AlwaysAndNoCharge',
                    'NeverAndNoCharge',
                    'NeverAndFullCharge',
                    'AlwaysAndFullCharge',
                    'ForVirtualProductsOnly',
                    'ForServiceProductsOnly',
                    'ForSubscriptionProductsOnly',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'dripDownloadableContent': bundle.inputData?.[`${keyPrefix}dripDownloadableContent`],
            'retryFailedPayments': bundle.inputData?.[`${keyPrefix}retryFailedPayments`],
            'allow0InitialCheckout': bundle.inputData?.[`${keyPrefix}allow0InitialCheckout`],
            'allowMixedCheckout': bundle.inputData?.[`${keyPrefix}allowMixedCheckout`],
            'synchroniseRenewals': bundle.inputData?.[`${keyPrefix}synchroniseRenewals`],
            'addToCartButtonText': bundle.inputData?.[`${keyPrefix}addToCartButtonText`],
            'placeOrderButtonText': bundle.inputData?.[`${keyPrefix}placeOrderButtonText`],
            'newSubscriberRole': bundle.inputData?.[`${keyPrefix}newSubscriberRole`],
            'inactiveSubscriberRole': bundle.inputData?.[`${keyPrefix}inactiveSubscriberRole`],
            'enableAutomaticPayments': bundle.inputData?.[`${keyPrefix}enableAutomaticPayments`],
            'enableManualRenewals': bundle.inputData?.[`${keyPrefix}enableManualRenewals`],
            'displayAutoRenewalToggle': bundle.inputData?.[`${keyPrefix}displayAutoRenewalToggle`],
            'acceptEarlyRenewals': bundle.inputData?.[`${keyPrefix}acceptEarlyRenewals`],
            'customerSuspensions': bundle.inputData?.[`${keyPrefix}customerSuspensions`],
            'enableSubscriptionSwitchingBetweenGroups': bundle.inputData?.[`${keyPrefix}enableSubscriptionSwitchingBetweenGroups`],
            'enableSubscriptionSwitchingBetweenVariations': bundle.inputData?.[`${keyPrefix}enableSubscriptionSwitchingBetweenVariations`],
            'prorateFirstRenewal': bundle.inputData?.[`${keyPrefix}prorateFirstRenewal`],
        }
    },
}
