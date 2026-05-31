const utils = require('../utils/utils');
const AdditionalAttribute = require('../models/AdditionalAttribute');
const LicenseFeature = require('../models/LicenseFeature');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}userId`,
                label: `[${labelPrefix}userId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderId`,
                label: `[${labelPrefix}orderId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}paymentId`,
                label: `[${labelPrefix}paymentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}invoiceId`,
                label: `[${labelPrefix}invoiceId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}entitlementId`,
                label: `[${labelPrefix}entitlementId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}seats`,
                label: `[${labelPrefix}seats]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}licenseType`,
                label: `[${labelPrefix}licenseType]`,
                type: 'string',
                choices: [
                    'Trial',
                    'Standard',
                    'Enterprise',
                ],
            },
            {
                key: `${keyPrefix}expirationDate`,
                label: `[${labelPrefix}expirationDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}features`,
                label: `[${labelPrefix}features]`,
                children: LicenseFeature.fields(`${keyPrefix}features${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}additionalAttributes`,
                label: `[${labelPrefix}additionalAttributes]`,
                children: AdditionalAttribute.fields(`${keyPrefix}additionalAttributes${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'userId': bundle.inputData?.[`${keyPrefix}userId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'orderId': bundle.inputData?.[`${keyPrefix}orderId`],
            'paymentId': bundle.inputData?.[`${keyPrefix}paymentId`],
            'invoiceId': bundle.inputData?.[`${keyPrefix}invoiceId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'entitlementId': bundle.inputData?.[`${keyPrefix}entitlementId`],
            'seats': bundle.inputData?.[`${keyPrefix}seats`],
            'licenseType': bundle.inputData?.[`${keyPrefix}licenseType`],
            'expirationDate': bundle.inputData?.[`${keyPrefix}expirationDate`],
            'features': utils.childMapping(bundle.inputData?.[`${keyPrefix}features`], `${keyPrefix}features`, LicenseFeature),
            'additionalAttributes': utils.childMapping(bundle.inputData?.[`${keyPrefix}additionalAttributes`], `${keyPrefix}additionalAttributes`, AdditionalAttribute),
        }
    },
}
