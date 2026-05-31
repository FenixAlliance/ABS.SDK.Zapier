const utils = require('../utils/utils');

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
                key: `${keyPrefix}tripNumber`,
                label: `[${labelPrefix}tripNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}truckTripStatus`,
                label: `[${labelPrefix}truckTripStatus]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}containerNumber`,
                label: `[${labelPrefix}containerNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sealNumber`,
                label: `[${labelPrefix}sealNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}departureTime`,
                label: `[${labelPrefix}departureTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}arrivalTime`,
                label: `[${labelPrefix}arrivalTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}actualDepartureTime`,
                label: `[${labelPrefix}actualDepartureTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}actualArrivalTime`,
                label: `[${labelPrefix}actualArrivalTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}distanceKm`,
                label: `[${labelPrefix}distanceKm]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}notes`,
                label: `[${labelPrefix}notes]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}truckId`,
                label: `[${labelPrefix}truckId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}originPortId`,
                label: `[${labelPrefix}originPortId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}originLocationId`,
                label: `[${labelPrefix}originLocationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}destinationPortId`,
                label: `[${labelPrefix}destinationPortId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}destinationLocationId`,
                label: `[${labelPrefix}destinationLocationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shipmentId`,
                label: `[${labelPrefix}shipmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}billOfLadingId`,
                label: `[${labelPrefix}billOfLadingId]`,
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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'tripNumber': bundle.inputData?.[`${keyPrefix}tripNumber`],
            'truckTripStatus': bundle.inputData?.[`${keyPrefix}truckTripStatus`],
            'containerNumber': bundle.inputData?.[`${keyPrefix}containerNumber`],
            'sealNumber': bundle.inputData?.[`${keyPrefix}sealNumber`],
            'departureTime': bundle.inputData?.[`${keyPrefix}departureTime`],
            'arrivalTime': bundle.inputData?.[`${keyPrefix}arrivalTime`],
            'actualDepartureTime': bundle.inputData?.[`${keyPrefix}actualDepartureTime`],
            'actualArrivalTime': bundle.inputData?.[`${keyPrefix}actualArrivalTime`],
            'distanceKm': bundle.inputData?.[`${keyPrefix}distanceKm`],
            'notes': bundle.inputData?.[`${keyPrefix}notes`],
            'truckId': bundle.inputData?.[`${keyPrefix}truckId`],
            'originPortId': bundle.inputData?.[`${keyPrefix}originPortId`],
            'originLocationId': bundle.inputData?.[`${keyPrefix}originLocationId`],
            'destinationPortId': bundle.inputData?.[`${keyPrefix}destinationPortId`],
            'destinationLocationId': bundle.inputData?.[`${keyPrefix}destinationLocationId`],
            'shipmentId': bundle.inputData?.[`${keyPrefix}shipmentId`],
            'billOfLadingId': bundle.inputData?.[`${keyPrefix}billOfLadingId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
        }
    },
}
