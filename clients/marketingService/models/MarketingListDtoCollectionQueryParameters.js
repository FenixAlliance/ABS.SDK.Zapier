const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}top`,
                label: `[${labelPrefix}top]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}skip`,
                label: `[${labelPrefix}skip]`,
                type: 'integer',
            },
            {
                key: `${keyPrefix}count`,
                label: `[${labelPrefix}count]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}filter`,
                label: `[${labelPrefix}filter]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderBy`,
                label: `[${labelPrefix}orderBy]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}search`,
                label: `[${labelPrefix}search]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}select`,
                label: `[${labelPrefix}select]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}expand`,
                label: `[${labelPrefix}expand]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}isEmpty`,
                label: `[${labelPrefix}isEmpty]`,
                type: 'boolean',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'top': bundle.inputData?.[`${keyPrefix}top`],
            'skip': bundle.inputData?.[`${keyPrefix}skip`],
            'count': bundle.inputData?.[`${keyPrefix}count`],
            'filter': bundle.inputData?.[`${keyPrefix}filter`],
            'orderBy': bundle.inputData?.[`${keyPrefix}orderBy`],
            'search': bundle.inputData?.[`${keyPrefix}search`],
            'select': bundle.inputData?.[`${keyPrefix}select`],
            'expand': bundle.inputData?.[`${keyPrefix}expand`],
            'isEmpty': bundle.inputData?.[`${keyPrefix}isEmpty`],
        }
    },
}
