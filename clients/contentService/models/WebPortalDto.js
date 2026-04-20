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
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}enrollmentId`,
                label: `[${labelPrefix}enrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}websiteThemeId`,
                label: `[${labelPrefix}websiteThemeId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessDomainId`,
                label: `[${labelPrefix}businessDomainId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessPortalApplicationId`,
                label: `[${labelPrefix}businessPortalApplicationId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'root': bundle.inputData?.[`${keyPrefix}root`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'domain': bundle.inputData?.[`${keyPrefix}domain`],
            'disabled': bundle.inputData?.[`${keyPrefix}disabled`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'websiteThemeId': bundle.inputData?.[`${keyPrefix}websiteThemeId`],
            'businessDomainId': bundle.inputData?.[`${keyPrefix}businessDomainId`],
            'businessPortalApplicationId': bundle.inputData?.[`${keyPrefix}businessPortalApplicationId`],
        }
    },
}
