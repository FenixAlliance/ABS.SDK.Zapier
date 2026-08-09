const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}fileId`,
                label: `[${labelPrefix}fileId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contentType`,
                label: `[${labelPrefix}contentType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}length`,
                label: `[${labelPrefix}length]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'fileId': bundle.inputData?.[`${keyPrefix}fileId`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'contentType': bundle.inputData?.[`${keyPrefix}contentType`],
            'length': bundle.inputData?.[`${keyPrefix}length`],
        }
    },
}
