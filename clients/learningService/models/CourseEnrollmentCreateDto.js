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
                type: 'string',
            },
            {
                key: `${keyPrefix}courseCohortID`,
                label: `[${labelPrefix}courseCohortID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}studentProfileID`,
                label: `[${labelPrefix}studentProfileID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}businessProfileRecordID`,
                label: `[${labelPrefix}businessProfileRecordID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseCompletionCertificateID`,
                label: `[${labelPrefix}courseCompletionCertificateID]`,
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
            'courseCohortID': bundle.inputData?.[`${keyPrefix}courseCohortID`],
            'studentProfileID': bundle.inputData?.[`${keyPrefix}studentProfileID`],
            'businessProfileRecordID': bundle.inputData?.[`${keyPrefix}businessProfileRecordID`],
            'courseCompletionCertificateID': bundle.inputData?.[`${keyPrefix}courseCompletionCertificateID`],
        }
    },
}
