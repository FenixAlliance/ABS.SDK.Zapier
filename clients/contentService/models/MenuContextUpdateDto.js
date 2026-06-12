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
                key: `${keyPrefix}category`,
                label: `[${labelPrefix}category]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}component`,
                label: `[${labelPrefix}component]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}studioMenu`,
                label: `[${labelPrefix}studioMenu]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}customCss`,
                label: `[${labelPrefix}customCss]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customJs`,
                label: `[${labelPrefix}customJs]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}customHtml`,
                label: `[${labelPrefix}customHtml]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}loggedInOnly`,
                label: `[${labelPrefix}loggedInOnly]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}backgroundImage`,
                label: `[${labelPrefix}backgroundImage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}webPortalId`,
                label: `[${labelPrefix}webPortalId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'category': bundle.inputData?.[`${keyPrefix}category`],
            'component': bundle.inputData?.[`${keyPrefix}component`],
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'studioMenu': bundle.inputData?.[`${keyPrefix}studioMenu`],
            'customCss': bundle.inputData?.[`${keyPrefix}customCss`],
            'customJs': bundle.inputData?.[`${keyPrefix}customJs`],
            'customHtml': bundle.inputData?.[`${keyPrefix}customHtml`],
            'loggedInOnly': bundle.inputData?.[`${keyPrefix}loggedInOnly`],
            'backgroundImage': bundle.inputData?.[`${keyPrefix}backgroundImage`],
            'webPortalId': bundle.inputData?.[`${keyPrefix}webPortalId`],
        }
    },
}
