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
                key: `${keyPrefix}courseID`,
                label: `[${labelPrefix}courseID]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessID`,
                label: `[${labelPrefix}businessID]`,
                required: true,
                type: 'string',
            },
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
                key: `${keyPrefix}businessProfileRecordID`,
                label: `[${labelPrefix}businessProfileRecordID]`,
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
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'courseID': bundle.inputData?.[`${keyPrefix}courseID`],
            'businessID': bundle.inputData?.[`${keyPrefix}businessID`],
            'webPortalID': bundle.inputData?.[`${keyPrefix}webPortalID`],
            'websiteThemeID': bundle.inputData?.[`${keyPrefix}websiteThemeID`],
            'businessProfileRecordID': bundle.inputData?.[`${keyPrefix}businessProfileRecordID`],
            'socialProfileID': bundle.inputData?.[`${keyPrefix}socialProfileID`],
            'parentWebContentID': bundle.inputData?.[`${keyPrefix}parentWebContentID`],
            'parentWebContentVersionID': bundle.inputData?.[`${keyPrefix}parentWebContentVersionID`],
        }
    },
}
