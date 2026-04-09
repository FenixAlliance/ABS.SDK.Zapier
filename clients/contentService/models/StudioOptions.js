const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}logo`,
                label: `[${labelPrefix}logo]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logoDark`,
                label: `[${labelPrefix}logoDark]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}icon`,
                label: `[${labelPrefix}icon]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}iconDark`,
                label: `[${labelPrefix}iconDark]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}favicon`,
                label: `[${labelPrefix}favicon]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logoMobile`,
                label: `[${labelPrefix}logoMobile]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logoMobileDark`,
                label: `[${labelPrefix}logoMobileDark]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'logo': bundle.inputData?.[`${keyPrefix}logo`],
            'logoDark': bundle.inputData?.[`${keyPrefix}logoDark`],
            'icon': bundle.inputData?.[`${keyPrefix}icon`],
            'iconDark': bundle.inputData?.[`${keyPrefix}iconDark`],
            'favicon': bundle.inputData?.[`${keyPrefix}favicon`],
            'logoMobile': bundle.inputData?.[`${keyPrefix}logoMobile`],
            'logoMobileDark': bundle.inputData?.[`${keyPrefix}logoMobileDark`],
        }
    },
}
