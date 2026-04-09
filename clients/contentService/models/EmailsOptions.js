const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}alertTemplate`,
                label: `[${labelPrefix}alertTemplate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}actionTemplate`,
                label: `[${labelPrefix}actionTemplate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}receiptTemplate`,
                label: `[${labelPrefix}receiptTemplate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}welcomeTemplate`,
                label: `[${labelPrefix}welcomeTemplate]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'alertTemplate': bundle.inputData?.[`${keyPrefix}alertTemplate`],
            'actionTemplate': bundle.inputData?.[`${keyPrefix}actionTemplate`],
            'receiptTemplate': bundle.inputData?.[`${keyPrefix}receiptTemplate`],
            'welcomeTemplate': bundle.inputData?.[`${keyPrefix}welcomeTemplate`],
        }
    },
}
