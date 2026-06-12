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
                type: 'string',
            },
            {
                key: `${keyPrefix}needsRevision`,
                label: `[${labelPrefix}needsRevision]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}question`,
                label: `[${labelPrefix}question]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}socialProfileId`,
                label: `[${labelPrefix}socialProfileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}itemId`,
                label: `[${labelPrefix}itemId]`,
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
            'socialProfileId': bundle.inputData?.[`${keyPrefix}socialProfileId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'itemId': bundle.inputData?.[`${keyPrefix}itemId`],
        }
    },
}
