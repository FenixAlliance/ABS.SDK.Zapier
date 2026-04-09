const utils = require('../utils/utils');
const Typography = require('../models/Typography');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}sideNavigationFontSize`,
                label: `[${labelPrefix}sideNavigationFontSize]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}mainMenuDropdownFontColor`,
                label: `[${labelPrefix}mainMenuDropdownFontColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}mainMenuFontHoverActiveColor`,
                label: `[${labelPrefix}mainMenuFontHoverActiveColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}mainMenuDropdownSeparatorColor`,
                label: `[${labelPrefix}mainMenuDropdownSeparatorColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}mainMenuDropdownBackgroundHoverColor`,
                label: `[${labelPrefix}mainMenuDropdownBackgroundHoverColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}mainMenuDropdownBackgroundColor`,
                label: `[${labelPrefix}mainMenuDropdownBackgroundColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}menuHighlightLabelRadius`,
                label: `[${labelPrefix}menuHighlightLabelRadius]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enableMainMenuCartIcon`,
                label: `[${labelPrefix}enableMainMenuCartIcon]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableMainMenuDropShadow`,
                label: `[${labelPrefix}enableMainMenuDropShadow]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableMainMenuSearchIcon`,
                label: `[${labelPrefix}enableMainMenuSearchIcon]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableMainMenuDropdownDivider`,
                label: `[${labelPrefix}enableMainMenuDropdownDivider]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableMainMenuNotificationsIcon`,
                label: `[${labelPrefix}enableMainMenuNotificationsIcon]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableMainMenuIconCircleBorders`,
                label: `[${labelPrefix}enableMainMenuIconCircleBorders]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}mainMenuDropdownWidth`,
                label: `[${labelPrefix}mainMenuDropdownWidth]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}mainMenuDropdownFontSize`,
                label: `[${labelPrefix}mainMenuDropdownFontSize]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}mainMenuDropdownItemPadding`,
                label: `[${labelPrefix}mainMenuDropdownItemPadding]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}mainMenuDropdownTopBorderSize`,
                label: `[${labelPrefix}mainMenuDropdownTopBorderSize]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}mainMenuHeight`,
                label: `[${labelPrefix}mainMenuHeight]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}mainMenuItemPadding`,
                label: `[${labelPrefix}mainMenuItemPadding]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}mainMenuHighlightBarSize`,
                label: `[${labelPrefix}mainMenuHighlightBarSize]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}mainMenuItemPaddingOnMobile`,
                label: `[${labelPrefix}mainMenuItemPaddingOnMobile]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}mainMenuHighlightBackgroundColor`,
                label: `[${labelPrefix}mainMenuHighlightBackgroundColor]`,
                type: 'integer',
            },
            ...Typography.fields(`${keyPrefix}mainMenuTypography`, isInput),
            {
                key: `${keyPrefix}menuHighlightStyle`,
                label: `[${labelPrefix}menuHighlightStyle]`,
                type: 'string',
                choices: [
                    'TopBar',
                    'BottomBar',
                    'Arrow',
                    'ColorOnly',
                    'Background',
                ],
            },
            {
                key: `${keyPrefix}mainMenuSearchLayout`,
                label: `[${labelPrefix}mainMenuSearchLayout]`,
                type: 'string',
                choices: [
                    'Dropdown',
                    'Overlay',
                ],
            },
            {
                key: `${keyPrefix}menuDropdownAnimation`,
                label: `[${labelPrefix}menuDropdownAnimation]`,
                type: 'string',
                choices: [
                    'Fade',
                    'Slide',
                ],
            },
            {
                key: `${keyPrefix}menuDropdownIndicator`,
                label: `[${labelPrefix}menuDropdownIndicator]`,
                type: 'string',
                choices: [
                    'None',
                    'Parent',
                    'ParentAndChild',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'sideNavigationFontSize': bundle.inputData?.[`${keyPrefix}sideNavigationFontSize`],
            'mainMenuDropdownFontColor': bundle.inputData?.[`${keyPrefix}mainMenuDropdownFontColor`],
            'mainMenuFontHoverActiveColor': bundle.inputData?.[`${keyPrefix}mainMenuFontHoverActiveColor`],
            'mainMenuDropdownSeparatorColor': bundle.inputData?.[`${keyPrefix}mainMenuDropdownSeparatorColor`],
            'mainMenuDropdownBackgroundHoverColor': bundle.inputData?.[`${keyPrefix}mainMenuDropdownBackgroundHoverColor`],
            'mainMenuDropdownBackgroundColor': bundle.inputData?.[`${keyPrefix}mainMenuDropdownBackgroundColor`],
            'menuHighlightLabelRadius': bundle.inputData?.[`${keyPrefix}menuHighlightLabelRadius`],
            'enableMainMenuCartIcon': bundle.inputData?.[`${keyPrefix}enableMainMenuCartIcon`],
            'enableMainMenuDropShadow': bundle.inputData?.[`${keyPrefix}enableMainMenuDropShadow`],
            'enableMainMenuSearchIcon': bundle.inputData?.[`${keyPrefix}enableMainMenuSearchIcon`],
            'enableMainMenuDropdownDivider': bundle.inputData?.[`${keyPrefix}enableMainMenuDropdownDivider`],
            'enableMainMenuNotificationsIcon': bundle.inputData?.[`${keyPrefix}enableMainMenuNotificationsIcon`],
            'enableMainMenuIconCircleBorders': bundle.inputData?.[`${keyPrefix}enableMainMenuIconCircleBorders`],
            'mainMenuDropdownWidth': bundle.inputData?.[`${keyPrefix}mainMenuDropdownWidth`],
            'mainMenuDropdownFontSize': bundle.inputData?.[`${keyPrefix}mainMenuDropdownFontSize`],
            'mainMenuDropdownItemPadding': bundle.inputData?.[`${keyPrefix}mainMenuDropdownItemPadding`],
            'mainMenuDropdownTopBorderSize': bundle.inputData?.[`${keyPrefix}mainMenuDropdownTopBorderSize`],
            'mainMenuHeight': bundle.inputData?.[`${keyPrefix}mainMenuHeight`],
            'mainMenuItemPadding': bundle.inputData?.[`${keyPrefix}mainMenuItemPadding`],
            'mainMenuHighlightBarSize': bundle.inputData?.[`${keyPrefix}mainMenuHighlightBarSize`],
            'mainMenuItemPaddingOnMobile': bundle.inputData?.[`${keyPrefix}mainMenuItemPaddingOnMobile`],
            'mainMenuHighlightBackgroundColor': bundle.inputData?.[`${keyPrefix}mainMenuHighlightBackgroundColor`],
            'mainMenuTypography': utils.removeIfEmpty(Typography.mapping(bundle, `${keyPrefix}mainMenuTypography`)),
            'menuHighlightStyle': bundle.inputData?.[`${keyPrefix}menuHighlightStyle`],
            'mainMenuSearchLayout': bundle.inputData?.[`${keyPrefix}mainMenuSearchLayout`],
            'menuDropdownAnimation': bundle.inputData?.[`${keyPrefix}menuDropdownAnimation`],
            'menuDropdownIndicator': bundle.inputData?.[`${keyPrefix}menuDropdownIndicator`],
        }
    },
}
