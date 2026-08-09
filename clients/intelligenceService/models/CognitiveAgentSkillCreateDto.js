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
                key: `${keyPrefix}cognitiveSkillId`,
                label: `[${labelPrefix}cognitiveSkillId]`,
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}enabled`,
                label: `[${labelPrefix}enabled]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}configJson`,
                label: `[${labelPrefix}configJson]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'cognitiveSkillId': bundle.inputData?.[`${keyPrefix}cognitiveSkillId`],
            'enabled': bundle.inputData?.[`${keyPrefix}enabled`],
            'configJson': bundle.inputData?.[`${keyPrefix}configJson`],
        }
    },
}
