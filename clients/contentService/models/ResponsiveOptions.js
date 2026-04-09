const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enableResponsive`,
                label: `[${labelPrefix}enableResponsive]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableMobileZoom`,
                label: `[${labelPrefix}enableMobileZoom]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}gridResponsiveBreakpoint`,
                label: `[${labelPrefix}gridResponsiveBreakpoint]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}headerResponsiveBreakpoint`,
                label: `[${labelPrefix}headerResponsiveBreakpoint]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}contentResponsiveBreakpoint`,
                label: `[${labelPrefix}contentResponsiveBreakpoint]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}sidebarResponsiveBreakpoint`,
                label: `[${labelPrefix}sidebarResponsiveBreakpoint]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}elementResponsiveBreakpointSm`,
                label: `[${labelPrefix}elementResponsiveBreakpointSm]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}elementResponsiveBreakpointMd`,
                label: `[${labelPrefix}elementResponsiveBreakpointMd]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}elementResponsiveBreakpointLg`,
                label: `[${labelPrefix}elementResponsiveBreakpointLg]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}responsiveMinFontSizeFactor`,
                label: `[${labelPrefix}responsiveMinFontSizeFactor]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}typographyResponsiveSensitivity`,
                label: `[${labelPrefix}typographyResponsiveSensitivity]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enableResponsive': bundle.inputData?.[`${keyPrefix}enableResponsive`],
            'enableMobileZoom': bundle.inputData?.[`${keyPrefix}enableMobileZoom`],
            'gridResponsiveBreakpoint': bundle.inputData?.[`${keyPrefix}gridResponsiveBreakpoint`],
            'headerResponsiveBreakpoint': bundle.inputData?.[`${keyPrefix}headerResponsiveBreakpoint`],
            'contentResponsiveBreakpoint': bundle.inputData?.[`${keyPrefix}contentResponsiveBreakpoint`],
            'sidebarResponsiveBreakpoint': bundle.inputData?.[`${keyPrefix}sidebarResponsiveBreakpoint`],
            'elementResponsiveBreakpointSm': bundle.inputData?.[`${keyPrefix}elementResponsiveBreakpointSm`],
            'elementResponsiveBreakpointMd': bundle.inputData?.[`${keyPrefix}elementResponsiveBreakpointMd`],
            'elementResponsiveBreakpointLg': bundle.inputData?.[`${keyPrefix}elementResponsiveBreakpointLg`],
            'responsiveMinFontSizeFactor': bundle.inputData?.[`${keyPrefix}responsiveMinFontSizeFactor`],
            'typographyResponsiveSensitivity': bundle.inputData?.[`${keyPrefix}typographyResponsiveSensitivity`],
        }
    },
}
