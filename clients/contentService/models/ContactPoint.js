const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}contactPointType`,
                label: `[${labelPrefix}contactPointType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}telephone`,
                label: `[${labelPrefix}telephone]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactType`,
                label: `[${labelPrefix}contactType]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}contactOption`,
                label: `[${labelPrefix}contactOption]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}areaServed`,
                label: `[${labelPrefix}areaServed]`,
                list: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}type`,
                label: `[${labelPrefix}type]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'contactPointType': bundle.inputData?.[`${keyPrefix}contactPointType`],
            'telephone': bundle.inputData?.[`${keyPrefix}telephone`],
            'contactType': bundle.inputData?.[`${keyPrefix}contactType`],
            'contactOption': bundle.inputData?.[`${keyPrefix}contactOption`],
            'areaServed': bundle.inputData?.[`${keyPrefix}areaServed`],
            'type': bundle.inputData?.[`${keyPrefix}type`],
        }
    },
}
