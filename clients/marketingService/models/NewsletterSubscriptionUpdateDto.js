const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}email`,
                label: `[${labelPrefix}email]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}verified`,
                label: `[${labelPrefix}verified]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}newsletterId`,
                label: `[${labelPrefix}newsletterId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'email': bundle.inputData?.[`${keyPrefix}email`],
            'verified': bundle.inputData?.[`${keyPrefix}verified`],
            'newsletterId': bundle.inputData?.[`${keyPrefix}newsletterId`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
        }
    },
}
