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
                key: `${keyPrefix}blockchainId`,
                label: `[${labelPrefix}blockchainId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}blockchainName`,
                label: `[${labelPrefix}blockchainName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}mintedTimestamp`,
                label: `[${labelPrefix}mintedTimestamp]`,
                type: 'string',
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
            {
                key: `${keyPrefix}primaryImageUrl`,
                label: `[${labelPrefix}primaryImageUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}coverUrl`,
                label: `[${labelPrefix}coverUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'summary': bundle.inputData?.[`${keyPrefix}summary`],
            'price': bundle.inputData?.[`${keyPrefix}price`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'published': bundle.inputData?.[`${keyPrefix}published`],
            'minted': bundle.inputData?.[`${keyPrefix}minted`],
            'blockchainId': bundle.inputData?.[`${keyPrefix}blockchainId`],
            'blockchainName': bundle.inputData?.[`${keyPrefix}blockchainName`],
            'mintedTimestamp': bundle.inputData?.[`${keyPrefix}mintedTimestamp`],
            'mintTransactionHash': bundle.inputData?.[`${keyPrefix}mintTransactionHash`],
            'blockchainBlockId': bundle.inputData?.[`${keyPrefix}blockchainBlockId`],
            'primaryImageUrl': bundle.inputData?.[`${keyPrefix}primaryImageUrl`],
            'coverUrl': bundle.inputData?.[`${keyPrefix}coverUrl`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
        }
    },
}
