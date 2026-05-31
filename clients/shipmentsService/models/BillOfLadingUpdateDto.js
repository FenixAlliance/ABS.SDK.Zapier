const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}billOfLadingNumber`,
                label: `[${labelPrefix}billOfLadingNumber]`,
                type: 'string',
            },
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
                key: `${keyPrefix}billOfLadingType`,
                label: `[${labelPrefix}billOfLadingType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isNegotiable`,
                label: `[${labelPrefix}isNegotiable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isClean`,
                label: `[${labelPrefix}isClean]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}numberOfOriginals`,
                label: `[${labelPrefix}numberOfOriginals]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}freightPaymentType`,
                label: `[${labelPrefix}freightPaymentType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shippingTerms`,
                label: `[${labelPrefix}shippingTerms]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}freightChargesDescription`,
                label: `[${labelPrefix}freightChargesDescription]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}declaredValueAmount`,
                label: `[${labelPrefix}declaredValueAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}declaredValueCurrencyId`,
                label: `[${labelPrefix}declaredValueCurrencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expiryDate`,
                label: `[${labelPrefix}expiryDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}vesselName`,
                label: `[${labelPrefix}vesselName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}voyageNumber`,
                label: `[${labelPrefix}voyageNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shipperContactId`,
                label: `[${labelPrefix}shipperContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}consigneeContactId`,
                label: `[${labelPrefix}consigneeContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}notifyPartyContactId`,
                label: `[${labelPrefix}notifyPartyContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shippingCourierId`,
                label: `[${labelPrefix}shippingCourierId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}portOfLoadingId`,
                label: `[${labelPrefix}portOfLoadingId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}portOfDischargeId`,
                label: `[${labelPrefix}portOfDischargeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}placeOfReceiptId`,
                label: `[${labelPrefix}placeOfReceiptId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}placeOfDeliveryId`,
                label: `[${labelPrefix}placeOfDeliveryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shipmentId`,
                label: `[${labelPrefix}shipmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderId`,
                label: `[${labelPrefix}orderId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}voyageId`,
                label: `[${labelPrefix}voyageId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}marksAndNumbers`,
                label: `[${labelPrefix}marksAndNumbers]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}totalPackages`,
                label: `[${labelPrefix}totalPackages]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}totalGrossWeightKg`,
                label: `[${labelPrefix}totalGrossWeightKg]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}totalVolumeM3`,
                label: `[${labelPrefix}totalVolumeM3]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'billOfLadingNumber': bundle.inputData?.[`${keyPrefix}billOfLadingNumber`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'billOfLadingType': bundle.inputData?.[`${keyPrefix}billOfLadingType`],
            'isNegotiable': bundle.inputData?.[`${keyPrefix}isNegotiable`],
            'isClean': bundle.inputData?.[`${keyPrefix}isClean`],
            'numberOfOriginals': bundle.inputData?.[`${keyPrefix}numberOfOriginals`],
            'freightPaymentType': bundle.inputData?.[`${keyPrefix}freightPaymentType`],
            'shippingTerms': bundle.inputData?.[`${keyPrefix}shippingTerms`],
            'freightChargesDescription': bundle.inputData?.[`${keyPrefix}freightChargesDescription`],
            'declaredValueAmount': bundle.inputData?.[`${keyPrefix}declaredValueAmount`],
            'declaredValueCurrencyId': bundle.inputData?.[`${keyPrefix}declaredValueCurrencyId`],
            'expiryDate': bundle.inputData?.[`${keyPrefix}expiryDate`],
            'vesselName': bundle.inputData?.[`${keyPrefix}vesselName`],
            'voyageNumber': bundle.inputData?.[`${keyPrefix}voyageNumber`],
            'shipperContactId': bundle.inputData?.[`${keyPrefix}shipperContactId`],
            'consigneeContactId': bundle.inputData?.[`${keyPrefix}consigneeContactId`],
            'notifyPartyContactId': bundle.inputData?.[`${keyPrefix}notifyPartyContactId`],
            'shippingCourierId': bundle.inputData?.[`${keyPrefix}shippingCourierId`],
            'portOfLoadingId': bundle.inputData?.[`${keyPrefix}portOfLoadingId`],
            'portOfDischargeId': bundle.inputData?.[`${keyPrefix}portOfDischargeId`],
            'placeOfReceiptId': bundle.inputData?.[`${keyPrefix}placeOfReceiptId`],
            'placeOfDeliveryId': bundle.inputData?.[`${keyPrefix}placeOfDeliveryId`],
            'shipmentId': bundle.inputData?.[`${keyPrefix}shipmentId`],
            'orderId': bundle.inputData?.[`${keyPrefix}orderId`],
            'voyageId': bundle.inputData?.[`${keyPrefix}voyageId`],
            'marksAndNumbers': bundle.inputData?.[`${keyPrefix}marksAndNumbers`],
            'totalPackages': bundle.inputData?.[`${keyPrefix}totalPackages`],
            'totalGrossWeightKg': bundle.inputData?.[`${keyPrefix}totalGrossWeightKg`],
            'totalVolumeM3': bundle.inputData?.[`${keyPrefix}totalVolumeM3`],
        }
    },
}
