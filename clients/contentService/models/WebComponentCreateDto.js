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
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}htmlContent`,
                label: `[${labelPrefix}htmlContent]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cssContent`,
                label: `[${labelPrefix}cssContent]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}jsContent`,
                label: `[${labelPrefix}jsContent]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}codeType`,
                label: `[${labelPrefix}codeType]`,
                type: 'string',
                choices: [
                    'Razor',
                    'CSharp',
                    'CSHtml',
                    'Liquid',
                    'Html5',
                    'Markdown',
                    'Markup',
                ],
            },
            {
                key: `${keyPrefix}published`,
                label: `[${labelPrefix}published]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}featuredImageUrl`,
                label: `[${labelPrefix}featuredImageUrl]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'htmlContent': bundle.inputData?.[`${keyPrefix}htmlContent`],
            'cssContent': bundle.inputData?.[`${keyPrefix}cssContent`],
            'jsContent': bundle.inputData?.[`${keyPrefix}jsContent`],
            'codeType': bundle.inputData?.[`${keyPrefix}codeType`],
            'published': bundle.inputData?.[`${keyPrefix}published`],
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'featuredImageUrl': bundle.inputData?.[`${keyPrefix}featuredImageUrl`],
        }
    },
}
