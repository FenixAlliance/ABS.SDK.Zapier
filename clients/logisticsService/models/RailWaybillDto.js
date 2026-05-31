const utils = require('../utils/utils');
const WaybillLineDto = require('../models/WaybillLineDto');

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
                key: `${keyPrefix}documentNumber`,
                label: `[${labelPrefix}documentNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
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
                key: `${keyPrefix}senderSignedDate`,
                label: `[${labelPrefix}senderSignedDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}carrierSignedDate`,
                label: `[${labelPrefix}carrierSignedDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shipmentId`,
                label: `[${labelPrefix}shipmentId]`,
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
                key: `${keyPrefix}lines`,
                label: `[${labelPrefix}lines]`,
                children: WaybillLineDto.fields(`${keyPrefix}lines${!isInput ? '[]' : ''}`, isInput, true), 
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'documentNumber': bundle.inputData?.[`${keyPrefix}documentNumber`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
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
            'senderSignedDate': bundle.inputData?.[`${keyPrefix}senderSignedDate`],
            'carrierSignedDate': bundle.inputData?.[`${keyPrefix}carrierSignedDate`],
            'shipmentId': bundle.inputData?.[`${keyPrefix}shipmentId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'lines': utils.childMapping(bundle.inputData?.[`${keyPrefix}lines`], `${keyPrefix}lines`, WaybillLineDto),
        }
    },
}
