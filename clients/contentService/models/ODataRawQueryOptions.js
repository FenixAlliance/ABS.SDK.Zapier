const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}filter`,
                label: `[${labelPrefix}filter]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}apply`,
                label: `[${labelPrefix}apply]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}compute`,
                label: `[${labelPrefix}compute]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}search`,
                label: `[${labelPrefix}search]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}orderBy`,
                label: `[${labelPrefix}orderBy]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}top`,
                label: `[${labelPrefix}top]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}skip`,
                label: `[${labelPrefix}skip]`,
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
                key: `${keyPrefix}count`,
                label: `[${labelPrefix}count]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}format`,
                label: `[${labelPrefix}format]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}skipToken`,
                label: `[${labelPrefix}skipToken]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}deltaToken`,
                label: `[${labelPrefix}deltaToken]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'filter': bundle.inputData?.[`${keyPrefix}filter`],
            'apply': bundle.inputData?.[`${keyPrefix}apply`],
            'compute': bundle.inputData?.[`${keyPrefix}compute`],
            'search': bundle.inputData?.[`${keyPrefix}search`],
            'orderBy': bundle.inputData?.[`${keyPrefix}orderBy`],
            'top': bundle.inputData?.[`${keyPrefix}top`],
            'skip': bundle.inputData?.[`${keyPrefix}skip`],
            'select': bundle.inputData?.[`${keyPrefix}select`],
            'expand': bundle.inputData?.[`${keyPrefix}expand`],
            'count': bundle.inputData?.[`${keyPrefix}count`],
            'format': bundle.inputData?.[`${keyPrefix}format`],
            'skipToken': bundle.inputData?.[`${keyPrefix}skipToken`],
            'deltaToken': bundle.inputData?.[`${keyPrefix}deltaToken`],
        }
    },
}
