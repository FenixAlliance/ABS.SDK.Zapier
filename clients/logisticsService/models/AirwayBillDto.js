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
                key: `${keyPrefix}airwayBillType`,
                label: `[${labelPrefix}airwayBillType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}masterAwbNumber`,
                label: `[${labelPrefix}masterAwbNumber]`,
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
                key: `${keyPrefix}notifyPartyContactId`,
                label: `[${labelPrefix}notifyPartyContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}carrierId`,
                label: `[${labelPrefix}carrierId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}airlineCode`,
                label: `[${labelPrefix}airlineCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}flightNumber`,
                label: `[${labelPrefix}flightNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}airportOfDepartureCode`,
                label: `[${labelPrefix}airportOfDepartureCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}airportOfDestinationCode`,
                label: `[${labelPrefix}airportOfDestinationCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}departureDate`,
                label: `[${labelPrefix}departureDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}arrivalDate`,
                label: `[${labelPrefix}arrivalDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dateIssued`,
                label: `[${labelPrefix}dateIssued]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dateDelivered`,
                label: `[${labelPrefix}dateDelivered]`,
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
                key: `${keyPrefix}chargeableWeightKg`,
                label: `[${labelPrefix}chargeableWeightKg]`,
                type: 'number',
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
                key: `${keyPrefix}declaredValueForCarriage`,
                label: `[${labelPrefix}declaredValueForCarriage]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}declaredValueForCustoms`,
                label: `[${labelPrefix}declaredValueForCustoms]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}insuranceAmount`,
                label: `[${labelPrefix}insuranceAmount]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}specialHandlingCodes`,
                label: `[${labelPrefix}specialHandlingCodes]`,
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
            'airwayBillType': bundle.inputData?.[`${keyPrefix}airwayBillType`],
            'masterAwbNumber': bundle.inputData?.[`${keyPrefix}masterAwbNumber`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'shipperContactId': bundle.inputData?.[`${keyPrefix}shipperContactId`],
            'consigneeContactId': bundle.inputData?.[`${keyPrefix}consigneeContactId`],
            'notifyPartyContactId': bundle.inputData?.[`${keyPrefix}notifyPartyContactId`],
            'carrierId': bundle.inputData?.[`${keyPrefix}carrierId`],
            'airlineCode': bundle.inputData?.[`${keyPrefix}airlineCode`],
            'flightNumber': bundle.inputData?.[`${keyPrefix}flightNumber`],
            'airportOfDepartureCode': bundle.inputData?.[`${keyPrefix}airportOfDepartureCode`],
            'airportOfDestinationCode': bundle.inputData?.[`${keyPrefix}airportOfDestinationCode`],
            'departureDate': bundle.inputData?.[`${keyPrefix}departureDate`],
            'arrivalDate': bundle.inputData?.[`${keyPrefix}arrivalDate`],
            'dateIssued': bundle.inputData?.[`${keyPrefix}dateIssued`],
            'dateDelivered': bundle.inputData?.[`${keyPrefix}dateDelivered`],
            'freightTerms': bundle.inputData?.[`${keyPrefix}freightTerms`],
            'freightAmount': bundle.inputData?.[`${keyPrefix}freightAmount`],
            'freightCurrencyId': bundle.inputData?.[`${keyPrefix}freightCurrencyId`],
            'chargeableWeightKg': bundle.inputData?.[`${keyPrefix}chargeableWeightKg`],
            'totalGrossWeightKg': bundle.inputData?.[`${keyPrefix}totalGrossWeightKg`],
            'totalPackages': bundle.inputData?.[`${keyPrefix}totalPackages`],
            'totalVolumeM3': bundle.inputData?.[`${keyPrefix}totalVolumeM3`],
            'declaredValueForCarriage': bundle.inputData?.[`${keyPrefix}declaredValueForCarriage`],
            'declaredValueForCustoms': bundle.inputData?.[`${keyPrefix}declaredValueForCustoms`],
            'insuranceAmount': bundle.inputData?.[`${keyPrefix}insuranceAmount`],
            'specialHandlingCodes': bundle.inputData?.[`${keyPrefix}specialHandlingCodes`],
            'specialInstructions': bundle.inputData?.[`${keyPrefix}specialInstructions`],
            'remarks': bundle.inputData?.[`${keyPrefix}remarks`],
            'shipmentId': bundle.inputData?.[`${keyPrefix}shipmentId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'lines': utils.childMapping(bundle.inputData?.[`${keyPrefix}lines`], `${keyPrefix}lines`, WaybillLineDto),
        }
    },
}
