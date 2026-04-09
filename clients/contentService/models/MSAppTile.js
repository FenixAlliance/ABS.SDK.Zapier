const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}color`,
                label: `[${labelPrefix}color]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logo`,
                label: `[${labelPrefix}logo]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logoSquare`,
                label: `[${labelPrefix}logoSquare]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logo144`,
                label: `[${labelPrefix}logo144]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logo150`,
                label: `[${labelPrefix}logo150]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logo310`,
                label: `[${labelPrefix}logo310]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logo310W`,
                label: `[${labelPrefix}logo310W]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}logo70`,
                label: `[${labelPrefix}logo70]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'color': bundle.inputData?.[`${keyPrefix}color`],
            'logo': bundle.inputData?.[`${keyPrefix}logo`],
            'logoSquare': bundle.inputData?.[`${keyPrefix}logoSquare`],
            'logo144': bundle.inputData?.[`${keyPrefix}logo144`],
            'logo150': bundle.inputData?.[`${keyPrefix}logo150`],
            'logo310': bundle.inputData?.[`${keyPrefix}logo310`],
            'logo310W': bundle.inputData?.[`${keyPrefix}logo310W`],
            'logo70': bundle.inputData?.[`${keyPrefix}logo70`],
        }
    },
}
