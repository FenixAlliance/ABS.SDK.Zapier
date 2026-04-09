const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enableFadingAnimations`,
                label: `[${labelPrefix}enableFadingAnimations]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enablePageTitleBarHeadings`,
                label: `[${labelPrefix}enablePageTitleBarHeadings]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableFullWidthPageTitleBar`,
                label: `[${labelPrefix}enableFullWidthPageTitleBar]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableBackgroundImageParallax`,
                label: `[${labelPrefix}enableBackgroundImageParallax]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableFullWidthBackgroundImage`,
                label: `[${labelPrefix}enableFullWidthBackgroundImage]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}backgroundImageURL`,
                label: `[${labelPrefix}backgroundImageURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}retinaBackgroundImageURL`,
                label: `[${labelPrefix}retinaBackgroundImageURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}backgroundColor`,
                label: `[${labelPrefix}backgroundColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bordersColor`,
                label: `[${labelPrefix}bordersColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}headingFontColor`,
                label: `[${labelPrefix}headingFontColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}headingFontSize`,
                label: `[${labelPrefix}headingFontSize]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}headingLineHeight`,
                label: `[${labelPrefix}headingLineHeight]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subheadingFontColor`,
                label: `[${labelPrefix}subheadingFontColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}subheadingFontSize`,
                label: `[${labelPrefix}subheadingFontSize]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}pageTitleBar`,
                label: `[${labelPrefix}pageTitleBar]`,
                type: 'string',
                choices: [
                    'ShowBarAndContent',
                    'ShowContentOnly',
                    'Hide',
                ],
            },
            {
                key: `${keyPrefix}pageTitleBarContent`,
                label: `[${labelPrefix}pageTitleBarContent]`,
                type: 'string',
                choices: [
                    'None',
                    'SearchBar',
                    'Breadcrumbs',
                ],
            },
            {
                key: `${keyPrefix}pageTitleBarTextAlignment`,
                label: `[${labelPrefix}pageTitleBarTextAlignment]`,
                type: 'string',
                choices: [
                    'Center',
                    'Right',
                    'Left',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enableFadingAnimations': bundle.inputData?.[`${keyPrefix}enableFadingAnimations`],
            'enablePageTitleBarHeadings': bundle.inputData?.[`${keyPrefix}enablePageTitleBarHeadings`],
            'enableFullWidthPageTitleBar': bundle.inputData?.[`${keyPrefix}enableFullWidthPageTitleBar`],
            'enableBackgroundImageParallax': bundle.inputData?.[`${keyPrefix}enableBackgroundImageParallax`],
            'enableFullWidthBackgroundImage': bundle.inputData?.[`${keyPrefix}enableFullWidthBackgroundImage`],
            'backgroundImageURL': bundle.inputData?.[`${keyPrefix}backgroundImageURL`],
            'retinaBackgroundImageURL': bundle.inputData?.[`${keyPrefix}retinaBackgroundImageURL`],
            'backgroundColor': bundle.inputData?.[`${keyPrefix}backgroundColor`],
            'bordersColor': bundle.inputData?.[`${keyPrefix}bordersColor`],
            'headingFontColor': bundle.inputData?.[`${keyPrefix}headingFontColor`],
            'headingFontSize': bundle.inputData?.[`${keyPrefix}headingFontSize`],
            'headingLineHeight': bundle.inputData?.[`${keyPrefix}headingLineHeight`],
            'subheadingFontColor': bundle.inputData?.[`${keyPrefix}subheadingFontColor`],
            'subheadingFontSize': bundle.inputData?.[`${keyPrefix}subheadingFontSize`],
            'pageTitleBar': bundle.inputData?.[`${keyPrefix}pageTitleBar`],
            'pageTitleBarContent': bundle.inputData?.[`${keyPrefix}pageTitleBarContent`],
            'pageTitleBarTextAlignment': bundle.inputData?.[`${keyPrefix}pageTitleBarTextAlignment`],
        }
    },
}
