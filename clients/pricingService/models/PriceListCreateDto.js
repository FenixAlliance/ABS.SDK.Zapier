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
                required: true,
                type: 'string',
            },
            {
                key: `${keyPrefix}description`,
                label: `[${labelPrefix}description]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}context`,
                label: `[${labelPrefix}context]`,
                type: 'string',
                choices: [
                    'Sales',
                    'Purchase',
                    'Cost',
                ],
            },
            {
                key: `${keyPrefix}startDate`,
                label: `[${labelPrefix}startDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}endDate`,
                label: `[${labelPrefix}endDate]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}currencyId`,
                label: `[${labelPrefix}currencyId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}unitId`,
                label: `[${labelPrefix}unitId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}unitGroupId`,
                label: `[${labelPrefix}unitGroupId]`,
                type: 'string',
            },
            {
                key: `${keyPrefix}partnerVisible`,
                label: `[${labelPrefix}partnerVisible]`,
                type: 'boolean',
            },
            {
                key: `${keyPrefix}unitOfMeasureDependant`,
                label: `[${labelPrefix}unitOfMeasureDependant]`,
                type: 'boolean',
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
            'context': bundle.inputData?.[`${keyPrefix}context`],
            'startDate': bundle.inputData?.[`${keyPrefix}startDate`],
            'endDate': bundle.inputData?.[`${keyPrefix}endDate`],
            'currencyId': bundle.inputData?.[`${keyPrefix}currencyId`],
            'unitId': bundle.inputData?.[`${keyPrefix}unitId`],
            'unitGroupId': bundle.inputData?.[`${keyPrefix}unitGroupId`],
            'partnerVisible': bundle.inputData?.[`${keyPrefix}partnerVisible`],
            'unitOfMeasureDependant': bundle.inputData?.[`${keyPrefix}unitOfMeasureDependant`],
        }
    },
}
