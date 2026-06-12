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
                key: `${keyPrefix}slug`,
                label: `[${labelPrefix}slug]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
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
                key: `${keyPrefix}content`,
                label: `[${labelPrefix}content]`,
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
                key: `${keyPrefix}razorContent`,
                label: `[${labelPrefix}razorContent]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}highlightImage`,
                label: `[${labelPrefix}highlightImage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}order`,
                label: `[${labelPrefix}order]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'slug': bundle.inputData?.[`${keyPrefix}slug`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'content': bundle.inputData?.[`${keyPrefix}content`],
            'htmlContent': bundle.inputData?.[`${keyPrefix}htmlContent`],
            'cssContent': bundle.inputData?.[`${keyPrefix}cssContent`],
            'jsContent': bundle.inputData?.[`${keyPrefix}jsContent`],
            'razorContent': bundle.inputData?.[`${keyPrefix}razorContent`],
            'highlightImage': bundle.inputData?.[`${keyPrefix}highlightImage`],
            'order': bundle.inputData?.[`${keyPrefix}order`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
        }
    },
}
