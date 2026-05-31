const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}sequenceNumber`,
                label: `[${labelPrefix}sequenceNumber]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}portCallStatus`,
                label: `[${labelPrefix}portCallStatus]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}eta`,
                label: `[${labelPrefix}eta]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ata`,
                label: `[${labelPrefix}ata]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}etd`,
                label: `[${labelPrefix}etd]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}atd`,
                label: `[${labelPrefix}atd]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}berthNumber`,
                label: `[${labelPrefix}berthNumber]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}remarks`,
                label: `[${labelPrefix}remarks]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}portId`,
                label: `[${labelPrefix}portId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'sequenceNumber': bundle.inputData?.[`${keyPrefix}sequenceNumber`],
            'portCallStatus': bundle.inputData?.[`${keyPrefix}portCallStatus`],
            'eta': bundle.inputData?.[`${keyPrefix}eta`],
            'ata': bundle.inputData?.[`${keyPrefix}ata`],
            'etd': bundle.inputData?.[`${keyPrefix}etd`],
            'atd': bundle.inputData?.[`${keyPrefix}atd`],
            'berthNumber': bundle.inputData?.[`${keyPrefix}berthNumber`],
            'remarks': bundle.inputData?.[`${keyPrefix}remarks`],
            'portId': bundle.inputData?.[`${keyPrefix}portId`],
        }
    },
}
