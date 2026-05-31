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
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}quantity`,
                label: `[${labelPrefix}quantity]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}packageType`,
                label: `[${labelPrefix}packageType]`,
                type: 'string',
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
                key: `${keyPrefix}marksAndNumbers`,
                label: `[${labelPrefix}marksAndNumbers]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}hsCode`,
                label: `[${labelPrefix}hsCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemId`,
                label: `[${labelPrefix}itemId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'quantity': bundle.inputData?.[`${keyPrefix}quantity`],
            'packageType': bundle.inputData?.[`${keyPrefix}packageType`],
            'grossWeightKg': bundle.inputData?.[`${keyPrefix}grossWeightKg`],
            'volumeM3': bundle.inputData?.[`${keyPrefix}volumeM3`],
            'marksAndNumbers': bundle.inputData?.[`${keyPrefix}marksAndNumbers`],
            'hsCode': bundle.inputData?.[`${keyPrefix}hsCode`],
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
        }
    },
}
