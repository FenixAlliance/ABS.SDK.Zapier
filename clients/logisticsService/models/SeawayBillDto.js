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
                key: `${keyPrefix}vesselId`,
                label: `[${labelPrefix}vesselId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}voyageId`,
                label: `[${labelPrefix}voyageId]`,
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
                key: `${keyPrefix}placeOfReceipt`,
                label: `[${labelPrefix}placeOfReceipt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}placeOfDelivery`,
                label: `[${labelPrefix}placeOfDelivery]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dateIssued`,
                label: `[${labelPrefix}dateIssued]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dateShipped`,
                label: `[${labelPrefix}dateShipped]`,
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
                key: `${keyPrefix}totalWeight`,
                label: `[${labelPrefix}totalWeight]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}totalPackages`,
                label: `[${labelPrefix}totalPackages]`,
                type: 'integer',
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
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'shipperContactId': bundle.inputData?.[`${keyPrefix}shipperContactId`],
            'consigneeContactId': bundle.inputData?.[`${keyPrefix}consigneeContactId`],
            'notifyPartyContactId': bundle.inputData?.[`${keyPrefix}notifyPartyContactId`],
            'carrierId': bundle.inputData?.[`${keyPrefix}carrierId`],
            'vesselId': bundle.inputData?.[`${keyPrefix}vesselId`],
            'voyageId': bundle.inputData?.[`${keyPrefix}voyageId`],
            'portOfLoadingId': bundle.inputData?.[`${keyPrefix}portOfLoadingId`],
            'portOfDischargeId': bundle.inputData?.[`${keyPrefix}portOfDischargeId`],
            'placeOfReceipt': bundle.inputData?.[`${keyPrefix}placeOfReceipt`],
            'placeOfDelivery': bundle.inputData?.[`${keyPrefix}placeOfDelivery`],
            'dateIssued': bundle.inputData?.[`${keyPrefix}dateIssued`],
            'dateShipped': bundle.inputData?.[`${keyPrefix}dateShipped`],
            'dateDelivered': bundle.inputData?.[`${keyPrefix}dateDelivered`],
            'freightTerms': bundle.inputData?.[`${keyPrefix}freightTerms`],
            'freightAmount': bundle.inputData?.[`${keyPrefix}freightAmount`],
            'freightCurrencyId': bundle.inputData?.[`${keyPrefix}freightCurrencyId`],
            'totalWeight': bundle.inputData?.[`${keyPrefix}totalWeight`],
            'totalPackages': bundle.inputData?.[`${keyPrefix}totalPackages`],
            'specialInstructions': bundle.inputData?.[`${keyPrefix}specialInstructions`],
            'remarks': bundle.inputData?.[`${keyPrefix}remarks`],
            'shipmentId': bundle.inputData?.[`${keyPrefix}shipmentId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'lines': utils.childMapping(bundle.inputData?.[`${keyPrefix}lines`], `${keyPrefix}lines`, WaybillLineDto),
        }
    },
}
