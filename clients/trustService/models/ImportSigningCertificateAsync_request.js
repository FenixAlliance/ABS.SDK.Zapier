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
                key: `${keyPrefix}file`,
                label: `[${labelPrefix}file]`,
                type: 'file',
            },
            {
                key: `${keyPrefix}password`,
                label: `[${labelPrefix}password]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}title`,
                label: `[${labelPrefix}title]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactId`,
                label: `[${labelPrefix}contactId]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'file': bundle.inputData?.[`${keyPrefix}file`],
            'password': bundle.inputData?.[`${keyPrefix}password`],
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'contactId': bundle.inputData?.[`${keyPrefix}contactId`],
        }
    },
}
