const utils = require('../utils/utils');
const Background = require('../models/Background');
const Padding = require('../models/Padding');
const Typography = require('../models/Typography');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}numberOfColumns`,
                label: `[${labelPrefix}numberOfColumns]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}enableWidgets`,
                label: `[${labelPrefix}enableWidgets]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableCopyrightBar`,
                label: `[${labelPrefix}enableCopyrightBar]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}centerWidgetsContent`,
                label: `[${labelPrefix}centerWidgetsContent]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}centerCopyrightContent`,
                label: `[${labelPrefix}centerCopyrightContent]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableVerticalWidgetDividerLine`,
                label: `[${labelPrefix}enableVerticalWidgetDividerLine]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}verticalWidgetDividerLineSize`,
                label: `[${labelPrefix}verticalWidgetDividerLineSize]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}copyrightText`,
                label: `[${labelPrefix}copyrightText]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}copyrightBackgroundColor`,
                label: `[${labelPrefix}copyrightBackgroundColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}borderSize`,
                label: `[${labelPrefix}borderSize]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}borderColor`,
                label: `[${labelPrefix}borderColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}widgetDividerColor`,
                label: `[${labelPrefix}widgetDividerColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}widgetDivider`,
                label: `[${labelPrefix}widgetDivider]`,
                type: 'string',
                choices: [
                    'None',
                    'Solid',
                    'Dotted',
                    'Double',
                    'Groove',
                    'Ridge',
                ],
            },
            ...Padding.fields(`${keyPrefix}copyrightPadding`, isInput),
            ...Padding.fields(`${keyPrefix}widgetsAreaPadding`, isInput),
            ...Padding.fields(`${keyPrefix}footerAreaPadding`, isInput),
            ...Background.fields(`${keyPrefix}footerBackground`, isInput),
            ...Background.fields(`${keyPrefix}copyrightBackground`, isInput),
            ...Typography.fields(`${keyPrefix}headingsTypography`, isInput),
            ...Typography.fields(`${keyPrefix}widgetsTypography`, isInput),
            ...Typography.fields(`${keyPrefix}copyrightTypography`, isInput),
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'numberOfColumns': bundle.inputData?.[`${keyPrefix}numberOfColumns`],
            'enableWidgets': bundle.inputData?.[`${keyPrefix}enableWidgets`],
            'enableCopyrightBar': bundle.inputData?.[`${keyPrefix}enableCopyrightBar`],
            'centerWidgetsContent': bundle.inputData?.[`${keyPrefix}centerWidgetsContent`],
            'centerCopyrightContent': bundle.inputData?.[`${keyPrefix}centerCopyrightContent`],
            'enableVerticalWidgetDividerLine': bundle.inputData?.[`${keyPrefix}enableVerticalWidgetDividerLine`],
            'verticalWidgetDividerLineSize': bundle.inputData?.[`${keyPrefix}verticalWidgetDividerLineSize`],
            'copyrightText': bundle.inputData?.[`${keyPrefix}copyrightText`],
            'copyrightBackgroundColor': bundle.inputData?.[`${keyPrefix}copyrightBackgroundColor`],
            'borderSize': bundle.inputData?.[`${keyPrefix}borderSize`],
            'borderColor': bundle.inputData?.[`${keyPrefix}borderColor`],
            'widgetDividerColor': bundle.inputData?.[`${keyPrefix}widgetDividerColor`],
            'widgetDivider': bundle.inputData?.[`${keyPrefix}widgetDivider`],
            'copyrightPadding': utils.removeIfEmpty(Padding.mapping(bundle, `${keyPrefix}copyrightPadding`)),
            'widgetsAreaPadding': utils.removeIfEmpty(Padding.mapping(bundle, `${keyPrefix}widgetsAreaPadding`)),
            'footerAreaPadding': utils.removeIfEmpty(Padding.mapping(bundle, `${keyPrefix}footerAreaPadding`)),
            'footerBackground': utils.removeIfEmpty(Background.mapping(bundle, `${keyPrefix}footerBackground`)),
            'copyrightBackground': utils.removeIfEmpty(Background.mapping(bundle, `${keyPrefix}copyrightBackground`)),
            'headingsTypography': utils.removeIfEmpty(Typography.mapping(bundle, `${keyPrefix}headingsTypography`)),
            'widgetsTypography': utils.removeIfEmpty(Typography.mapping(bundle, `${keyPrefix}widgetsTypography`)),
            'copyrightTypography': utils.removeIfEmpty(Typography.mapping(bundle, `${keyPrefix}copyrightTypography`)),
        }
    },
}
