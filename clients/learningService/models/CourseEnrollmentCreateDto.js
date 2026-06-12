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
                key: `${keyPrefix}courseId`,
                label: `[${labelPrefix}courseId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseCohortId`,
                label: `[${labelPrefix}courseCohortId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}studentProfileId`,
                label: `[${labelPrefix}studentProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseCompletionCertificateId`,
                label: `[${labelPrefix}courseCompletionCertificateId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'courseId': bundle.inputData?.[`${keyPrefix}courseId`],
            'courseCohortId': bundle.inputData?.[`${keyPrefix}courseCohortId`],
            'studentProfileId': bundle.inputData?.[`${keyPrefix}studentProfileId`],
            'courseCompletionCertificateId': bundle.inputData?.[`${keyPrefix}courseCompletionCertificateId`],
        }
    },
}
