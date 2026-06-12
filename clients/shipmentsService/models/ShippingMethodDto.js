const utils = require('../utils/utils');

module.exports = {
    fields: (prefix = '', isInput = true, isArrayChild = false) => {
        const {keyPrefix, labelPrefix} = utils.buildKeyAndLabel(prefix, isInput, isArrayChild)
        return [
            {
                key: `${keyPrefix}id`,
                label: `[${labelPrefix}id]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}timestamp`,
                label: `[${labelPrefix}timestamp]`,
                type: 'string',
            },
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
                key: `${keyPrefix}tenantId`,
                label: `[${labelPrefix}tenantId]`,
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
            'id': bundle.inputData?.[`${keyPrefix}id`],
            'timestamp': bundle.inputData?.[`${keyPrefix}timestamp`],
            'name': bundle.inputData?.[`${keyPrefix}name`],
            'description': bundle.inputData?.[`${keyPrefix}description`],
            'cost': bundle.inputData?.[`${keyPrefix}cost`],
            'taxable': bundle.inputData?.[`${keyPrefix}taxable`],
            'taxIncluded': bundle.inputData?.[`${keyPrefix}taxIncluded`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'tenantId': bundle.inputData?.[`${keyPrefix}tenantId`],
            'shippingClassCalculationType': bundle.inputData?.[`${keyPrefix}shippingClassCalculationType`],
        }
    },
}
