const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}addressFamily`,
                label: `[${labelPrefix}addressFamily]`,
                type: 'string',
                choices: [
                    'Unspecified',
                    'Unix',
                    'InterNetwork',
                    'ImpLink',
                    'Pup',
                    'Chaos',
                    'NS',
                    'Iso',
                    'Ecma',
                    'DataKit',
                    'Ccitt',
                    'Sna',
                    'DecNet',
                    'DataLink',
                    'Lat',
                    'HyperChannel',
                    'AppleTalk',
                    'NetBios',
                    'VoiceView',
                    'FireFox',
                    'Banyan',
                    'Atm',
                    'InterNetworkV6',
                    'Cluster',
                    'Ieee12844',
                    'Irda',
                    'NetworkDesigners',
                    'Max',
                    'Packet',
                    'ControllerAreaNetwork',
                    'Unknown',
                ],
            },
            {
                key: `${keyPrefix}scopeId`,
                label: `[${labelPrefix}scopeId]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}isIPv6Multicast`,
                label: `[${labelPrefix}isIPv6Multicast]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isIPv6LinkLocal`,
                label: `[${labelPrefix}isIPv6LinkLocal]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isIPv6SiteLocal`,
                label: `[${labelPrefix}isIPv6SiteLocal]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isIPv6Teredo`,
                label: `[${labelPrefix}isIPv6Teredo]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isIPv6UniqueLocal`,
                label: `[${labelPrefix}isIPv6UniqueLocal]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isIPv4MappedToIPv6`,
                label: `[${labelPrefix}isIPv4MappedToIPv6]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}address`,
                label: `[${labelPrefix}address]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'addressFamily': bundle.inputData?.[`${keyPrefix}addressFamily`],
            'scopeId': bundle.inputData?.[`${keyPrefix}scopeId`],
            'isIPv6Multicast': bundle.inputData?.[`${keyPrefix}isIPv6Multicast`],
            'isIPv6LinkLocal': bundle.inputData?.[`${keyPrefix}isIPv6LinkLocal`],
            'isIPv6SiteLocal': bundle.inputData?.[`${keyPrefix}isIPv6SiteLocal`],
            'isIPv6Teredo': bundle.inputData?.[`${keyPrefix}isIPv6Teredo`],
            'isIPv6UniqueLocal': bundle.inputData?.[`${keyPrefix}isIPv6UniqueLocal`],
            'isIPv4MappedToIPv6': bundle.inputData?.[`${keyPrefix}isIPv4MappedToIPv6`],
            'address': bundle.inputData?.[`${keyPrefix}address`],
        }
    },
}
