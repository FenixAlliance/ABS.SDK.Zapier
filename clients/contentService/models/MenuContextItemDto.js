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
                key: `${keyPrefix}order`,
                label: `[${labelPrefix}order]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}text`,
                label: `[${labelPrefix}text]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}url`,
                label: `[${labelPrefix}url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}icon`,
                label: `[${labelPrefix}icon]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}target`,
                label: `[${labelPrefix}target]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tooltip`,
                label: `[${labelPrefix}tooltip]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentMenuContextItemId`,
                label: `[${labelPrefix}parentMenuContextItemId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}menuContextId`,
                label: `[${labelPrefix}menuContextId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'order': bundle.inputData?.[`${keyPrefix}order`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'text': bundle.inputData?.[`${keyPrefix}text`],
            'url': bundle.inputData?.[`${keyPrefix}url`],
            'icon': bundle.inputData?.[`${keyPrefix}icon`],
            'target': bundle.inputData?.[`${keyPrefix}target`],
            'tooltip': bundle.inputData?.[`${keyPrefix}tooltip`],
            'parentMenuContextItemId': bundle.inputData?.[`${keyPrefix}parentMenuContextItemId`],
            'menuContextId': bundle.inputData?.[`${keyPrefix}menuContextId`],
        }
    },
}
