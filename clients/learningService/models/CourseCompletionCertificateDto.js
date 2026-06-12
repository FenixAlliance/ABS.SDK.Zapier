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
                type: 'string',
            },
            {
                key: `${keyPrefix}courseEnrollmentId`,
                label: `[${labelPrefix}courseEnrollmentId]`,
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
            {
                key: `${keyPrefix}studentName`,
                label: `[${labelPrefix}studentName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}studentLastName`,
                label: `[${labelPrefix}studentLastName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseTitle`,
                label: `[${labelPrefix}courseTitle]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}totalEffortInHours`,
                label: `[${labelPrefix}totalEffortInHours]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}instructorName`,
                label: `[${labelPrefix}instructorName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}instructorLastName`,
                label: `[${labelPrefix}instructorLastName]`,
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
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'enrollmentId': bundle.inputData?.[`${keyPrefix}enrollmentId`],
            'courseCompletionCertificateTemplateId': bundle.inputData?.[`${keyPrefix}courseCompletionCertificateTemplateId`],
            'courseId': bundle.inputData?.[`${keyPrefix}courseId`],
            'studentName': bundle.inputData?.[`${keyPrefix}studentName`],
            'studentLastName': bundle.inputData?.[`${keyPrefix}studentLastName`],
            'courseTitle': bundle.inputData?.[`${keyPrefix}courseTitle`],
            'totalEffortInHours': bundle.inputData?.[`${keyPrefix}totalEffortInHours`],
            'instructorName': bundle.inputData?.[`${keyPrefix}instructorName`],
            'instructorLastName': bundle.inputData?.[`${keyPrefix}instructorLastName`],
        }
    },
}
