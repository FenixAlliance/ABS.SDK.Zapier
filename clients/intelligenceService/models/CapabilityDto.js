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
                key: `${keyPrefix}key`,
                label: `[${labelPrefix}key]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}category`,
                label: `[${labelPrefix}category]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}effect`,
                label: `[${labelPrefix}effect]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}risks`,
                label: `[${labelPrefix}risks]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}surfaces`,
                label: `[${labelPrefix}surfaces]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}requiredPermission`,
                label: `[${labelPrefix}requiredPermission]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}available`,
                label: `[${labelPrefix}available]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}deniedReason`,
                label: `[${labelPrefix}deniedReason]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}version`,
                label: `[${labelPrefix}version]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}inputSchema`,
                label: `[${labelPrefix}inputSchema]`,
                type: 'object',
            },
            {
                key: `${keyPrefix}outputSchema`,
                label: `[${labelPrefix}outputSchema]`,
                type: 'object',
            },
            {
                key: `${keyPrefix}isOutputCollection`,
                label: `[${labelPrefix}isOutputCollection]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}requiredInputs`,
                label: `[${labelPrefix}requiredInputs]`,
                list: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'key': bundle.inputData?.[`${keyPrefix}key`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'category': bundle.inputData?.[`${keyPrefix}category`],
            'effect': bundle.inputData?.[`${keyPrefix}effect`],
            'risks': bundle.inputData?.[`${keyPrefix}risks`],
            'surfaces': bundle.inputData?.[`${keyPrefix}surfaces`],
            'requiredPermission': bundle.inputData?.[`${keyPrefix}requiredPermission`],
            'available': bundle.inputData?.[`${keyPrefix}available`],
            'deniedReason': bundle.inputData?.[`${keyPrefix}deniedReason`],
            'version': bundle.inputData?.[`${keyPrefix}version`],
            'inputSchema': bundle.inputData?.[`${keyPrefix}inputSchema`],
            'outputSchema': bundle.inputData?.[`${keyPrefix}outputSchema`],
            'isOutputCollection': bundle.inputData?.[`${keyPrefix}isOutputCollection`],
            'requiredInputs': bundle.inputData?.[`${keyPrefix}requiredInputs`],
        }
    },
}
