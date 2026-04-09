const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}root`,
                label: `[${labelPrefix}root]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}domain`,
                label: `[${labelPrefix}domain]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}disabled`,
                label: `[${labelPrefix}disabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}websiteThemeID`,
                label: `[${labelPrefix}websiteThemeID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessDomainID`,
                label: `[${labelPrefix}businessDomainID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessProfileRecordID`,
                label: `[${labelPrefix}businessProfileRecordID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessPortalApplicationID`,
                label: `[${labelPrefix}businessPortalApplicationID]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'root': bundle.inputData?.[`${keyPrefix}root`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'domain': bundle.inputData?.[`${keyPrefix}domain`],
            'disabled': bundle.inputData?.[`${keyPrefix}disabled`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'websiteThemeID': bundle.inputData?.[`${keyPrefix}websiteThemeID`],
            'businessDomainID': bundle.inputData?.[`${keyPrefix}businessDomainID`],
            'businessProfileRecordID': bundle.inputData?.[`${keyPrefix}businessProfileRecordID`],
            'businessPortalApplicationID': bundle.inputData?.[`${keyPrefix}businessPortalApplicationID`],
        }
    },
}
