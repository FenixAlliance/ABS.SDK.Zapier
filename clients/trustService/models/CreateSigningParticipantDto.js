const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}role`,
                label: `[${labelPrefix}role]`,
                type: 'string',
                choices: [
                    'Signer',
                    'Approver',
                    'Viewer',
                    'Witness',
                    'CarbonCopy',
                    'System',
                ],
            },
            {
                key: `${keyPrefix}routingOrder`,
                label: `[${labelPrefix}routingOrder]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}externalReference`,
                label: `[${labelPrefix}externalReference]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'role': bundle.inputData?.[`${keyPrefix}role`],
            'routingOrder': bundle.inputData?.[`${keyPrefix}routingOrder`],
            'externalReference': bundle.inputData?.[`${keyPrefix}externalReference`],
        }
    },
}
