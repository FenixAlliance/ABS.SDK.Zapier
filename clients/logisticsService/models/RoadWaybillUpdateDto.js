const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}documentNumber`,
                label: `[${labelPrefix}documentNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}roadWaybillType`,
                label: `[${labelPrefix}roadWaybillType]`,
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
                key: `${keyPrefix}carrierId`,
                label: `[${labelPrefix}carrierId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}successiveCarriers`,
                label: `[${labelPrefix}successiveCarriers]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}truckId`,
                label: `[${labelPrefix}truckId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}truckDriverId`,
                label: `[${labelPrefix}truckDriverId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}vehicleRegistration`,
                label: `[${labelPrefix}vehicleRegistration]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}trailerRegistration`,
                label: `[${labelPrefix}trailerRegistration]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}placeOfTakingOver`,
                label: `[${labelPrefix}placeOfTakingOver]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}placeOfTakingOverPortId`,
                label: `[${labelPrefix}placeOfTakingOverPortId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}placeOfDelivery`,
                label: `[${labelPrefix}placeOfDelivery]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}placeOfDeliveryPortId`,
                label: `[${labelPrefix}placeOfDeliveryPortId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dateOfTakingOver`,
                label: `[${labelPrefix}dateOfTakingOver]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dateOfDelivery`,
                label: `[${labelPrefix}dateOfDelivery]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}freightTerms`,
                label: `[${labelPrefix}freightTerms]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}freightAmount`,
                label: `[${labelPrefix}freightAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}freightCurrencyId`,
                label: `[${labelPrefix}freightCurrencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}totalGrossWeightKg`,
                label: `[${labelPrefix}totalGrossWeightKg]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}totalPackages`,
                label: `[${labelPrefix}totalPackages]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}totalVolumeM3`,
                label: `[${labelPrefix}totalVolumeM3]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}adrDangerousGoods`,
                label: `[${labelPrefix}adrDangerousGoods]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}specialInstructions`,
                label: `[${labelPrefix}specialInstructions]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}remarks`,
                label: `[${labelPrefix}remarks]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shipmentId`,
                label: `[${labelPrefix}shipmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}truckTripId`,
                label: `[${labelPrefix}truckTripId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'documentNumber': bundle.inputData?.[`${keyPrefix}documentNumber`],
            'roadWaybillType': bundle.inputData?.[`${keyPrefix}roadWaybillType`],
            'shipperContactId': bundle.inputData?.[`${keyPrefix}shipperContactId`],
            'consigneeContactId': bundle.inputData?.[`${keyPrefix}consigneeContactId`],
            'carrierId': bundle.inputData?.[`${keyPrefix}carrierId`],
            'successiveCarriers': bundle.inputData?.[`${keyPrefix}successiveCarriers`],
            'truckId': bundle.inputData?.[`${keyPrefix}truckId`],
            'truckDriverId': bundle.inputData?.[`${keyPrefix}truckDriverId`],
            'vehicleRegistration': bundle.inputData?.[`${keyPrefix}vehicleRegistration`],
            'trailerRegistration': bundle.inputData?.[`${keyPrefix}trailerRegistration`],
            'placeOfTakingOver': bundle.inputData?.[`${keyPrefix}placeOfTakingOver`],
            'placeOfTakingOverPortId': bundle.inputData?.[`${keyPrefix}placeOfTakingOverPortId`],
            'placeOfDelivery': bundle.inputData?.[`${keyPrefix}placeOfDelivery`],
            'placeOfDeliveryPortId': bundle.inputData?.[`${keyPrefix}placeOfDeliveryPortId`],
            'dateOfTakingOver': bundle.inputData?.[`${keyPrefix}dateOfTakingOver`],
            'dateOfDelivery': bundle.inputData?.[`${keyPrefix}dateOfDelivery`],
            'freightTerms': bundle.inputData?.[`${keyPrefix}freightTerms`],
            'freightAmount': bundle.inputData?.[`${keyPrefix}freightAmount`],
            'freightCurrencyId': bundle.inputData?.[`${keyPrefix}freightCurrencyId`],
            'totalGrossWeightKg': bundle.inputData?.[`${keyPrefix}totalGrossWeightKg`],
            'totalPackages': bundle.inputData?.[`${keyPrefix}totalPackages`],
            'totalVolumeM3': bundle.inputData?.[`${keyPrefix}totalVolumeM3`],
            'adrDangerousGoods': bundle.inputData?.[`${keyPrefix}adrDangerousGoods`],
            'specialInstructions': bundle.inputData?.[`${keyPrefix}specialInstructions`],
            'remarks': bundle.inputData?.[`${keyPrefix}remarks`],
            'shipmentId': bundle.inputData?.[`${keyPrefix}shipmentId`],
            'truckTripId': bundle.inputData?.[`${keyPrefix}truckTripId`],
        }
    },
}
