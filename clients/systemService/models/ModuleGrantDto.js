const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}module`,
                label: `[${labelPrefix}module]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expiresAt`,
                label: `[${labelPrefix}expiresAt]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}grantedAtUtc`,
                label: `[${labelPrefix}grantedAtUtc]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}grantedBy`,
                label: `[${labelPrefix}grantedBy]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}note`,
                label: `[${labelPrefix}note]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'module': bundle.inputData?.[`${keyPrefix}module`],
            'expiresAt': bundle.inputData?.[`${keyPrefix}expiresAt`],
            'grantedAtUtc': bundle.inputData?.[`${keyPrefix}grantedAtUtc`],
            'grantedBy': bundle.inputData?.[`${keyPrefix}grantedBy`],
            'note': bundle.inputData?.[`${keyPrefix}note`],
        }
    },
}
