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
                key: `${keyPrefix}quantityExpected`,
                label: `[${labelPrefix}quantityExpected]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}quantityReceived`,
                label: `[${labelPrefix}quantityReceived]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}quantityRejected`,
                label: `[${labelPrefix}quantityRejected]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}condition`,
                label: `[${labelPrefix}condition]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}remarks`,
                label: `[${labelPrefix}remarks]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}hsCode`,
                label: `[${labelPrefix}hsCode]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'quantityExpected': bundle.inputData?.[`${keyPrefix}quantityExpected`],
            'quantityReceived': bundle.inputData?.[`${keyPrefix}quantityReceived`],
            'quantityRejected': bundle.inputData?.[`${keyPrefix}quantityRejected`],
            'condition': bundle.inputData?.[`${keyPrefix}condition`],
            'remarks': bundle.inputData?.[`${keyPrefix}remarks`],
            'hsCode': bundle.inputData?.[`${keyPrefix}hsCode`],
        }
    },
}
