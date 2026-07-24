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
                key: `${keyPrefix}url`,
                label: `[${labelPrefix}url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}contentType`,
                label: `[${labelPrefix}contentType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}documentStandard`,
                label: `[${labelPrefix}documentStandard]`,
                type: 'string',
                choices: [
                    'None',
                    'Ubl',
                    'Pdf',
                    'Xml',
                    'Email',
                    'Json',
                    'Other',
                ],
            },
            {
                key: `${keyPrefix}trustDocumentType`,
                label: `[${labelPrefix}trustDocumentType]`,
                type: 'string',
                choices: [
                    'Unknown',
                    'Invoice',
                    'CreditNote',
                    'DebitNote',
                    'Contract',
                    'Certificate',
                    'Email',
                    'AuthorityResponse',
                    'Other',
                ],
            },
            {
                key: `${keyPrefix}correlationId`,
                label: `[${labelPrefix}correlationId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}externalReference`,
                label: `[${labelPrefix}externalReference]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'url': bundle.inputData?.[`${keyPrefix}url`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'contentType': bundle.inputData?.[`${keyPrefix}contentType`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
            'documentStandard': bundle.inputData?.[`${keyPrefix}documentStandard`],
            'trustDocumentType': bundle.inputData?.[`${keyPrefix}trustDocumentType`],
            'correlationId': bundle.inputData?.[`${keyPrefix}correlationId`],
            'externalReference': bundle.inputData?.[`${keyPrefix}externalReference`],
        }
    },
}
