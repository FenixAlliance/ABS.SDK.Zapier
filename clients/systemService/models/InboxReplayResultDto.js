const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}newInboxMessageId`,
                label: `[${labelPrefix}newInboxMessageId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}rootInboxMessageId`,
                label: `[${labelPrefix}rootInboxMessageId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}generation`,
                label: `[${labelPrefix}generation]`,
                type: 'integer',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'newInboxMessageId': bundle.inputData?.[`${keyPrefix}newInboxMessageId`],
            'rootInboxMessageId': bundle.inputData?.[`${keyPrefix}rootInboxMessageId`],
            'generation': bundle.inputData?.[`${keyPrefix}generation`],
        }
    },
}
