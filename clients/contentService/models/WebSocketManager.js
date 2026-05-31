const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}isWebSocketRequest`,
                label: `[${labelPrefix}isWebSocketRequest]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}webSocketRequestedProtocols`,
                label: `[${labelPrefix}webSocketRequestedProtocols]`,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'isWebSocketRequest': bundle.inputData?.[`${keyPrefix}isWebSocketRequest`],
            'webSocketRequestedProtocols': bundle.inputData?.[`${keyPrefix}webSocketRequestedProtocols`],
        }
    },
}
