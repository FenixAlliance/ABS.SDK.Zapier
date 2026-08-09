const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}name`,
                label: `[${labelPrefix}name]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}avatar`,
                label: `[${labelPrefix}avatar]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}soul`,
                label: `[${labelPrefix}soul]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}providerKey`,
                label: `[${labelPrefix}providerKey]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}modelId`,
                label: `[${labelPrefix}modelId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}engineKey`,
                label: `[${labelPrefix}engineKey]`,
                type: 'string',
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'avatar': bundle.inputData?.[`${keyPrefix}avatar`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'soul': bundle.inputData?.[`${keyPrefix}soul`],
            'providerKey': bundle.inputData?.[`${keyPrefix}providerKey`],
            'modelId': bundle.inputData?.[`${keyPrefix}modelId`],
            'engineKey': bundle.inputData?.[`${keyPrefix}engineKey`],
        }
    },
}
