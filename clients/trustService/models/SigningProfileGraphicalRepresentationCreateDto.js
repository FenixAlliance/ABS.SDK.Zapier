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
                key: `${keyPrefix}signingProfileId`,
                label: `[${labelPrefix}signingProfileId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}kind`,
                label: `[${labelPrefix}kind]`,
                required: true,
                type: 'string',
                choices: [
                    'Drawn',
                    'UploadedImage',
                    'Typed',
                    'Initials',
                    'Seal',
                    'Stamp',
                ],
            },
            {
                key: `${keyPrefix}displayName`,
                label: `[${labelPrefix}displayName]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fileUploadId`,
                label: `[${labelPrefix}fileUploadId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}sha256`,
                label: `[${labelPrefix}sha256]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}vectorDataJson`,
                label: `[${labelPrefix}vectorDataJson]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}textValue`,
                label: `[${labelPrefix}textValue]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}fontFamily`,
                label: `[${labelPrefix}fontFamily]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isDefault`,
                label: `[${labelPrefix}isDefault]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}isActive`,
                label: `[${labelPrefix}isActive]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'signingProfileId': bundle.inputData?.[`${keyPrefix}signingProfileId`],
            'kind': bundle.inputData?.[`${keyPrefix}kind`],
            'displayName': bundle.inputData?.[`${keyPrefix}displayName`],
            'fileUploadId': bundle.inputData?.[`${keyPrefix}fileUploadId`],
            'sha256': bundle.inputData?.[`${keyPrefix}sha256`],
            'vectorDataJson': bundle.inputData?.[`${keyPrefix}vectorDataJson`],
            'textValue': bundle.inputData?.[`${keyPrefix}textValue`],
            'fontFamily': bundle.inputData?.[`${keyPrefix}fontFamily`],
            'isDefault': bundle.inputData?.[`${keyPrefix}isDefault`],
            'isActive': bundle.inputData?.[`${keyPrefix}isActive`],
        }
    },
}
