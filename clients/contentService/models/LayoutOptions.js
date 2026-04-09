const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}singleSidebarWidth`,
                label: `[${labelPrefix}singleSidebarWidth]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}singleSidebarGutter`,
                label: `[${labelPrefix}singleSidebarGutter]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dialSidebarWidth1`,
                label: `[${labelPrefix}dialSidebarWidth1]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dialSidebarWidth2`,
                label: `[${labelPrefix}dialSidebarWidth2]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}dialSidebarGutter`,
                label: `[${labelPrefix}dialSidebarGutter]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fullWidthContentPadding`,
                label: `[${labelPrefix}fullWidthContentPadding]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}pageContentPaddingBottom`,
                label: `[${labelPrefix}pageContentPaddingBottom]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}pageContentPaddingTop`,
                label: `[${labelPrefix}pageContentPaddingTop]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}siteWidth`,
                label: `[${labelPrefix}siteWidth]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}layout`,
                label: `[${labelPrefix}layout]`,
                type: 'string',
                choices: [
                    'Boxed',
                    'Wide',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'singleSidebarWidth': bundle.inputData?.[`${keyPrefix}singleSidebarWidth`],
            'singleSidebarGutter': bundle.inputData?.[`${keyPrefix}singleSidebarGutter`],
            'dialSidebarWidth1': bundle.inputData?.[`${keyPrefix}dialSidebarWidth1`],
            'dialSidebarWidth2': bundle.inputData?.[`${keyPrefix}dialSidebarWidth2`],
            'dialSidebarGutter': bundle.inputData?.[`${keyPrefix}dialSidebarGutter`],
            'fullWidthContentPadding': bundle.inputData?.[`${keyPrefix}fullWidthContentPadding`],
            'pageContentPaddingBottom': bundle.inputData?.[`${keyPrefix}pageContentPaddingBottom`],
            'pageContentPaddingTop': bundle.inputData?.[`${keyPrefix}pageContentPaddingTop`],
            'siteWidth': bundle.inputData?.[`${keyPrefix}siteWidth`],
            'layout': bundle.inputData?.[`${keyPrefix}layout`],
        }
    },
}
