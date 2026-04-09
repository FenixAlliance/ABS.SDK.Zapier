const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enableBreadcrumbsOnMobileDevices`,
                label: `[${labelPrefix}enableBreadcrumbsOnMobileDevices]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enableCategoriesOnBreadcrumbs`,
                label: `[${labelPrefix}enableCategoriesOnBreadcrumbs]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enablePostTypesOnBreadcrumbs`,
                label: `[${labelPrefix}enablePostTypesOnBreadcrumbs]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}breadcrumbsPrefix`,
                label: `[${labelPrefix}breadcrumbsPrefix]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}breadcrumbsFontSize`,
                label: `[${labelPrefix}breadcrumbsFontSize]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}breadcrumbsSeparator`,
                label: `[${labelPrefix}breadcrumbsSeparator]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}breadcrumbsFontColor`,
                label: `[${labelPrefix}breadcrumbsFontColor]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}breadcrumbsFontColorHover`,
                label: `[${labelPrefix}breadcrumbsFontColorHover]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enableBreadcrumbsOnMobileDevices': bundle.inputData?.[`${keyPrefix}enableBreadcrumbsOnMobileDevices`],
            'enableCategoriesOnBreadcrumbs': bundle.inputData?.[`${keyPrefix}enableCategoriesOnBreadcrumbs`],
            'enablePostTypesOnBreadcrumbs': bundle.inputData?.[`${keyPrefix}enablePostTypesOnBreadcrumbs`],
            'breadcrumbsPrefix': bundle.inputData?.[`${keyPrefix}breadcrumbsPrefix`],
            'breadcrumbsFontSize': bundle.inputData?.[`${keyPrefix}breadcrumbsFontSize`],
            'breadcrumbsSeparator': bundle.inputData?.[`${keyPrefix}breadcrumbsSeparator`],
            'breadcrumbsFontColor': bundle.inputData?.[`${keyPrefix}breadcrumbsFontColor`],
            'breadcrumbsFontColorHover': bundle.inputData?.[`${keyPrefix}breadcrumbsFontColorHover`],
        }
    },
}
