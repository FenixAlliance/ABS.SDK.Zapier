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
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                required: true,
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
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileID`,
                label: `[${labelPrefix}socialProfileID]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemID`,
                label: `[${labelPrefix}itemID]`,
                required: true,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'needsRevision': bundle.inputData?.[`${keyPrefix}needsRevision`],
            'question': bundle.inputData?.[`${keyPrefix}question`],
            'socialProfileID': bundle.inputData?.[`${keyPrefix}socialProfileID`],
            'itemID': bundle.inputData?.[`${keyPrefix}itemID`],
        }
    },
}
