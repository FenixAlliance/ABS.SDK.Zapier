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
                key: `${keyPrefix}studentProfileId`,
                label: `[${labelPrefix}studentProfileId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseEnrollmentId`,
                label: `[${labelPrefix}courseEnrollmentId]`,
                required: true,
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
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'studentProfileId': bundle.inputData?.[`${keyPrefix}studentProfileId`],
            'courseEnrollmentId': bundle.inputData?.[`${keyPrefix}courseEnrollmentId`],
            'courseCompletionCertificateTemplateId': bundle.inputData?.[`${keyPrefix}courseCompletionCertificateTemplateId`],
            'courseId': bundle.inputData?.[`${keyPrefix}courseId`],
        }
    },
}
