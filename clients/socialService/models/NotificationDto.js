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
                key: `${keyPrefix}read`,
                label: `[${labelPrefix}read]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}icon`,
                label: `[${labelPrefix}icon]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}imageUrl`,
                label: `[${labelPrefix}imageUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}redirectUrl`,
                label: `[${labelPrefix}redirectUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
                choices: [
                    'Event',
                    'Alert',
                    'Log',
                ],
            },
            {
                key: `${keyPrefix}socialProfileId`,
                label: `[${labelPrefix}socialProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}readTimestamp`,
                label: `[${labelPrefix}readTimestamp]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}issuedTimestamp`,
                label: `[${labelPrefix}issuedTimestamp]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'read': bundle.inputData?.[`${keyPrefix}read`],
            'icon': bundle.inputData?.[`${keyPrefix}icon`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'imageUrl': bundle.inputData?.[`${keyPrefix}imageUrl`],
            'redirectUrl': bundle.inputData?.[`${keyPrefix}redirectUrl`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
            'readTimestamp': bundle.inputData?.[`${keyPrefix}readTimestamp`],
            'issuedTimestamp': bundle.inputData?.[`${keyPrefix}issuedTimestamp`],
        }
    },
}
