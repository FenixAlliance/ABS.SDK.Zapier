const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}courseCohortId`,
                label: `[${labelPrefix}courseCohortId]`,
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
            'courseCohortId': bundle.inputData?.[`${keyPrefix}courseCohortId`],
            'courseCompletionCertificateId': bundle.inputData?.[`${keyPrefix}courseCompletionCertificateId`],
        }
    },
}
