const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
            'webPortalId': bundle.inputData?.[`${keyPrefix}webPortalId`],
            'websiteThemeId': bundle.inputData?.[`${keyPrefix}websiteThemeId`],
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
            'parentWebContentId': bundle.inputData?.[`${keyPrefix}parentWebContentId`],
            'parentWebContentVersionId': bundle.inputData?.[`${keyPrefix}parentWebContentVersionId`],
        }
    },
}
