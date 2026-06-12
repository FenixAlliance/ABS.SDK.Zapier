const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}content`,
                label: `[${labelPrefix}content]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}url`,
                label: `[${labelPrefix}url]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}releaseDateTime`,
                label: `[${labelPrefix}releaseDateTime]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}courseUnitId`,
                label: `[${labelPrefix}courseUnitId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'content': bundle.inputData?.[`${keyPrefix}content`],
            'url': bundle.inputData?.[`${keyPrefix}url`],
            'releaseDateTime': bundle.inputData?.[`${keyPrefix}releaseDateTime`],
            'courseUnitId': bundle.inputData?.[`${keyPrefix}courseUnitId`],
        }
    },
}
