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
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}cost`,
                label: `[${labelPrefix}cost]`,
                type: 'number',
            },
            {
                key: `${keyPrefix}taxable`,
                label: `[${labelPrefix}taxable]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}taxIncluded`,
                label: `[${labelPrefix}taxIncluded]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}shippingClassCalculationType`,
                label: `[${labelPrefix}shippingClassCalculationType]`,
                type: 'string',
                choices: [
                    'PerClass',
                    'PerOrder',
                ],
            },
        ]
    },
    mapping: (bundle, prefix = '') => {
        const {keyPrefix} = utils.buildKeyAndLabel(prefix)
        return {
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'cost': bundle.inputData?.[`${keyPrefix}cost`],
            'taxable': bundle.inputData?.[`${keyPrefix}taxable`],
            'taxIncluded': bundle.inputData?.[`${keyPrefix}taxIncluded`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'shippingClassCalculationType': bundle.inputData?.[`${keyPrefix}shippingClassCalculationType`],
        }
    },
}
