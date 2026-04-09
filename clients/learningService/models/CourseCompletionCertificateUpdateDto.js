const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
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
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'studentProfileID': bundle.inputData?.[`${keyPrefix}studentProfileID`],
            'courseEnrollmentID': bundle.inputData?.[`${keyPrefix}courseEnrollmentID`],
            'businessID': bundle.inputData?.[`${keyPrefix}businessID`],
            'businessProfileRecordID': bundle.inputData?.[`${keyPrefix}businessProfileRecordID`],
            'courseCompletionCertificateTemplateID': bundle.inputData?.[`${keyPrefix}courseCompletionCertificateTemplateID`],
            'courseID': bundle.inputData?.[`${keyPrefix}courseID`],
        }
    },
}
