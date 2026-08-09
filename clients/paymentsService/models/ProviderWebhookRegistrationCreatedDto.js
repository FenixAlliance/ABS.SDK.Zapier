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
                key: `${keyPrefix}providerCode`,
                label: `[${labelPrefix}providerCode]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}status`,
                label: `[${labelPrefix}status]`,
                type: 'string',
                choices: [
                    'Draft',
                    'Active',
                    'Disabled',
                    'Suspended',
                ],
            },
            {
                key: `${keyPrefix}webhookRegistrationKey`,
                label: `[${labelPrefix}webhookRegistrationKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}webhookUrl`,
                label: `[${labelPrefix}webhookUrl]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'providerCode': bundle.inputData?.[`${keyPrefix}providerCode`],
            'status': bundle.inputData?.[`${keyPrefix}status`],
            'webhookRegistrationKey': bundle.inputData?.[`${keyPrefix}webhookRegistrationKey`],
            'webhookUrl': bundle.inputData?.[`${keyPrefix}webhookUrl`],
        }
    },
}
