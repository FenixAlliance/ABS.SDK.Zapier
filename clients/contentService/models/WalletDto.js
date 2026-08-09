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
                key: `${keyPrefix}balance`,
                label: `[${labelPrefix}balance]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}cryptoBalance`,
                label: `[${labelPrefix}cryptoBalance]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}testMode`,
                label: `[${labelPrefix}testMode]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}verified`,
                label: `[${labelPrefix}verified]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}forexRate`,
                label: `[${labelPrefix}forexRate]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}balanceInUsd`,
                label: `[${labelPrefix}balanceInUsd]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}mainNetEtherBalance`,
                label: `[${labelPrefix}mainNetEtherBalance]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}ethereumAddress`,
                label: `[${labelPrefix}ethereumAddress]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ethereumPublicKey`,
                label: `[${labelPrefix}ethereumPublicKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}ethereumPrivateKey`,
                label: `[${labelPrefix}ethereumPrivateKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}rollingReservePercent`,
                label: `[${labelPrefix}rollingReservePercent]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'balance': bundle.inputData?.[`${keyPrefix}balance`],
            'cryptoBalance': bundle.inputData?.[`${keyPrefix}cryptoBalance`],
            'testMode': bundle.inputData?.[`${keyPrefix}testMode`],
            'verified': bundle.inputData?.[`${keyPrefix}verified`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'forexRate': bundle.inputData?.[`${keyPrefix}forexRate`],
            'balanceInUsd': bundle.inputData?.[`${keyPrefix}balanceInUsd`],
            'mainNetEtherBalance': bundle.inputData?.[`${keyPrefix}mainNetEtherBalance`],
            'ethereumAddress': bundle.inputData?.[`${keyPrefix}ethereumAddress`],
            'ethereumPublicKey': bundle.inputData?.[`${keyPrefix}ethereumPublicKey`],
            'ethereumPrivateKey': bundle.inputData?.[`${keyPrefix}ethereumPrivateKey`],
            'rollingReservePercent': bundle.inputData?.[`${keyPrefix}rollingReservePercent`],
        }
    },
}
