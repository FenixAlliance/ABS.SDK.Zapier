const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}enable`,
                label: `[${labelPrefix}enable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}site`,
                label: `[${labelPrefix}site]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}siteKey`,
                label: `[${labelPrefix}siteKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}secretKey`,
                label: `[${labelPrefix}secretKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}version`,
                label: `[${labelPrefix}version]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}projectId`,
                label: `[${labelPrefix}projectId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}apiKey`,
                label: `[${labelPrefix}apiKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}scoreThreshold`,
                label: `[${labelPrefix}scoreThreshold]`,
                type: 'number',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'enable': bundle.inputData?.[`${keyPrefix}enable`],
            'site': bundle.inputData?.[`${keyPrefix}site`],
            'siteKey': bundle.inputData?.[`${keyPrefix}siteKey`],
            'secretKey': bundle.inputData?.[`${keyPrefix}secretKey`],
            'version': bundle.inputData?.[`${keyPrefix}version`],
            'projectId': bundle.inputData?.[`${keyPrefix}projectId`],
            'apiKey': bundle.inputData?.[`${keyPrefix}apiKey`],
            'scoreThreshold': bundle.inputData?.[`${keyPrefix}scoreThreshold`],
        }
    },
}
