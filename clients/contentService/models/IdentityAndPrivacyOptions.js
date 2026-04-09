const utils = require('../utils/utils');
const StoreDataRetentionPolicy = require('../models/StoreDataRetentionPolicy');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}allowGuestOrders`,
                label: `[${labelPrefix}allowGuestOrders]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}allowGuestCartRecognition`,
                label: `[${labelPrefix}allowGuestCartRecognition]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}allowRemoveDownloadAccessOnRequest`,
                label: `[${labelPrefix}allowRemoveDownloadAccessOnRequest]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}allowRemovePersonalDataFromOrdersOnRequest`,
                label: `[${labelPrefix}allowRemovePersonalDataFromOrdersOnRequest]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}allowRemovePersonalDataFromSubscriptionsOnRequest`,
                label: `[${labelPrefix}allowRemovePersonalDataFromSubscriptionsOnRequest]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}storeCheckoutPrivacyPolicyNotice`,
                label: `[${labelPrefix}storeCheckoutPrivacyPolicyNotice]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}storeRegistrationPrivacyPolicyNotice`,
                label: `[${labelPrefix}storeRegistrationPrivacyPolicyNotice]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}defaultCustomerLocation`,
                label: `[${labelPrefix}defaultCustomerLocation]`,
                type: 'string',
                choices: [
                    'None',
                    'Geolocate',
                    'StoreAddressBased',
                    'GeolocateWithCaching',
                ],
            },
            ...StoreDataRetentionPolicy.fields(`${keyPrefix}inactiveCartsRetentionPolicy`, isInput),
            ...StoreDataRetentionPolicy.fields(`${keyPrefix}pendingOrdersRetentionPolicy`, isInput),
            ...StoreDataRetentionPolicy.fields(`${keyPrefix}failedOrdersRetentionPolicy`, isInput),
            ...StoreDataRetentionPolicy.fields(`${keyPrefix}cancelledOrdersRetentionPolicy`, isInput),
            ...StoreDataRetentionPolicy.fields(`${keyPrefix}completedOrdersRetentionPolicy`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'allowGuestOrders': bundle.inputData?.[`${keyPrefix}allowGuestOrders`],
            'allowGuestCartRecognition': bundle.inputData?.[`${keyPrefix}allowGuestCartRecognition`],
            'allowRemoveDownloadAccessOnRequest': bundle.inputData?.[`${keyPrefix}allowRemoveDownloadAccessOnRequest`],
            'allowRemovePersonalDataFromOrdersOnRequest': bundle.inputData?.[`${keyPrefix}allowRemovePersonalDataFromOrdersOnRequest`],
            'allowRemovePersonalDataFromSubscriptionsOnRequest': bundle.inputData?.[`${keyPrefix}allowRemovePersonalDataFromSubscriptionsOnRequest`],
            'storeCheckoutPrivacyPolicyNotice': bundle.inputData?.[`${keyPrefix}storeCheckoutPrivacyPolicyNotice`],
            'storeRegistrationPrivacyPolicyNotice': bundle.inputData?.[`${keyPrefix}storeRegistrationPrivacyPolicyNotice`],
            'defaultCustomerLocation': bundle.inputData?.[`${keyPrefix}defaultCustomerLocation`],
            'inactiveCartsRetentionPolicy': utils.removeIfEmpty(StoreDataRetentionPolicy.mapping(bundle, `${keyPrefix}inactiveCartsRetentionPolicy`)),
            'pendingOrdersRetentionPolicy': utils.removeIfEmpty(StoreDataRetentionPolicy.mapping(bundle, `${keyPrefix}pendingOrdersRetentionPolicy`)),
            'failedOrdersRetentionPolicy': utils.removeIfEmpty(StoreDataRetentionPolicy.mapping(bundle, `${keyPrefix}failedOrdersRetentionPolicy`)),
            'cancelledOrdersRetentionPolicy': utils.removeIfEmpty(StoreDataRetentionPolicy.mapping(bundle, `${keyPrefix}cancelledOrdersRetentionPolicy`)),
            'completedOrdersRetentionPolicy': utils.removeIfEmpty(StoreDataRetentionPolicy.mapping(bundle, `${keyPrefix}completedOrdersRetentionPolicy`)),
        }
    },
}
