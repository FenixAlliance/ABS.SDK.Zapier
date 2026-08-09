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
                key: `${keyPrefix}message`,
                label: `[${labelPrefix}message]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bodyHtml`,
                label: `[${labelPrefix}bodyHtml]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}bodyFormat`,
                label: `[${labelPrefix}bodyFormat]`,
                type: 'string',
                choices: [
                    'PlainText',
                    'Html',
                ],
            },
            {
                key: `${keyPrefix}backgroundStyle`,
                label: `[${labelPrefix}backgroundStyle]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'title': bundle.inputData?.[`${keyPrefix}title`],
            'message': bundle.inputData?.[`${keyPrefix}message`],
            'bodyHtml': bundle.inputData?.[`${keyPrefix}bodyHtml`],
            'bodyFormat': bundle.inputData?.[`${keyPrefix}bodyFormat`],
            'backgroundStyle': bundle.inputData?.[`${keyPrefix}backgroundStyle`],
        }
    },
}
