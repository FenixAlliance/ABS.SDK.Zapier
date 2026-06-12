const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}endDateTime`,
                label: `[${labelPrefix}endDateTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}nextInvoiceDateTime`,
                label: `[${labelPrefix}nextInvoiceDateTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signature`,
                label: `[${labelPrefix}signature]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}repetitions`,
                label: `[${labelPrefix}repetitions]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}chargeAttempts`,
                label: `[${labelPrefix}chargeAttempts]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}freeTrialInDays`,
                label: `[${labelPrefix}freeTrialInDays]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}gracePeriodInDays`,
                label: `[${labelPrefix}gracePeriodInDays]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}customRenewalPeriod`,
                label: `[${labelPrefix}customRenewalPeriod]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}enableAutomaticRenew`,
                label: `[${labelPrefix}enableAutomaticRenew]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableProRateBilling`,
                label: `[${labelPrefix}enableProRateBilling]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableUsageThreshold`,
                label: `[${labelPrefix}enableUsageThreshold]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableAutomaticDisable`,
                label: `[${labelPrefix}enableAutomaticDisable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableAutomaticPayments`,
                label: `[${labelPrefix}enableAutomaticPayments]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}usageThreshold`,
                label: `[${labelPrefix}usageThreshold]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}data`,
                label: `[${labelPrefix}data]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dataLabel`,
                label: `[${labelPrefix}dataLabel]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data1`,
                label: `[${labelPrefix}data1]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data1Label`,
                label: `[${labelPrefix}data1Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data2`,
                label: `[${labelPrefix}data2]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data2Label`,
                label: `[${labelPrefix}data2Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data3`,
                label: `[${labelPrefix}data3]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data3Label`,
                label: `[${labelPrefix}data3Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data4`,
                label: `[${labelPrefix}data4]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data4Label`,
                label: `[${labelPrefix}data4Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data5`,
                label: `[${labelPrefix}data5]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data5Label`,
                label: `[${labelPrefix}data5Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data6`,
                label: `[${labelPrefix}data6]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data6Label`,
                label: `[${labelPrefix}data6Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data7`,
                label: `[${labelPrefix}data7]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data7Label`,
                label: `[${labelPrefix}data7Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data8`,
                label: `[${labelPrefix}data8]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data8Label`,
                label: `[${labelPrefix}data8Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data9`,
                label: `[${labelPrefix}data9]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}data9Label`,
                label: `[${labelPrefix}data9Label]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}individualId`,
                label: `[${labelPrefix}individualId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}organizationId`,
                label: `[${labelPrefix}organizationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}receiverTenantId`,
                label: `[${labelPrefix}receiverTenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}paymentTokenId`,
                label: `[${labelPrefix}paymentTokenId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}walletAccountId`,
                label: `[${labelPrefix}walletAccountId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}securityCertificateId`,
                label: `[${labelPrefix}securityCertificateId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'endDateTime': bundle.inputData?.[`${keyPrefix}endDateTime`],
            'nextInvoiceDateTime': bundle.inputData?.[`${keyPrefix}nextInvoiceDateTime`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'signature': bundle.inputData?.[`${keyPrefix}signature`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'repetitions': bundle.inputData?.[`${keyPrefix}repetitions`],
            'chargeAttempts': bundle.inputData?.[`${keyPrefix}chargeAttempts`],
            'freeTrialInDays': bundle.inputData?.[`${keyPrefix}freeTrialInDays`],
            'gracePeriodInDays': bundle.inputData?.[`${keyPrefix}gracePeriodInDays`],
            'customRenewalPeriod': bundle.inputData?.[`${keyPrefix}customRenewalPeriod`],
            'enableAutomaticRenew': bundle.inputData?.[`${keyPrefix}enableAutomaticRenew`],
            'enableProRateBilling': bundle.inputData?.[`${keyPrefix}enableProRateBilling`],
            'enableUsageThreshold': bundle.inputData?.[`${keyPrefix}enableUsageThreshold`],
            'enableAutomaticDisable': bundle.inputData?.[`${keyPrefix}enableAutomaticDisable`],
            'enableAutomaticPayments': bundle.inputData?.[`${keyPrefix}enableAutomaticPayments`],
            'usageThreshold': bundle.inputData?.[`${keyPrefix}usageThreshold`],
            'data': bundle.inputData?.[`${keyPrefix}data`],
            'dataLabel': bundle.inputData?.[`${keyPrefix}dataLabel`],
            'data1': bundle.inputData?.[`${keyPrefix}data1`],
            'data1Label': bundle.inputData?.[`${keyPrefix}data1Label`],
            'data2': bundle.inputData?.[`${keyPrefix}data2`],
            'data2Label': bundle.inputData?.[`${keyPrefix}data2Label`],
            'data3': bundle.inputData?.[`${keyPrefix}data3`],
            'data3Label': bundle.inputData?.[`${keyPrefix}data3Label`],
            'data4': bundle.inputData?.[`${keyPrefix}data4`],
            'data4Label': bundle.inputData?.[`${keyPrefix}data4Label`],
            'data5': bundle.inputData?.[`${keyPrefix}data5`],
            'data5Label': bundle.inputData?.[`${keyPrefix}data5Label`],
            'data6': bundle.inputData?.[`${keyPrefix}data6`],
            'data6Label': bundle.inputData?.[`${keyPrefix}data6Label`],
            'data7': bundle.inputData?.[`${keyPrefix}data7`],
            'data7Label': bundle.inputData?.[`${keyPrefix}data7Label`],
            'data8': bundle.inputData?.[`${keyPrefix}data8`],
            'data8Label': bundle.inputData?.[`${keyPrefix}data8Label`],
            'data9': bundle.inputData?.[`${keyPrefix}data9`],
            'data9Label': bundle.inputData?.[`${keyPrefix}data9Label`],
            'individualId': bundle.inputData?.[`${keyPrefix}individualId`],
            'organizationId': bundle.inputData?.[`${keyPrefix}organizationId`],
            'receiverTenantId': bundle.inputData?.[`${keyPrefix}receiverTenantId`],
            'paymentTokenId': bundle.inputData?.[`${keyPrefix}paymentTokenId`],
            'walletAccountId': bundle.inputData?.[`${keyPrefix}walletAccountId`],
            'securityCertificateId': bundle.inputData?.[`${keyPrefix}securityCertificateId`],
        }
    },
}
