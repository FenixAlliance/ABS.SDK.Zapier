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
                key: `${keyPrefix}studentProfileID`,
                label: `[${labelPrefix}studentProfileID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseEnrollmentID`,
                label: `[${labelPrefix}courseEnrollmentID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessID`,
                label: `[${labelPrefix}businessID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessProfileRecordID`,
                label: `[${labelPrefix}businessProfileRecordID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseCompletionCertificateTemplateID`,
                label: `[${labelPrefix}courseCompletionCertificateTemplateID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseID`,
                label: `[${labelPrefix}courseID]`,
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
            'studentProfileID': bundle.inputData?.[`${keyPrefix}studentProfileID`],
            'courseEnrollmentID': bundle.inputData?.[`${keyPrefix}courseEnrollmentID`],
            'businessID': bundle.inputData?.[`${keyPrefix}businessID`],
            'businessProfileRecordID': bundle.inputData?.[`${keyPrefix}businessProfileRecordID`],
            'courseCompletionCertificateTemplateID': bundle.inputData?.[`${keyPrefix}courseCompletionCertificateTemplateID`],
            'courseID': bundle.inputData?.[`${keyPrefix}courseID`],
            'studentName': bundle.inputData?.[`${keyPrefix}studentName`],
            'studentLastName': bundle.inputData?.[`${keyPrefix}studentLastName`],
            'courseTitle': bundle.inputData?.[`${keyPrefix}courseTitle`],
            'totalEffortInHours': bundle.inputData?.[`${keyPrefix}totalEffortInHours`],
            'instructorName': bundle.inputData?.[`${keyPrefix}instructorName`],
            'instructorLastName': bundle.inputData?.[`${keyPrefix}instructorLastName`],
        }
    },
}
