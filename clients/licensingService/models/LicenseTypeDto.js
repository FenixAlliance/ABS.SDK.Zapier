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
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}allowTrials`,
                label: `[${labelPrefix}allowTrials]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isPerpetualLicense`,
                label: `[${labelPrefix}isPerpetualLicense]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}maxLicenseUsages`,
                label: `[${labelPrefix}maxLicenseUsages]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}trialLicenseRelativeExpirationInDays`,
                label: `[${labelPrefix}trialLicenseRelativeExpirationInDays]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}standardLicenseRelativeExpirationInDays`,
                label: `[${labelPrefix}standardLicenseRelativeExpirationInDays]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}licensingCertificateId`,
                label: `[${labelPrefix}licensingCertificateId]`,
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
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'allowTrials': bundle.inputData?.[`${keyPrefix}allowTrials`],
            'isPerpetualLicense': bundle.inputData?.[`${keyPrefix}isPerpetualLicense`],
            'maxLicenseUsages': bundle.inputData?.[`${keyPrefix}maxLicenseUsages`],
            'trialLicenseRelativeExpirationInDays': bundle.inputData?.[`${keyPrefix}trialLicenseRelativeExpirationInDays`],
            'standardLicenseRelativeExpirationInDays': bundle.inputData?.[`${keyPrefix}standardLicenseRelativeExpirationInDays`],
            'licensingCertificateId': bundle.inputData?.[`${keyPrefix}licensingCertificateId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
        }
    },
}
