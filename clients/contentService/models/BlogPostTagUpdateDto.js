const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}slug`,
                label: `[${labelPrefix}slug]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
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
                key: `${keyPrefix}seoTitle`,
                label: `[${labelPrefix}seoTitle]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}metaDescription`,
                label: `[${labelPrefix}metaDescription]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cornerstoneContent`,
                label: `[${labelPrefix}cornerstoneContent]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}allowSerachEngines`,
                label: `[${labelPrefix}allowSerachEngines]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}seoKeyPhrases`,
                label: `[${labelPrefix}seoKeyPhrases]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}canonicalUrl`,
                label: `[${labelPrefix}canonicalUrl]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}imageURL`,
                label: `[${labelPrefix}imageURL]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}image`,
                label: `[${labelPrefix}image]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}webPortalID`,
                label: `[${labelPrefix}webPortalID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'slug': bundle.inputData?.[`${keyPrefix}slug`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'seoTitle': bundle.inputData?.[`${keyPrefix}seoTitle`],
            'metaDescription': bundle.inputData?.[`${keyPrefix}metaDescription`],
            'cornerstoneContent': bundle.inputData?.[`${keyPrefix}cornerstoneContent`],
            'allowSerachEngines': bundle.inputData?.[`${keyPrefix}allowSerachEngines`],
            'seoKeyPhrases': bundle.inputData?.[`${keyPrefix}seoKeyPhrases`],
            'canonicalUrl': bundle.inputData?.[`${keyPrefix}canonicalUrl`],
            'imageURL': bundle.inputData?.[`${keyPrefix}imageURL`],
            'image': bundle.inputData?.[`${keyPrefix}image`],
            'webPortalID': bundle.inputData?.[`${keyPrefix}webPortalID`],
        }
    },
}
