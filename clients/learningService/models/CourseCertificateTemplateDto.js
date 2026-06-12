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
                key: `${keyPrefix}courseId`,
                label: `[${labelPrefix}courseId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}webPortalId`,
                label: `[${labelPrefix}webPortalId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}websiteThemeId`,
                label: `[${labelPrefix}websiteThemeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileId`,
                label: `[${labelPrefix}socialProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentWebContentId`,
                label: `[${labelPrefix}parentWebContentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentWebContentVersionId`,
                label: `[${labelPrefix}parentWebContentVersionId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'courseId': bundle.inputData?.[`${keyPrefix}courseId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'webPortalId': bundle.inputData?.[`${keyPrefix}webPortalId`],
            'websiteThemeId': bundle.inputData?.[`${keyPrefix}websiteThemeId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
            'parentWebContentId': bundle.inputData?.[`${keyPrefix}parentWebContentId`],
            'parentWebContentVersionId': bundle.inputData?.[`${keyPrefix}parentWebContentVersionId`],
        }
    },
}
