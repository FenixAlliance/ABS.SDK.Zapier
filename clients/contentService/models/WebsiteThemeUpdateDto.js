const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
                key: `${keyPrefix}authorName`,
                label: `[${labelPrefix}authorName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}authorUrl`,
                label: `[${labelPrefix}authorUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}version`,
                label: `[${labelPrefix}version]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tags`,
                label: `[${labelPrefix}tags]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'authorName': bundle.inputData?.[`${keyPrefix}authorName`],
            'authorUrl': bundle.inputData?.[`${keyPrefix}authorUrl`],
            'version': bundle.inputData?.[`${keyPrefix}version`],
            'tags': bundle.inputData?.[`${keyPrefix}tags`],
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
        }
    },
}
