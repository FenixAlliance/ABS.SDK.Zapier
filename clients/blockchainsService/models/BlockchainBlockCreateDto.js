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
                key: `${keyPrefix}hash`,
                label: `[${labelPrefix}hash]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}data`,
                label: `[${labelPrefix}data]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}nonce`,
                label: `[${labelPrefix}nonce]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}previousHash`,
                label: `[${labelPrefix}previousHash]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}blockchainId`,
                label: `[${labelPrefix}blockchainId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}walletAccountId`,
                label: `[${labelPrefix}walletAccountId]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'hash': bundle.inputData?.[`${keyPrefix}hash`],
            'data': bundle.inputData?.[`${keyPrefix}data`],
            'nonce': bundle.inputData?.[`${keyPrefix}nonce`],
            'previousHash': bundle.inputData?.[`${keyPrefix}previousHash`],
            'blockchainId': bundle.inputData?.[`${keyPrefix}blockchainId`],
            'walletAccountId': bundle.inputData?.[`${keyPrefix}walletAccountId`],
        }
    },
}
