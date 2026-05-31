const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}webPortalID`,
                label: `[${labelPrefix}webPortalID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}websiteThemeID`,
                label: `[${labelPrefix}websiteThemeID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileID`,
                label: `[${labelPrefix}socialProfileID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentWebContentID`,
                label: `[${labelPrefix}parentWebContentID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}parentWebContentVersionID`,
                label: `[${labelPrefix}parentWebContentVersionID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'webPortalID': bundle.inputData?.[`${keyPrefix}webPortalID`],
            'websiteThemeID': bundle.inputData?.[`${keyPrefix}websiteThemeID`],
            'socialProfileID': bundle.inputData?.[`${keyPrefix}socialProfileID`],
            'parentWebContentID': bundle.inputData?.[`${keyPrefix}parentWebContentID`],
            'parentWebContentVersionID': bundle.inputData?.[`${keyPrefix}parentWebContentVersionID`],
        }
    },
}
