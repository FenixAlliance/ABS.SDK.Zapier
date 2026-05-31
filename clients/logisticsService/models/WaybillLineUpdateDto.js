const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
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
        }
    },
}
