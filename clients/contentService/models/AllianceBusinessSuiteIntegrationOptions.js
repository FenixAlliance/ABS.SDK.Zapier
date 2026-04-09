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
                key: `${keyPrefix}appId`,
                label: `[${labelPrefix}appId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}publicKey`,
                label: `[${labelPrefix}publicKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}privateKey`,
                label: `[${labelPrefix}privateKey]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'appId': bundle.inputData?.[`${keyPrefix}appId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'publicKey': bundle.inputData?.[`${keyPrefix}publicKey`],
            'privateKey': bundle.inputData?.[`${keyPrefix}privateKey`],
        }
    },
}
