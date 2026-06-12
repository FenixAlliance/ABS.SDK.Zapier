const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}studentProfileId`,
                label: `[${labelPrefix}studentProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseEnrollmentId`,
                label: `[${labelPrefix}courseEnrollmentId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseCompletionCertificateTemplateId`,
                label: `[${labelPrefix}courseCompletionCertificateTemplateId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseId`,
                label: `[${labelPrefix}courseId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'studentProfileId': bundle.inputData?.[`${keyPrefix}studentProfileId`],
            'courseEnrollmentId': bundle.inputData?.[`${keyPrefix}courseEnrollmentId`],
            'courseCompletionCertificateTemplateId': bundle.inputData?.[`${keyPrefix}courseCompletionCertificateTemplateId`],
            'courseId': bundle.inputData?.[`${keyPrefix}courseId`],
        }
    },
}
