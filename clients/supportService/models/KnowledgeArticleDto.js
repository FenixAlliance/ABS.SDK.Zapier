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
                key: `${keyPrefix}slug`,
                label: `[${labelPrefix}slug]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}excerpt`,
                label: `[${labelPrefix}excerpt]`,
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
                key: `${keyPrefix}highlightImage`,
                label: `[${labelPrefix}highlightImage]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}seoTitle`,
                label: `[${labelPrefix}seoTitle]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}seoKeyWords`,
                label: `[${labelPrefix}seoKeyWords]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}metaDescription`,
                label: `[${labelPrefix}metaDescription]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}published`,
                label: `[${labelPrefix}published]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}releaseDateTime`,
                label: `[${labelPrefix}releaseDateTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}lastModification`,
                label: `[${labelPrefix}lastModification]`,
                type: 'string',
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
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'slug': bundle.inputData?.[`${keyPrefix}slug`],
            'excerpt': bundle.inputData?.[`${keyPrefix}excerpt`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'content': bundle.inputData?.[`${keyPrefix}content`],
            'highlightImage': bundle.inputData?.[`${keyPrefix}highlightImage`],
            'seoTitle': bundle.inputData?.[`${keyPrefix}seoTitle`],
            'seoKeyWords': bundle.inputData?.[`${keyPrefix}seoKeyWords`],
            'metaDescription': bundle.inputData?.[`${keyPrefix}metaDescription`],
            'published': bundle.inputData?.[`${keyPrefix}published`],
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'releaseDateTime': bundle.inputData?.[`${keyPrefix}releaseDateTime`],
            'lastModification': bundle.inputData?.[`${keyPrefix}lastModification`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
        }
    },
}
