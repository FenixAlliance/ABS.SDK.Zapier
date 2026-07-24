const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}attachmentRole`,
                label: `[${labelPrefix}attachmentRole]`,
                type: 'string',
                choices: [
                    'Unknown',
                    'Source',
                    'SupportingEvidence',
                    'AuthorityResponse',
                    'HumanReadablePdf',
                    'XmlPayload',
                    'ValidationReport',
                    'Other',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'attachmentRole': bundle.inputData?.[`${keyPrefix}attachmentRole`],
        }
    },
}
