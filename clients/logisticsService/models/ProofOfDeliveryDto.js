const utils = require('../utils/utils');
const ProofOfDeliveryLineDto = require('../models/ProofOfDeliveryLineDto');

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
                key: `${keyPrefix}seawayBillId`,
                label: `[${labelPrefix}seawayBillId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}airwayBillId`,
                label: `[${labelPrefix}airwayBillId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}roadWaybillId`,
                label: `[${labelPrefix}roadWaybillId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}railWaybillId`,
                label: `[${labelPrefix}railWaybillId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}truckTripId`,
                label: `[${labelPrefix}truckTripId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}recipientName`,
                label: `[${labelPrefix}recipientName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}recipientCompanyContactId`,
                label: `[${labelPrefix}recipientCompanyContactId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}deliveryAddress`,
                label: `[${labelPrefix}deliveryAddress]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}deliveryDate`,
                label: `[${labelPrefix}deliveryDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}deliveryTime`,
                label: `[${labelPrefix}deliveryTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signedBy`,
                label: `[${labelPrefix}signedBy]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signerIdentification`,
                label: `[${labelPrefix}signerIdentification]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}signatureDate`,
                label: `[${labelPrefix}signatureDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}digitalSignatureReference`,
                label: `[${labelPrefix}digitalSignatureReference]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}overallCondition`,
                label: `[${labelPrefix}overallCondition]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}totalQuantityDelivered`,
                label: `[${labelPrefix}totalQuantityDelivered]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}totalQuantityRejected`,
                label: `[${labelPrefix}totalQuantityRejected]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}remarks`,
                label: `[${labelPrefix}remarks]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}photoEvidenceUri`,
                label: `[${labelPrefix}photoEvidenceUri]`,
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
                children: ProofOfDeliveryLineDto.fields(`${keyPrefix}lines${!isInput ? '[]' : ''}`, isInput, true), 
            },
            {
                key: `${keyPrefix}deliveryNoteIds`,
                label: `[${labelPrefix}deliveryNoteIds]`,
                list: true,
                type: 'string',
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
            'shipmentId': bundle.inputData?.[`${keyPrefix}shipmentId`],
            'billOfLadingId': bundle.inputData?.[`${keyPrefix}billOfLadingId`],
            'seawayBillId': bundle.inputData?.[`${keyPrefix}seawayBillId`],
            'airwayBillId': bundle.inputData?.[`${keyPrefix}airwayBillId`],
            'roadWaybillId': bundle.inputData?.[`${keyPrefix}roadWaybillId`],
            'railWaybillId': bundle.inputData?.[`${keyPrefix}railWaybillId`],
            'truckTripId': bundle.inputData?.[`${keyPrefix}truckTripId`],
            'recipientName': bundle.inputData?.[`${keyPrefix}recipientName`],
            'recipientCompanyContactId': bundle.inputData?.[`${keyPrefix}recipientCompanyContactId`],
            'deliveryAddress': bundle.inputData?.[`${keyPrefix}deliveryAddress`],
            'deliveryDate': bundle.inputData?.[`${keyPrefix}deliveryDate`],
            'deliveryTime': bundle.inputData?.[`${keyPrefix}deliveryTime`],
            'signedBy': bundle.inputData?.[`${keyPrefix}signedBy`],
            'signerIdentification': bundle.inputData?.[`${keyPrefix}signerIdentification`],
            'signatureDate': bundle.inputData?.[`${keyPrefix}signatureDate`],
            'digitalSignatureReference': bundle.inputData?.[`${keyPrefix}digitalSignatureReference`],
            'overallCondition': bundle.inputData?.[`${keyPrefix}overallCondition`],
            'totalQuantityDelivered': bundle.inputData?.[`${keyPrefix}totalQuantityDelivered`],
            'totalQuantityRejected': bundle.inputData?.[`${keyPrefix}totalQuantityRejected`],
            'remarks': bundle.inputData?.[`${keyPrefix}remarks`],
            'photoEvidenceUri': bundle.inputData?.[`${keyPrefix}photoEvidenceUri`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'lines': utils.childMapping(bundle.inputData?.[`${keyPrefix}lines`], `${keyPrefix}lines`, ProofOfDeliveryLineDto),
            'deliveryNoteIds': bundle.inputData?.[`${keyPrefix}deliveryNoteIds`],
        }
    },
}
