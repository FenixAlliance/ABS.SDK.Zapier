const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}merchantId`,
                label: `[${labelPrefix}merchantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}merchantUserEmail`,
                label: `[${labelPrefix}merchantUserEmail]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}jsonCredentials`,
                label: `[${labelPrefix}jsonCredentials]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'merchantId': bundle.inputData?.[`${keyPrefix}merchantId`],
            'merchantUserEmail': bundle.inputData?.[`${keyPrefix}merchantUserEmail`],
            'jsonCredentials': bundle.inputData?.[`${keyPrefix}jsonCredentials`],
        }
    },
}
