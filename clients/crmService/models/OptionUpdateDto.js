const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}key`,
                label: `[${labelPrefix}key]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}value`,
                label: `[${labelPrefix}value]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}portalId`,
                label: `[${labelPrefix}portalId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}frozen`,
                label: `[${labelPrefix}frozen]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}autoload`,
                label: `[${labelPrefix}autoload]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}transient`,
                label: `[${labelPrefix}transient]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}expiration`,
                label: `[${labelPrefix}expiration]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'key': bundle.inputData?.[`${keyPrefix}key`],
            'value': bundle.inputData?.[`${keyPrefix}value`],
            'portalId': bundle.inputData?.[`${keyPrefix}portalId`],
            'frozen': bundle.inputData?.[`${keyPrefix}frozen`],
            'autoload': bundle.inputData?.[`${keyPrefix}autoload`],
            'transient': bundle.inputData?.[`${keyPrefix}transient`],
            'expiration': bundle.inputData?.[`${keyPrefix}expiration`],
        }
    },
}
