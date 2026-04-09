const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}needsRevision`,
                label: `[${labelPrefix}needsRevision]`,
                required: true,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}question`,
                label: `[${labelPrefix}question]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'needsRevision': bundle.inputData?.[`${keyPrefix}needsRevision`],
            'question': bundle.inputData?.[`${keyPrefix}question`],
        }
    },
}
