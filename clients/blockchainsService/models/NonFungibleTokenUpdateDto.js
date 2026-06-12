const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}summary`,
                label: `[${labelPrefix}summary]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}price`,
                label: `[${labelPrefix}price]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}published`,
                label: `[${labelPrefix}published]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}minted`,
                label: `[${labelPrefix}minted]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}mintTransactionHash`,
                label: `[${labelPrefix}mintTransactionHash]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}blockchainBlockId`,
                label: `[${labelPrefix}blockchainBlockId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'summary': bundle.inputData?.[`${keyPrefix}summary`],
            'price': bundle.inputData?.[`${keyPrefix}price`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'published': bundle.inputData?.[`${keyPrefix}published`],
            'minted': bundle.inputData?.[`${keyPrefix}minted`],
            'mintTransactionHash': bundle.inputData?.[`${keyPrefix}mintTransactionHash`],
            'blockchainBlockId': bundle.inputData?.[`${keyPrefix}blockchainBlockId`],
        }
    },
}
