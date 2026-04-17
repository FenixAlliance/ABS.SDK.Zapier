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
                type: 'string',
            },
            {
                key: `${keyPrefix}code`,
                label: `[${labelPrefix}code]`,
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
                key: `${keyPrefix}htmlContent`,
                label: `[${labelPrefix}htmlContent]`,
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
                ],
            },
            {
                key: `${keyPrefix}blogPostCategoryID`,
                label: `[${labelPrefix}blogPostCategoryID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}webTemplateID`,
                label: `[${labelPrefix}webTemplateID]`,
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
            'code': bundle.inputData?.[`${keyPrefix}code`],
            'published': bundle.inputData?.[`${keyPrefix}published`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'htmlContent': bundle.inputData?.[`${keyPrefix}htmlContent`],
            'featuredImageUrl': bundle.inputData?.[`${keyPrefix}featuredImageUrl`],
            'codeType': bundle.inputData?.[`${keyPrefix}codeType`],
            'blogPostCategoryID': bundle.inputData?.[`${keyPrefix}blogPostCategoryID`],
            'webTemplateID': bundle.inputData?.[`${keyPrefix}webTemplateID`],
        }
    },
}
