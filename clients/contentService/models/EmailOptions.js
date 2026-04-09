const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}fromName`,
                label: `[${labelPrefix}fromName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fromEmailAddress`,
                label: `[${labelPrefix}fromEmailAddress]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}headerImage`,
                label: `[${labelPrefix}headerImage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}footerText`,
                label: `[${labelPrefix}footerText]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}baseColor`,
                label: `[${labelPrefix}baseColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}backgroundColor`,
                label: `[${labelPrefix}backgroundColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bodyBackgroundColor`,
                label: `[${labelPrefix}bodyBackgroundColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bodyTextColor`,
                label: `[${labelPrefix}bodyTextColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}newOrderEmailID`,
                label: `[${labelPrefix}newOrderEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cancelledOrderEmailID`,
                label: `[${labelPrefix}cancelledOrderEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}failedOrderEmailID`,
                label: `[${labelPrefix}failedOrderEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}onHoldOrderEmailID`,
                label: `[${labelPrefix}onHoldOrderEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}processingOrderEmailID`,
                label: `[${labelPrefix}processingOrderEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}completedOrderEmailID`,
                label: `[${labelPrefix}completedOrderEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}refundedOrderEmailID`,
                label: `[${labelPrefix}refundedOrderEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderDetailsEmailID`,
                label: `[${labelPrefix}orderDetailsEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customerInvoiceEmailID`,
                label: `[${labelPrefix}customerInvoiceEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customerNoteEmailID`,
                label: `[${labelPrefix}customerNoteEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}passwordResetEmailID`,
                label: `[${labelPrefix}passwordResetEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}newRenewalOrderEmailID`,
                label: `[${labelPrefix}newRenewalOrderEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}newSubscriptionEmailID`,
                label: `[${labelPrefix}newSubscriptionEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subscriptionWelcomeEmailID`,
                label: `[${labelPrefix}subscriptionWelcomeEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}suspendedSubscriptionEmailID`,
                label: `[${labelPrefix}suspendedSubscriptionEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}overdueSubscriptionEmailID`,
                label: `[${labelPrefix}overdueSubscriptionEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expiredSubscriptionEmailID`,
                label: `[${labelPrefix}expiredSubscriptionEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}switchedSubscriptionEmailID`,
                label: `[${labelPrefix}switchedSubscriptionEmailID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}newAccountEmailID`,
                label: `[${labelPrefix}newAccountEmailID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'fromName': bundle.inputData?.[`${keyPrefix}fromName`],
            'fromEmailAddress': bundle.inputData?.[`${keyPrefix}fromEmailAddress`],
            'headerImage': bundle.inputData?.[`${keyPrefix}headerImage`],
            'footerText': bundle.inputData?.[`${keyPrefix}footerText`],
            'baseColor': bundle.inputData?.[`${keyPrefix}baseColor`],
            'backgroundColor': bundle.inputData?.[`${keyPrefix}backgroundColor`],
            'bodyBackgroundColor': bundle.inputData?.[`${keyPrefix}bodyBackgroundColor`],
            'bodyTextColor': bundle.inputData?.[`${keyPrefix}bodyTextColor`],
            'newOrderEmailID': bundle.inputData?.[`${keyPrefix}newOrderEmailID`],
            'cancelledOrderEmailID': bundle.inputData?.[`${keyPrefix}cancelledOrderEmailID`],
            'failedOrderEmailID': bundle.inputData?.[`${keyPrefix}failedOrderEmailID`],
            'onHoldOrderEmailID': bundle.inputData?.[`${keyPrefix}onHoldOrderEmailID`],
            'processingOrderEmailID': bundle.inputData?.[`${keyPrefix}processingOrderEmailID`],
            'completedOrderEmailID': bundle.inputData?.[`${keyPrefix}completedOrderEmailID`],
            'refundedOrderEmailID': bundle.inputData?.[`${keyPrefix}refundedOrderEmailID`],
            'orderDetailsEmailID': bundle.inputData?.[`${keyPrefix}orderDetailsEmailID`],
            'customerInvoiceEmailID': bundle.inputData?.[`${keyPrefix}customerInvoiceEmailID`],
            'customerNoteEmailID': bundle.inputData?.[`${keyPrefix}customerNoteEmailID`],
            'passwordResetEmailID': bundle.inputData?.[`${keyPrefix}passwordResetEmailID`],
            'newRenewalOrderEmailID': bundle.inputData?.[`${keyPrefix}newRenewalOrderEmailID`],
            'newSubscriptionEmailID': bundle.inputData?.[`${keyPrefix}newSubscriptionEmailID`],
            'subscriptionWelcomeEmailID': bundle.inputData?.[`${keyPrefix}subscriptionWelcomeEmailID`],
            'suspendedSubscriptionEmailID': bundle.inputData?.[`${keyPrefix}suspendedSubscriptionEmailID`],
            'overdueSubscriptionEmailID': bundle.inputData?.[`${keyPrefix}overdueSubscriptionEmailID`],
            'expiredSubscriptionEmailID': bundle.inputData?.[`${keyPrefix}expiredSubscriptionEmailID`],
            'switchedSubscriptionEmailID': bundle.inputData?.[`${keyPrefix}switchedSubscriptionEmailID`],
            'newAccountEmailID': bundle.inputData?.[`${keyPrefix}newAccountEmailID`],
        }
    },
}
