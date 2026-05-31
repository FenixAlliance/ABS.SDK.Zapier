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
                key: `${keyPrefix}parentDocumentType`,
                label: `[${labelPrefix}parentDocumentType]`,
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
                key: `${keyPrefix}lineNumber`,
                label: `[${labelPrefix}lineNumber]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}grossWeightKg`,
                label: `[${labelPrefix}grossWeightKg]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}volumeM3`,
                label: `[${labelPrefix}volumeM3]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}packageType`,
                label: `[${labelPrefix}packageType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lengthCm`,
                label: `[${labelPrefix}lengthCm]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}widthCm`,
                label: `[${labelPrefix}widthCm]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}heightCm`,
                label: `[${labelPrefix}heightCm]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}hsCode`,
                label: `[${labelPrefix}hsCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}marksAndNumbers`,
                label: `[${labelPrefix}marksAndNumbers]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}declaredValue`,
                label: `[${labelPrefix}declaredValue]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}declaredValueCurrencyId`,
                label: `[${labelPrefix}declaredValueCurrencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sealNumber`,
                label: `[${labelPrefix}sealNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}containerNumber`,
                label: `[${labelPrefix}containerNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}chargeableWeightKg`,
                label: `[${labelPrefix}chargeableWeightKg]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}iataRateClass`,
                label: `[${labelPrefix}iataRateClass]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dangerousGoodsClass`,
                label: `[${labelPrefix}dangerousGoodsClass]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}unHazmatNumber`,
                label: `[${labelPrefix}unHazmatNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}wagonNumber`,
                label: `[${labelPrefix}wagonNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'parentDocumentType': bundle.inputData?.[`${keyPrefix}parentDocumentType`],
            'seawayBillId': bundle.inputData?.[`${keyPrefix}seawayBillId`],
            'airwayBillId': bundle.inputData?.[`${keyPrefix}airwayBillId`],
            'roadWaybillId': bundle.inputData?.[`${keyPrefix}roadWaybillId`],
            'railWaybillId': bundle.inputData?.[`${keyPrefix}railWaybillId`],
            'lineNumber': bundle.inputData?.[`${keyPrefix}lineNumber`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'grossWeightKg': bundle.inputData?.[`${keyPrefix}grossWeightKg`],
            'volumeM3': bundle.inputData?.[`${keyPrefix}volumeM3`],
            'packageType': bundle.inputData?.[`${keyPrefix}packageType`],
            'lengthCm': bundle.inputData?.[`${keyPrefix}lengthCm`],
            'widthCm': bundle.inputData?.[`${keyPrefix}widthCm`],
            'heightCm': bundle.inputData?.[`${keyPrefix}heightCm`],
            'hsCode': bundle.inputData?.[`${keyPrefix}hsCode`],
            'marksAndNumbers': bundle.inputData?.[`${keyPrefix}marksAndNumbers`],
            'declaredValue': bundle.inputData?.[`${keyPrefix}declaredValue`],
            'declaredValueCurrencyId': bundle.inputData?.[`${keyPrefix}declaredValueCurrencyId`],
            'sealNumber': bundle.inputData?.[`${keyPrefix}sealNumber`],
            'containerNumber': bundle.inputData?.[`${keyPrefix}containerNumber`],
            'chargeableWeightKg': bundle.inputData?.[`${keyPrefix}chargeableWeightKg`],
            'iataRateClass': bundle.inputData?.[`${keyPrefix}iataRateClass`],
            'dangerousGoodsClass': bundle.inputData?.[`${keyPrefix}dangerousGoodsClass`],
            'unHazmatNumber': bundle.inputData?.[`${keyPrefix}unHazmatNumber`],
            'wagonNumber': bundle.inputData?.[`${keyPrefix}wagonNumber`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
        }
    },
}
