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
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}published`,
                label: `[${labelPrefix}published]`,
                type: 'boolean',
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
                key: `${keyPrefix}markup`,
                label: `[${labelPrefix}markup]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}featuredImageUrl`,
                label: `[${labelPrefix}featuredImageUrl]`,
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
                key: `${keyPrefix}blogPostCategoryId`,
                label: `[${labelPrefix}blogPostCategoryId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}webTemplateId`,
                label: `[${labelPrefix}webTemplateId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'published': bundle.inputData?.[`${keyPrefix}published`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'markup': bundle.inputData?.[`${keyPrefix}markup`],
            'featuredImageUrl': bundle.inputData?.[`${keyPrefix}featuredImageUrl`],
            'codeType': bundle.inputData?.[`${keyPrefix}codeType`],
            'blogPostCategoryId': bundle.inputData?.[`${keyPrefix}blogPostCategoryId`],
            'webTemplateId': bundle.inputData?.[`${keyPrefix}webTemplateId`],
        }
    },
}
