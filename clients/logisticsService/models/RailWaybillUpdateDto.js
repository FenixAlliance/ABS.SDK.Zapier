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
                key: `${keyPrefix}railOperatorName`,
                label: `[${labelPrefix}railOperatorName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}stationOfDeparture`,
                label: `[${labelPrefix}stationOfDeparture]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}stationOfDepartureCode`,
                label: `[${labelPrefix}stationOfDepartureCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}stationOfDestination`,
                label: `[${labelPrefix}stationOfDestination]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}stationOfDestinationCode`,
                label: `[${labelPrefix}stationOfDestinationCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}prescribedRoute`,
                label: `[${labelPrefix}prescribedRoute]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}wagonNumbers`,
                label: `[${labelPrefix}wagonNumbers]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dateOfAcceptance`,
                label: `[${labelPrefix}dateOfAcceptance]`,
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
                key: `${keyPrefix}customsFormalities`,
                label: `[${labelPrefix}customsFormalities]`,
                type: 'string',
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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'documentNumber': bundle.inputData?.[`${keyPrefix}documentNumber`],
            'shipperContactId': bundle.inputData?.[`${keyPrefix}shipperContactId`],
            'consigneeContactId': bundle.inputData?.[`${keyPrefix}consigneeContactId`],
            'carrierId': bundle.inputData?.[`${keyPrefix}carrierId`],
            'railOperatorName': bundle.inputData?.[`${keyPrefix}railOperatorName`],
            'stationOfDeparture': bundle.inputData?.[`${keyPrefix}stationOfDeparture`],
            'stationOfDepartureCode': bundle.inputData?.[`${keyPrefix}stationOfDepartureCode`],
            'stationOfDestination': bundle.inputData?.[`${keyPrefix}stationOfDestination`],
            'stationOfDestinationCode': bundle.inputData?.[`${keyPrefix}stationOfDestinationCode`],
            'prescribedRoute': bundle.inputData?.[`${keyPrefix}prescribedRoute`],
            'wagonNumbers': bundle.inputData?.[`${keyPrefix}wagonNumbers`],
            'dateOfAcceptance': bundle.inputData?.[`${keyPrefix}dateOfAcceptance`],
            'dateOfDelivery': bundle.inputData?.[`${keyPrefix}dateOfDelivery`],
            'freightTerms': bundle.inputData?.[`${keyPrefix}freightTerms`],
            'freightAmount': bundle.inputData?.[`${keyPrefix}freightAmount`],
            'freightCurrencyId': bundle.inputData?.[`${keyPrefix}freightCurrencyId`],
            'totalGrossWeightKg': bundle.inputData?.[`${keyPrefix}totalGrossWeightKg`],
            'totalPackages': bundle.inputData?.[`${keyPrefix}totalPackages`],
            'totalVolumeM3': bundle.inputData?.[`${keyPrefix}totalVolumeM3`],
            'customsFormalities': bundle.inputData?.[`${keyPrefix}customsFormalities`],
            'specialInstructions': bundle.inputData?.[`${keyPrefix}specialInstructions`],
            'remarks': bundle.inputData?.[`${keyPrefix}remarks`],
            'shipmentId': bundle.inputData?.[`${keyPrefix}shipmentId`],
        }
    },
}
